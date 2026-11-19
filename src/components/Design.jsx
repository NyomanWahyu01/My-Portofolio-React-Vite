import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
    <section id="design" className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none uppercase text-fg mb-4">
          {t("design.title")}
        </h2>
        <p className="font-sans text-muted mb-10 max-w-prose">
          {t("design.subtitle")}
        </p>
      </motion.div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {items.map((item, i) => (
            <motion.button
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setSelected(item)}
              className="group relative block w-full overflow-hidden rounded-[24px] border-[3px] border-[var(--border)] bg-card text-left shadow-[6px_6px_0px_var(--shadow)] transition-all hover:-translate-y-2 hover:shadow-[12px_12px_0px_var(--shadow)]"
            >
              <img
                src={item.gambar}
                alt={item.nama}
                className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <span className="absolute left-4 top-4 rounded-full border-[2px] border-[var(--border)] bg-card-alt px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-on-card opacity-0 transition-opacity group-hover:opacity-100">
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
            className="rounded-[16px] border-[3px] border-[var(--border)] bg-card px-8 py-4 font-sans text-sm font-bold uppercase tracking-wider text-on-card shadow-[4px_4px_0px_var(--shadow)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_var(--shadow)] active:translate-y-0 active:shadow-none"
          >
            {showAll ? t("design.less") : t("design.more")}
          </button>
        </motion.div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
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
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-[24px] border-[3px] border-[var(--border)] bg-card p-6 md:p-8 shadow-[10px_10px_0px_var(--shadow)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-[12px] border-[3px] border-[var(--border)] bg-bg text-fg"
                aria-label="Close"
              >
                <i className="ri-close-line text-xl"></i>
              </button>

              <div className="mb-6 overflow-hidden rounded-[20px] border-[3px] border-[var(--border)]">
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
                    className="rounded-full border-[2px] border-[var(--border)] bg-bg px-3 py-1 text-xs font-bold text-fg"
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
                  className="inline-block w-full text-center rounded-[16px] border-[3px] border-[var(--border)] bg-cta px-5 py-3 font-sans text-sm font-bold uppercase tracking-wider text-on-card shadow-[4px_4px_0px_var(--shadow)]"
                >
                  {t("projects.demo")}
                </a>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
