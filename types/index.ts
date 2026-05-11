export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  service: "web" | "seo" | "mobile";
  result: string;
  description: string;
  tags: string[];
  date: string;
  featured: boolean;
  coverGradient?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
}
