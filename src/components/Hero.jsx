import React from "react";
import { useT } from "../i18n/LanguageProvider";
import { DataImage } from "../data";

export default function Hero() {
  const { t } = useT();

  return (
    <section id="hero" className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-20 md:py-32 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 -left-20 w-64 h-64 rounded-full bg-pink opacity-20 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 rotate-45 bg-purple opacity-20 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10">
        {/* Status Badge */}
        <div className="fade-up fade-up-delay-1 inline-flex items-center gap-2 rounded-full border-2 border-(--border) bg-card px-4 py-1.5 mb-6 shadow-[2px_2px_0px_var(--shadow)]">
          <span className="h-2 w-2 rounded-full bg-green animate-pulse" />
          <span className="typing text-[0.80rem] running font-bold uppercase tracking-[0.09em] text-on-card">
            {t("hero.badge")}
          </span>
        </div>

        {/* Headline */}
        <h1 className="fade-up fade-up-delay-2 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] uppercase text-fg mb-6">
          {t("hero.title")}
        </h1>

        <p className="fade-up fade-up-delay-3 font-sans text-[1.125rem] text-muted mb-8 max-w-lg leading-relaxed">
          {t("hero.desc")}
        </p>

        {/* CTA */}
        <div className="fade-up fade-up-delay-4 flex items-center gap-4">
          <a 
            href="https://drive.google.com/drive/folders/1CV1RdSf5p0lBML3RB_ewfTXhdUk8Qiuz?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn rounded-md border-3 border-(--border) bg-cta px-8 py-4 font-sans font-bold text-sm uppercase tracking-wider text-on-card shadow-[6px_6px_0px_var(--shadow)] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_var(--shadow)] active:translate-y-0 active:shadow-none"
          >
            {t("hero.downloadCv")}
          </a>
          <a 
            href="#projects" 
            className="hero-btn rounded-md border-3 border-(--border) bg-card px-8 py-4 font-sans font-bold text-sm uppercase tracking-wider text-on-card shadow-[6px_6px_0px_var(--shadow)] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_var(--shadow)] active:translate-y-0 active:shadow-none"
          >
            {t("hero.viewProjects")}
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="slogan-card relative z-20 flex justify-center md:justify-end">
        <div className="profile-hero-img relative rotate-2 rounded-lg border-3 border-(--border) bg-card-alt p-4 shadow-[14px_14px_0px_var(--shadow)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[18px_18px_0px_var(--shadow)] w-full max-w-[400px]">
          <div className="aspect-square bg-card rounded-md overflow-hidden border-2 border-(--border)">
             <img 
               src={DataImage.profileBg} 
               alt="Nyoman Wahyu" 
               className="w-full h-full object-cover"
             />
          </div>
          {/* Stickers */}
          <div className="absolute -top-4 -left-4 rounded-12 border-2 border-(--border) bg-pink px-3 py-1 rotate-[-5deg] font-sans font-bold text-xs uppercase text-on-card shadow-[2px_2px_0px_var(--shadow)]">
            {t("hero.role1")}
          </div>
          {/* HERE ME — CTA "Hire Me" diambil dari sidebar */}
          <a
            href="#contact"
            className="hero-hire-btn nb-cta absolute -bottom-5 -right-5 px-4 py-2 rotate-[5deg] font-sans font-bold text-xs uppercase text-on-card"
          >
            {t("nav.hire")}
          </a>
        </div>
      </div>
    </section>
  );
}
