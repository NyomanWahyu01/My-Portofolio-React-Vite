import React, { useState, useEffect } from "react";
import { useT } from "../i18n/LanguageProvider";
import { getStoredTheme, applyTheme, setTheme as persistTheme } from "../theme";

export default function Navbar() {
  const { lang, setLang, t } = useT();
  const [theme, setThemeState] = useState(getStoredTheme);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const sync = () => setThemeState(getStoredTheme());
    window.addEventListener("ecc-theme-change", sync);
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystem = () => {
      if (getStoredTheme() === "system") applyTheme("system");
    };
    mq.addEventListener("change", onSystem);
    return () => {
      window.removeEventListener("ecc-theme-change", sync);
      mq.removeEventListener("change", onSystem);
    };
  }, []);

  const cycleTheme = () => {
    const next =
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    setThemeState(next);
    persistTheme(next);
  };

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-[1200px] px-4">
      <nav className="flex items-center justify-between rounded-[24px] border-[3px] border-[var(--border)] bg-[var(--card)] px-6 py-3 shadow-[6px_6px_0px_var(--shadow)] transition-all">
        {/* Logo */}
        <a href="#" className="font-display text-2xl tracking-wider text-[var(--fg)]">
          NYM<span className="text-[var(--accent)]">.</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-6 md:flex font-sans font-medium text-sm text-[var(--fg)]">
          <a href="#about" className="hover:text-[var(--accent)] transition-colors">{t("nav.about")}</a>
          <a href="#projects" className="hover:text-[var(--accent)] transition-colors">{t("nav.projects")}</a>
          <a href="#services" className="hover:text-[var(--accent)] transition-colors">{t("nav.services")}</a>
          <a href="#experience" className="hover:text-[var(--accent)] transition-colors">{t("nav.experience")}</a>
          <a href="#contact" className="hover:text-[var(--accent)] transition-colors">{t("nav.contact")}</a>
        </div>

        {/* Controls & CTA */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Lang Selector */}
          <div className="flex rounded-full border-[2px] border-[var(--border)] p-0.5 bg-[var(--bg)]">
            <button 
              onClick={() => setLang("id")}
              className={`px-2.5 py-0.5 text-xs font-bold rounded-full transition-colors ${lang === "id" ? "bg-[var(--card-alt)] text-[var(--on-card)]" : "text-[var(--muted)]"}`}
            >
              ID
            </button>
            <button 
              onClick={() => setLang("en")}
              className={`px-2.5 py-0.5 text-xs font-bold rounded-full transition-colors ${lang === "en" ? "bg-[var(--card-alt)] text-[var(--on-card)]" : "text-[var(--muted)]"}`}
            >
              EN
            </button>
          </div>

          {/* Theme Selector */}
          <button 
            onClick={cycleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-[10px] border-[2px] border-[var(--border)] bg-[var(--bg)] text-[var(--fg)] shadow-[2px_2px_0px_var(--shadow)] transition-transform active:translate-x-[2px] active:translate-y-[2px]"
            title={`Theme: ${theme}`}
          >
            {theme === "light" ? <i className="ri-sun-line"></i> : theme === "dark" ? <i className="ri-moon-line"></i> : <i className="ri-computer-line"></i>}
          </button>

          {/* Hire Me CTA */}
          <a 
            href="#contact"
            className="rounded-[16px] border-[3px] border-[var(--border)] bg-[var(--cta)] px-4 py-2 font-sans font-bold text-xs uppercase tracking-wider text-[var(--on-card)] shadow-[4px_4px_0px_var(--shadow)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_var(--shadow)] active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            {t("nav.hire")}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-[10px] border-[2px] border-[var(--border)] bg-[var(--bg)] md:hidden text-[var(--fg)]"
        >
          <i className={isOpen ? "ri-close-line text-xl" : "ri-menu-line text-xl"}></i>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="mt-2 rounded-[24px] border-[3px] border-[var(--border)] bg-[var(--card)] p-6 shadow-[6px_6px_0px_var(--shadow)] md:hidden flex flex-col gap-4 font-sans font-medium text-lg">
          <a href="#about" onClick={() => setIsOpen(false)}>{t("nav.about")}</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>{t("nav.projects")}</a>
          <a href="#services" onClick={() => setIsOpen(false)}>{t("nav.services")}</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>{t("nav.experience")}</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>{t("nav.contact")}</a>
          
          <div className="flex items-center justify-between pt-4 border-t-[2px] border-[var(--line)]">
            <div className="flex rounded-full border-[2px] border-[var(--border)] p-0.5 bg-[var(--bg)]">
              <button onClick={() => setLang("id")} className={`px-3 py-1 text-xs font-bold rounded-full ${lang === "id" ? "bg-[var(--card-alt)] text-[var(--on-card)]" : ""}`}>ID</button>
              <button onClick={() => setLang("en")} className={`px-3 py-1 text-xs font-bold rounded-full ${lang === "en" ? "bg-[var(--card-alt)] text-[var(--on-card)]" : ""}`}>EN</button>
            </div>
            <button 
              onClick={cycleTheme}
              className="px-3 py-1 rounded-[10px] border-[2px] border-[var(--border)] bg-[var(--bg)] text-xs font-bold"
            >
              Theme: {theme}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
