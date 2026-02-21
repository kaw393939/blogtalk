import { getPostData, getAllPostSlugs } from "@/lib/markdown";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);
  return {
    title: post.title,
    description: post.excerpt || undefined,
  };
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
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
        href="/blog"
        className="text-sm text-[var(--gray)] hover:text-[var(--fg)] transition-colors"
      >
        &larr; Back
      </Link>

      <header className="mt-8 mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug mb-2">
          {post.title}
        </h1>
        <p className="text-sm text-[var(--light)]">
          <time dateTime={post.date}>{formatDate(post.date)}</time> &middot;{" "}
          {minutes} min read
        </p>
      </header>

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
