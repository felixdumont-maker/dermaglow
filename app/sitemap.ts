import { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dermaglow-lime.vercel.app";

const pages = [
  { path: "",           priority: 1.0, changeFrequency: "weekly"  as const },
  { path: "/services",  priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/a-propos",  priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact",   priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/reservation", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/politiques", priority: 0.4, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    entries.push({
      url: `${SITE_URL}${page.path || "/"}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
    entries.push({
      url: `${SITE_URL}/en${page.path}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: +(page.priority * 0.9).toFixed(1),
    });
  }

  return entries;
}
