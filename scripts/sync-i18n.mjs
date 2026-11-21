/**
 * Sync locale files with DeepL.
 *
 *   npm run i18n:sync                       # ID -> EN, translate changed strings only
 *   npm run i18n:sync -- --from en --to id  # reverse direction
 *   npm run i18n:sync -- --dry-run          # preview, no API call, no write
 *   npm run i18n:sync -- --force            # retranslate every string
 *
 * The DeepL key is read from the environment (or a local .env file) and is
 * NEVER exposed to the browser: this script runs in Node only.
 *
 * Env:
 *   DEEPL_API_KEY   (required for translation)  e.g. DeepL auth key
 *   DEEPL_API_URL   (optional) defaults to https://api.deepl.com
 *                   use https://api-free.deepl.com for the free plan
 */
import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const I18N_DIR = path.join(ROOT, "src", "i18n");
const CACHE_FILE = path.join(I18N_DIR, ".translation-cache.json");
const CACHE_VERSION = "v1";
const CHUNK_SIZE = 50; // DeepL accepts multiple texts per request

const args = process.argv.slice(2);
const has = (flag) => args.includes(`--${flag}`);
const value = (flag, fallback) => {
  const i = args.indexOf(`--${flag}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};

const from = value("from", "id");
const to = value("to", "en");
const dryRun = has("dry-run");
const force = has("force");
const seedOnly = has("seed");

const DEST_LANG = { en: "EN-US", id: "ID" };
if (!DEST_LANG[from] || !DEST_LANG[to]) {
  throw new Error(`Unsupported locale. Use one of: ${Object.keys(DEST_LANG).join(", ")}`);
}
if (from === to) throw new Error("--from and --to must be different.");

/** Load plain KEY=VALUE pairs from .env without adding a dependency. */
async function loadEnvFile() {
  const file = path.join(ROOT, ".env");
  if (!existsSync(file)) return;
  const text = await readFile(file, "utf8");
  for (const line of text.split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (!match) continue;
    let val = match[2];
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (process.env[match[1]] === undefined) process.env[match[1]] = val;
  }
}

const apiUrl = (process.env.DEEPL_API_URL || "https://api.deepl.com").replace(/\/$/, "");

/** Skip brand names, tech stacks and other strings that must not be translated. */
const SKIP_RULES = [
  /^hero\.role1$/,
  /^hero\.role2$/,
  /^about\.roles\.\d+$/,
  /^projects\.(demo|github|filterWeb|statusLive)$/,
  /^services\.s\dStack$/,
  /^experience\.timeline\.\d+\.stack$/,
];
const shouldSkip = (key, text) => SKIP_RULES.some((re) => re.test(key)) || !/\p{L}/u.test(text);

function flatten(input, prefix = "", out = {}) {
  if (typeof input === "string") {
    out[prefix] = input;
  } else if (Array.isArray(input)) {
    input.forEach((item, i) => flatten(item, `${prefix}.${i}`, out));
  } else if (input && typeof input === "object") {
    for (const [key, val] of Object.entries(input)) {
      flatten(val, prefix ? `${prefix}.${key}` : key, out);
    }
  }
  return out;
}

function setPath(root, dottedPath, value) {
  const parts = dottedPath.split(".");
  let node = root;
  parts.forEach((part, i) => {
    const last = i === parts.length - 1;
    if (last) {
      node[part] = value;
      return;
    }
    if (node[part] === undefined || node[part] === null) {
      node[part] = /^\d+$/.test(parts[i + 1]) ? [] : {};
    }
    node = node[part];
  });
}

function serialize(value, level = 0) {
  const pad = "  ".repeat(level);
  if (Array.isArray(value)) {
    if (!value.length) return "[]";
    return `[\n${value.map((v) => `${pad}  ${serialize(v, level + 1)}`).join(",\n")}\n${pad}]`;
  }
  if (value && typeof value === "object") {
    const entries = Object.entries(value);
    if (!entries.length) return "{}";
    return `{\n${entries.map(([k, v]) => `${pad}  ${JSON.stringify(k)}: ${serialize(v, level + 1)}`).join(",\n")}\n${pad}}`;
  }
  return JSON.stringify(value);
}

const hash = (text) =>
  createHash("sha256").update(`${CACHE_VERSION}|${to}|${text}`).digest("hex");

async function main() {
  await loadEnvFile();

  const loadLocale = async (locale) => {
    const file = path.join(I18N_DIR, `${locale}.js`);
    if (!existsSync(file)) throw new Error(`Missing locale file: ${file}`);
    const mod = await import(pathToFileURL(file).href);
    return mod.default;
  };

  const source = await loadLocale(from);
  const target = await loadLocale(to);
  const srcFlat = flatten(source);
  const tgtFlat = flatten(target);

  let cache = {};
  if (existsSync(CACHE_FILE)) {
    cache = JSON.parse(await readFile(CACHE_FILE, "utf8"));
  }
  const bucketKey = `${from}>${to}`;
  const bucket = cache[bucketKey] || {};
  const freshCache = !cache[bucketKey];

  // First run: assume the existing target file is already in sync and just
  // seed the cache. Nothing is translated or overwritten without --force.
  if (freshCache && !force) {
    for (const [key, text] of Object.entries(srcFlat)) bucket[key] = hash(text);
    cache[bucketKey] = bucket;
    if (!dryRun) await writeFile(CACHE_FILE, `${JSON.stringify(cache, null, 2)}\n`);
    console.log(
      `Seeded ${bucketKey} cache (${Object.keys(bucket).length} strings). ` +
        `No API call. Edit ${from}.js then run again, or use --force.`
    );
    return;
  }

  const merged = structuredClone(target);
  const pending = [];

  for (const [key, text] of Object.entries(srcFlat)) {
    const digest = hash(text);
    const unchanged = bucket[key] === digest && tgtFlat[key] !== undefined;

    if (shouldSkip(key, text) || (unchanged && !force)) {
      if (tgtFlat[key] === undefined) setPath(merged, key, text);
      bucket[key] = digest;
      continue;
    }
    pending.push({ key, text, digest });
  }

  if (seedOnly) {
    console.log(`--seed: ${Object.keys(bucket).length} cached strings, ${pending.length} pending.`);
    return;
  }

  if (pending.length) {
    if (dryRun) {
      console.log(`Dry run: ${pending.length} string(s) would be sent to DeepL:`);
      pending.forEach(({ key }) => console.log(`  - ${key}`));
      return;
    }

    const authKey = process.env.DEEPL_API_KEY || process.env.DEEPL_AUTH_KEY;
    if (!authKey) {
      throw new Error(
        "DEEPL_API_KEY is not set. Put it in a local .env file (see .env.example) " +
          "or export it in your shell. The key must never use a VITE_ prefix."
      );
    }

    console.log(`Translating ${pending.length} string(s) ${from} -> ${to} via ${apiUrl} ...`);
    for (let i = 0; i < pending.length; i += CHUNK_SIZE) {
      const chunk = pending.slice(i, i + CHUNK_SIZE);
      const res = await fetch(`${apiUrl}/v2/translate`, {
        method: "POST",
        headers: {
          Authorization: `DeepL-Auth-Key ${authKey}`,
          "Content-Type": "application/json",
          "User-Agent": "portofolio-i18n-sync/1.0.0",
        },
        body: JSON.stringify({
          text: chunk.map((item) => item.text),
          source_lang: from.toUpperCase(),
          target_lang: DEST_LANG[to],
        }),
      });

      if (!res.ok) {
        const detail = (await res.text()).slice(0, 400);
        throw new Error(`DeepL returned ${res.status}: ${detail}`);
      }

      const data = await res.json();
      if (!Array.isArray(data.translations) || data.translations.length !== chunk.length) {
        throw new Error("Unexpected DeepL response: translation count mismatch.");
      }

      data.translations.forEach((entry, index) => {
        const item = chunk[index];
        setPath(merged, item.key, entry.text);
        bucket[item.key] = item.digest;
      });
    }

    cache[bucketKey] = bucket;
    await writeFile(CACHE_FILE, `${JSON.stringify(cache, null, 2)}\n`);
    await writeFile(path.join(I18N_DIR, `${to}.js`), `export default ${serialize(merged)};\n`);
    console.log(`Updated src/i18n/${to}.js`);
  } else {
    console.log(`Nothing changed for ${bucketKey}. ${to}.js left untouched.`);
  }
}

main().catch((err) => {
  console.error(`i18n sync failed: ${err.message}`);
  process.exit(1);
});
