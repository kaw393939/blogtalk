import { getPageContent, getSortedPostsData } from "@/lib/markdown";
import Link from "next/link";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default async function Home() {
  const { contentHtml, data } = await getPageContent("home");
  const heroTitle = data.hero_title as string | undefined;
  const heroSubtitle = data.hero_subtitle as string | undefined;
  const recentPosts = getSortedPostsData().slice(0, 6);

  return (
    <div>
      {/* About */}
      <section className="mb-12 sm:mb-14">
        {heroTitle && (
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-snug mb-3 sm:mb-4" style={{ letterSpacing: "-0.025em" }}>
            {heroTitle}
          </h1>
        )}
        {heroSubtitle && (
          <p className="text-[var(--muted)] leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
            {heroSubtitle}
          </p>
        )}
        <div
          className="prose text-[var(--muted)]"
          style={{ fontSize: "0.9375rem" }}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </section>

      {/* Recent writing */}
      {recentPosts.length > 0 && (
        <section aria-labelledby="recent-writing">
          <h2 id="recent-writing" className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-[var(--muted)] mb-4 sm:mb-6">
            Recent writing
          </h2>
          <ul className="divide-y divide-[var(--border)]" role="list">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-4 py-3 sm:py-4 hover:bg-[var(--hover-bg)] -mx-3 px-3 rounded-md transition-colors min-h-[44px]"
                >
                  <time dateTime={post.date} className="text-sm tabular-nums text-[var(--muted)] shrink-0 sm:w-16">
                    {formatDate(post.date)}
                  </time>
                  <span className="font-medium group-hover:text-[var(--accent)] transition-colors text-[0.9375rem] sm:text-base">
                    {post.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 sm:mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center min-h-[44px] text-sm text-[var(--accent)] hover:underline"
            >
              All writing &rarr;
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
