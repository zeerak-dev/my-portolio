import { ArrowRight, Mail } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";

export default function CallToAction() {
  return (
    <section className="py-24 bg-navy-dark relative overflow-hidden">
      {/* Gold radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(201,162,74,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Border accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeIn delay={0.05}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-6">
            <span className="w-8 h-px bg-gold inline-block" />
            Ready to Grow?
            <span className="w-8 h-px bg-gold inline-block" />
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-cream leading-tight mb-6">
            Let&apos;s Build Something
            <br />
            <span className="text-gradient-gold">Worth Talking About.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Whether you need a website that sells, an SEO strategy that ranks, or a mobile app that ships — I&apos;m the person who connects the dots.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact" size="lg">
              Start a Conversation <ArrowRight size={18} />
            </Button>
            <Button href="mailto:syedalizeraknaqvi@gmail.com" variant="ghost" size="lg" external>
              <Mail size={18} /> Email Directly
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
