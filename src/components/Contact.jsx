import React from "react";
import { useT } from "../i18n/LanguageProvider";

export default function Contact() {
  const { t } = useT();
  const contactLinks = [
    {
      label: t("contact.whatsappLabel"),
      value: "+62 853-9910-1184",
      href: "https://wa.me/6285399101184",
      icon: "ri-whatsapp-line",
      accent: "bg-green",
      external: true,
    },
    {
      label: t("contact.emailLabel"),
      value: "inyomanwahyu123@gmail.com",
      href: "mailto:inyomanwahyu123@gmail.com",
      icon: "ri-mail-line",
      accent: "bg-yellow",
    },
    {
      label: t("projects.github"),
      value: "NyomanWahyu01",
      href: "https://github.com/NyomanWahyu01",
      icon: "ri-github-fill",
      accent: "bg-card-alt",
      external: true,
    },
    {
      label: "LinkedIn",
      value: "I Nyoman Wahyu Trisna Winda",
      href: "https://www.linkedin.com/in/i-nyoman-wahyu/",
      icon: "ri-linkedin-fill",
      accent: "bg-purple",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="my-20 overflow-hidden rounded-lg border-3 border-(--border) bg-cta p-6 shadow-[10px_10px_0px_var(--shadow)] md:p-12"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end">
        <div>
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full border-2 border-(--border) bg-card px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-on-card">
              {t("contact.chipResponse")}
            </span>
            <span className="rounded-full border-2 border-(--border) bg-green px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-on-card">
              {t("contact.chipAvailable")}
            </span>
          </div>

          <h2
            id="contact-title"
            className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.85] uppercase text-on-card"
          >
            {t("nav.contact")}
          </h2>
          <h3 className="mt-6 max-w-lg font-display text-[clamp(1.75rem,4vw,3rem)] leading-[0.95] uppercase text-on-card">
            {t("contact.title")}
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group flex min-h-36 flex-col justify-between rounded-md border-3 border-(--border) bg-card p-4 text-on-card shadow-[5px_5px_0px_var(--shadow)] transition-[transform,box-shadow] duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[9px_9px_0px_var(--shadow)] motion-reduce:transition-none"
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-10 border-2 border-(--border) text-on-card ${link.accent}`}
                >
                  <i className={`${link.icon} text-xl`} aria-hidden="true" />
                </span>
                <i
                  className="ri-arrow-up-right-line text-xl transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-5 min-w-0">
                <p className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.08em] text-muted-card">
                  {link.label}
                </p>
                <p className="mt-1 break-words font-sans text-sm font-bold leading-snug">
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
