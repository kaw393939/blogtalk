import { getSortedPostsData } from "@/lib/markdown";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "All posts by Keith Williams on AI, education, vibe coding, and the future of work.",
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function BlogIndex() {
  const posts = getSortedPostsData();

  return (
    <div>
      <h1 className="text-xl sm:text-2xl font-bold tracking-tight mb-1">Writing</h1>
      <p className="text-sm text-[var(--muted)] mb-8 sm:mb-10">
        On AI, education, vibe coding, and the future of work.
      </p>

      {posts.length === 0 ? (
        <p className="text-[var(--muted)] py-12">Nothing here yet.</p>
      ) : (
        <ul className="divide-y divide-[var(--border)]" role="list">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-4 py-3 sm:py-4 hover:bg-[var(--hover-bg)] -mx-3 px-3 rounded-md transition-colors min-h-[44px]"
              >
                <time dateTime={post.date} className="text-sm tabular-nums text-[var(--muted)] shrink-0 sm:w-28">
                  {formatDate(post.date)}
                </time>
                <div className="min-w-0">
                  <span className="font-medium group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </span>
                  {post.excerpt && (
                    <p className="text-sm text-[var(--muted)] mt-0.5 line-clamp-1 hidden sm:block">
                      {post.excerpt}
                    </p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
