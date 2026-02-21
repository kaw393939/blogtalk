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
      <section className="mb-14">
        {heroTitle && (
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug mb-4">
            {heroTitle}
          </h1>
        )}
        {heroSubtitle && (
          <p className="text-[var(--gray)] leading-relaxed mb-6 text-base">
            {heroSubtitle}
          </p>
        )}
        <div
          className="prose text-[var(--gray)] text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </section>

      {recentPosts.length > 0 && (
        <section aria-labelledby="recent-writing">
          <h2
            id="recent-writing"
            className="text-xs font-medium uppercase tracking-widest text-[var(--light)] mb-6"
          >
            Recent writing
          </h2>
          <ul className="divide-y divide-[var(--border)]">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-baseline gap-4 py-3 hover:bg-[var(--hover)] -mx-3 px-3 rounded transition-colors"
                >
                  <time
                    dateTime={post.date}
                    className="text-sm tabular-nums text-[var(--light)] shrink-0 w-16"
                  >
                    {formatDate(post.date)}
                  </time>
                  <span className="font-medium text-sm group-hover:text-[var(--link)] transition-colors">
                    {post.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="/blog"
              className="text-sm text-[var(--link)] hover:underline"
            >
              All writing &rarr;
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
