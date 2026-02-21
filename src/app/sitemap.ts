import { getAllPostSlugs } from "@/lib/markdown";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://kaw393939.github.io/blogtalk";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllPostSlugs();

  const posts = slugs.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: BASE, lastModified: new Date() },
    { url: `${BASE}/blog`, lastModified: new Date() },
    ...posts,
  ];
}
