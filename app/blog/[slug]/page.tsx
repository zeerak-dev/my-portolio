import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
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
  const files = getContentFiles("posts");
  return files.map((file) => ({ slug: file.replace(".mdx", "") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getContentBySlug("posts", slug);
  if (!item) return {};
  return {
    title: item.frontmatter.title as string,
    description: item.frontmatter.excerpt as string,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const item = getContentBySlug("posts", slug);
  if (!item) notFound();

  const { frontmatter: fm, content } = item;

  return (
    <div className="bg-navy-dark">
      <div className="pt-28 pb-6 max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-gold transition-colors text-sm">
          <ArrowLeft size={16} />
          All Posts
        </Link>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-24">
        <FadeIn>
          <div className="flex flex-wrap gap-2 mb-6">
            {(fm.tags as string[])?.map((tag) => (
              <Badge key={tag} variant="gold">{tag}</Badge>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cream leading-tight mb-6">
            {fm.title as string}
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center gap-6 text-muted text-sm pb-8 border-b border-white/5 mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {fm.date as string}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {fm.readTime as string}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="
            prose prose-invert max-w-none
            prose-headings:font-display prose-headings:text-cream
            prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:font-semibold prose-h3:text-gold-light prose-h3:mt-8
            prose-p:text-muted prose-p:leading-relaxed prose-p:text-base
            prose-strong:text-cream
            prose-li:text-muted
            prose-blockquote:border-l-gold prose-blockquote:text-cream/80
            prose-hr:border-white/10
          ">
            <MDXRemote source={content} />
          </div>
        </FadeIn>

        <div className="mt-12 pt-8 border-t border-white/5 flex gap-4">
          <Button href="/blog" variant="ghost">
            <ArrowLeft size={16} /> All Posts
          </Button>
          <Button href="/contact">Work With Me</Button>
        </div>
      </article>

      <CallToAction />
    </div>
  );
}
