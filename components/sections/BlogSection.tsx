import { BLOG_POSTS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function BlogSection() {
  return (
    <section id="blog" className="bg-surface px-4 py-section-mobile md:px-8 md:py-section">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionLabel>Latest Updates</SectionLabel>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">Stay Ahead of Every Deadline</h2>
        </ScrollReveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, index) => (
            <ScrollReveal key={post.title}>
              <GlassCard className="overflow-hidden p-0">
                <div className={index === 0 ? "h-48 bg-gradient-brand" : index === 1 ? "h-48 bg-gradient-to-br from-cyan to-violet" : "h-48 bg-gradient-to-br from-magenta to-amber"} />
                <div className="p-6">
                  <span className="rounded-full bg-violet/10 px-3 py-1 font-mono text-xs text-violet-glow">{post.category}</span>
                  <h3 className="mt-5 line-clamp-2 font-display text-2xl font-semibold text-white">{post.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm text-text-muted">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between font-mono text-xs text-text-faint">
                    <span>{post.date}</span><span>{post.readTime}</span>
                  </div>
                  <a href="#" className="mt-5 inline-block font-semibold text-violet-glow">Read more</a>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

