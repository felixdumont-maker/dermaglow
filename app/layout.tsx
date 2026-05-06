import type { Metadata } from "next";
import { Alex_Brush, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

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

export const metadata: Metadata = {
  title: "Dermaglow by Hanane | Soins de la peau",
  description:
    "Esthéticienne professionnelle certifiée spécialisée dans les soins du visage à Chambly. Prenez soin de votre peau avec Dermaglow by Hanane.",
  keywords: ["esthéticienne", "soins peau", "soin visage", "beauté", "dermaglow"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${alexBrush.variable} ${fraunces.variable}`}>
      <body className="font-corps bg-beige-clair text-texte antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
