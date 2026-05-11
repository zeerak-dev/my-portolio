"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    quote:
      "Syed understood our business goals from day one. The website he helped us build transformed our lead generation pipeline — we went from 10 inbound leads per month to over 60 within three months of launch.",
    name: "Sarah Mitchell",
    role: "CEO",
    company: "RetailTech Co.",
    initials: "SM",
  },
  {
    quote:
      "Our SEO rankings jumped significantly after working with Syed. He doesn't just promise results — he builds a roadmap and delivers on it. We're now ranking #1 for our 5 most competitive keywords.",
    name: "James Thornton",
    role: "Marketing Director",
    company: "GrowthSpace Agency",
    initials: "JT",
  },
  {
    quote:
      "Syed made our mobile app launch feel seamless. He's the bridge between technology and business that every startup needs. His ability to coordinate technical teams with business stakeholders is unmatched.",
    name: "Ahmad Khan",
    role: "Founder",
    company: "LaunchPad Ventures",
    initials: "AK",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(201,162,74,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Client Words"
          title="What They Say"
          subtitle="Results matter. But so does the relationship that creates them."
        />

        <FadeIn delay={0.2} direction="up">
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="relative bg-navy-mid border border-white/5 rounded-3xl p-10 md:p-14">
              {/* Gold quote icon */}
              <div className="absolute -top-5 left-10">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                  <Quote size={18} className="text-navy-dark" fill="currentColor" />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <p className="text-cream/80 text-lg md:text-xl leading-relaxed font-light italic mb-8">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center">
                      <span className="font-display font-bold text-gold text-sm">
                        {testimonials[current].initials}
                      </span>
                    </div>
                    <div>
                      <p className="text-cream font-semibold">{testimonials[current].name}</p>
                      <p className="text-muted text-sm">
                        {testimonials[current].role} · {testimonials[current].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center gap-4 mt-10">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:border-gold hover:text-gold transition-all duration-200"
                >
                  <ChevronLeft size={18} />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === current ? "w-6 bg-gold" : "w-2 bg-white/20"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:border-gold hover:text-gold transition-all duration-200"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
