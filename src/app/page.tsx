import { getPageContent, getSortedPostsData } from "@/lib/markdown";
import Link from "next/link";

export default async function Home() {
  const { contentHtml, data } = await getPageContent("home");
  const heroTitle = data.hero_title as string | undefined;
  const heroSubtitle = data.hero_subtitle as string | undefined;
  const recentPosts = getSortedPostsData().slice(0, 5);

  return (
    <div>
      {/* Hero section from markdown */}
      <section className="mb-16">
        {heroTitle && (
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            {heroTitle}
          </h1>
        )}
        {heroSubtitle && (
          <p className="text-lg text-[var(--muted)] mb-8">
            {heroSubtitle}
          </p>
        )}
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </section>

      {/* Recent posts */}
      {recentPosts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
          <div className="space-y-6">
            {recentPosts.map((post) => (
              <article
                key={post.slug}
                className="group border border-[var(--border)] rounded-lg p-6 hover:border-[var(--accent)] transition-colors"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <time className="text-sm text-[var(--muted)]">{post.date}</time>
                  <h3 className="text-xl font-semibold mt-1 group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-[var(--muted)] mt-2">{post.excerpt}</p>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex gap-2 mt-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--border)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </article>
            ))}
          </div>
          {recentPosts.length >= 5 && (
            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="text-[var(--accent)] hover:text-[var(--accent-hover)] font-medium"
              >
                View all posts &rarr;
              </Link>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
