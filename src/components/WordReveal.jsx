import { motion, useReducedMotion } from "motion/react";

export default function WordReveal({ children, className = "" }) {
  const reduceMotion = useReducedMotion();
  const words = String(children).split(/\s+/).filter(Boolean);

  return (
    <span className={className} aria-label={String(children)}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          aria-hidden="true"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.4, delay: index * 0.04, ease: "easeOut" }
          }
          className="mr-[0.28em] inline-block last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
