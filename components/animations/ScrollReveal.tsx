"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  stagger = false,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: stagger ? 0.1 : 0,
      }}
    >
      {children}
    </motion.div>
  );
}
