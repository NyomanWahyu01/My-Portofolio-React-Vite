import { MotionConfig, motion } from "motion/react";
import { useT } from "../i18n/LanguageProvider";
import { listServices } from "../data";
import WordReveal from "./WordReveal";

/*
  Maintenance: service content comes from src/data.js and src/i18n/id.js or
  src/i18n/en.js. Stack names and process results use .theme-badge.
*/
const serviceAccent = {
  yellow: "bg-yellow",
  pink: "bg-pink",
  lime: "bg-lime",
};

const ITEMS = [1, 2, 3]; // jumlah poin per layanan
const STEPS = ["p1", "p2", "p3", "p4"]; // urutan proses kerja

/* =====================================================================
   GAYA — dipakai ulang supaya JSX di bawah tetap pendek
   ===================================================================== */
const card = "rounded-lg border-3 border-(--border) text-on-card shadow-[6px_6px_0px_var(--shadow)]";
const lift =
  "transition-[transform,box-shadow] duration-150 motion-reduce:transition-none " +
  "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[9px_9px_0px_var(--shadow)]";
const button =
  "inline-flex min-h-11 items-center rounded-md border-3 border-(--border) px-6 py-3 " +
  "text-sm font-bold uppercase tracking-wider text-on-card shadow-[4px_4px_0px_var(--shadow)] " +
  "transition-[transform,box-shadow] duration-150 motion-reduce:transition-none " +
  "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_var(--shadow)] " +
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
      <section id="services" className="py-14 md:py-20">
        {/* ---------- Judul section ---------- */}
        <div className="mb-8">
          <Reveal className="ml-auto w-full max-w-2xl text-right">
            <h2 className="font-display text-[clamp(1.5rem,6vw,4.5rem)] leading-none uppercase text-fg mb-4">
              <WordReveal>{t("services.label")}</WordReveal>
            </h2>
            <p className="mt-4 text-lg text-muted">{t("services.subtitle")}</p>
          </Reveal>
        </div>

        {/* ---------- 3 kartu layanan (gaya folder) ---------- */}
        <div className="grid gap-5 md:grid-cols-3 md:grid-rows-[auto_auto_auto_auto_auto] md:gap-6">
          {listServices.map((s, i) => (
            <Reveal
              key={s.key}
              delay={i * 0.08}
              className="relative pt-3 md:row-span-5 md:grid md:grid-rows-subgrid"
            >
              {/* tab folder berwarna */}
              <span
                aria-hidden="true"
                className={`absolute left-6 top-0 h-6 w-20 rounded-t-xl border-3 border-(--border) ${serviceAccent[s.accent]}`}
              />

              <article
                className={`${card} ${lift} relative bg-card p-4 md:row-span-5 md:grid md:h-full md:grid-rows-subgrid md:p-5`}
              >
                <span
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl border-3 border-(--border) text-xl text-on-card ${serviceAccent[s.accent]}`}
                >
                  <i className={s.icon} aria-hidden="true" />
                </span>

                <h3 className="text-lg font-bold leading-tight text-on-card">{t(`services.${s.key}Title`)}</h3>
                <p className="mt-1.5 text-sm leading-snug text-left text-on-card/75">{t(`services.${s.key}Desc`)}</p>

                <ul className="mt-3 space-y-1.5 text-sm font-medium">
                  {ITEMS.map((n) => (
                    <li key={n} className="flex items-start gap-2 text-left text-on-card">
                      <i className="ri-check-line mt-0.5 shrink-0 text-signal" aria-hidden="true" />
                      <span>{t(`services.${s.key}Item${n}`)}</span>
                    </li>
                  ))}
                </ul>

                {/* teknologi yang dipakai */}
                <div className="border-t-2 border-(--border) pt-3">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-signal">
                    {t("services.stackLabel")}
                  </p>
                  <div className="flex flex-wrap content-start gap-2">
                    {s.stack.map((name) => (
                      <span
                        key={name}
                        className="theme-badge rounded-full border-2 px-2.5 py-0.5 text-[0.7rem] uppercase tracking-wider"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
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
                className="flex h-full flex-col border-l-3 border-(--border) pl-5 md:border-l-0 md:border-t-3 md:pl-0 md:pt-5"
              >
                <span className="font-display text-5xl leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-3 text-lg font-bold grow">{t(`services.${p}Title`)}</h4>
                <p className="mt-2 text-sm text-on-card/75 grow">{t(`services.${p}Desc`)}</p>

                {/* apa yang diterima klien di tahap ini */}
                <div className="theme-badge mt-auto rounded-md border-2 px-3 py-2 text-xs">
                  <span className="mb-1 block uppercase tracking-widest opacity-75">
                    {t("services.outputLabel")}:
                  </span>
                  {t(`services.${p}Output`)}
                </div>
              </li>
            ))}
          </ol>

          {/* ---------- Ajakan bertindak ---------- */}
                <div className="mt-10 flex flex-col gap-5 border-t-3 border-(--border) pt-8 sm:flex-row sm:items-center sm:justify-between">
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
