import Link from "next/link";
import { ExternalLink, Mail, ArrowUpRight } from "lucide-react";

const links = {
  nav: [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { label: "Website Sales" },
    { label: "SEO Strategy" },
    { label: "Mobile Development" },
    { label: "Business Development" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <span className="font-display text-3xl font-bold text-gradient-gold">SAZ</span>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Business Development & Sales specialist turning technology into revenue. Expert in Websites, SEO & Mobile Development.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-navy-dark transition-all duration-300"
              >
                <ExternalLink size={16} />
              </a>
              <a
                href="mailto:syedalizeraknaqvi@gmail.com"
                className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-navy-dark transition-all duration-300"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-cream text-sm font-semibold tracking-widest uppercase">Navigate</h4>
            <ul className="space-y-2">
              {links.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-gold transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-cream text-sm font-semibold tracking-widest uppercase">Services</h4>
            <ul className="space-y-2">
              {links.services.map((s) => (
                <li key={s.label} className="text-muted text-sm">
                  {s.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Syed A. Zerak. All rights reserved.
          </p>
          <p className="text-muted text-xs">
            Business Development & Sales | Tech Industry
          </p>
        </div>
      </div>
    </footer>
  );
}
