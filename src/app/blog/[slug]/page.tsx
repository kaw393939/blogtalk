import { getPostData, getAllPostSlugs } from "@/lib/markdown";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
}

function estimateReadingTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 230));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostData(slug);
  const readTime = estimateReadingTime(post.contentHtml);

  return (
    <article className="animate-fade-in">
      <div className="mb-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
        >
          <span>&larr;</span>
          <span>Back to essays</span>
        </Link>
      </div>

      <header className="mb-12 pb-10 border-b border-[var(--border)]">
        <div className="flex items-center gap-3 mb-5 text-sm">
          <time className="text-[var(--muted)] font-medium">{formatDate(post.date)}</time>
          <span className="text-[var(--divider)]">&middot;</span>
          <span className="reading-time">{readTime} min read</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.15] mb-6" style={{ letterSpacing: "-0.03em" }}>
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="text-lg text-[var(--muted)] leading-relaxed max-w-2xl" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
            {post.excerpt}
          </p>
        )}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        )}
      </header>

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <footer className="mt-16 pt-8 border-t border-[var(--border)]">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[var(--accent)] border border-[var(--accent)] rounded-full hover:bg-[var(--accent)] hover:text-white transition-all"
        >
          <span>&larr;</span>
          Read more essays
        </Link>
      </footer>
    </article>
  );
}
