import React, { useEffect, useState } from "react";
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

  return (
    <section id="projects" className="py-20 md:py-32">
      <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none uppercase text-[var(--fg)] mb-4">
        {t("projects.title")}
      </h2>
      <p className="font-sans text-[var(--muted)] mb-8 max-w-prose">
        {t("projects.subtitle")}
      </p>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-3 mb-10">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`rounded-full border-[2px] border-[var(--border)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] transition-all ${
              filter === f.key
                ? "bg-[var(--accent)] text-[var(--on-card)] shadow-[3px_3px_0px_var(--shadow)]"
                : "bg-[var(--card)] text-[var(--fg)]"
            }`}
          >
            {t(f.label)}
          </button>
        ))}
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((p, i) => {
          const featured = filter === "all" && i === 0;
          return (
            <button
              key={p.id}
              onClick={() => setSelected(p)}
              className={`group relative text-left rounded-[24px] border-[3px] border-[var(--border)] bg-[var(--card)] p-6 shadow-[6px_6px_0px_var(--shadow)] transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0px_var(--shadow)] focus:outline-none focus:ring-[3px] focus:ring-[var(--accent)] focus:ring-offset-2 ${
                featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Folder tab */}
              <span
                className="absolute -top-3 left-6 h-3 w-16 rounded-t-[8px] border-[3px] border-b-0 border-[var(--border)]"
                style={{ backgroundColor: p.color }}
                aria-hidden="true"
              />

              <div className="flex items-start justify-between mb-4">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-[12px] border-[3px] border-[var(--border)] text-[var(--on-card)]"
                  style={{ backgroundColor: p.color }}
                >
                  <i className="ri-folder-2-line text-xl"></i>
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs font-bold text-[var(--muted)]">
                    {p.tahun}
                  </span>
                  <span
                    className="rounded-full border-[2px] border-[var(--border)] px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-[var(--on-card)]"
                    style={{ backgroundColor: statusColor[p.status] }}
                  >
                    {t(statusKey[p.status])}
                  </span>
                </div>
              </div>

              {featured && p.gambar && (
                <div className="mb-4 overflow-hidden rounded-[16px] border-[3px] border-[var(--border)]">
                  <img
                    src={p.gambar}
                    alt={p.nama}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              <h3 className="font-sans text-[1.25rem] font-bold leading-tight text-[var(--on-card)] mb-2">
                {p.nama}
              </h3>
              <p className="font-sans text-sm text-[var(--muted)] leading-relaxed line-clamp-2 mb-4">
                {p.desk}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.tools.slice(0, 4).map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border-[2px] border-[var(--border)] bg-[var(--bg)] px-2 py-0.5 text-[0.65rem] font-bold text-[var(--on-card)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--ink,#111)]/60 p-4"
          style={{ backgroundColor: "rgba(17,17,17,0.6)" }}
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.nama}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[24px] border-[3px] border-[var(--border)] bg-[var(--card)] p-6 md:p-8 shadow-[10px_10px_0px_var(--shadow)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-[12px] border-[3px] border-[var(--border)] bg-[var(--bg)] text-[var(--fg)]"
              aria-label="Close"
            >
              <i className="ri-close-line text-xl"></i>
            </button>

            <div className="flex items-center gap-3 mb-4 pr-12">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-[12px] border-[3px] border-[var(--border)] text-[var(--on-card)]"
                style={{ backgroundColor: selected.color }}
              >
                <i className="ri-folder-2-line text-xl"></i>
              </span>
              <span
                className="rounded-full border-[2px] border-[var(--border)] px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-[var(--on-card)]"
                style={{ backgroundColor: statusColor[selected.status] }}
              >
                {t(statusKey[selected.status])}
              </span>
            </div>

            <h3 className="font-sans text-2xl font-bold text-[var(--on-card)] mb-3">
              {selected.nama}
            </h3>
            <p className="font-sans text-[var(--on-card)] leading-relaxed mb-4">
              {selected.desk}
            </p>

            {selected.kantor && (
              <p className="font-sans text-sm text-[var(--muted)] mb-2">
                {selected.kantor}
              </p>
            )}

            <div className="mb-4">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.08em] text-[var(--muted)] mb-2">
                {t("projects.stackLabel")}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {selected.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border-[2px] border-[var(--border)] bg-[var(--bg)] px-2 py-0.5 text-[0.65rem] font-bold text-[var(--on-card)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {selected.demo && (
                <a
                  href={selected.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[16px] border-[3px] border-[var(--border)] bg-[var(--cta)] px-5 py-2.5 font-sans text-sm font-bold uppercase tracking-wider text-[var(--on-card)] shadow-[4px_4px_0px_var(--shadow)]"
                >
                  {t("projects.demo")}
                </a>
              )}
              {selected.github && (
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[16px] border-[3px] border-[var(--border)] bg-[var(--card)] px-5 py-2.5 font-sans text-sm font-bold uppercase tracking-wider text-[var(--fg)] shadow-[4px_4px_0px_var(--shadow)]"
                >
                  {t("projects.github")}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
