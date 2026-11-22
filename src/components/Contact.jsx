import React from "react";
import { useT } from "../i18n/LanguageProvider";

const PROFILE_IMAGE = "/assets/foto-services.webp";
const SLOGAN = "Data Entry";

/*
  Maintenance:
  - Change SLOGAN to update role focus, for example: "Data Analyst".
  - Edit translated profile copy in src/i18n/id.js and src/i18n/en.js.
  - Keep href, value, and external fields when changing contactLinks.
  - The portrait uses object-contain + object-right-top so the full body is
    visible. Tune size/position with object-* and softness with blur-*.
  - Glass colors come from the "Contact palette" tokens in src/index.css.
  - Float keyframes and the no-backdrop-filter fallback live in src/index.css.
*/

const chipClass =
  "rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-sans text-[0.65rem] font-bold uppercase tracking-[0.08em] text-white/90 backdrop-blur-md backdrop-saturate-150";

const contactLinkClass =
  "contact-link-fallback group flex min-h-24 items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-3 text-white backdrop-blur-lg backdrop-saturate-150 transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-black motion-reduce:transition-none";

export default function Contact() {
  const { t } = useT();
  const contactLinks = [
    {
      label: t("contact.whatsappLabel"),
      value: "+62 853-9910-1184",
      href: "https://wa.me/6285399101184",
      icon: "ri-whatsapp-line",
      external: true,
    },
    {
      label: t("contact.emailLabel"),
      value: "inyomanwahyu123@gmail.com",
      href: "mailto:inyomanwahyu123@gmail.com",
      icon: "ri-mail-line",
    },
    {
      label: t("projects.github"),
      value: "NyomanWahyu01",
      href: "https://github.com/NyomanWahyu01",
      icon: "ri-github-fill",
      external: true,
    },
    {
      label: "LinkedIn",
      value: "I Nyoman Wahyu Trisna Winda",
      href: "https://www.linkedin.com/in/i-nyoman-wahyu/",
      icon: "ri-linkedin-fill",
      external: true,
    },
  ];

  const profileStats = [
    {
      value: t("contact.statWebDev"),
      label: t("contact.statWebDevLabel"),
    },
    {
      value: t("contact.statDataEntry"),
      label: t("contact.statDataEntryLabel"),
    },
    {
      value: t("contact.statLocation"),
      label: t("contact.statLocationLabel"),
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate my-20 min-h-105 overflow-hidden rounded-lg bg-(--contact-bg) p-4 sm:min-h-115 sm:p-6 lg:min-h-125 lg:p-8"
    >
      <img
        src={PROFILE_IMAGE}
        alt=""
        width="1024"
        height="1536"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-0 h-full w-full object-contain object-top-right blur-xs saturate-110"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-(--contact-overlay-from) via-(--contact-overlay-via) to-(--contact-overlay-to)"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/4 size-64 rounded-full bg-cyan-300/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col gap-6 lg:gap-8">
        <div className="max-w-160">
          <h5
            id="contact-title"
            className="font-display text-[clamp(3.5rem,9vw,7rem)] leading-[0.82] uppercase text-white"
          >
            {t("nav.contact")}
          </h5>
          <p className="mt-5 max-w-md font-display text-[clamp(1.5rem,3vw,2.75rem)] leading-[0.92] uppercase text-white/95">
            {t("contact.title")}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className={chipClass}>{t("contact.chipResponse")}</span>
            <span className={chipClass}>{t("contact.chipAvailable")}</span>
          </div>
        </div>

        <article className="contact-float contact-glass-fallback relative w-full overflow-hidden rounded-3xl border-2 border-white/30 bg-white/12 p-4 text-white shadow-[0_24px_70px_rgba(8,10,14,0.4),0_0_0_1px_rgba(104,235,235,0.14)] backdrop-blur-lg backdrop-saturate-150 sm:p-6">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-br from-white/20 to-transparent"
            aria-hidden="true"
          />

          <div className="relative z-10 grid gap-6 lg:grid-cols-[minmax(14rem,0.9fr)_minmax(0,1.1fr)]">
            <div className="min-w-0 lg:border-r lg:border-white/15 lg:pr-6">
              <header className="mb-5 flex items-center justify-between gap-3">
                {/* Instagram */}
                <span
                  className="flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg text-white/90"
                  aria-hidden="true"
                >
                  <i className="ri-arrow-left-s-line" />
                </span>
                <a
                  href="https://www.instagram.com/inyoman_wahyu1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram ${t("contact.profileName")}`}
                  className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md text-white transition-colors hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <span className="truncate font-sans text-sm font-bold">
                    {t("contact.profileName")}
                  </span>
                  <i className="ri-verified-badge-fill shrink-0 text-blue-300" aria-hidden="true" />
                  <i className="ri-instagram-line shrink-0 text-base text-white/60" aria-hidden="true" />
                </a>

                <div className="flex items-center gap-1.5 text-lg text-white/80" aria-hidden="true">
                  <i className="ri-notification-3-line" />
                  <i className="ri-more-2-fill" />
                </div>
              </header>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="size-18 shrink-0 rounded-full bg-linear-to-br from-signal to-(--contact-avatar-end) p-0.5 shadow-[0_0_0_1px_rgba(255,255,255,0.28),0_10px_28px_rgba(8,10,14,0.34)] sm:size-22">
                  <img
                    src={PROFILE_IMAGE}
                    alt="Potret I Nyoman Wahyu Trisna Winda mengenakan jas hitam"
                    width="88"
                    height="88"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full rounded-full border border-white/70 object-cover object-top"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h1 className="font-sans text-sm font-bold leading-tight text-white sm:text-base">
                    {t("contact.profileFullName")}
                  </h1>
                  <p className="mt-1 font-sans text-xs text-white/75">
                    {t("contact.profileRole")}
                    <span className="mx-1.5 text-white/45" aria-hidden="true">|</span>
                    <span className="font-bold text-cyan-100">{SLOGAN}</span>
                  </p>

                  <div className="mt-3 grid grid-cols-3 gap-1.5">
                    {profileStats.map((stat) => (
                      <div key={stat.label} className="min-w-0 text-center">
                        <p className="wrap-break-words font-sans text-[0.65rem] font-bold leading-tight text-white sm:text-xs">
                          {stat.value}
                        </p>
                        <p className="mt-1 font-sans text-[0.55rem] uppercase tracking-[0.06em] text-white/60">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-5 max-w-sm font-sans text-xs leading-relaxed text-white/80 sm:text-sm">
                {t("contact.bio")}
              </p>
            </div>

            <nav aria-label={t("nav.contact")} className="min-w-0">
              <h3 className="sr-only">{t("nav.contact")}</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={contactLinkClass}
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/12 text-lg text-white">
                      <i className={link.icon} aria-hidden="true" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block font-sans text-[0.6rem] font-bold uppercase tracking-widest text-white/60">
                        {link.label}
                      </span>
                      <span className="mt-1 block wrap-break-word font-sans text-xs font-bold leading-snug text-white/95 sm:text-sm">
                        {link.value}
                      </span>
                    </span>

                    <i
                      className="ri-arrow-up-right-line shrink-0 text-base text-white/70 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </article>
      </div>
    </section>
  );
}
