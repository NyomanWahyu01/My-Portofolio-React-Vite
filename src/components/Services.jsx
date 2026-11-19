import React from "react";
import { useT } from "../i18n/LanguageProvider";

const services = [
  { key: "s1", color: "var(--yellow)", icon: "ri-global-line" },
  { key: "s2", color: "var(--pink)", icon: "ri-database-2-line" },
  { key: "s3", color: "var(--lime)", icon: "ri-pen-nib-line" },
];

const steps = ["p1", "p2", "p3", "p4"];

export default function Services() {
  const { t } = useT();

  return (
    <section id="services" className="py-20 md:py-32">
      <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none uppercase text-[var(--fg)] mb-4">
        {t("services.title")}
      </h2>
      <p className="font-sans text-[var(--muted)] mb-10 max-w-prose">
        {t("services.subtitle")}
      </p>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {services.map((s) => (
          <div
            key={s.key}
            className="rounded-[24px] border-[3px] border-[var(--border)] bg-[var(--card)] p-6 shadow-[6px_6px_0px_var(--shadow)]"
          >
            <span
              className="mb-4 flex h-14 w-14 items-center justify-center rounded-[12px] border-[3px] border-[var(--border)] text-[var(--on-card)]"
              style={{ backgroundColor: s.color }}
            >
              <i className={`${s.icon} text-2xl`}></i>
            </span>
            <h3 className="font-sans text-[1.25rem] font-bold text-[var(--on-card)] mb-2">
              {t(`services.${s.key}Title`)}
            </h3>
            <p className="font-sans text-sm leading-relaxed text-[var(--muted)]">
              {t(`services.${s.key}Desc`)}
            </p>
          </div>
        ))}
      </div>

      {/* Process strip */}
      <div className="rounded-[24px] border-[3px] border-[var(--border)] bg-[var(--card-alt)] p-6 md:p-8 shadow-[6px_6px_0px_var(--shadow)]">
        <h3 className="font-sans text-xs font-bold uppercase tracking-[0.08em] text-[var(--on-card)] mb-6">
          {t("services.processTitle")}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[3px] border-[var(--border)] bg-[var(--card)] font-display text-lg text-[var(--on-card)]">
                {i + 1}
              </span>
              <span className="font-sans font-bold uppercase tracking-wider text-[var(--on-card)]">
                {t(`services.${step}`)}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-8 inline-block rounded-[16px] border-[3px] border-[var(--border)] bg-[var(--cta)] px-6 py-3 font-sans text-sm font-bold uppercase tracking-wider text-[var(--on-card)] shadow-[4px_4px_0px_var(--shadow)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_var(--shadow)] active:translate-y-0 active:shadow-none"
        >
          {t("services.cta")}
        </a>
      </div>
    </section>
  );
}
