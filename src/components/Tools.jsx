import React from "react";
import { motion } from "motion/react";
import { useT } from "../i18n/LanguageProvider";
import { listToolsCoding, listToolsDesign } from "../data";

function ToolGroup({ title, tools }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col gap-8"
    >
      <h3 className="font-display text-2xl uppercase text-fg border-b-2 border-line pb-2">
        {title}
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.id}
            whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 2 : -2 }}
            className="flex flex-col items-center gap-3 group"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-card border-2 border-(--border) shadow-[4px_4px_0px_var(--shadow)] group-hover:shadow-[6px_6px_0px_var(--shadow)] transition-all">
              <img
                src={tool.gambar}
                alt={tool.nama}
                className="h-10 w-10 object-contain"
                loading="lazy"
                width="40"
                height="40"
              />
            </div>
            <span className="rounded-full border-2 border-signal bg-signal px-3 py-1 font-sans text-[0.7rem] font-bold uppercase tracking-[0.08em] text-white text-center">
              {tool.nama}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Tools() {
  const { t } = useT();

  return (
    <section id="tools" className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none uppercase text-fg mb-4">
          {t("tools.title")}
        </h2>
        <p className="font-sans text-muted max-w-prose">
          {t("tools.subtitle")}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <ToolGroup title={t("tools.coding")} tools={listToolsCoding} />
        <ToolGroup title={t("tools.design")} tools={listToolsDesign} />
      </div>
    </section>
  );
}
