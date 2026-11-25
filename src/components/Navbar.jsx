import React, { useState, useEffect } from "react";
import { useT } from "../i18n/LanguageProvider";
import { getStoredTheme, applyTheme, setTheme as persistTheme } from "../theme";

const NAV_ITEMS = ["about", "projects", "services", "experience", "contact"];

export default function Navbar() {
  const { lang, setLang, t } = useT();
  const [theme, setTheme] = useState(getStoredTheme);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    persistTheme(next);
  };

  const isDark = theme === "dark";

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-screen-7xl px-4">
      <nav className="nb-navbar flex items-center justify-between px-6 py-3">
        <a href="/" className="flex items-center">
          <img src="/assets/Logo-Nym.webp" alt="Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 font-sans font-medium text-sm text-on-card">
          {NAV_ITEMS.map((item) => (
            <a key={item} href={`#${item}`} className="underline-offset-8 decoration-accent decoration-3 hover:underline transition-colors">
              {t(`nav.${item}`)}
            </a>
          ))}
        </div>

        {/* Desktop controls */}
        <div className="hidden md:flex items-center gap-3">
          <div className="nb-pill flex p-1">
            <button
              onClick={() => setLang("id")}
              className={`px-2 py-1 text-xs font-bold rounded-full ${
                lang === "id" ? "bg-card-alt text-on-card" : "text-muted-card"
              }`}
            >
              <span className={lang === "id" ? "language-toggle-label" : undefined}>ID</span>
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 text-xs font-bold rounded-full ${
                lang === "en" ? "bg-card-alt text-on-card" : "text-muted-card"
              }`}
            >
              <span className={lang === "en" ? "language-toggle-label" : undefined}>EN</span>
            </button>
          </div>

          <button onClick={toggleTheme} className="nb-mini-btn flex items-center gap-2 px-3 py-2 text-xs font-green font-bold">
            <i
              key={theme}
              className={`theme-toggle-icon ${isDark ? "ri-moon-line" : "ri-sun-line"}`}
              aria-hidden="true"
            />
            {isDark ? "Dark" : "Light"}
          </button>

        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="nb-mini-btn md:hidden flex h-10 w-10 items-center justify-center"
          aria-label="Menu"
        >
          <i className={isOpen ? "ri-close-line text-xl" : "ri-menu-line text-xl"}></i>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="nb-menu mt-2 flex flex-col gap-4 p-6 font-sans font-bold md:hidden">
          {NAV_ITEMS.map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setIsOpen(false)}>
              {t(`nav.${item}`)}
            </a>
          ))}

          <div className="mt-2 flex items-center justify-between border-t-2 border-on-card pt-4">
            <button onClick={toggleTheme} className="flex items-center gap-2 text-sm text-on-card">
              <i
                key={theme}
                className={`theme-toggle-icon ${isDark ? "ri-moon-line" : "ri-sun-line"}`}
                aria-hidden="true"
              />
              {isDark ? "Dark Mode" : "Light Mode"}
            </button>

            <div className="flex gap-3 text-sm">
              <button
                onClick={() => setLang("id")}
                className={lang === "id" ? "text-accent" : "text-on-card"}
              >
                <span className={lang === "id" ? "language-toggle-label" : undefined}>ID</span>
              </button>
              <button
                onClick={() => setLang("en")}
                className={lang === "en" ? "text-accent" : "text-on-card"}
              >
                <span className={lang === "en" ? "language-toggle-label" : undefined}>EN</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
