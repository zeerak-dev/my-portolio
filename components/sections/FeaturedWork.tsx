import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const projects = [
  {
    number: "01",
    slug: "ecommerce-rebrand",
    client: "RetailTech Co.",
    title: "E-Commerce Rebrand That Tripled Revenue",
    result: "+312% Revenue in 6 months",
    service: "Website Development",
    tags: ["Web", "E-Commerce", "Strategy"],
    gradient: "from-navy-mid to-navy",
  },
  {
    number: "02",
    slug: "local-seo-domination",
    client: "GrowthSpace Agency",
    title: "From Page 3 to #1 in 90 Days",
    result: "12 Keywords — Page 1",
    service: "SEO Strategy",
    tags: ["SEO", "Organic Growth", "Content"],
    gradient: "from-navy to-navy-dark",
  },
  {
    number: "03",
    slug: "mobile-app-launch",
    client: "LaunchPad Ventures",
    title: "B2B Mobile App — 50K Downloads",
    result: "50,000 Downloads in Q1",
    service: "Mobile Development",
    tags: ["Mobile", "B2B", "App Store"],
    gradient: "from-navy-dark to-navy-mid",
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-24 bg-navy-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <SectionHeader
            label="Selected Work"
            title="Results That Speak"
            subtitle="Every project starts with a problem and ends with a number."
            align="left"
          />
          <FadeIn delay={0.2} direction="left">
            <Button href="/work" variant="ghost" size="sm">
              All Projects <ArrowRight size={16} />
            </Button>
          </FadeIn>
        </div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={0.05 + i * 0.08} direction="up">
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="relative border border-white/5 rounded-2xl p-8 md:p-10 bg-navy-mid/40 transition-all duration-500 hover:border-gold/30 hover:bg-navy-mid/70 overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(201,162,74,0.05) 0%, transparent 60%)" }}
                  />

                  <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex items-start md:items-center gap-6">
                      <span className="font-display text-5xl font-bold text-gold/20 group-hover:text-gold/40 transition-colors duration-300 leading-none">
                        {project.number}
                      </span>
                      <div>
                        <p className="text-muted text-xs uppercase tracking-widest mb-1">{project.client}</p>
                        <h3 className="font-display text-xl md:text-2xl font-bold text-cream group-hover:text-gold-light transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="muted">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 md:flex-shrink-0">
                      <div className="text-right">
                        <p className="text-gold font-display font-bold text-lg">{project.result}</p>
                        <p className="text-muted text-xs mt-1">{project.service}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-navy-dark group-hover:border-gold">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
