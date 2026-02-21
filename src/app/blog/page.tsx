import { getSortedPostsData } from "@/lib/markdown";
import Link from "next/link";

export default function BlogIndex() {
  const posts = getSortedPostsData();

  return (
    <div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-2">Blog</h1>
      <p className="text-[var(--muted)] mb-10">All posts, newest first.</p>

      {posts.length === 0 ? (
        <p className="text-[var(--muted)]">No posts yet. Check back soon!</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group border border-[var(--border)] rounded-lg p-6 hover:border-[var(--accent)] transition-colors"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <time className="text-sm text-[var(--muted)]">{post.date}</time>
                <h2 className="text-xl font-semibold mt-1 group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h2>
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
      )}
    </div>
  );
}
