"use client";

import { motion } from "framer-motion";

interface CharRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  trigger?: "inView" | "immediate";
}

export default function CharReveal({
  text,
  className,
  delay = 0,
  duration = 0.06,
  once = true,
  trigger = "inView",
}: CharRevealProps) {
  const chars = text.split("");

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: duration, delayChildren: delay },
    },
  };

  const charVariant = {
    hidden: { opacity: 0, y: "80%", rotateX: -40 },
    visible: {
      opacity: 1,
      y: "0%",
      rotateX: 0,
      transition: {
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        duration: 0.5,
      },
    },
  };

  const motionProps =
    trigger === "immediate"
      ? { initial: "hidden", animate: "visible" }
      : { initial: "hidden", whileInView: "visible", viewport: { once, margin: "-60px" } };

  return (
    <motion.span
      className={className}
      variants={container}
      style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
      {...motionProps}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={charVariant}
          style={{
            display: "inline-block",
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
