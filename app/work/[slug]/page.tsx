import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getContentBySlug, getContentFiles } from "@/lib/mdx";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import CallToAction from "@/components/sections/CallToAction";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const files = getContentFiles("work");
  return files.map((file) => ({ slug: file.replace(".mdx", "") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getContentBySlug("work", slug);
  if (!item) return {};
  return {
    title: item.frontmatter.title as string,
    description: item.frontmatter.description as string,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const item = getContentBySlug("work", slug);
  if (!item) notFound();

  const { frontmatter: fm, content } = item;

  return (
    <div className="bg-navy-dark">
      {/* Back */}
      <div className="pt-28 pb-6 max-w-7xl mx-auto px-6">
        <Link href="/work" className="inline-flex items-center gap-2 text-muted hover:text-gold transition-colors text-sm">
          <ArrowLeft size={16} />
          All Projects
        </Link>
      </div>

      {/* Header */}
      <section className="pb-16 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <FadeIn>
            <div className="flex flex-wrap gap-2 mb-6">
              {(fm.tags as string[])?.map((tag) => (
                <Badge key={tag} variant="gold">{tag}</Badge>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="text-muted text-sm uppercase tracking-widest mb-3">{fm.client as string}</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream leading-tight mb-6">
              {fm.title as string}
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-8 py-6 border-y border-white/5">
              <div>
                <p className="text-muted text-xs uppercase tracking-widest mb-1">Result</p>
                <p className="text-gold font-display font-bold text-xl">{fm.result as string}</p>
              </div>
              <div>
                <p className="text-muted text-xs uppercase tracking-widest mb-1">Service</p>
                <p className="text-cream font-medium">{fm.service as string}</p>
              </div>
              <div>
                <p className="text-muted text-xs uppercase tracking-widest mb-1">Year</p>
                <p className="text-cream font-medium">{fm.date as string}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Cover placeholder */}
      <FadeIn delay={0.15}>
        <div
          className="w-full h-64 md:h-96 max-w-7xl mx-auto px-6 mb-16"
        >
          <div
            className="w-full h-full rounded-3xl flex items-center justify-center border border-gold/10"
            style={{
              background: (fm.coverGradient as string) || "linear-gradient(135deg, #162447 0%, #0B1B3A 100%)",
            }}
          >
            <span className="font-display text-7xl font-bold text-gold/20">
              {(fm.client as string)?.slice(0, 2).toUpperCase()}
            </span>
          </div>
        </div>
      </FadeIn>

      {/* MDX Content */}
      <article className="max-w-3xl mx-auto px-6 pb-24 prose-custom">
        <FadeIn delay={0.2}>
          <div className="
            prose prose-invert max-w-none
            prose-headings:font-display prose-headings:text-cream
            prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:font-bold prose-h3:text-gold-light prose-h3:mt-8
            prose-p:text-muted prose-p:leading-relaxed prose-p:text-base
            prose-strong:text-cream
            prose-li:text-muted
            prose-hr:border-white/10
          ">
            <MDXRemote source={content} />
          </div>
        </FadeIn>
      </article>

      <div className="max-w-7xl mx-auto px-6 pb-16 flex gap-4">
        <Button href="/work" variant="ghost">
          <ArrowLeft size={16} /> All Projects
        </Button>
        <Button href="/contact">Start Your Project</Button>
      </div>

      <CallToAction />
    </div>
  );
}
