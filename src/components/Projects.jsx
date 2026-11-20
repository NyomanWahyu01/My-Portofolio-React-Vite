import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useT } from "../i18n/LanguageProvider";
import { listProyek } from "../data";

const projectMeta = {
  1: { color: "var(--orange)", category: "personal", status: "live" },
  2: { color: "var(--yellow)", category: "web", status: "archived" },
  3: { color: "var(--green)", category: "pemerintahan", status: "archived" },
  4: { color: "var(--pink)", category: "bisnis", status: "archived" },
  5: { color: "var(--lime)", category: "web", status: "archived" },
  6: { color: "var(--purple)", category: "personal", status: "archived" },
  7: { color: "var(--purple)", category: "pemerintahan", status: "live" },
  8: { color: "var(--pink)", category: "bisnis", status: "archived" },
};

const filters = [
  { key: "all", label: "projects.filterAll" },
  { key: "web", label: "projects.filterWeb" },
  { key: "pemerintahan", label: "projects.filterGov" },
  { key: "bisnis", label: "projects.filterBusiness" },
  { key: "personal", label: "projects.filterPersonal" },
];

const statusKey = {
  live: "projects.statusLive",
  dev: "projects.statusDev",
  concept: "projects.statusConcept",
  archived: "projects.statusArchived",
};

const statusColor = {
  live: "var(--green)",
  dev: "var(--yellow)",
  concept: "var(--pink)",
  archived: "var(--teal)",
};

export default function Projects() {
  const { t } = useT();
  const [filter, setFilter] = useState("all");
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

  const projects = listProyek.map((p) => ({
    ...p,
    ...(projectMeta[p.id] || { color: "var(--yellow)", category: "web", status: "archived" }),
  }));

  const visible =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const shown = showAll ? visible : visible.slice(0, 6);

  return (
    <section id="projects" className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none uppercase text-fg mb-4">
          {t("projects.title")}
        </h2>
        <p className="font-sans text-muted mb-8 max-w-prose">
          {t("projects.subtitle")}
        </p>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full border-2 border-(--border) px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] transition-all ${
                filter === f.key
                  ? "bg-accent text-on-card shadow-[3px_3px_0px_var(--shadow)]"
                  : "bg-card text-on-card"
              }`}
            >
              {t(f.label)}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Bento grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <motion.div
              layout
              key={p.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className={`group relative rounded-lg border-3 border-(--border) bg-card p-6 shadow-[6px_6px_0px_var(--shadow)] transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0px_var(--shadow)]`}
            >
              {/* Folder tab */}
              <span
                className="absolute -top-3 left-6 h-3 w-16 rounded-t-[8px] border-3 border-b-0 border-(--border)"
                style={{ backgroundColor: p.color }}
                aria-hidden="true"
              />

              <div className="flex items-start justify-between mb-4">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl border-3 border-(--border) text-on-card"
                  style={{ backgroundColor: p.color }}
                >
                  <i className="ri-folder-2-line text-xl"></i>
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs font-bold text-muted-card">
                    {p.tahun}
                  </span>
                  <span
                    className="rounded-full border-2 border-(--border) px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-on-card"
                    style={{ backgroundColor: statusColor[p.status] }}
                  >
                    {t(statusKey[p.status])}
                  </span>
                </div>
              </div>

              {p.gambar && (
                <div className="mb-4 overflow-hidden rounded-md border-3 border-(--border) aspect-video bg-bg">
                  <img
                    src={p.gambar}
                    alt={p.nama}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}

              <h3 className="font-sans text-[1.25rem] font-bold leading-tight text-on-card mb-2">
                {p.nama}
              </h3>
              <p className="font-sans text-sm text-muted-card leading-relaxed line-clamp-2 mb-4">
                {p.desk}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {p.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border-2 border-(--border) bg-bg px-2 py-0.5 text-[0.65rem] font-bold text-fg"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  {p.github && (
                    <motion.a
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-sm border-2 border-(--border) bg-card-alt text-on-card shadow-[2px_2px_0px_var(--shadow)]"
                      title="GitHub"
                    >
                      <i className="ri-github-fill text-lg"></i>
                    </motion.a>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelected(p)}
                    className="flex h-10 w-10 items-center justify-center rounded-sm border-2 border-(--border) bg-bg text-fg shadow-[2px_2px_0px_var(--shadow)]"
                    title="Details"
                  >
                    <i className="ri-arrow-right-up-line text-lg"></i>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length > 6 && (
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
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg border-3 border-(--border) bg-card p-6 md:p-8 shadow-[10px_10px_0px_var(--shadow)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl border-3 border-(--border) bg-bg text-fg"
                aria-label="Close"
              >
                <i className="ri-close-line text-xl"></i>
              </button>

              <div className="flex items-center gap-3 mb-6 pr-12">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl border-3 border-(--border) text-on-card"
                  style={{ backgroundColor: selected.color }}
                >
                  <i className="ri-folder-2-line text-xl"></i>
                </span>
                <span
                  className="rounded-full border-2 border-(--border) px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-on-card"
                  style={{ backgroundColor: statusColor[selected.status] }}
                >
                  {t(statusKey[selected.status])}
                </span>
              </div>

              {selected.gambar && (
                <div className="mb-6 overflow-hidden rounded-[20px] border-3 border-(--border) bg-bg">
                   <img
                    src={selected.gambar}
                    alt={selected.nama}
                    className="w-full object-cover"
                  />
                </div>
              )}

              <h3 className="font-sans text-2xl font-bold text-on-card mb-3">
                {selected.nama}
              </h3>
              <p className="font-sans text-on-card leading-relaxed mb-6 opacity-80">
                {selected.desk}
              </p>

              {selected.kantor && (
                <div className="flex items-center gap-2 mb-6">
                  <i className="ri-building-line text-muted"></i>
                  <p className="font-sans text-sm font-bold text-muted-card">
                    {selected.kantor}
                  </p>
                </div>
              )}

              <div className="mb-8">
                <p className="font-sans text-xs font-bold uppercase tracking-[0.08em] text-muted-card mb-3">
                  {t("projects.stackLabel")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selected.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border-2 border-(--border) bg-bg px-3 py-1 text-xs font-bold text-fg"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {selected.demo && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selected.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center rounded-md border-3 border-(--border) bg-cta px-6 py-3 font-sans text-sm font-bold uppercase tracking-wider text-on-card shadow-[4px_4px_0px_var(--shadow)]"
                  >
                    {t("projects.demo")}
                  </motion.a>
                )}
                {selected.github && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center rounded-md border-3 border-(--border) bg-card px-6 py-3 font-sans text-sm font-bold uppercase tracking-wider text-on-card shadow-[4px_4px_0px_var(--shadow)]"
                  >
                    <i className="ri-github-fill mr-2"></i>
                    {t("projects.github")}
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
