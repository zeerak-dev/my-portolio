import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "navy" | "muted";
  className?: string;
}

export default function Badge({ children, variant = "gold", className }: BadgeProps) {
  const variants = {
    gold: "bg-gold/15 text-gold border border-gold/30",
    navy: "bg-navy-mid text-cream border border-navy-light",
    muted: "bg-white/5 text-muted border border-white/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
