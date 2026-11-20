import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useT } from "../i18n/LanguageProvider";

export default function Experience() {
  const { t } = useT();
  const timeline = t("experience.timeline");
  const certs = t("experience.certs");
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (Array.isArray(timeline)) {
      setCurrent((prev) => (prev + 1) % timeline.length);
    }
  };

  const prev = () => {
    if (Array.isArray(timeline)) {
      setCurrent((prev) => (prev - 1 + timeline.length) % timeline.length);
    }
  };

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

      {/* Experience Carousel */}
      <div className="relative mb-24">
        <div className="relative overflow-hidden min-h-[350px]">
          <AnimatePresence mode="wait">
            {Array.isArray(timeline) && timeline[current] && (
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="rounded-lg border-3 border-(--border) bg-card p-6 md:p-8 shadow-[6px_6px_0px_var(--shadow)]">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <h3 className="font-sans text-[1.25rem] font-bold text-on-card">
                      {timeline[current].title}
                    </h3>
                    <span className="rounded-full border-2 border-(--border) bg-bg px-4 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-on-card">
                      {timeline[current].period}
                    </span>
                  </div>
                  <p className="font-sans text-sm font-bold text-muted-card mb-4 flex items-center gap-2">
                    <i className="ri-building-line"></i> {timeline[current].org}
                  </p>

                  {timeline[current].stack && (
                    <p className="font-sans text-xs font-bold uppercase tracking-[0.05em] text-accent mb-4 bg-bg inline-block px-3 py-1 rounded-md border-1 border-(--border)">
                      {timeline[current].stack}
                    </p>
                  )}

                  <ul className="font-sans text-sm leading-relaxed text-muted-card space-y-2 list-disc list-inside">
                    {timeline[current].desc.map((d, index) => (
                      <li key={index}>{d}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="flex h-12 w-12 items-center justify-center rounded-md border-3 border-(--border) bg-card text-on-card shadow-[4px_4px_0px_var(--shadow)] hover:shadow-[6px_6px_0px_var(--shadow)] active:translate-y-0.5"
            aria-label="Previous"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>
          <button
            onClick={next}
            className="flex h-12 w-12 items-center justify-center rounded-md border-3 border-(--border) bg-card text-on-card shadow-[4px_4px_0px_var(--shadow)] hover:shadow-[6px_6px_0px_var(--shadow)] active:translate-y-0.5"
            aria-label="Next"
          >
            <i className="ri-arrow-right-line text-xl"></i>
          </button>
        </div>
      </div>

      {/* Pendidikan (Certifications/Education) Separated */}
      <motion.div 
        className="mt-20 border-t-3 border-line pt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="font-display text-[clamp(2rem,4vw,3rem)] leading-none uppercase text-fg mb-8">
          Pendidikan
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.isArray(certs) &&
            certs.map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 rounded-md border-2 border-(--border) bg-card px-5 py-4 shadow-[3px_3px_0px_var(--shadow)]"
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
