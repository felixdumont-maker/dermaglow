import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// ─── Types ───────────────────────────────────────────────

export interface Horaire {
  jour: string;
  heure: string;
}

export interface SiteSettings {
  adresse?: string;
  telephone?: string;
  courriel?: string;
  instagram?: string;
  facebook?: string;
  horaires?: Horaire[];
}

export interface Variation {
  nom: string;
  duree: string;
  prix: string;
  detail: string;
  vedette?: boolean;
}

export interface Service {
  _id: string;
  ordre: number;
  numero: string;
  eyebrow: string;
  titre: string;
  description: string;
  image?: any;
  inclus?: string[];
  variations?: Variation[];
  featured?: boolean;
}

export interface Temoignage {
  _id: string;
  nom: string;
  texte: string;
  soin?: string;
  note?: number;
  visible?: boolean;
}

export interface FaqItem {
  _id: string;
  ordre: number;
  question: string;
  reponse: string;
  visible?: boolean;
}

export interface PourQuiItem {
  titre: string;
  texte: string;
}

export interface ApprochePilier {
  label: string;
  titre: string;
  texte: string;
}

export interface PageAccueil {
  heroTitre?: string;
  heroSousTitre?: string;
  approcheImage?: any;
  approcheTitre?: string;
  approcheTexte1?: string;
  approcheTexte2?: string;
}

export interface PageAPropos {
  heroTitre?: string;
  heroSousTitre?: string;
  bioImage?: any;
  bioTexte1?: string;
  bioTexte2?: string;
  pourQui?: PourQuiItem[];
  approchePilliers?: ApprochePilier[];
  pourquoiTexte?: string;
}

// ─── Queries ─────────────────────────────────────────────

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    return await client.fetch<SiteSettings | null>(`*[_type == "siteSettings"][0]`);
  } catch {
    return null;
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    return await client.fetch<Service[]>(
      `*[_type == "service"] | order(ordre asc) {
        _id, ordre, numero, eyebrow, titre, description, image, inclus, variations, featured
      }`
    );
  } catch {
    return [];
  }
}

export async function getFeaturedServices(): Promise<Service[]> {
  try {
    return await client.fetch<Service[]>(
      `*[_type == "service" && featured == true] | order(ordre asc) {
        _id, titre, description, variations
      }`
    );
  } catch {
    return [];
  }
}

export async function getTemoignages(): Promise<Temoignage[]> {
  try {
    return await client.fetch<Temoignage[]>(
      `*[_type == "temoignage" && visible == true] | order(_createdAt asc) {
        _id, nom, texte, soin, note
      }`
    );
  } catch {
    return [];
  }
}

export async function getFaq(): Promise<FaqItem[]> {
  try {
    return await client.fetch<FaqItem[]>(
      `*[_type == "faq" && visible == true] | order(ordre asc) {
        _id, question, reponse
      }`
    );
  } catch {
    return [];
  }
}

export async function getPageAccueil(): Promise<PageAccueil | null> {
  try {
    return await client.fetch<PageAccueil | null>(`*[_type == "pageAccueil"][0]`);
  } catch {
    return null;
  }
}

export async function getPageAPropos(): Promise<PageAPropos | null> {
  try {
    return await client.fetch<PageAPropos | null>(`*[_type == "pageAPropos"][0]`);
  } catch {
    return null;
  }
}
