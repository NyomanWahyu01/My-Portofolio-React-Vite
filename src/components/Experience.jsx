import React, { useState } from "react";
import { MotionConfig, motion } from "motion/react";
import { useT } from "../i18n/LanguageProvider";

const NAV_BUTTON =
  "flex h-12 w-12 items-center justify-center rounded-md border-3 border-(--border) bg-card text-on-card shadow-[4px_4px_0px_var(--shadow)] transition-[transform,box-shadow] duration-150 motion-reduce:transition-none hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_var(--shadow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-x-1 active:translate-y-1 active:shadow-none";

const SUBHEADING =
  "font-display text-[clamp(1.75rem,4vw,2.5rem)] leading-none uppercase text-fg mb-8";

const pad = (value) => String(value).padStart(2, "0");

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.25, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Experience() {
  const { t } = useT();
  const timeline = t("experience.timeline");
  const certs = t("experience.certs");
  const education = t("experience.education");
  const [current, setCurrent] = useState(0);

  const total = Array.isArray(timeline) ? timeline.length : 0;
  const active = total > 0 ? current % total : 0;
  const item = total > 0 ? timeline[active] : null;

  const goTo = (index) => {
    if (total > 0) {
      setCurrent((index + total) % total);
    }
  };

  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  return (
    <MotionConfig reducedMotion="user">
      <section id="experience" className="py-20 md:py-32">
        <Reveal>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none uppercase text-fg mb-4">
            {t("experience.title")}
          </h2>
          <p className="font-sans text-muted mb-16 max-w-prose">
            {t("experience.subtitle")}
          </p>
        </Reveal>

        {/* Pengalaman kerja */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label={t("experience.timelineTitle")}
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.08em] text-muted">
              {t("experience.timelineTitle")}
            </h3>
            <p
              aria-hidden="true"
              className="font-sans text-xs font-bold uppercase tracking-[0.08em] text-muted"
            >
              <span className="text-fg">{pad(active + 1)}</span> / {pad(total)}
            </p>
          </div>

          <div className="grid overflow-x-clip">
            {Array.isArray(timeline) &&
              timeline.map((slide, index) => {
                const isActive = index === active;
                const offset = index < active ? -40 : 40;

                return (
                  <motion.article
                    key={index}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} / ${total}`}
                    aria-hidden={!isActive}
                    inert={!isActive}
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : offset }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`col-start-1 row-start-1 w-full ${
                      isActive ? "" : "pointer-events-none"
                    }`}
                  >
                    <div className="flex h-full flex-col rounded-lg border-3 border-(--border) bg-card p-6 shadow-[6px_6px_0px_var(--shadow)] md:p-8">
                      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                        <h4 className="font-sans text-[1.25rem] leading-snug font-bold text-on-card">
                          {slide.title}
                        </h4>
                        <span className="theme-badge shrink-0 rounded-full border-2 px-4 py-1 text-[0.65rem] uppercase tracking-[0.08em] shadow-[2px_2px_0px_var(--shadow)]">
                          {slide.period}
                        </span>
                      </div>

                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <p className="theme-badge inline-flex w-fit max-w-full items-center gap-2 rounded-md border-2 px-3 py-1 font-sans text-sm">
                          <i className="ri-building-line" aria-hidden="true" />
                          {slide.org}
                        </p>
                        {slide.stack && (
                          <p className="theme-badge inline-flex w-fit max-w-full items-center gap-2 rounded-md border-2 px-3 py-1 font-sans text-xs uppercase tracking-[0.05em]">
                            <i className="ri-code-s-slash-line" aria-hidden="true" />
                            {slide.stack}
                          </p>
                        )}
                      </div>

                      <ul className="list-disc space-y-2 pl-5 font-sans text-sm leading-relaxed text-muted-card">
                        {slide.desc.map((line, lineIndex) => (
                          <li key={lineIndex}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                );
              })}
          </div>

          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                className={NAV_BUTTON}
                aria-label={t("experience.prev")}
              >
                <i className="ri-arrow-left-line text-xl" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={next}
                className={NAV_BUTTON}
                aria-label={t("experience.next")}
              >
                <i className="ri-arrow-right-line text-xl" aria-hidden="true" />
              </button>
            </div>

            <p className="sr-only" aria-live="polite" aria-atomic="true">
              {item ? `${active + 1} / ${total}: ${item.title}` : ""}
            </p>
          </div>
        </div>

        {/* Pendidikan */}
        <Reveal className="mt-16 border-t-3 border-line pt-16">
          <h3 className={SUBHEADING}>{t("experience.eduTitle")}</h3>

          <div className="rounded-lg border-3 border-(--border) bg-card p-6 shadow-[6px_6px_0px_var(--shadow)] md:p-8">
            <p className="flex items-center gap-2 font-sans text-sm font-bold text-muted-card">
              <i className="ri-graduation-cap-line" aria-hidden="true" />
              {education.org}
            </p>

            <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
              <h4 className="font-sans text-[1.25rem] leading-snug font-bold text-on-card">
                {education.title}
                <span className="whitespace-nowrap"> | {education.gpa}</span>
              </h4>
              <span className="theme-badge shrink-0 rounded-full border-2 px-4 py-1 text-[0.65rem] uppercase tracking-[0.08em] shadow-[2px_2px_0px_var(--shadow)]">
                {education.period}
              </span>
            </div>

            <p className="mt-6 font-sans text-sm leading-relaxed text-fg">
              <span className="font-bold text-on-card">{education.thesisLabel}:</span>{" "}
              <a
                href={education.thesisLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${education.thesisLabel}: ${education.thesis}`}
                className="group inline-block font-medium text-accent no-underline transition-[color,transform] duration-200 hover:-translate-y-0.5 hover:text-signal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-signal dark:hover:text-signal dark:focus:text-signal dark:active:text-signal motion-reduce:transition-none"
              >
                {education.thesis}
              </a>
            </p>

            <ul className="mt-5 list-disc space-y-2 pl-5 font-sans text-sm leading-relaxed text-muted-card">
              {education.desc.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Sertifikasi */}
        <Reveal className="mt-16 border-t-3 border-line pt-16">
          <h3 className={SUBHEADING}>{t("experience.certTitle")}</h3>

          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {Array.isArray(certs) &&
              certs.map((cert) => (
                <motion.li
                  key={cert.label}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.15 }}
                  className="rounded-md border-2 border-(--border) bg-card shadow-[3px_3px_0px_var(--shadow)]"
                >
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-4 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border-2 border-(--border) bg-card-alt text-on-card transition-colors duration-150 group-hover:bg-accent motion-reduce:transition-none">
                      <i className="ri-award-line text-lg" aria-hidden="true" />
                    </span>
                    <span className="font-sans text-sm leading-snug font-bold text-on-card transition-colors duration-150 group-hover:text-accent motion-reduce:transition-none">
                      {cert.label}
                    </span>
                    <i
                      className="ri-arrow-up-right-line ml-auto shrink-0 text-base text-muted-card transition-colors duration-150 group-hover:text-accent motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </a>
                </motion.li>
              ))}
          </ul>
        </Reveal>
      </section>
    </MotionConfig>
  );
}
