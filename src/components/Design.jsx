import React, { useEffect, useState } from "react";
import { MotionConfig, motion, AnimatePresence } from "motion/react";
import { useT } from "../i18n/LanguageProvider";
import { listDesign } from "../data";

export default function Design() {
  const { t } = useT();
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  const items = showAll ? listDesign : listDesign.slice(0, 8);

  return (
    <MotionConfig reducedMotion="user">
      <section id="design" className="relative py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-12 overflow-hidden rounded-lg border-3 border-(--border) bg-card p-6 shadow-[6px_6px_0px_var(--shadow)] md:p-10"
        >
          <span className="mb-5 inline-flex rounded-full border-2 border-signal bg-signal px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white">
            {t("design.badge")}
          </span>
          <div className="relative max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(3.5rem,10vw,8rem)] leading-[0.82] uppercase text-fg"
            >
              {t("design.title")}
            </motion.h2>
            <motion.span
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 block h-2 w-32 bg-signal md:w-56"
              aria-hidden="true"
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-6 max-w-prose font-sans text-muted"
          >
            {t("design.subtitle")}
          </motion.p>
          <span className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rotate-12 border-3 border-signal md:right-12 md:top-8" aria-hidden="true" />
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.button
                layout
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{
                  layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  duration: 0.55,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => setSelected(item)}
                className="group relative block w-full overflow-hidden rounded-lg border-3 border-(--border) bg-card text-left shadow-[6px_6px_0px_var(--shadow)] transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_var(--shadow)] motion-reduce:transition-none"
              >
              <img
                src={item.gambar}
                alt={item.nama}
                className="aspect-3/4 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute left-4 top-4 rounded-full border-2 border-(--border) bg-card-alt px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-on-card opacity-0 transition-opacity group-hover:opacity-100">
                {item.type}
              </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {listDesign.length > 8 && (
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-md border-3 border-(--border) bg-card px-8 py-4 font-sans text-sm font-bold uppercase tracking-wider text-on-card shadow-[4px_4px_0px_var(--shadow)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_var(--shadow)] active:translate-y-0 active:shadow-none"
          >
            {showAll ? t("design.less") : t("design.more")}
          </button>
        </motion.div>
      )}

        {/* Modal */}
        <AnimatePresence>
        {selected && (
          <div
            className="fixed inset-0 z-100 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-fg/60 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-lg border-3 border-(--border) bg-card p-6 md:p-8 shadow-[10px_10px_0px_var(--shadow)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-xl border-3 border-(--border) bg-bg text-fg"
                aria-label="Close"
              >
                <i className="ri-close-line text-xl"></i>
              </button>

              <div className="mb-6 overflow-hidden rounded-[20px] border-3 border-(--border)">
                <img
                  src={selected.gambar}
                  alt={selected.nama}
                  className="w-full object-cover"
                />
              </div>

              <h3 className="font-sans text-2xl font-bold text-on-card mb-2">
                {selected.nama}
              </h3>
              <p className="font-sans text-on-card leading-relaxed mb-6 opacity-80">
                {selected.desk}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {selected.tools?.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border-2 border-(--border) bg-bg px-3 py-1 text-xs font-bold text-fg"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {selected.file && (
                <a
                  href={selected.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center rounded-md border-3 border-(--border) bg-cta px-5 py-3 font-sans text-sm font-bold uppercase tracking-wider text-on-card shadow-[4px_4px_0px_var(--shadow)]"
                >
                  {t("projects.demo")}
                </a>
              )}
            </motion.div>
          </div>
        )}
        </AnimatePresence>
      </section>
    </MotionConfig>
  );
}
