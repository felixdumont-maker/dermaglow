import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import RevealSection from "@/components/RevealSection";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import Link from "next/link";
import { getPageAccueil, getServices, getTemoignages, getFaq, getSiteSettings, urlFor } from "@/lib/sanity";

const DEFAULT_SERVICES = [
  {
    title: "Soin de visage facial",
    description: "Un soin personnalisé adapté à votre type de peau — nettoyage en profondeur, exfoliation douce et hydratation ciblée pour révéler votre éclat naturel.",
    duration: "60 min",
  },
  {
    title: "Peeling",
    description: "Un traitement de renouvellement cellulaire qui atténue les irrégularités, unifie le teint et révèle une peau plus lisse et lumineuse.",
    duration: "45 min",
  },
];

const DEFAULT_TEMOIGNAGES = [
  {
    texte: "Ma peau n'a jamais été aussi lumineuse. Hanane a une expertise rare et une approche incroyablement douce.",
    nom: "Sophie M.",
    soin: "Soin de visage facial",
  },
  {
    texte: "Je recommande Dermaglow à toutes mes amies. Le soin a complètement transformé ma routine beauté.",
    nom: "Lina K.",
    soin: "Peeling",
  },
  {
    texte: "Un moment de pur bien-être, des résultats visibles dès le premier soin. Je reviendrai sans hésiter.",
    nom: "Camille R.",
    soin: "Soin de visage facial",
  },
];

const DEFAULT_HORAIRES = [
  { jour: "Mardi – Vendredi", heure: "10 h – 18 h" },
  { jour: "Samedi", heure: "9 h – 16 h" },
  { jour: "Dimanche – Lundi", heure: "Fermé" },
];

