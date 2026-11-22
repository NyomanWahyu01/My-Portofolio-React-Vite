import React from "react";
import { MotionConfig, motion } from "motion/react";
import { useT } from "../i18n/LanguageProvider";
import { DataImage } from "../data";

const roleColors = ["var(--yellow)", "var(--pink)", "var(--purple)", "var(--green)", "var(--lime)"];

export default function About() {
  const { t } = useT();
  const roles = t("about.roles");

  return (
    <MotionConfig reducedMotion="user">
      <section id="about" className="py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-12 items-start">
          {/* Left: Story + Stats */}
          <div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none uppercase text-fg mb-4">
              {t("about.title")}
            </h2>
            <p className="font-sans text-muted mb-8 lg:mb-12 max-w-prose">
              {t("about.subtitle")}
            </p>

            {/* Photo card — gaya folder yang sama dengan kartu peran */}
            <div className="-rotate-2 transition-transform duration-150 hover:-translate-y-0.5 motion-reduce:transition-none">
              <motion.figure
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.25 }}
                className="relative mb-8 lg:mb-12 w-130 max-w-prose rounded-lg border-3 border-(--border) bg-card p-3 shadow-[6px_6px_0px_var(--shadow)]"
              >
                <span
                  className="absolute -top-3 left-6 h-3 w-20 rounded-t-[8px] border-3 border-b-0 bg-yellow"
                  aria-hidden="true"
                />
                <div className="aspect-4/3 overflow-hidden rounded-md border-2 border-(--border) bg-card-alt">
                  <img
                    src={DataImage.fotoAbout}
                    alt="I Nyoman Wahyu"
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.figure>
            </div>

            <div className="space-y-4 max-w-prose font-sans text-fg leading-[1.65] mb-8 lg:mb-12">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </div>

            {/* Stat stickers */}
            <div className="flex flex-wrap gap-4 lg:gap-6">
              <div className="rounded-md border-3 border-(--border) bg-yellow px-6 py-4 -rotate-2 shadow-[6px_6px_0px_var(--shadow)]">
                <p className="font-display text-5xl leading-none text-on-card">10+</p>
                <p className="font-sans text-sm font-bold uppercase tracking-wider text-on-card">
                  {t("about.statProjects")}
                </p>
              </div>
              <div className="rounded-md border-3 border-(--border) bg-pink px-6 py-4 rotate-2 shadow-[6px_6px_0px_var(--shadow)]">
                <p className="font-display text-5xl leading-none text-on-card">3+</p>
                <p className="font-sans text-sm font-bold uppercase tracking-wider text-on-card">
                  {t("about.statYears")}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Role folder cards */}
          <div>
            {/* <h3 className="font-sans text-xs font-bold uppercase tracking-[0.08em] text-muted mb-8 lg:mb-12">
              {t("about.rolesTitle")}
            </h3> */}
            <div className="space-y-8 lg:space-y-17">
              {Array.isArray(roles) &&
                roles.map((role, i) => (
                  <motion.div
                    key={role}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.25, delay: i * 0.06 }}
                  >
                    <div
                      className={`relative rounded-lg border-3 border-(--border) bg-card px-6 py-5 shadow-[6px_6px_0px_var(--shadow)] transition-transform hover:-translate-y-0.5 ${
                        i % 2 === 0 ? "-rotate-1" : "rotate-1"
                      }`}
                    >
                      {/* Folder tab */}
                      <span
                        className="absolute -top-3 left-6 h-3 w-16 rounded-t-[8px] border-3 border-b-0 "
                        style={{ backgroundColor: roleColors[i % roleColors.length] }}
                        aria-hidden="true"
                      />
                      <div className="flex items-center gap-7">
                        <span
                          className="flex h-12 w-12 items-center justify-center rounded-12 border-3 border-(--border) text-on-card"
                          style={{ backgroundColor: roleColors[i % roleColors.length] }}
                        >
                          <i className="ri-folder-line text-xl"></i>
                        </span>
                        <p className="font-sans text-[1.25rem] font-bold text-on-card">
                          {role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
