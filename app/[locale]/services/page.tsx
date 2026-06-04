// TODO: domaine cible = dermaglowbyhanane.ca
import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import RevealSection from "@/components/RevealSection";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return buildMetadata({
    locale: params.locale,
    path: "/services",
    titleFr: "Soins esthétiques à Verdun | Tarifs | Dermaglow by Hanane",
    titleEn: "Esthetic Treatments in Verdun | Pricing | Dermaglow by Hanane",
    descriptionFr: "Facial Essentiel (65$), Facial Signature (130$), Peeling Professionnel (130$) et Microneedling (150$) à Verdun, Montréal. Soins personnalisés par Hanane, esthéticienne certifiée.",
    descriptionEn: "Essential Facial ($65), Signature Facial ($130), Professional Peeling ($130) and Microneedling ($150) in Verdun, Montreal. Personalized treatments by Hanane, certified esthetician.",
    keywordsFr: ["soins esthétiques Verdun", "soin visage prix Verdun", "peeling professionnel Montréal", "microneedling Verdun"],
    keywordsEn: ["esthetic treatments Verdun", "facial price Verdun", "professional peeling Montreal", "microneedling Verdun"],
  });
}

const SERVICES_FR = [
  {
    numero: "01",
    titre: "Facial Essentiel",
    image: "/facial-essentiel.webp",
    duree: "45 minutes",
    prix: "65$ + taxes",
    description: "Un soin rapide et efficace conçu pour nettoyer, rafraîchir et redonner de l'éclat à la peau. Idéal pour entretenir une peau saine au quotidien tout en profitant d'un moment de détente.",
    bienfaits: [
      "Nettoie en profondeur",
      "Élimine les impuretés",
      "Exfolie délicatement",
      "Ravive l'éclat",
      "Hydrate et rééquilibre",
      "Sensation de fraîcheur immédiate",
    ],
    idealPour: "Entretien régulier, peaux normales/mixtes/déshydratées, boost d'éclat avant un événement",
    deroulement: "Démaquillage, nettoyage profond, tonique, analyse de peau, exfoliation, serviette chaude, extraction légère, masque adapté, crème hydratante",
    forfaits: null,
    apres: null,
  },
  {
    numero: "02",
    titre: "Facial Signature + Massage",
    image: "/facial-signature.jpg",
    duree: "90 minutes",
    prix: "130$ + taxes",
    description: "Un soin complet et intensif conçu pour purifier la peau en profondeur et restaurer son équilibre naturel.",
    bienfaits: [
      "Nettoyage profond",
      "Élimine points noirs",
      "Exfolie",
      "Désincruste les pores",
      "Améliore la texture",
      "Hydrate",
    ],
    idealPour: "Peaux grasses/mixtes, pores obstrués, points noirs, entretien en profondeur",
    deroulement: "Démaquillage, nettoyage profond, tonique, analyse, exfoliation, serviette chaude, extraction, tonique apaisant, massage visage/cou/épaules, masque, crème hydratante",
    forfaits: null,
    apres: null,
  },
  {
    numero: "03",
    titre: "Peeling Professionnel Éclat & Renouvellement Cellulaire",
    image: "/peeling-professionnel.jpg",
    duree: "30 minutes",
    prix: "130$ + taxes",
    description: "Un soin exfoliant professionnel conçu pour stimuler le renouvellement cellulaire et révéler un teint plus lumineux, lisse et uniforme.",
    bienfaits: [
      "Ravive l'éclat",
      "Lisse le grain",
      "Stimule le renouvellement cellulaire",
      "Améliore la texture",
      "Atténue les imperfections",
      "Uniformise le teint",
    ],
    idealPour: "Teint terne, grain irrégulier, imperfections, entretien régulier",
    deroulement: "Nettoyage, analyse, application peeling, neutralisation, masque apaisant, sérum hydratant, protection solaire",
    forfaits: [
      "Cure de 4 séances = 10% de rabais",
      "Cure de 6 séances = 15% de rabais",
    ],
    apres: null,
  },
  {
    numero: "04",
    titre: "Microneedling (Soin de stimulation cutanée)",
    image: "/microneedling.webp",
    duree: "60 minutes",
    prix: "150$",
    description: "Un soin esthétique avancé qui stimule la peau à l'aide de micro-aiguilles pour favoriser le renouvellement cellulaire et la production de collagène.",
    bienfaits: [
      "Stimule collagène et élastine",
      "Améliore texture et fermeté",
      "Réduit pores dilatés",
      "Atténue cicatrices d'acné",
      "Améliore ridules",
      "Teint uniforme",
    ],
    idealPour: "Cicatrices d'acné légères, pores dilatés, perte de fermeté, premiers signes de vieillissement",
    deroulement: "Nettoyage et préparation, microneedling avec sérums, soin apaisant, conseils post-traitement",
    forfaits: [
      "Cure de 3 séances = 10% de rabais",
      "Cure de 6 séances = 15% de rabais",
    ],
    apres: "Éviter soleil 3-5 jours, SPF 30+, pas de maquillage 24h, pas d'exfoliation, hydrater intensivement",
  },
];