export default async function HomePage() {
  const [pageData, sanityServices, sanityTemoignages, faqData, settings] = await Promise.all([
    getPageAccueil(),
    getServices(),
    getTemoignages(),
    getFaq(),
    getSiteSettings(),
  ]);

  const services = sanityServices.length > 0
    ? sanityServices.map((s) => ({
        title: s.titre,
        description: s.description,
        duration: s.variations?.[0]?.duree ?? "60 min",
      }))
    : DEFAULT_SERVICES;

  const temoignages = sanityTemoignages.length > 0
    ? sanityTemoignages.map((t) => ({ texte: t.texte, nom: t.nom, soin: t.soin ?? "" }))
    : DEFAULT_TEMOIGNAGES;

  const faqItems = faqData.length > 0
    ? faqData.map((f) => ({ question: f.question, answer: f.reponse }))
    : undefined;

  const adresse = settings?.adresse ?? "845 Boul. de Périigny, Chambly, Québec";
  const telephone = settings?.telephone ?? "Sur demande";
  const courriel = settings?.courriel ?? "dermaglowbyhanane@gmail.com";
  const horaires = settings?.horaires ?? DEFAULT_HORAIRES;

  const heroTitre = pageData?.heroTitre ?? "Révélez votre éclat naturel";
  const heroSousTitre = pageData?.heroSousTitre ?? "Des soins sur mesure conçus pour sublimer votre peau avec douceur, expertise et intention.";
  const approcheTitre = pageData?.approcheTitre ?? "La peau mérite une attention singulière";
  const approcheTexte1 = pageData?.approcheTexte1 ?? "Chez Dermaglow by Hanane, chaque soin commence par une analyse approfondie. La beauté véritable naît d'un équilibre entre science et douceur.";
  const approcheTexte2 = pageData?.approcheTexte2 ?? "Avec des produits soigneusement sélectionnés et des techniques éprouvées, je vous accompagne vers une peau plus saine, lumineuse et en harmonie avec vous.";
  const approcheImageSrc = pageData?.approcheImage ? urlFor(pageData.approcheImage).url() : "/approche-soin.jpg";

  return (
    <>
      <Hero
        title={heroTitre}
        subtitle={heroSousTitre}
        cta={{ label: "Prendre rendez-vous", href: "/reservation" }}
        ctaSecondary={{ label: "Découvrir les soins", href: "/services" }}
      />

      {/* ── Approche ── */}
      <section style={{ background: "var(--beige-clair)" }}>
        <RevealSection className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">

            {/* Left: oversize number + label */}
            <div className="md:col-span-4 reveal">
              <p className="font-corps text-caption text-sauge mb-6">Mon approche</p>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={approcheImageSrc}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Right: text */}
            <div className="md:col-span-8 reveal" style={{ transitionDelay: "100ms" }}>
              <h2 className="font-corps text-headline text-texte mb-5">
                {approcheTitre}
              </h2>
              <p className="font-corps text-body text-texte-doux mb-4">
                {approcheTexte1}
              </p>
              <p className="font-corps text-body text-texte-doux mb-8">
                {approcheTexte2}
              </p>
              <Link
                href="/a-propos"
                className="font-corps text-caption text-sauge inline-flex items-center gap-2 link-slide group"
              >
                En savoir plus sur moi
                <span className="block h-px w-5 bg-sauge transition-all duration-300 group-hover:w-8" />
              </Link>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ── Services ── */}
      <section style={{ background: "var(--gris-blanc)" }}>
        <RevealSection className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_440px] gap-0 lg:gap-16 xl:gap-20 items-start">

            {/* Left — header + cards */}
            <div>
              <div className="mb-10 reveal">
                <div className="flex items-start justify-between gap-8 flex-wrap">
                  <p className="font-corps text-caption text-sauge mb-4">Mes soins</p>
                  <Link
                    href="/services"
                    className="font-corps text-caption text-texte-doux group inline-flex items-center gap-3 hover:text-texte transition-colors duration-300 shrink-0 whitespace-nowrap link-slide"
                  >
                    Voir tous les soins
                    <span className="block h-px w-6 bg-current transition-all duration-400 group-hover:w-10" />
                  </Link>
                </div>
                <h2 className="font-corps text-headline text-texte whitespace-nowrap">
                  Des soins pensés pour vous
                </h2>
              </div>

              {/* Thin top border */}
              <div
                className="h-px mb-0 reveal"
                style={{ background: "oklch(73% 0.072 158 / 0.35)", transitionDelay: "80ms" }}
              />

              {/* Service list */}
              <div className="stagger">
                {services.map((service, i) => (
                  <ServiceCard key={service.title} {...service} index={i + 1} href="/services" />
                ))}
              </div>

              {/* Pricing note */}
              <p className="font-corps text-caption text-texte-doux/60 mt-8 reveal" style={{ transitionDelay: "200ms" }}>
                Tarifs sur consultation — première analyse incluse à votre premier soin
              </p>
            </div>

            {/* Right — editorial image */}
            <div
              className="hidden lg:block reveal sticky top-24"
              style={{ transitionDelay: "120ms" }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src="/soins-featured.jpg"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 60%, oklch(91% 0.014 158 / 0.55) 100%)",
                  }}
                />
              </div>
              <p
                className="font-corps text-caption mt-4 text-right"
                style={{ color: "oklch(61% 0.012 100 / 0.55)" }}
              >
                Soins sur mesure · Chambly
              </p>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ── Témoignages ── */}
      <section style={{ background: "var(--beige)" }}>
        <RevealSection className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="reveal">
            <p className="font-corps text-caption text-sauge mb-4">Témoignages</p>
            <h2 className="font-corps text-headline text-texte mb-10">
              Ce qu&apos;elles disent
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 stagger">
            {temoignages.map(({ texte, nom, soin }) => (
              <div
                key={nom}
                className="py-8 border-b border-sauge-clair/20 last:border-b-0 lg:border-b-0 lg:px-8 lg:first:pl-0 lg:last:pr-0 lg:border-r lg:border-sauge-clair/30 lg:last:border-r-0"
              >
                <p
                  className="font-corps text-caption mb-5"
                  style={{ color: "var(--sauge)" }}
                >
                  ★★★★★
                </p>
                <p className="font-corps text-title text-texte italic leading-snug mb-6 text-balance">
                  &ldquo;{texte}&rdquo;
                </p>
                <div
                  className="h-px mb-5"
                  style={{ background: "oklch(73% 0.072 158 / 0.25)", width: "32px" }}
                />
                <p className="font-corps text-sm text-texte-doux">{nom}</p>
                <p className="font-corps text-caption text-texte-leger mt-1">{soin}</p>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* ── Contact ── */}
      <section style={{ background: "var(--gris-blanc)" }}>
        <RevealSection className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left: info + map */}
            <div className="reveal">
              <p className="font-corps text-caption text-sauge mb-4">Nous trouver</p>
              <h2 className="font-corps text-headline text-texte mb-10">
                Nous contacter
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
                    <p className="font-corps text-sm text-texte">{courriel}</p>
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
                  {horaires.map(({ jour, heure }) => (
                    <div key={jour} className="flex justify-between font-corps text-sm">
                      <span className="text-texte-doux">{jour}</span>
                      <span className="text-texte">{heure}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
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

            {/* Right: form */}
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

      {/* ── FAQ ── */}
      <section style={{ background: "var(--beige-clair)" }}>
        <RevealSection className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] xl:grid-cols-[400px_1fr] gap-16 lg:gap-24 items-start">

            {/* Left — label + heading */}
            <div className="reveal lg:sticky lg:top-24">
              <p className="font-corps text-caption text-sauge mb-4">FAQ</p>
              <h2 className="font-corps text-headline text-texte mb-6">
                Questions fréquentes
              </h2>
              <p className="font-corps text-body text-texte-doux mb-8">
                Une question avant de réserver ? Retrouvez les réponses aux interrogations les plus courantes.
              </p>
              <Link
                href="/contact"
                className="font-corps text-caption text-sauge inline-flex items-center gap-2 link-slide group"
              >
                Nous contacter
                <span className="block h-px w-5 bg-sauge transition-all duration-300 group-hover:w-8" />
              </Link>
            </div>

            {/* Right — accordion */}
            <div
              className="reveal"
              style={{
                transitionDelay: "100ms",
                borderTop: "1px solid oklch(73% 0.072 158 / 0.20)",
              }}
            >
              <FaqAccordion faqs={faqItems} />
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ── CTA final ── */}
      <section style={{ background: "var(--texte)" }}>
        <RevealSection className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8 reveal">
              <p className="font-corps text-caption mb-5" style={{ color: "var(--sauge-clair)" }}>
                Prête à commencer ?
              </p>
              <h2
                className="font-corps text-headline"
                style={{ color: "var(--beige-clair)" }}
              >
                Offrez à votre peau le soin qu&apos;elle mérite
              </h2>
            </div>
            <div className="md:col-span-4 reveal" style={{ transitionDelay: "120ms" }}>
              <p
                className="font-corps text-body mb-8"
                style={{ color: "oklch(87% 0.032 74 / 0.60)" }}
              >
                Réservez votre séance en ligne en quelques clics.
              </p>
              <Link
                href="/reservation"
                className="btn-press inline-flex items-center justify-center font-corps text-caption bg-sauge text-white px-8 py-4 hover:bg-sauge/80 transition-colors duration-300"
              >
                Réserver maintenant
              </Link>
            </div>
          </div>
        </RevealSection>
      </section>
    </>
  );
}
