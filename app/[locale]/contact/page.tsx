import type { Metadata } from "next";
import Hero from "@/components/Hero";
import RevealSection from "@/components/RevealSection";
import ContactForm from "@/components/ContactForm";
import { Link } from "@/i18n/navigation";
import { getSiteSettings, getPageContact } from "@/lib/sanity";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return buildMetadata({
    locale: params.locale,
    path: "/contact",
    titleFr: "Contact | Esthéticienne à Verdun | Horaires & Adresse | Dermaglow",
    titleEn: "Contact | Esthetician in Verdun | Hours & Address | Dermaglow",
    descriptionFr: "Contactez Dermaglow by Hanane à Verdun — 670 de Gaspé, App. 305. Mardi–Vendredi 10h–18h, Samedi 9h–16h. Courriel : dermaglowbyhanane@gmail.com.",
    descriptionEn: "Contact Dermaglow by Hanane in Verdun — 670 de Gaspé, Apt. 305. Tuesday–Friday 10am–6pm, Saturday 9am–4pm. Email: dermaglowbyhanane@gmail.com.",
    keywordsFr: ["contact esthéticienne Verdun", "adresse Dermaglow Verdun", "horaires soin visage Verdun"],
    keywordsEn: ["contact esthetician Verdun", "Dermaglow address Verdun", "beauty salon hours Verdun"],
  });
}

const DEFAULT_ADRESSE = "670 de Gaspé, Appartement 305, Verdun, Québec H3E 1H8";
const DEFAULT_TELEPHONE = "Sur demande";
const DEFAULT_COURRIEL = "dermaglowbyhanane@gmail.com";
const DEFAULT_HORAIRES = [
  { jour: "Mardi – Vendredi", heure: "10 h – 18 h" },
  { jour: "Samedi", heure: "9 h – 16 h" },
  { jour: "Dimanche – Lundi", heure: "Fermé" },
];

export default async function ContactPage() {
  const [t, settings, pageData] = await Promise.all([
    getTranslations("contact"),
    getSiteSettings(),
    getPageContact(),
  ]);

  const heroTitre = pageData?.heroTitre ?? "Nous contacter";
  const heroSousTitre = pageData?.heroSousTitre ?? "Une question, une demande de renseignements ? Je vous réponds dans les plus brefs délais.";
  const adresse = settings?.adresse ?? DEFAULT_ADRESSE;
  const telephone = settings?.telephone ?? DEFAULT_TELEPHONE;
  const courriel = settings?.courriel ?? DEFAULT_COURRIEL;
  const horaires = settings?.horaires ?? DEFAULT_HORAIRES;

  return (
    <>
      <Hero
        title={heroTitre}
        subtitle={heroSousTitre}
        tall={false}
        centered
        eyebrow={t("heroEyebrow")}
      />

      <section style={{ background: "var(--beige-clair)" }}>
        <RevealSection className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            <div className="reveal">
              <p className="font-corps text-caption text-sauge mb-4">{t("coordLabel")}</p>
              <h2 className="font-corps text-headline text-texte mb-10">
                {t("findUsTitle")}
              </h2>

              <div className="space-y-7 mb-10">
                <div className="flex items-start gap-5">
                  <span className="text-sauge mt-0.5 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-corps text-caption text-texte-doux mb-1">{t("emailLabel")}</p>
                    <a
                      href={`mailto:${courriel}`}
                      className="font-corps text-sm text-texte hover:text-sauge transition-colors duration-300"
                    >
                      {courriel}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <span className="text-sauge mt-0.5 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-corps text-caption text-texte-doux mb-1">{t("phoneLabel")}</p>
                    <p className="font-corps text-sm text-texte">{telephone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <span className="text-sauge mt-0.5 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-corps text-caption text-texte-doux mb-1">{t("addressLabel")}</p>
                    <p className="font-corps text-sm text-texte">{adresse}</p>
                  </div>
                </div>
              </div>

              <div
                className="pt-8 mb-10"
                style={{ borderTop: "1px solid oklch(73% 0.072 158 / 0.20)" }}
              >
                <p className="font-corps text-caption text-sauge mb-5">{t("hoursLabel")}</p>
                <div className="space-y-2">
                  {horaires.map(({ jour, heure }: { jour: string; heure: string }) => (
                    <div key={jour} className="flex justify-between font-corps text-sm">
                      <span className="text-texte-doux">{jour}</span>
                      <span className="text-texte">{heure}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden h-64">
                <iframe
                  src="https://maps.google.com/maps?q=670+de+Gasp%C3%A9%2C+Verdun%2C+Qu%C3%A9bec+H3E+1H8&hl=fr&z=15&output=embed"
                  title="Localisation Dermaglow by Hanane"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="reveal" style={{ transitionDelay: "120ms" }}>
              <p className="font-corps text-caption text-sauge mb-4">{t("formLabel")}</p>
              <h2 className="font-corps text-headline text-texte mb-8">
                {t("formTitle")}
              </h2>
              <ContactForm />
            </div>
          </div>
        </RevealSection>
      </section>

      <section style={{ background: "var(--beige)" }}>
        <RevealSection className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center reveal">
            <div className="md:col-span-7">
              <p className="font-corps text-caption text-sauge mb-4">{t("ctaLabel")}</p>
              <h3 className="font-corps text-headline text-texte">
                {t("ctaTitle")}
              </h3>
            </div>
            <div className="md:col-span-5 md:text-right">
              <Link
                href="/reservation"
                className="btn-press inline-flex items-center justify-center font-corps text-caption bg-texte text-beige-clair px-8 py-4 hover:bg-sauge transition-colors duration-300"
              >
                {t("ctaBtn")}
              </Link>
            </div>
          </div>
        </RevealSection>
      </section>
    </>
  );
}
