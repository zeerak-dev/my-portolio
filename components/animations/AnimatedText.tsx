"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function AnimatedText({
  text,
  className,
  delay = 0,
  once = true,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <span className={className} style={{ display: "inline-flex", flexWrap: "wrap", gap: "0.25em" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once, margin: "-40px" }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.07,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{ display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
