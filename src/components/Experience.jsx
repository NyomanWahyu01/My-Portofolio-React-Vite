import React from "react";
import { useT } from "../i18n/LanguageProvider";

const dotColors = ["var(--purple)", "var(--yellow)", "var(--green)"];

export default function Experience() {
  const { t } = useT();
  const timeline = t("experience.timeline");
  const certs = t("experience.certs");

  return (
    <section id="experience" className="py-20 md:py-32">
      <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none uppercase text-[var(--fg)] mb-4">
        {t("experience.title")}
      </h2>
      <p className="font-sans text-[var(--muted)] mb-10 max-w-prose">
        {t("experience.subtitle")}
      </p>

      {/* Timeline */}
      <div className="relative border-l-[3px] border-[var(--line)] pl-6 md:pl-10 space-y-6">
        {Array.isArray(timeline) &&
          timeline.map((item, i) => (
            <div key={i} className="relative">
              {/* Dot */}
              <span
                className="absolute -left-[calc(1.5rem+8px)] md:-left-[calc(2.5rem+8px)] top-6 h-4 w-4 rounded-full border-[3px] border-[var(--border)]"
                style={{ backgroundColor: dotColors[i % dotColors.length] }}
                aria-hidden="true"
              />
              <div className="rounded-[24px] border-[3px] border-[var(--border)] bg-[var(--card)] p-6 shadow-[6px_6px_0px_var(--shadow)]">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-sans text-[1.15rem] font-bold text-[var(--on-card)]">
                    {item.title}
                  </h3>
                  <span className="rounded-full border-[2px] border-[var(--border)] bg-[var(--bg)] px-3 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-[var(--on-card)]">
                    {item.period}
                  </span>
                </div>
                <p className="font-sans text-sm font-bold text-[var(--muted)] mb-2">
                  {item.org}
                </p>
                <p className="font-sans text-sm leading-relaxed text-[var(--muted)]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* Certifications */}
      <div className="mt-12">
        <h3 className="font-sans text-xs font-bold uppercase tracking-[0.08em] text-[var(--muted)] mb-4">
          {t("experience.certTitle")}
        </h3>
        <div className="flex flex-wrap gap-2">
          {Array.isArray(certs) &&
            certs.map((cert, i) => (
              <span
                key={i}
                className="rounded-full border-[2px] border-[var(--border)] bg-[var(--card-alt)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[var(--on-card)]"
              >
                {cert}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
