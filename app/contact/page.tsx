import type { Metadata } from "next";
import { Mail, ExternalLink, MapPin, Clock } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Syed A. Zerak for Business Development, Website Sales, SEO, or Mobile Development projects.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "syedalizeraknaqvi@gmail.com",
    href: "mailto:syedalizeraknaqvi@gmail.com",
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://linkedin.com",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Available Globally",
    href: null,
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 24 hours",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="bg-navy-dark">
      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 60% at 20% 50%, rgba(201,162,74,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Contact"
            title="Let's Start a Conversation"
            subtitle="Whether you have a project in mind or just want to explore what's possible — I'm always open to the right conversation."
          />
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <FadeIn>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={info.label}
                      className="flex items-start gap-4 p-5 bg-navy-mid border border-white/5 rounded-2xl"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-muted text-xs uppercase tracking-wider mb-1">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="text-cream text-sm font-medium hover:text-gold transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-cream text-sm font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-gold/10 border border-gold/20 rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold text-gold mb-2">What to expect</h3>
                <ul className="space-y-2 text-sm text-cream/70">
                  {[
                    "A personal reply — not an auto-response",
                    "A straight answer on whether I can help",
                    "No fluff, no upsells, just honest conversation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Form */}
          <FadeIn delay={0.1} direction="left" className="lg:col-span-3">
            <div className="bg-navy-mid border border-white/5 rounded-3xl p-8 md:p-10">
              <h3 className="font-display text-2xl font-bold text-cream mb-8">Send a Message</h3>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
