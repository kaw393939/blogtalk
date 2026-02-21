import { getSortedPostsData } from "@/lib/markdown";
import Link from "next/link";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function BlogIndex() {
  const posts = getSortedPostsData();

  return (
    <div>
      <div className="mb-14 animate-fade-in">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">
          Archive
        </span>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4" style={{ letterSpacing: "-0.04em" }}>
          All Essays
        </h1>
        <p className="text-lg text-[var(--muted)]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
          Long-form writing on technology, philosophy, and the craft of building things that matter.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-[var(--muted)] text-center py-20">No essays yet. Check back soon.</p>
      ) : (
        <div className="space-y-1">
          {posts.map((post, i) => (
            <article
              key={post.slug}
              className={`group animate-fade-in animate-delay-${Math.min(i + 1, 4)}`}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-5 border-b border-[var(--border)] hover:bg-[var(--card-hover)] -mx-4 px-4 rounded-lg transition-all"
              >
                <time className="text-sm text-[var(--muted)] font-medium tabular-nums shrink-0 w-36">
                  {formatDate(post.date)}
                </time>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-bold tracking-tight group-hover:text-[var(--accent)] transition-colors" style={{ letterSpacing: "-0.01em" }}>
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-sm text-[var(--muted)] mt-1 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                </div>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-1.5 shrink-0">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