const SERVICES_EN = [
  {
    numero: "01",
    titre: "Essential Facial",
    image: "/facial-essentiel.webp",
    duree: "45 minutes",
    prix: "$65 + taxes",
    description: "A quick and effective treatment designed to cleanse, refresh and restore radiance to the skin. Ideal for maintaining healthy skin daily while enjoying a moment of relaxation.",
    bienfaits: [
      "Deep cleansing",
      "Removes impurities",
      "Gentle exfoliation",
      "Restores radiance",
      "Hydrates and rebalances",
      "Immediate freshness",
    ],
    idealPour: "Regular maintenance, normal/combination/dehydrated skin, radiance boost before an event",
    deroulement: "Makeup removal, deep cleansing, toner, skin analysis, exfoliation, warm towel, light extraction, adapted mask, moisturizer",
    forfaits: null,
    apres: null,
  },
  {
    numero: "02",
    titre: "Signature Facial + Massage",
    image: "/facial-signature.jpg",
    duree: "90 minutes",
    prix: "$130 + taxes",
    description: "A complete and intensive treatment designed to deeply purify the skin and restore its natural balance.",
    bienfaits: [
      "Deep cleansing",
      "Removes blackheads",
      "Exfoliates",
      "Unclogs pores",
      "Improves texture",
      "Hydrates",
    ],
    idealPour: "Oily/combination skin, clogged pores, blackheads, deep maintenance",
    deroulement: "Makeup removal, deep cleansing, toner, analysis, exfoliation, warm towel, extraction, soothing toner, face/neck/shoulder massage, mask, moisturizer",
    forfaits: null,
    apres: null,
  },
  {
    numero: "03",
    titre: "Professional Peeling — Radiance & Cell Renewal",
    image: "/peeling-professionnel.jpg",
    duree: "30 minutes",
    prix: "$130 + taxes",
    description: "A professional exfoliating treatment designed to stimulate cell renewal and reveal a more luminous, smooth and even complexion.",
    bienfaits: [
      "Restores radiance",
      "Smooths skin texture",
      "Stimulates cell renewal",
      "Improves texture",
      "Minimizes imperfections",
      "Evens skin tone",
    ],
    idealPour: "Dull complexion, irregular texture, imperfections, regular maintenance",
    deroulement: "Cleansing, analysis, peeling application, neutralization, soothing mask, hydrating serum, sun protection",
    forfaits: [
      "4-session package = 10% discount",
      "6-session package = 15% discount",
    ],
    apres: null,
  },
  {
    numero: "04",
    titre: "Microneedling (Skin Stimulation Treatment)",
    image: "/microneedling.webp",
    duree: "60 minutes",
    prix: "$150",
    description: "An advanced esthetic treatment that stimulates the skin with micro-needles to promote cell renewal and collagen production.",
    bienfaits: [
      "Stimulates collagen and elastin",
      "Improves texture and firmness",
      "Reduces enlarged pores",
      "Minimizes acne scars",
      "Improves fine lines",
      "Evens skin tone",
    ],
    idealPour: "Mild acne scars, enlarged pores, loss of firmness, early signs of aging",
    deroulement: "Cleansing and preparation, microneedling with serums, soothing care, post-treatment advice",
    forfaits: [
      "3-session package = 10% discount",
      "6-session package = 15% discount",
    ],
    apres: "Avoid sun 3-5 days, SPF 30+, no makeup 24h, no exfoliation, hydrate intensively",
  },
];

const bgs = ["var(--beige-clair)", "var(--gris-blanc)"];

