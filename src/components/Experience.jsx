import React from "react";
/* eslint-disable-next-line no-unused-vars */
import { motion } from "motion/react";
import { useT } from "../i18n/LanguageProvider";

const dotColors = ["var(--purple)", "var(--yellow)", "var(--green)", "var(--pink)"];

export default function Experience() {
  const { t } = useT();
  const timeline = t("experience.timeline");
  const certs = t("experience.certs");

  return (
    <section id="experience" className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none uppercase text-fg mb-4">
          {t("experience.title")}
        </h2>
        <p className="font-sans text-muted mb-16 max-w-prose">
          {t("experience.subtitle")}
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative border-l-[3px] border-line pl-8 space-y-12">
        {Array.isArray(timeline) &&
          timeline.map((item, i) => (
            <motion.div 
              key={i} 
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Dot */}
              <span
                className="absolute -left-[calc(2rem+1.5px)] top-2 h-4 w-4 rounded-full border-[3px] border-[var(--border)] shadow-[0_0_0_4px_var(--bg)]"
                style={{ backgroundColor: dotColors[i % dotColors.length] }}
                aria-hidden="true"
              />
              <div className="rounded-[24px] border-[3px] border-[var(--border)] bg-card p-6 md:p-8 shadow-[6px_6px_0px_var(--shadow)] hover:shadow-[10px_10px_0px_var(--shadow)] transition-shadow">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <h3 className="font-sans text-[1.25rem] font-bold text-on-card">
                    {item.title}
                  </h3>
                  <span className="rounded-full border-[2px] border-[var(--border)] bg-bg px-4 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-on-card">
                    {item.period}
                  </span>
                </div>
                <p className="font-sans text-sm font-bold text-muted mb-4 flex items-center gap-2">
                  <i className="ri-building-line"></i> {item.org}
                </p>
                
                {item.stack && (
                  <p className="font-sans text-xs font-bold uppercase tracking-[0.05em] text-accent mb-4 bg-bg inline-block px-3 py-1 rounded-md border-[1px] border-[var(--border)]">
                    {item.stack}
                  </p>
                )}

                <ul className="font-sans text-sm leading-relaxed text-muted space-y-2 list-disc list-inside">
                  {item.desc.map((d, index) => (
                    <li key={index}>{d}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
      </div>

      {/* Certifications */}
      <motion.div 
        className="mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="font-sans text-xs font-bold uppercase tracking-[0.08em] text-muted mb-8">
          {t("experience.certTitle")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.isArray(certs) &&
            certs.map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 rounded-[16px] border-[2px] border-[var(--border)] bg-card px-5 py-3 shadow-[3px_3px_0px_var(--shadow)]"
              >
                <i className="ri-award-line text-accent text-lg"></i>
                <span className="font-sans text-sm font-bold text-on-card">
                  {cert}
                </span>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </section>
  );
}
