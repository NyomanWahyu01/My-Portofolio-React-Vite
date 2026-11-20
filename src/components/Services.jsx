import { MotionConfig, motion } from "motion/react";
import { useT } from "../i18n/LanguageProvider";

/* =====================================================================
   DATA — ubah isi layanan di sini. Teks ada di src/i18n/id.js & en.js
   (kunci: services.<key>Title, <key>Desc, <key>Item1..3)
   Nama class warna harus ditulis lengkap (bg-yellow, bukan "bg-" + nama).
   ===================================================================== */
const SERVICES = [
  { key: "s1", icon: "ri-global-line", color: "bg-yellow", stack: ["React.Js", "Next.Js", "Vue.Js", "Wordpress", "Boostrap", "Tailwind CSS", "Vite"] },
  { key: "s2", icon: "ri-database-2-line", color: "bg-pink", stack: ["Laravel", "PHP", "MySQL", "SQLite", "Blade"] },
  { key: "s3", icon: "ri-pen-nib-line", color: "bg-lime", stack: ["Figma", "Canva", "Photoshop"] },
];

const ITEMS = [1, 2, 3]; // jumlah poin per layanan
const STEPS = ["p1", "p2", "p3", "p4"]; // urutan proses kerja

/* =====================================================================
   GAYA — dipakai ulang supaya JSX di bawah tetap pendek
   ===================================================================== */
const card = "rounded-3xl border-3 border-ink text-on-card shadow-nb dark:shadow-none";
const lift =
  "transition-[transform,box-shadow] duration-150 motion-reduce:transition-none " +
  "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-nb-lg";
const button =
  "inline-flex min-h-11 items-center rounded-2xl border-3 border-ink px-6 py-3 " +
  "text-sm font-bold uppercase tracking-wider text-ink shadow-nb " +
  "transition-[transform,box-shadow] duration-150 motion-reduce:transition-none " +
  "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-nb-lg " +
  "active:translate-x-1 active:translate-y-1 active:shadow-none";

/* Muncul pelan saat di-scroll, hanya sekali. Otomatis mati bila pengguna
   memilih "kurangi gerakan" (lewat MotionConfig di bawah). */
function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.25, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Services() {
  const { t } = useT();

  return (
    <MotionConfig reducedMotion="user">
      <section id="services" className="py-20 md:py-32">
        {/* ---------- Judul section ---------- */}
        <Reveal className="mb-12 max-w-2xl">
        <h2 className="font-display text-[clamp(1.5rem,6vw,4.5rem)] leading-none uppercase text-fg mb-4">
          {t("services.label")}
        </h2>
          {/* <h2 className="font-display text-section uppercase text-fg">{t("services.title")}</h2> */}
        <p className="mt-4 text-lg text-muted">{t("services.subtitle")}</p>
        </Reveal>

        {/* ---------- 3 kartu layanan (gaya folder) ---------- */}
        <div className="grid gap-8 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.key} delay={i * 0.08} className="relative flex flex-col pt-3">
              {/* tab folder berwarna */}
              <span
                aria-hidden="true"
                className={`absolute left-6 top-0 h-6 w-20 rounded-t-xl border-3 border-ink ${s.color}`}
              />

              <article className={`${card} ${lift} relative flex flex-1 flex-col bg-card p-6`}>
                <span
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border-3 border-ink text-xl text-ink ${s.color}`}
                >
                  <i className={s.icon} aria-hidden="true" />
                </span>

                <h3 className="text-xl font-bold">{t(`services.${s.key}Title`)}</h3>
                <p className="mt-2 text-on-card/75">{t(`services.${s.key}Desc`)}</p>

                <ul className="mt-5 space-y-2 text-sm font-medium">
                  {ITEMS.map((n) => (
                    <li key={n} className="flex gap-2">
                      <i className="ri-check-line mt-0.5 shrink-0" aria-hidden="true" />
                      {t(`services.${s.key}Item${n}`)}
                    </li>
                  ))}
                </ul>

                {/* teknologi yang dipakai */}
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {s.stack.map((name) => (
                    <span
                      key={name}
                      className="rounded-full border-2 border-ink px-3 py-1 text-xs font-bold uppercase tracking-wider"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ---------- Proses kerja ---------- */}
        <Reveal className={`${card} mt-16 bg-card-alt p-6 md:p-10`}>
          <h3 className="mt-2 font-display text-4xl uppercase leading-none md:text-5xl">
            {t("services.processTitle")}
          </h3>
          <p className="mt-3 max-w-prose text-on-card/75">{t("services.processSubtitle")}</p>

          <ol className="mt-10 grid gap-8 md:grid-cols-4 md:gap-6 items-start">
            {STEPS.map((p, i) => (
              <li
                key={p}
                className="border-l-3 border-ink pl-5 md:border-l-0 md:border-t-3 md:pl-0 md:pt-5 flex flex-col h-full"
              >
                <span className="font-display text-5xl leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-3 text-lg font-bold grow">{t(`services.${p}Title`)}</h4>
                <p className="mt-2 text-sm text-on-card/75 grow">{t(`services.${p}Desc`)}</p>

                {/* apa yang diterima klien di tahap ini */}
                <div className="mt-4 rounded-xl border-2 border-ink bg-card px-3 py-2 text-xs font-bold mt-auto">
                  <span className="uppercase tracking-widest opacity-60 block mb-1">
                    {t("services.outputLabel")}:
                  </span>
                  {t(`services.${p}Output`)}
                </div>
              </li>
            ))}
          </ol>

          {/* ---------- Ajakan bertindak ---------- */}
          <div className="mt-10 flex flex-col gap-5 border-t-3 border-ink pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xl font-bold">{t("services.ctaTitle")}</p>
              <p className="mt-1 text-sm text-on-card/75">{t("services.ctaDesc")}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className={`${button} bg-cta`}>
                {t("services.ctaPrimary")}
              </a>
              <a href="#projects" className={`${button} bg-card`}>
                {t("services.ctaSecondary")}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </MotionConfig>
  );
}