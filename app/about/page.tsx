import type { Metadata } from "next";
import { CheckCircle2, TrendingUp, Users, Award } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "About",
  description:
    "Business Development & Sales specialist in Tech. Learn about Syed A. Zerak's background, expertise, and approach to growing businesses through technology.",
};

const skills = [
  "Business Development", "Tech Sales", "SEO Strategy", "Web Project Management",
  "Mobile App Sales", "Client Relationship Management", "Revenue Growth", "Market Analysis",
  "Cross-Functional Leadership", "Proposal Writing", "Deal Closing", "Digital Strategy",
];

const values = [
  {
    icon: TrendingUp,
    title: "Results First",
    description: "Every strategy I propose is measured against one standard: does it drive revenue? Pretty decks don't close deals — results do.",
  },
  {
    icon: Users,
    title: "People-Led Growth",
    description: "Technology alone doesn't grow businesses. Understanding the human on the other side — their fears, goals, and timelines — does.",
  },
  {
    icon: CheckCircle2,
    title: "Clarity Over Complexity",
    description: "Tech can be intimidating. My job is to make it simple — from the first pitch to the final launch, I remove confusion and create confidence.",
  },
  {
    icon: Award,
    title: "Integrity in Every Deal",
    description: "I only recommend solutions I believe in. Long-term relationships beat short-term commissions every single time.",
  },
];

const experience = [
  {
    year: "2023 – Present",
    role: "Senior Business Development Manager",
    company: "Tech Growth Partners",
    description: "Leading sales for web, SEO, and mobile services across MENA and South Asia markets.",
  },
  {
    year: "2021 – 2023",
    role: "Digital Sales Consultant",
    company: "WebForce Agency",
    description: "Managed end-to-end client acquisition and project coordination for 30+ web and SEO projects.",
  },
  {
    year: "2019 – 2021",
    role: "Business Development Executive",
    company: "AppSprint Studio",
    description: "Drove mobile app sales pipeline from zero to $500K ARR in under two years.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-navy-dark">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 60% at 80% 30%, rgba(201,162,74,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-6">
            <FadeIn>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gold">
                <span className="w-8 h-px bg-gold inline-block" />
                About Me
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-cream leading-tight">
                The Bridge Between{" "}
                <span className="text-gradient-gold">Tech & Revenue.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-muted text-lg leading-relaxed">
                I&apos;m Syed A. Zerak — a Business Development & Sales professional who lives at the intersection of technology and business growth. For over 5 years, I&apos;ve been helping companies across tech to identify the right digital solutions, build the right teams, and close the deals that actually move their revenue needle.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-muted text-lg leading-relaxed">
                My specialization — Websites, SEO, and Mobile Development — isn&apos;t accidental. These three channels are the most reliable levers for sustainable digital growth, and I&apos;ve spent years mastering how to sell them, scope them, and deliver them in a way that clients trust.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <Button href="/contact">Work With Me</Button>
            </FadeIn>
          </div>

          {/* Photo placeholder */}
          <FadeIn delay={0.15} direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-navy-mid border border-gold/20 overflow-hidden flex items-center justify-center">
                <div className="text-center space-y-3">
                  <span className="font-display text-8xl font-bold text-gradient-gold">SAZ</span>
                  <p className="text-muted text-sm">Photo coming soon</p>
                </div>
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-gold/15 -z-10" />
              {/* Stats floating card */}
              <div className="absolute -left-6 bottom-16 bg-navy border border-gold/20 rounded-2xl p-5 shadow-2xl">
                <p className="font-display text-3xl font-bold text-gold">50+</p>
                <p className="text-muted text-xs mt-1">Successful Deals</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="My Approach"
            title="How I Work"
            subtitle="Four principles that guide every client relationship and every deal I work on."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeIn key={v.title} delay={0.05 + i * 0.08} direction="up">
                  <div className="bg-navy-mid border border-white/5 rounded-2xl p-8 hover:border-gold/20 transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-gold" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-cream mb-2">{v.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{v.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Experience"
            title="Where I've Been"
            align="left"
          />
          <div className="mt-12 space-y-6">
            {experience.map((exp, i) => (
              <FadeIn key={exp.company} delay={0.05 + i * 0.08} direction="up">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 border-b border-white/5 pb-6 last:border-0">
                  <div className="md:w-40 flex-shrink-0">
                    <span className="text-gold text-sm font-semibold">{exp.year}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-cream">{exp.role}</h3>
                    <p className="text-gold/70 text-sm font-medium mb-2">{exp.company}</p>
                    <p className="text-muted text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="Skills" title="What I Bring" />
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-3 mt-10 justify-center">
              {skills.map((skill) => (
                <Badge key={skill} variant="gold" className="text-sm px-4 py-2">
                  {skill}
                </Badge>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
