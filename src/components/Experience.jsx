import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useT } from "../i18n/LanguageProvider";
import { DataImage } from "../data";

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
      <div className="mb-16 grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_minmax(220px,280px)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none uppercase text-fg mb-4">
            {t("experience.title")}
          </h2>
          <p className="font-sans text-muted max-w-prose">
            {t("experience.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-[280px] justify-self-end pt-3"
        >
          <span
            aria-hidden="true"
            className="absolute left-6 top-0 h-6 w-20 rounded-t-xl border-3 border-b-0 border-(--border) bg-yellow"
          />
          <div className="relative rotate-2 rounded-3xl border-3 border-(--border) bg-card p-3 shadow-[6px_6px_0px_var(--shadow)] transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-[9px_9px_0px_var(--shadow)] motion-reduce:transition-none">
            <div className="aspect-2/3 overflow-hidden rounded-xl border-3 border-(--border) bg-card-alt">
              <img
                src={DataImage.fotoServices}
                alt="I Nyoman Wahyu"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

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
                    <span className="rounded-full border-2 border-(--border) bg-bg px-4 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-fg">
                      {timeline[current].period}
                    </span>
                  </div>
                  <p className="font-sans text-sm font-bold text-muted-card mb-4 flex items-center gap-2">
                    <i className="ri-building-line"></i> {timeline[current].org}
                  </p>

                   {timeline[current].stack && (
                     <p className="mb-4 inline-block rounded-md border-2 border-signal bg-black px-3 py-1 font-sans text-xs font-bold uppercase tracking-[0.05em] text-signal">
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

      {/* Pendidikan (Separated) */}
      <motion.div 
        className="mt-20 border-t-3 border-line pt-16 mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="font-display text-[clamp(2rem,4vw,3rem)] leading-none uppercase text-fg mb-8">
          {t("experience.eduTitle")}
        </h3>
        <div className="rounded-lg border-3 border-(--border) bg-card p-6 md:p-8 shadow-[6px_6px_0px_var(--shadow)]">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <h3 className="font-sans text-[1.25rem] font-bold text-on-card">
              {t("experience.education.title")}
            </h3>
                 <span className="rounded-full border-2 border-signal bg-black px-4 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-signal">
              {t("experience.education.period")}
            </span>
          </div>
          <p className="font-sans text-sm font-bold text-muted-card mb-4 flex items-center gap-2">
            <i className="ri-graduation-cap-line"></i> {t("experience.education.org")}
          </p>
          <ul className="font-sans text-sm text-muted-card space-y-2">
            {t("experience.education.desc").map((d, index) => (
              <li key={index}>{d}</li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Sertifikasi (Original Grid/Design) */}
      <motion.div 
        className="mt-20 border-t-3 border-line pt-16"
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
                className="flex items-center gap-3 rounded-md border-2 border-(--border) bg-card px-5 py-3 shadow-[3px_3px_0px_var(--shadow)]"
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
