import React, { useEffect, useState } from "react";
import { useT } from "../i18n/LanguageProvider";
import { getStoredTheme, setTheme as persistTheme } from "../theme";

const themeOptions = [
  { key: "light", icon: "ri-sun-line" },
  { key: "dark", icon: "ri-moon-line" },
];

export default function Footer() {
  const { lang, setLang, t } = useT();
  const [theme, setThemeState] = useState(getStoredTheme);
  const year = new Date().getFullYear();

  useEffect(() => {
    const sync = () => setThemeState(getStoredTheme());
    window.addEventListener("ecc-theme-change", sync);
    return () => window.removeEventListener("ecc-theme-change", sync);
  }, []);

  const changeTheme = (next) => {
    setThemeState(next);
    persistTheme(next);
  };

  return (
    <footer className="mt-20 border-t-[3px] border-[var(--line)] bg-[var(--bg)] overflow-hidden">
      <div className="container mx-auto px-5 md:px-8 pt-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          {/* Anchor links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm font-medium text-[var(--fg)]">
            <a href="#about" className="hover:text-[var(--accent)]">{t("nav.about")}</a>
            <a href="#projects" className="hover:text-[var(--accent)]">{t("nav.projects")}</a>
            <a href="#services" className="hover:text-[var(--accent)]">{t("nav.services")}</a>
            <a href="#experience" className="hover:text-[var(--accent)]">{t("nav.experience")}</a>
            <a href="#contact" className="hover:text-[var(--accent)]">{t("nav.contact")}</a>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/NyomanWahyu01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-[12px] border-[3px] border-[var(--border)] bg-[var(--card)] text-[var(--on-card)] shadow-[3px_3px_0px_var(--shadow)] transition-transform hover:-translate-y-0.5"
            >
              <i className="ri-github-fill text-xl"></i>
            </a>
            <a
              href="mailto:inyomanwahyu123@gmail.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-[12px] border-[3px] border-[var(--border)] bg-[var(--card)] text-[var(--on-card)] shadow-[3px_3px_0px_var(--shadow)] transition-transform hover:-translate-y-0.5"
            >
              <i className="ri-mail-fill text-xl"></i>
            </a>

            {/* Language */}
            <div className="flex rounded-full border-[2px] border-[var(--border)] p-0.5 bg-[var(--card)]">
              <button
                onClick={() => setLang("id")}
                className={`px-3 py-1 text-xs font-bold rounded-full ${lang === "id" ? "bg-[var(--card-alt)] text-[var(--on-card)]" : "text-[var(--muted)]"}`}
              >
                ID
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 text-xs font-bold rounded-full ${lang === "en" ? "bg-[var(--card-alt)] text-[var(--on-card)]" : "text-[var(--muted)]"}`}
              >
                EN
              </button>
            </div>

            {/* Theme */}
            <div className="flex rounded-full border-[2px] border-[var(--border)] p-0.5 bg-[var(--card)]">
              {themeOptions.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => changeTheme(opt.key)}
                  aria-label={`Theme ${opt.key}`}
                  aria-pressed={theme === opt.key}
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    theme === opt.key
                      ? "bg-[var(--card-alt)] text-[var(--on-card)]"
                      : "text-[var(--muted)]"
                  }`}
                >
                  <i className={`${opt.icon} text-sm`}></i>
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="font-sans text-sm text-[var(--muted)] mb-6">
          © {year} I Nyoman Wahyu. {t("footer.rights")}
        </p>
      </div>

      {/* Giant wordmark */}
      <div className="relative select-none pointer-events-none" aria-hidden="true">
        <p className="font-display uppercase leading-[0.75] text-center text-[clamp(6rem,22vw,20rem)] text-[var(--fg)] opacity-[0.08] translate-y-[12%]">
          NYOMAN
        </p>
      </div>
    </footer>
  );
}
