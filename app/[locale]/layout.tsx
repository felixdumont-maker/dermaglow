// TODO: domaine cible = dermaglowbyhanane.ca
import type { Metadata } from "next";
import { Alex_Brush, Fraunces } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import SchemaOrg from "@/components/SchemaOrg";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dermaglow-lime.vercel.app";

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alex-brush",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  const isFr = locale === "fr";
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: isFr
        ? "Esthéticienne à Verdun | Soins du visage & Peeling | Dermaglow by Hanane"
        : "Esthetician in Verdun | Facial & Peeling Treatments | Dermaglow by Hanane",
      template: "%s | Dermaglow by Hanane",
    },
    description: isFr
      ? "Dermaglow by Hanane — esthéticienne certifiée à Verdun. Soins du visage sur mesure, peelings chimiques AHA/BHA. Première consultation incluse."
      : "Dermaglow by Hanane — certified esthetician in Verdun, QC. Custom facial treatments and AHA/BHA chemical peels. First consultation included.",
    keywords: isFr
      ? ["esthéticienne Verdun", "soin visage Verdun", "peeling chimique Verdun", "soin peau Montérégie", "esthéticienne certifiée"]
      : ["esthetician Verdun", "facial treatment Verdun", "chemical peeling Verdun", "skin care Quebec"],
    openGraph: {
      siteName: "Dermaglow by Hanane",
      images: [{ url: "/approche-soin.jpg", width: 1200, height: 630, alt: "Dermaglow by Hanane" }],
      locale: isFr ? "fr_CA" : "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      images: ["/approche-soin.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!routing.locales.includes(locale as "fr" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${alexBrush.variable} ${fraunces.variable}`}>
      <body className="font-corps bg-beige-clair text-texte antialiased">
        <NextIntlClientProvider messages={messages}>
          <SchemaOrg />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
