import { getPostData, getAllPostSlugs } from "@/lib/markdown";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function readingTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, "");
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 230));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostData(slug);
  const minutes = readingTime(post.contentHtml);

  return (
    <article>
      <Link
        href="/blogtalk/blog"
        className="inline-block text-sm text-[var(--muted)] hover:text-[var(--accent)] mb-8 transition-colors"
      >
        &larr; Back
      </Link>

      <header className="mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug mb-3" style={{ letterSpacing: "-0.025em" }}>
          {post.title}
        </h1>
        <p className="text-sm text-[var(--muted)]">
          {formatDate(post.date)} &middot; {minutes} min read
        </p>
      </header>

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
