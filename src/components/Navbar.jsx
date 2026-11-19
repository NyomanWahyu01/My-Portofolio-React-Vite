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

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setThemeState(next);
    persistTheme(next);
  };

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-[1200px] px-4">
      <nav className="flex items-center justify-between rounded-[24px] border-[3px] border-[var(--border)] bg-card px-6 py-3 shadow-[6px_6px_0px_var(--shadow)]">
        <a href="/" className="flex items-center">
          <img src="/assets/Logo-Nym.png" alt="Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 font-sans font-medium text-sm text-fg">
          <a href="#about" className="hover:text-accent transition-colors">{t("nav.about")}</a>
          <a href="#projects" className="hover:text-accent transition-colors">{t("nav.projects")}</a>
          <a href="#services" className="hover:text-accent transition-colors">{t("nav.services")}</a>
          <a href="#experience" className="hover:text-accent transition-colors">{t("nav.experience")}</a>
          <a href="#contact" className="hover:text-accent transition-colors">{t("nav.contact")}</a>
        </div>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex rounded-full border-[2px] border-[var(--border)] p-0.5 bg-bg">
            <button onClick={() => setLang("id")} className={`px-2 py-0.5 text-xs font-bold rounded-full ${lang === "id" ? "bg-card-alt text-on-card" : "text-muted"}`}>ID</button>
            <button onClick={() => setLang("en")} className={`px-2 py-0.5 text-xs font-bold rounded-full ${lang === "en" ? "bg-card-alt text-on-card" : "text-muted"}`}>EN</button>
          </div>
          <button onClick={toggleTheme} className="flex items-center gap-2 px-3 py-1.5 rounded-[10px] border-[2px] border-[var(--border)] bg-bg text-fg text-xs font-bold shadow-[2px_2px_0px_var(--shadow)]">
            <i className={theme === "dark" ? "ri-moon-line" : "ri-sun-line"}></i>
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </button>
          <a href="#contact" className="rounded-[16px] border-[3px] border-[var(--border)] bg-cta px-4 py-2 font-sans font-bold text-xs uppercase text-on-card shadow-[4px_4px_0px_var(--shadow)]">
            {t("nav.hire")}
          </a>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden h-10 w-10 border-[2px] border-[var(--border)] rounded-[10px] flex items-center justify-center">
          <i className={isOpen ? "ri-close-line text-xl" : "ri-menu-line text-xl"}></i>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-2 p-6 rounded-[24px] border-[3px] border-[var(--border)] bg-card shadow-[6px_6px_0px_var(--shadow)] flex flex-col gap-4 text-on-card font-sans font-bold">
          {["about", "projects", "services", "experience", "contact"].map(item => (
            <a key={item} href={`#${item}`} onClick={() => setIsOpen(false)}>{t(`nav.${item}`)}</a>
          ))}
          <div className="pt-4 border-t-(2px) border-line flex items-center justify-between">
             <button onClick={toggleTheme} className="flex items-center gap-2 text-sm">
                <i className={theme === "dark" ? "ri-moon-line" : "ri-sun-line"}></i>
                {theme === "dark" ? "Dark Mode" : "Light Mode"}
             </button>
             <div className="flex gap-2">
                <button onClick={() => setLang("id")} className={lang === "id" ? "text-accent" : ""}>ID</button>
                <button onClick={() => setLang("en")} className={lang === "en" ? "text-accent" : ""}>EN</button>
             </div>
          </div>
        </div>
      )}
    </header>
  );
}