export default async function ServicesPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations("services");
  const locale = params.locale;
  const services = locale === "en" ? SERVICES_EN : SERVICES_FR;

  return (
    <>
      <Hero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        tall={false}
        centered
        eyebrow={t("heroEyebrow")}
      />

      {services.map((service, i) => (
        <section key={service.numero} style={{ background: bgs[i % bgs.length] }}>
          <RevealSection className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

              {/* Left column — image or placeholder */}
              <div className="lg:col-span-4 reveal">
                <div className="relative aspect-[4/5] overflow-hidden mb-5">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.titre}
                      fill
                      className="object-cover object-center"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex flex-col items-center justify-center"
                      style={{
                        background: "linear-gradient(160deg, oklch(73% 0.072 158 / 0.18) 0%, oklch(87% 0.032 74 / 0.55) 60%, oklch(91% 0.014 158 / 0.30) 100%)",
                        border: "1px solid oklch(73% 0.072 158 / 0.18)",
                      }}
                    >
                      <span
                        className="font-corps leading-none select-none text-center"
                        style={{ fontSize: "clamp(5rem, 14vw, 9rem)", fontWeight: 100, color: "oklch(73% 0.072 158 / 0.18)" }}
                        aria-hidden="true"
                      >
                        {service.numero}
                      </span>
                      <span
                        className="font-corps absolute bottom-6 left-0 right-0 text-center tracking-widest uppercase"
                        style={{ fontSize: "0.65rem", fontWeight: 300, color: "oklch(53% 0.13 158 / 0.50)", letterSpacing: "0.18em" }}
                      >
                        Photo à venir
                      </span>
                    </div>
                  )}
                </div>
                <p className="font-corps text-caption text-sauge">{service.duree}</p>
              </div>

              {/* Right column — content */}
              <div className="lg:col-span-8">
                <div className="reveal mb-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <h2 className="font-corps text-headline text-texte">
                      {service.titre}
                    </h2>
                    <span className="font-corps text-title text-texte tabular-nums shrink-0">
                      {service.prix}
                    </span>
                  </div>
                  <p className="font-corps text-body text-texte-doux max-w-2xl">
                    {service.description}
                  </p>
                </div>

                {/* Bienfaits */}
                <div className="reveal mb-8" style={{ transitionDelay: "60ms" }}>
                  <p className="font-corps text-caption text-sauge mb-4">
                    {locale === "en" ? "Benefits" : "Bienfaits"}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                    {service.bienfaits.map((b) => (
                      <li key={b} className="flex items-start gap-3 font-corps text-sm text-texte-doux">
                        <span
                          className="mt-2 shrink-0 block w-4 h-px"
                          style={{ background: "var(--sauge-clair)" }}
                          aria-hidden="true"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Déroulement + Idéal pour */}
                <div
                  className="reveal grid grid-cols-1 sm:grid-cols-2 gap-0 mb-8"
                  style={{
                    borderTop: "1px solid oklch(73% 0.072 158 / 0.20)",
                    transitionDelay: "100ms",
                  }}
                >
                  <div
                    className="py-6 sm:pr-8"
                    style={{ borderBottom: "1px solid oklch(73% 0.072 158 / 0.15)" }}
                  >
                    <p className="font-corps text-caption text-sauge mb-2">
                      {locale === "en" ? "Ideal for" : "Idéal pour"}
                    </p>
                    <p className="font-corps text-sm text-texte-doux leading-relaxed">
                      {service.idealPour}
                    </p>
                  </div>
                  <div
                    className="py-6 sm:pl-8"
                    style={{
                      borderBottom: "1px solid oklch(73% 0.072 158 / 0.15)",
                      borderLeft: "1px solid oklch(73% 0.072 158 / 0.15)",
                    }}
                  >
                    <p className="font-corps text-caption text-sauge mb-2">
                      {locale === "en" ? "Protocol" : "Déroulement"}
                    </p>
                    <p className="font-corps text-sm text-texte-doux leading-relaxed">
                      {service.deroulement}
                    </p>
                  </div>
                </div>

                {/* Après le soin (microneedling) */}
                {service.apres && (
                  <div
                    className="reveal mb-8 py-5 px-6"
                    style={{
                      background: "oklch(73% 0.072 158 / 0.07)",
                      border: "1px solid oklch(73% 0.072 158 / 0.18)",
                      transitionDelay: "120ms",
                    }}
                  >
                    <p className="font-corps text-caption text-sauge mb-2">
                      {locale === "en" ? "After the treatment" : "Après le soin"}
                    </p>
                    <p className="font-corps text-sm text-texte-doux">{service.apres}</p>
                  </div>
                )}

                {/* Forfaits */}
                {service.forfaits && (
                  <div className="reveal mb-8" style={{ transitionDelay: "130ms" }}>
                    <p className="font-corps text-caption text-sauge mb-3">
                      {locale === "en" ? "Packages" : "Forfaits"}
                    </p>
                    <ul className="space-y-1">
                      {service.forfaits.map((f) => (
                        <li key={f} className="flex items-center gap-3 font-corps text-sm text-texte-doux">
                          <span
                            className="shrink-0 block w-4 h-px"
                            style={{ background: "var(--sauge-clair)" }}
                            aria-hidden="true"
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="reveal" style={{ transitionDelay: "160ms" }}>
                  <Link
                    href="/reservation"
                    className="btn-press inline-flex items-center font-corps text-caption bg-texte text-beige-clair px-8 py-4 hover:bg-sauge transition-colors duration-300"
                  >
                    {t("bookBtn")}
                  </Link>
                </div>
              </div>
            </div>
          </RevealSection>
        </section>
      ))}

      <section style={{ background: "var(--beige-clair)", borderTop: "1px solid oklch(73% 0.072 158 / 0.15)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-8">
          <p className="font-corps text-caption text-texte-doux/50 text-center">
            {t("priceNote")}
          </p>
        </div>
      </section>

      <section style={{ background: "var(--beige)" }}>
        <RevealSection className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center reveal">
            <div className="md:col-span-7">
              <p className="font-corps text-caption text-sauge mb-4">{t("consultLabel")}</p>
              <h3 className="font-corps text-headline text-texte mb-5">
                {t("consultTitle")}
              </h3>
              <p className="font-corps text-body text-texte-doux">
                {t("consultText")}
              </p>
            </div>
            <div className="md:col-span-5 md:text-right">
              <Link
                href="/reservation"
                className="btn-press inline-flex items-center justify-center font-corps text-caption bg-texte text-beige-clair px-8 py-4 hover:bg-sauge transition-colors duration-300"
              >
                {t("consultBtn")}
              </Link>
            </div>
          </div>
        </RevealSection>
      </section>
    </>
  );
}
