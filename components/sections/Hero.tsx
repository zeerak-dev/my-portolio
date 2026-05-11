"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import MagneticWrapper from "@/components/animations/MagneticWrapper";
import CharReveal from "@/components/animations/CharReveal";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: hero content scrolls up slower than page
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-dark"
    >
      {/* ─── Video Background ─── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: videoScale, opacity: videoOpacity }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.45 }}
        >
          {/* Place your video at /public/hero-video.mp4 */}
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Gradient fallback (shows when no video, or on top of video) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 80% at 60% 50%, rgba(22,36,71,0.8) 0%, rgba(6,13,30,0.95) 60%)",
          }}
        />
      </motion.div>

      {/* ─── Subtle grid ─── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,162,74,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,74,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ─── Bottom fade to next section ─── */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #060D1E)" }}
      />

      {/* ─── Main Content ─── */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left: Text ── */}
          <div className="space-y-8">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">
                Business Development & Sales
              </span>
            </motion.div>

            {/* ── Char-by-char headline ── */}
            <h1
              className="font-display font-bold text-cream leading-[1.05]"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
            >
              <span className="block overflow-hidden">
                <CharReveal text="I Turn" delay={0.25} trigger="immediate" />
              </span>
              <span className="block overflow-hidden">
                <CharReveal
                  text="Technology"
                  className="text-gradient-gold"
                  delay={0.4}
                  trigger="immediate"
                />
              </span>
              <span className="block overflow-hidden">
                <CharReveal text="Into Revenue." delay={0.58} trigger="immediate" />
              </span>
            </h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-muted text-lg leading-relaxed max-w-lg"
            >
              Specialized in{" "}
              <span className="text-cream/90">Websites, SEO</span>, and{" "}
              <span className="text-cream/90">Mobile Development</span> — connecting the right tech to the right business at the right time.
            </motion.p>

            {/* CTAs with magnetic effect */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.05 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticWrapper strength={0.3}>
                <Button href="/work" size="lg">
                  See My Work <ArrowRight size={18} />
                </Button>
              </MagneticWrapper>
              <MagneticWrapper strength={0.3}>
                <Button href="/contact" variant="ghost" size="lg">
                  Let&apos;s Talk
                </Button>
              </MagneticWrapper>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.25 }}
              className="flex flex-wrap gap-10 pt-8 border-t border-white/10"
            >
              {[
                { value: "50+", label: "Deals Closed" },
                { value: "3×", label: "Avg. Client Growth" },
                { value: "12+", label: "Industries Served" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + i * 0.1 }}
                  className="space-y-1"
                >
                  <div className="font-display text-3xl font-bold text-gold">{stat.value}</div>
                  <div className="text-muted text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Hero Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm lg:w-[420px] xl:w-[480px]">
              {/* Photo frame — square on mobile, tall portrait on desktop */}
              <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-gold/20 bg-navy-mid">

                {/* Hero photo */}
                <Image
                  src="/Herp-photo.png"
                  alt="Syed A. Zerak"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1280px) 420px, 480px"
                />

                {/* Bottom gradient — blends photo into cards below */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 45%, rgba(6,13,30,0.75) 100%)",
                  }}
                />

                {/* Subtle gold left edge glow */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(201,162,74,0.08) 0%, transparent 40%)",
                  }}
                />
              </div>

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-6 bg-navy border border-gold/25 rounded-2xl p-5 shadow-2xl backdrop-blur-sm"
              >
                <p className="font-display text-2xl font-bold text-gold leading-none">50+</p>
                <p className="text-muted text-xs mt-1">Deals Closed</p>
              </motion.div>

              {/* Floating experience card */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-5 -right-5 bg-navy border border-gold/25 rounded-2xl p-4 shadow-2xl backdrop-blur-sm"
              >
                <p className="font-display text-xl font-bold text-gold leading-none">5+</p>
                <p className="text-muted text-xs mt-1">Years in Tech</p>
              </motion.div>

              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full border border-gold/10 pointer-events-none"
                style={{ borderStyle: "dashed" }}
              />

              {/* Gold corner accent */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold/50 rounded-tl-xl pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/50 rounded-br-xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ─── Scroll indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-muted"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
