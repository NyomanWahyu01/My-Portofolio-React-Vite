import React, { useEffect, useState } from "react";
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
      <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none uppercase text-[var(--fg)] mb-4">
        {t("design.title")}
      </h2>
      <p className="font-sans text-[var(--muted)] mb-10 max-w-prose">
        {t("design.subtitle")}
      </p>

      <div className="columns-1 sm:columns-2 lg:columns-4 gap-6">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelected(item)}
            className="group relative mb-6 block w-full break-inside-avoid overflow-hidden rounded-[24px] border-[3px] border-[var(--border)] bg-[var(--card)] text-left shadow-[6px_6px_0px_var(--shadow)] transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0px_var(--shadow)] focus:outline-none focus:ring-[3px] focus:ring-[var(--accent)] focus:ring-offset-2"
          >
            <img
              src={item.gambar}
              alt={item.nama}
              className="w-full object-cover"
              loading="lazy"
            />
            <span className="absolute left-3 top-3 rounded-full border-[2px] border-[var(--border)] bg-[var(--card-alt)] px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-[var(--on-card)] opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100">
              {item.type}
            </span>
          </button>
        ))}
      </div>

      {listDesign.length > 8 && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-[16px] border-[3px] border-[var(--border)] bg-[var(--card)] px-6 py-3 font-sans text-sm font-bold uppercase tracking-wider text-[var(--fg)] shadow-[4px_4px_0px_var(--shadow)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_var(--shadow)] active:translate-y-0 active:shadow-none"
          >
            {showAll ? t("design.less") : t("design.more")}
          </button>
        </div>
      )}

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
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
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-[12px] border-[3px] border-[var(--border)] bg-[var(--bg)] text-[var(--fg)]"
              aria-label="Close"
            >
              <i className="ri-close-line text-xl"></i>
            </button>

            <div className="mb-4 overflow-hidden rounded-[16px] border-[3px] border-[var(--border)]">
              <img
                src={selected.gambar}
                alt={selected.nama}
                className="w-full object-cover"
              />
            </div>

            <h3 className="font-sans text-2xl font-bold text-[var(--on-card)] mb-2">
              {selected.nama}
            </h3>
            <p className="font-sans text-[var(--on-card)] leading-relaxed mb-4">
              {selected.desk}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {selected.tools?.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border-[2px] border-[var(--border)] bg-[var(--bg)] px-2 py-0.5 text-[0.65rem] font-bold text-[var(--on-card)]"
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
                className="inline-block rounded-[16px] border-[3px] border-[var(--border)] bg-[var(--cta)] px-5 py-2.5 font-sans text-sm font-bold uppercase tracking-wider text-[var(--on-card)] shadow-[4px_4px_0px_var(--shadow)]"
              >
                {t("projects.demo")}
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
