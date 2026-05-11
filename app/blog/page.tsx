import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { getAllContent } from "@/lib/mdx";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on Business Development, Tech Sales, SEO, and Digital Growth by Syed A. Zerak.",
};

export default async function BlogPage() {
  const posts = await getAllContent("posts");

  return (
    <div className="bg-navy-dark">
      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 50% 50% at 70% 30%, rgba(201,162,74,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Insights"
            title="Thinking Out Loud"
            subtitle="Practical ideas on Business Development, SEO, and building digital products that actually generate revenue."
          />
        </div>
      </section>

      {/* Posts */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        {posts.length === 0 ? (
          <div className="text-center py-20 text-muted">
            Posts coming soon.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(posts as any[]).map((post, i) => (
              <FadeIn key={post.slug} delay={0.05 + i * 0.07} direction="up">
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="bg-navy-mid border border-white/5 rounded-2xl p-8 h-full transition-all duration-500 hover:border-gold/30 hover:-translate-y-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(post.tags as string[])?.slice(0, 3).map((tag: string) => (
                        <Badge key={tag} variant="muted">{tag}</Badge>
                      ))}
                    </div>
                    <h2 className="font-display text-xl font-bold text-cream group-hover:text-gold-light transition-colors duration-300 mb-3">
                      {post.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-muted text-xs">
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1 group-hover:text-gold transition-colors">
                        Read More <ArrowRight size={12} />
                      </span>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
