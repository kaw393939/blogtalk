import { getPageContent, getSortedPostsData } from "@/lib/markdown";
import Link from "next/link";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function estimateReadingTime(excerpt: string): string {
  // Rough estimate based on excerpt length
  const words = excerpt.split(/\s+/).length;
  const minutes = Math.max(3, Math.ceil(words * 8));
  return `${minutes} min read`;
}

export default async function Home() {
  const { contentHtml, data } = await getPageContent("home");
  const heroTitle = data.hero_title as string | undefined;
  const heroSubtitle = data.hero_subtitle as string | undefined;
  const heroTagline = data.hero_tagline as string | undefined;
  const recentPosts = getSortedPostsData().slice(0, 6);

  return (
    <div>
      {/* Hero section */}
      <section className="mb-20 animate-fade-in">
        <div className="mb-10">
          {heroTagline && (
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-4">
              {heroTagline}
            </span>
          )}
          {heroTitle && (
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.1] mb-6" style={{ letterSpacing: "-0.04em" }}>
              {heroTitle}
            </h1>
          )}
          {heroSubtitle && (
            <p className="text-xl text-[var(--muted)] leading-relaxed max-w-2xl" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
              {heroSubtitle}
            </p>
          )}
        </div>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </section>

      {/* Recent posts */}
      {recentPosts.length > 0 && (
        <section>
          <div className="fancy-divider mb-10">
            <span className="font-semibold text-[var(--foreground)] tracking-tight">Latest Essays</span>
          </div>

          {/* Featured first post */}
          {recentPosts[0] && (
            <article className="post-card border border-[var(--border)] rounded-2xl p-8 mb-8 bg-[var(--card-bg)] animate-fade-in animate-delay-1">
              <Link href={`/blog/${recentPosts[0].slug}`} className="block">
                <div className="flex items-center gap-3 mb-3">
                  <time className="text-sm text-[var(--muted)] font-medium">
                    {formatDate(recentPosts[0].date)}
                  </time>
                  <span className="text-[var(--divider)]">&middot;</span>
                  <span className="reading-time">{estimateReadingTime(recentPosts[0].excerpt)}</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-3 hover:text-[var(--accent)] transition-colors" style={{ letterSpacing: "-0.02em" }}>
                  {recentPosts[0].title}
                </h3>
                {recentPosts[0].excerpt && (
                  <p className="text-[var(--muted)] leading-relaxed text-base" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
                    {recentPosts[0].excerpt}
                  </p>
                )}
                {recentPosts[0].tags && recentPosts[0].tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {recentPosts[0].tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </Link>
            </article>
          )}

          {/* Grid for remaining posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentPosts.slice(1).map((post, i) => (
              <article
                key={post.slug}
                className={`post-card border border-[var(--border)] rounded-2xl p-6 bg-[var(--card-bg)] animate-fade-in animate-delay-${Math.min(i + 2, 4)}`}
              >
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <time className="text-xs text-[var(--muted)] font-medium">
                    {formatDate(post.date)}
                  </time>
                  <h3 className="text-lg font-bold tracking-tight mt-2 mb-2 hover:text-[var(--accent)] transition-colors" style={{ letterSpacing: "-0.01em" }}>
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[var(--accent)] border border-[var(--accent)] rounded-full hover:bg-[var(--accent)] hover:text-white transition-all"
            >
              View all essays
              <span>&rarr;</span>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
