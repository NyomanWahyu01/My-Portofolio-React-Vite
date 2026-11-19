import React from "react";
import { useT } from "../i18n/LanguageProvider";

export default function Hero() {
  const { t } = useT();

  return (
    <section id="hero" className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-20 md:py-32 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 -left-20 w-64 h-64 rounded-full bg-[var(--pink)] opacity-20 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 rotate-45 bg-[var(--purple)] opacity-20 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 animate-fade-up">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border-[2px] border-[var(--border)] bg-[var(--card)] px-4 py-1.5 mb-6 shadow-[2px_2px_0px_var(--shadow)]">
          <span className="h-2 w-2 rounded-full bg-[var(--green)] animate-pulse" />
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.08em] text-[var(--fg)]">
            {t("hero.badge")}
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-[clamp(3.25rem,9vw,7.5rem)] leading-[0.95] uppercase text-[var(--fg)] mb-6">
          {t("hero.title")}
        </h1>

        <p className="font-sans text-[1.125rem] text-[var(--muted)] mb-8 max-w-lg leading-relaxed">
          {t("hero.desc")}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a 
            href="/cv.pdf" 
            className="rounded-[16px] border-[3px] border-[var(--border)] bg-[var(--cta)] px-8 py-4 font-sans font-bold text-sm uppercase tracking-wider text-[var(--on-card)] shadow-[6px_6px_0px_var(--shadow)] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_var(--shadow)] active:translate-y-0 active:shadow-none"
          >
            {t("hero.downloadCv")}
          </a>
          <a 
            href="#projects" 
            className="rounded-[16px] border-[3px] border-[var(--border)] bg-[var(--card)] px-8 py-4 font-sans font-bold text-sm uppercase tracking-wider text-[var(--fg)] shadow-[6px_6px_0px_var(--shadow)] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_var(--shadow)] active:translate-y-0 active:shadow-none"
          >
            {t("hero.viewProjects")}
          </a>
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="relative z-10 flex justify-center md:justify-end">
        <div className="relative rotate-[2deg] rounded-[24px] border-[3px] border-[var(--border)] bg-[var(--card-alt)] p-4 shadow-[10px_10px_0px_var(--shadow)] w-full max-w-[400px]">
          <div className="aspect-square bg-[var(--card)] rounded-[16px] overflow-hidden border-[2px] border-[var(--border)]">
             <div className="flex items-center justify-center h-full text-[var(--muted)] italic">
               Profile Image
             </div>
          </div>
          {/* Stickers */}
          <div className="absolute -top-4 -left-4 rounded-[12px] border-[2px] border-[var(--border)] bg-[var(--pink)] px-3 py-1 rotate-[-5deg] font-sans font-bold text-xs uppercase shadow-[2px_2px_0px_var(--shadow)]">
            {t("hero.role1")}
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-[12px] border-[2px] border-[var(--border)] bg-[var(--yellow)] px-3 py-1 rotate-[5deg] font-sans font-bold text-xs uppercase shadow-[2px_2px_0px_var(--shadow)]">
            {t("hero.role2")}
          </div>
        </div>
      </div>
    </section>
  );
}
