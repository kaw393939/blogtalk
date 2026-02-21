import { getPostData, getAllPostSlugs } from "@/lib/markdown";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostData(slug);

  return (
    <article>
      <div className="mb-8">
        <Link
          href="/blog"
          className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
        >
          &larr; Back to blog
        </Link>
      </div>
      <header className="mb-8">
        <time className="text-sm text-[var(--muted)]">{post.date}</time>
        <h1 className="text-3xl font-extrabold tracking-tight mt-2">
          {post.title}
        </h1>
        {post.tags && post.tags.length > 0 && (
          <div className="flex gap-2 mt-4">
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
      </header>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
