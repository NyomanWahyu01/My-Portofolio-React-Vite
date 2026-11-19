import React from "react";
import { motion } from "motion/react";
import { useT } from "../i18n/LanguageProvider";

const services = [
  { key: "s1", color: "var(--yellow)", icon: "ri-global-line" },
  { key: "s2", color: "var(--pink)", icon: "ri-database-2-line" },
  { key: "s3", color: "var(--lime)", icon: "ri-pen-nib-line" },
];

const steps = [
  { key: "p1", emoji: "🔍" },
  { key: "p2", emoji: "🎨" },
  { key: "p3", emoji: "💻" },
  { key: "p4", emoji: "🚀" },
];

export default function Services() {
  const { t } = useT();

  return (
    <section id="services" className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none uppercase text-[var(--fg)] mb-4">
          {t("services.title")}
        </h2>
        <p className="font-sans text-[var(--muted)] mb-10 max-w-prose">
          {t("services.subtitle")}
        </p>
      </motion.div>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {services.map((s, i) => (
          <motion.div
            key={s.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, rotate: i % 2 === 0 ? 1 : -1 }}
            className="rounded-[24px] border-[3px] border-[var(--border)] bg-[var(--card)] p-6 shadow-[6px_6px_0px_var(--shadow)]"
          >
            <span
              className="mb-4 flex h-14 w-14 items-center justify-center rounded-[12px] border-[3px] border-[var(--border)] text-[var(--on-card)]"
              style={{ backgroundColor: s.color }}
            >
              <i className={`${s.icon} text-2xl`}></i>
            </span>
            <h3 className="font-sans text-[1.25rem] font-bold text-[var(--on-card)] mb-2">
              {t(`services.${s.key}Title`)}
            </h3>
            <p className="font-sans text-sm leading-relaxed text-[var(--muted)]">
              {t(`services.${s.key}Desc`)}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Process strip */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-[24px] border-[3px] border-[var(--border)] bg-[var(--card-alt)] p-6 md:p-8 shadow-[6px_6px_0px_var(--shadow)]"
      >
        <h3 className="font-sans text-xs font-bold uppercase tracking-[0.08em] text-[var(--on-card)] mb-8">
          {t("services.processTitle")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={step.key} 
              className="flex items-center gap-4 group"
              whileHover={{ x: 5 }}
            >
              <div className="relative">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] border-[var(--border)] bg-[var(--card)] font-display text-xl text-[var(--on-card)] shadow-[3px_3px_0px_var(--shadow)] transition-transform group-hover:rotate-12">
                  {i + 1}
                </span>
                <span className="absolute -top-2 -right-2 text-xl drop-shadow-sm group-hover:scale-125 transition-transform">
                  {step.emoji}
                </span>
              </div>
              <span className="font-sans font-bold uppercase tracking-wider text-[var(--on-card)] group-hover:text-[var(--fg)] transition-colors">
                {t(`services.${step.key}`)}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="mt-10 inline-block rounded-[16px] border-[3px] border-[var(--border)] bg-[var(--cta)] px-8 py-4 font-sans text-sm font-bold uppercase tracking-wider text-[var(--on-card)] shadow-[6px_6px_0px_var(--shadow)] transition-all hover:shadow-[8px_8px_0px_var(--shadow)]"
        >
          {t("services.cta")}
        </motion.a>
      </motion.div>
    </section>
  );
}
