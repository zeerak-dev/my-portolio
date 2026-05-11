import FadeIn from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4 max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {label && (
        <FadeIn delay={0.05}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gold">
            <span className="w-8 h-px bg-gold inline-block" />
            {label}
            <span className="w-8 h-px bg-gold inline-block" />
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2
          className={cn(
            "font-display text-4xl md:text-5xl font-bold leading-tight",
            light ? "text-navy-dark" : "text-cream"
          )}
        >
          {title}
        </h2>
      </FadeIn>
      {subtitle && (
        <FadeIn delay={0.15}>
          <p className={cn("text-lg leading-relaxed", light ? "text-navy-mid" : "text-muted")}>
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
