import { getSortedPostsData } from "@/lib/markdown";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "All posts by Keith Williams on AI, education, and building things.",
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogIndex() {
  const posts = getSortedPostsData();

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight mb-1">Writing</h1>
      <p className="text-sm text-[var(--gray)] mb-10">
        On AI, education, and the future of work.
      </p>

      {posts.length === 0 ? (
        <p className="text-[var(--gray)] py-12">Nothing here yet.</p>
      ) : (
        <ul className="divide-y divide-[var(--border)]">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex items-baseline gap-4 py-3 hover:bg-[var(--hover)] -mx-3 px-3 rounded transition-colors"
              >
                <time
                  dateTime={post.date}
                  className="text-sm tabular-nums text-[var(--light)] shrink-0 w-28"
                >
                  {formatDate(post.date)}
                </time>
                <div className="min-w-0">
                  <span className="font-medium text-sm group-hover:text-[var(--link)] transition-colors">
                    {post.title}
                  </span>
                  {post.excerpt && (
                    <p className="text-sm text-[var(--gray)] mt-0.5 truncate hidden sm:block">
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
