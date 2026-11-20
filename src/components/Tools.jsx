import React from "react";
import { useT } from "../i18n/LanguageProvider";
import { listToolsCoding, listToolsDesign } from "../data";

function Tile({ tool, index }) {
  return (
    <div
      className={`flex shrink-0 flex-col items-center gap-2 rounded-md border-3 border-(--border) bg-card px-4 py-3 shadow-[3px_3px_0px_var(--shadow)] ${
        index % 2 === 0 ? "-rotate-1" : "rotate-1"
      }`}
    >
      <div className="flex h-12 w-12 items-center justify-center">
        <img
          src={tool.gambar}
          alt={tool.nama}
          className="h-10 w-10 object-contain"
          loading="lazy"
          width="40"
          height="40"
        />
      </div>
      <span className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.08em] text-on-card">
        {tool.nama}
      </span>
    </div>
  );
}

function MarqueeRow({ tools, reverse }) {
  const doubled = [...tools, ...tools];
  return (
    <div className="marquee-group relative overflow-hidden py-2">
      <div
        className={`marquee-track flex w-max gap-4 ${reverse ? "marquee-reverse" : ""}`}
      >
        {doubled.map((tool, i) => (
          <Tile key={`${tool.id}-${i}`} tool={tool} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function Tools() {
  const { t } = useT();

  return (
    <section id="tools" className="py-20 md:py-32">
      <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none uppercase text-fg mb-4">
        {t("tools.title")}
      </h2>
      <p className="font-sans text-muted mb-10 max-w-prose">
        {t("tools.subtitle")}
      </p>

      <div className="space-y-4">
        <div>
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.08em] text-muted mb-2">
            {t("tools.coding")}
          </h3>
          <MarqueeRow tools={listToolsCoding} reverse={false} />
        </div>
        <div>
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.08em] text-muted mb-2">
            {t("tools.design")}
          </h3>
          <MarqueeRow tools={listToolsDesign} reverse />
        </div>
      </div>
    </section>
  );
}
