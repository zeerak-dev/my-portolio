import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllContent } from "@/lib/mdx";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies and projects by Syed A. Zerak — Websites, SEO, and Mobile Development.",
};

const serviceColors: Record<string, string> = {
  web: "gold",
  seo: "navy",
  mobile: "muted",
};

export default async function WorkPage() {
  const projects = await getAllContent("work");

  return (
    <div className="bg-navy-dark">
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 50% 60% at 30% 40%, rgba(201,162,74,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Portfolio"
            title="Work That Moved the Needle"
            subtitle="Not just projects — results. Every case study below is a real story about a business challenge solved through technology and strategy."
          />
        </div>
      </section>

      {/* Projects grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(projects as any[]).map((project, i) => (
            <FadeIn key={project.slug} delay={0.05 + i * 0.07} direction="up">
              <Link href={`/work/${project.slug}`} className="group block h-full">
                <div className="bg-navy-mid border border-white/5 rounded-2xl overflow-hidden h-full transition-all duration-500 hover:border-gold/30 hover:-translate-y-1">
                  {/* Cover */}
                  <div
                    className="h-48 flex items-end p-6 relative overflow-hidden"
                    style={{
                      background: project.coverGradient || "linear-gradient(135deg, #162447 0%, #0B1B3A 100%)",
                    }}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: "linear-gradient(135deg, rgba(201,162,74,0.1) 0%, transparent 60%)" }}
                    />
                    <span className="font-display text-6xl font-bold text-white/10 absolute top-4 right-6 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Badge variant={(serviceColors[project.service] as any) || "gold"}>
                      {project.service === "web" ? "Website" : project.service === "seo" ? "SEO" : "Mobile"}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <p className="text-muted text-xs uppercase tracking-widest">{project.client}</p>
                    <h2 className="font-display text-xl font-bold text-cream group-hover:text-gold-light transition-colors duration-300">
                      {project.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed line-clamp-2">{project.description}</p>
                    <div className="pt-3 flex items-center justify-between">
                      <span className="text-gold font-semibold text-sm">{project.result}</span>
                      <ArrowRight size={16} className="text-muted group-hover:text-gold transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
