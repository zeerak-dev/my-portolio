"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "gold" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const variants = {
  gold: "bg-gold text-navy-dark font-semibold hover:bg-gold-light shadow-lg shadow-gold/20",
  ghost: "border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold",
  outline: "border border-cream/30 text-cream hover:bg-cream/10 hover:border-cream/60",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-base",
  lg: "px-9 py-4 text-lg",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "gold",
  size = "md",
  className,
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center gap-2 rounded-full transition-all duration-300 cursor-pointer",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03 },
    whileTap: disabled ? {} : { scale: 0.97 },
    transition: { duration: 0.2 },
  };

  if (href) {
    if (external) {
      return (
        <motion.a href={href} target="_blank" rel="noopener noreferrer" className={base} {...motionProps}>
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div {...motionProps}>
        <Link href={href} className={base}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={base}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
