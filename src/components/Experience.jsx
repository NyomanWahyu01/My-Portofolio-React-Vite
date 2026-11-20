import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useT } from "../i18n/LanguageProvider";

export default function Experience() {
  const { t } = useT();
  const timeline = t("experience.timeline");
  const certs = t("experience.certs");
  const edu = t("experience.edu");
  const [current, setCurrent] = useState(0);
  const [certCurrent, setCertCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % timeline.length);
  const prev = () => setCurrent((prev) => (prev - 1 + timeline.length) % timeline.length);
  const nextCert = () => setCertCurrent((prev) => (prev + 1) % certs.length);
  const prevCert = () => setCertCurrent((prev) => (prev - 1 + certs.length) % certs.length);

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="mb-20">
        <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none uppercase text-fg mb-4">
          {t("experience.title")}
        </h2>
        <p className="font-sans text-muted max-w-prose">{t("experience.subtitle")}</p>
      </div>

      {/* Experience Carousel */}
      <div className="relative mb-24">
        <div className="relative overflow-hidden min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="w-full"
            >
              <div className="rounded-lg border-3 border-(--border) bg-card p-6 md:p-8 shadow-[6px_6px_0px_var(--shadow)]">
                <h3 className="text-xl font-bold text-on-card mb-2">{timeline[current].title}</h3>
                <p className="text-muted-card mb-4">{timeline[current].org}</p>
                <ul className="list-disc list-inside text-sm text-muted-card space-y-1">
                  {timeline[current].desc.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button onClick={prev} className="p-3 border-3 border-(--border) bg-card rounded-md"><i className="ri-arrow-left-line"></i></button>
          <button onClick={next} className="p-3 border-3 border-(--border) bg-card rounded-md"><i className="ri-arrow-right-line"></i></button>
        </div>
      </div>

      {/* Sertifikasi Carousel */}
      <div className="mb-20">
        <h3 className="text-2xl uppercase font-bold text-fg mb-8">Sertifikasi</h3>
        <div className="relative overflow-hidden h-[80px]">
          <AnimatePresence mode="wait">
            <motion.div key={certCurrent} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="absolute w-full">
              <div className="flex items-center gap-4 rounded-md border-3 border-(--border) bg-card p-4 shadow-[4px_4px_0px_var(--shadow)]">
                <i className="ri-award-line text-accent text-xl"></i>
                <span className="font-bold text-on-card">{certs[certCurrent]}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <button onClick={prevCert} className="p-2 border-2 border-(--border) bg-card rounded-md"><i className="ri-arrow-left-line"></i></button>
          <button onClick={nextCert} className="p-2 border-2 border-(--border) bg-card rounded-md"><i className="ri-arrow-right-line"></i></button>
        </div>
      </div>

      {/* Pendidikan */}
      <div className="border-t-3 border-line pt-16">
        <h3 className="text-2xl uppercase font-bold text-fg mb-8">Pendidikan</h3>
        <div className="rounded-md border-3 border-(--border) bg-card p-6 shadow-[4px_4px_0px_var(--shadow)]">
          <span className="font-bold text-on-card">{edu}</span>
        </div>
      </div>
    </section>
  );
}
