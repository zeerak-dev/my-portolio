"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Animate counter 0 → 100 over 2.8s
    const duration = 2800;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setCount(progress);
      if (progress < 100) {
        requestAnimationFrame(tick);
      }
    };

    const rafId = requestAnimationFrame(tick);

    // Dismiss after 3.3s (gives a breath at 100%)
    const timer = setTimeout(() => setVisible(false), 3300);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden bg-navy-dark"
        >
          {/* ── Video background ── */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.22 }}
          >
            {/* Drop your loading video at /public/loading-video.mp4 */}
            <source src="/loading-video.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay to keep text readable */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(11,27,58,0.6) 0%, rgba(6,13,30,0.92) 100%)",
            }}
          />

          {/* Gold grid */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,162,74,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,74,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* ── Center content ── */}
          <div className="relative z-10 flex flex-col items-center gap-6">

            {/* SAZ logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span
                className="font-display font-bold text-gradient-gold select-none"
                style={{ fontSize: "clamp(80px, 14vw, 130px)", lineHeight: 1 }}
              >
                SAZ
              </span>
            </motion.div>

            {/* Name */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-muted text-xs tracking-[0.4em] uppercase"
            >
              Syed A. Zerak
            </motion.p>

            {/* Divider line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="w-16 h-px bg-gold/40"
            />

            {/* Progress bar + counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-center gap-3"
            >
              {/* Track */}
              <div className="w-52 h-px bg-white/10 relative overflow-hidden rounded-full">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gold rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.6, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </div>

              {/* Numeric counter */}
              <span className="font-display text-gold/60 text-sm font-bold tabular-nums">
                {String(count).padStart(3, "0")}
              </span>
            </motion.div>
          </div>

          {/* Bottom tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-0 right-0 text-center text-muted text-xs tracking-[0.25em] uppercase"
          >
            Business Development &amp; Sales · Tech
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
