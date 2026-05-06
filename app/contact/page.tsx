import Hero from "@/components/Hero";
import RevealSection from "@/components/RevealSection";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { getSiteSettings } from "@/lib/sanity";

const DEFAULT_ADRESSE = "845 Boul. de Périigny, Chambly, Québec";
const DEFAULT_TELEPHONE = "Sur demande";
const DEFAULT_COURRIEL = "dermaglowbyhanane@gmail.com";
const DEFAULT_HORAIRES = [
  { jour: "Mardi – Vendredi", heure: "10 h – 18 h" },
  { jour: "Samedi", heure: "9 h – 16 h" },
  { jour: "Dimanche – Lundi", heure: "Fermé" },
];

export default async function ContactPage() {
  const settings = await getSiteSettings();

  const adresse = settings?.adresse ?? DEFAULT_ADRESSE;
  const telephone = settings?.telephone ?? DEFAULT_TELEPHONE;
  const courriel = settings?.courriel ?? DEFAULT_COURRIEL;
  const horaires = settings?.horaires ?? DEFAULT_HORAIRES;

  return (
    <>
      <Hero
        title="Nous contacter"
        subtitle="Une question, une demande de renseignements ? Je vous réponds dans les plus brefs délais."
        tall={false}
        centered
        eyebrow="Contact · Dermaglow by Hanane"
      />

      <section style={{ background: "var(--beige-clair)" }}>
        <RevealSection className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left — coordonnées + horaires + carte */}
            <div className="reveal">
              <p className="font-corps text-caption text-sauge mb-4">Coordonnées</p>
              <h2 className="font-corps text-headline text-texte mb-10">
                Nous trouver
              </h2>

              <div className="space-y-7 mb-10">
                <div className="flex items-start gap-5">
                  <span className="text-sauge mt-0.5 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-corps text-caption text-texte-doux mb-1">Courriel</p>
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
                    <p className="font-corps text-caption text-texte-doux mb-1">Téléphone</p>
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
                    <p className="font-corps text-caption text-texte-doux mb-1">Adresse</p>
                    <p className="font-corps text-sm text-texte">{adresse}</p>
                  </div>
                </div>
              </div>

              <div
                className="pt-8 mb-10"
                style={{ borderTop: "1px solid oklch(73% 0.072 158 / 0.20)" }}
              >
                <p className="font-corps text-caption text-sauge mb-5">Horaires</p>
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
                  src="https://maps.google.com/maps?q=845+Boul.+de+P%C3%A9riigny%2C+Chambly%2C+Qu%C3%A9bec&hl=fr&z=15&output=embed"
                  title="Localisation Dermaglow by Hanane"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right — formulaire */}
            <div className="reveal" style={{ transitionDelay: "120ms" }}>
              <p className="font-corps text-caption text-sauge mb-4">Formulaire</p>
              <h2 className="font-corps text-headline text-texte mb-8">
                Envoyez un message
              </h2>
              <ContactForm />
            </div>
          </div>
        </RevealSection>
      </section>

      {/* CTA réservation */}
      <section style={{ background: "var(--beige)" }}>
        <RevealSection className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center reveal">
            <div className="md:col-span-7">
              <p className="font-corps text-caption text-sauge mb-4">Prête à commencer ?</p>
              <h3 className="font-corps text-headline text-texte">
                Réservez directement en ligne
              </h3>
            </div>
            <div className="md:col-span-5 md:text-right">
              <Link
                href="/reservation"
                className="btn-press inline-flex items-center justify-center font-corps text-caption bg-texte text-beige-clair px-8 py-4 hover:bg-sauge transition-colors duration-300"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </RevealSection>
      </section>
    </>
  );
}
