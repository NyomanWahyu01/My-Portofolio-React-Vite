import React from "react";
import { useT } from "../i18n/LanguageProvider";
import FormEmail from "./FormEmail";

export default function Contact() {
  const { t } = useT();

  return (
    <section
      id="contact"
      className="my-20 rounded-[24px] border-[3px] border-[var(--border)] bg-[var(--cta)] p-6 md:p-12 shadow-[10px_10px_0px_var(--shadow)]"
    >
      <div className="contents grid-cols-3 lg:grid-cols-2 gap-10 items-start"></div>
        {/* Left: headline */}
        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="rounded-full border-2px border-var(--border) bg-[var(--card)] px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-[var(--on-card)]">
              {t("contact.chipResponse")}
            </span>
            <span className="rounded-full border-[2px] border-[var(--border)] bg-[var(--green)] px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-[var(--on-card)]">
              {t("contact.chipAvailable")}
            </span>
          </div>

          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none uppercase text-[var(--on-card)] mb-8">
            {t("contact.title")}
          </h2>

          {/* Contact rows */}
          <div className="space-y-3 mb-8">
            <a
              href="https://wa.me/6285399101184"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-[16px] border-[3px] border-[var(--border)] bg-[var(--card)] px-4 py-3 shadow-[4px_4px_0px_var(--shadow)] transition-transform hover:-translate-y-0.5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-[10px] border-[2px] border-[var(--border)] bg-[var(--green)] text-[var(--on-card)]">
                <i className="ri-whatsapp-line text-lg"></i>
              </span>
              <span className="flex flex-col">
                <span className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.08em] text-[var(--muted)]">
                  WhatsApp
                </span>
                <span className="font-sans text-sm font-bold text-[var(--on-card)]">
                  +62 0853-9910-9910
                </span>
              </span>
            </a>

            <a
              href="mailto:inyomanwahyu123@gmail.com"
              className="flex items-center gap-3 rounded-[16px] border-[3px] border-[var(--border)] bg-[var(--card)] px-4 py-3 shadow-[4px_4px_0px_var(--shadow)] transition-transform hover:-translate-y-0.5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-10px border-2px bg-yellow text-on-card">
                <i className="ri-mail-line text-lg"></i>
              </span>
              <span className="flex flex-col">
                <span className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.08em] text-[var(--muted)]">
                  {t("contact.emailLabel")}
                </span>
                <span className="font-sans text-sm font-bold text-on-card">
                  inyomanwahyu123@gmail.com
                </span>
              </span>
            </a>
          </div>

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
              href="https://wa.me/62885399101184"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-[12px] border-[3px] border-[var(--border)] bg-[var(--card)] text-[var(--on-card)] shadow-[3px_3px_0px_var(--shadow)] transition-transform hover:-translate-y-0.5"
            >
              <i className="ri-whatsapp-fill text-xl"></i>
            </a>
          </div>
        </div>

        {/* Right: form card */}
        <div className="rounded-24px border-3px border-[var(--border)] bg-[var(--card)] p-6 md:p-8 shadow-[6px_6px_0px_var(--shadow)]">
          <FormEmail />
        </div>
      </div>
    >
  );
};
