import { Globe, Search, Smartphone } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    icon: Globe,
    title: "Website Sales & Development",
    description:
      "I identify exactly what digital presence a client needs, pitch the right solution, and close deals that deliver. From corporate sites to e-commerce platforms, I translate business goals into web results.",
    bullets: ["Needs assessment & scoping", "Vendor & agency coordination", "Launch-to-revenue strategy"],
  },
  {
    icon: Search,
    title: "SEO Strategy & Sales",
    description:
      "Organic traffic is the most valuable pipeline a business can own. I sell, plan, and manage SEO campaigns that rank for the keywords that actually convert — not just drive vanity traffic.",
    bullets: ["Keyword & market gap analysis", "Content & link-building roadmaps", "Measurable ranking milestones"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "I bridge the gap between what clients envision and what developers build. From pitch to app store launch, I manage the business side of mobile projects so nothing falls through the cracks.",
    bullets: ["Concept to product roadmap", "Cross-functional team alignment", "App store launch coordination"],
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,162,74,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="What I Do"
          title="Three Ways I Drive Growth"
          subtitle="I specialize in the intersection of technology and revenue — selling, coordinating, and delivering digital products that move the needle."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={0.1 + i * 0.1} direction="up">
                <div className="group relative bg-navy-mid border border-white/5 rounded-2xl p-8 h-full transition-all duration-500 hover:border-gold/30 hover:-translate-y-1">
                  {/* Gold corner accent on hover */}
                  <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-gold rounded-tl-2xl transition-all duration-500 group-hover:w-10 group-hover:h-10" />

                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                    <Icon size={22} className="text-gold" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-cream mb-3">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">{service.description}</p>

                  <ul className="space-y-2">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-sm text-cream/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
