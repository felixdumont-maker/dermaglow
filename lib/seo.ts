import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dermaglow-lime.vercel.app";

interface PageSeoOptions {
  locale: string;
  path: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  keywordsFr?: string[];
  keywordsEn?: string[];
}

export function buildMetadata({
  locale,
  path,
  titleFr,
  titleEn,
  descriptionFr,
  descriptionEn,
  keywordsFr,
  keywordsEn,
}: PageSeoOptions): Metadata {
  const isFr = locale === "fr";
  const canonicalFr = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const canonicalEn = path === "/" ? `${SITE_URL}/en` : `${SITE_URL}/en${path}`;
  const canonical = isFr ? canonicalFr : canonicalEn;
  const title = isFr ? titleFr : titleEn;
  const description = isFr ? descriptionFr : descriptionEn;

  return {
    title,
    description,
    keywords: isFr ? keywordsFr : keywordsEn,
    alternates: {
      canonical,
      languages: {
        fr: canonicalFr,
        en: canonicalEn,
        "x-default": canonicalFr,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: isFr ? "fr_CA" : "en_CA",
    },
    twitter: {
      title,
      description,
    },
  };
}
