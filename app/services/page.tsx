import Hero from "@/components/Hero";
import RevealSection from "@/components/RevealSection";
import Link from "next/link";
import { getServices, urlFor } from "@/lib/sanity";


const facial = {
  numero: "01",
  image: "/portrait-hanane.jpg",
  eyebrow: "Soin signature",
  titre: "Soin de visage facial",
  description:
    "Conçu pour s'adapter à votre peau, ce soin complet commence par une analyse approfondie de votre type de peau et de vos préoccupations du moment. Nettoyage en profondeur, exfoliation douce, soins ciblés et hydratation intensive — chaque étape est pensée pour révéler une peau plus nette, plus lumineuse et en pleine santé. Un moment de détente totale, autant pour la peau que pour l'esprit.",
  inclus: [
    "Analyse de la peau et bilan personnalisé",
    "Double nettoyage en profondeur",
    "Exfoliation douce adaptée à votre type de peau",
    "Extraction douce (si nécessaire)",
    "Application d'un masque ciblé",
    "Sérum actif et hydratation",
  ],
  variations: [
    {
      nom: "Essentiel",
      duree: "45 min",
      prix: "65 $",
      detail: "Nettoyage, exfoliation et hydratation de base. Idéal pour l'entretien régulier.",
    },
    {
      nom: "Signature",
      duree: "75 min",
      prix: "95 $",
      detail: "Protocole complet avec masque, sérum et soin hydratant ciblé. Notre soin le plus populaire.",
      vedette: true,
    },
    {
      nom: "Prestige",
      duree: "90 min",
      prix: "125 $",
      detail: "L'expérience ultime : soin Signature enrichi d'un massage visage, cou et décolleté et d'une ampoule active sur mesure.",
    },
  ],
};

const peeling = {
  numero: "02",
  image: "/peeling-soin.jpg",
  eyebrow: "Traitement de renouvellement",
  titre: "Peeling",
  description:
    "Le peeling est un traitement de renouvellement cellulaire qui favorise l'élimination des cellules mortes en surface pour révéler une peau neuve, plus lisse et plus lumineuse. Réalisé avec des formules soigneusement dosées selon votre type de peau, il atténue les taches, réduit les imperfections et unifie le teint. Un traitement efficace, sécuritaire et adaptable à toutes les peaux.",
  inclus: [
    "Consultation pré-traitement obligatoire",
    "Nettoyage préparatoire",
    "Application du peeling chimique (AHA/BHA selon la peau)",
    "Neutralisation et soin apaisant",
    "Protection solaire incluse",
    "Recommandations post-soin personnalisées",
  ],
  variations: [
    {
      nom: "Éclat",
      duree: "30 min",
      prix: "75 $",
      detail: "Peeling doux aux AHA, idéal pour les peaux sensibles ou une première expérience.",
    },
    {
      nom: "Rééquilibrant",
      duree: "45 min",
      prix: "95 $",
      detail: "Pour les peaux à imperfections, taches légères et teint irrégulier. Formule AHA/BHA combinée.",
      vedette: true,
    },
    {
      nom: "Régénérateur",
      duree: "60 min",
      prix: "115 $",
      detail: "Traitement intensif pour les peaux matures ou marquées, suivi d'un soin hydratant réparateur.",
    },
  ],
};

const DEFAULT_FALLBACK_IMAGES = ["/portrait-hanane.jpg", "/peeling-soin.jpg"];

function ServiceSection({
  service,
  bg,
}: {
  service: typeof facial;
  bg: string;
}) {
  return (
    <section style={{ background: bg }}>
      <RevealSection className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left: image or number + eyebrow */}
          <div className="lg:col-span-4 reveal">
            {service.image ? (
              <div className="relative aspect-[4/5] overflow-hidden mb-4">
                <img
                  src={service.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
            ) : (
              <span
                className="font-corps leading-none text-texte-leger/15 select-none block mb-4"
                style={{ fontSize: "clamp(4rem, 10vw, 8rem)", fontWeight: 100 }}
                aria-hidden="true"
              >
                {service.numero}
              </span>
            )}
            <p className="font-corps text-caption text-sauge">{service.eyebrow}</p>
          </div>

          {/* Right: full content */}
          <div className="lg:col-span-8">

            <div className="reveal">
              <h2 className="font-corps text-headline text-texte mb-6">
                {service.titre}
              </h2>
              <p className="font-corps text-body text-texte-doux mb-10 max-w-2xl">
                {service.description}
              </p>
            </div>

            {/* Inclus */}
            <div className="reveal mb-12" style={{ transitionDelay: "80ms" }}>
              <p className="font-corps text-caption text-sauge mb-5">Ce qui est inclus</p>
              <ul className="space-y-3">
                {service.inclus.map((item) => (
                  <li key={item} className="flex items-start gap-4 font-corps text-sm text-texte-doux">
                    <span
                      className="mt-2 shrink-0 block w-4 h-px"
                      style={{ background: "var(--sauge-clair)" }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Variations */}
            <div className="reveal" style={{ transitionDelay: "140ms" }}>
              <p className="font-corps text-caption text-sauge mb-0">Formules et tarifs</p>
              <div
                className="mt-5"
                style={{ borderTop: "1px solid oklch(73% 0.072 158 / 0.30)" }}
              >
                {service.variations.map((v) => (
                  <div
                    key={v.nom}
                    className="grid grid-cols-12 gap-4 md:gap-8 py-6"
                    style={{ borderBottom: "1px solid oklch(73% 0.072 158 / 0.18)" }}
                  >
                    <div className="col-span-12 md:col-span-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-corps text-title text-texte">{v.nom}</span>
                        {v.vedette && (
                          <span className="font-corps text-caption text-white bg-sauge px-2.5 py-0.5">
                            Populaire
                          </span>
                        )}
                      </div>
                      <p className="font-corps text-sm text-texte-doux leading-relaxed">{v.detail}</p>
                    </div>
                    <div className="col-span-6 md:col-span-4 flex items-center">
                      <span className="font-corps text-caption text-texte-doux">{v.duree}</span>
                    </div>
                    <div className="col-span-6 md:col-span-3 flex items-center md:justify-end">
                      <span className="font-corps text-title text-texte tabular-nums">{v.prix}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 reveal" style={{ transitionDelay: "180ms" }}>
              <Link
                href="/reservation"
                className="btn-press inline-flex items-center font-corps text-caption bg-texte text-beige-clair px-8 py-4 hover:bg-sauge transition-colors duration-300"
              >
                Réserver ce soin
              </Link>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}

export default async function ServicesPage() {
  const sanityServices = await getServices();

  const servicesToRender = sanityServices.length > 0
    ? sanityServices.map((s, i) => ({
        numero: s.numero ?? String(i + 1).padStart(2, "0"),
        image: s.image ? urlFor(s.image).url() : DEFAULT_FALLBACK_IMAGES[i] ?? null,
        eyebrow: s.eyebrow ?? "",
        titre: s.titre,
        description: s.description ?? "",
        inclus: s.inclus ?? [],
        variations: (s.variations ?? []).map((v) => ({
          nom: v.nom,
          duree: v.duree,
          prix: v.prix,
          detail: v.detail,
          vedette: v.vedette,
        })),
      }))
    : [facial, peeling];

  const bgs = ["var(--beige-clair)", "var(--gris-blanc)"];

  return (
    <>
      <Hero
        title="Mes soins"
        subtitle="Chaque soin est une invitation à vous reconnecter à vous-même."
        tall={false}
        centered
        eyebrow="Menu de soins · Dermaglow by Hanane"
      />

      {servicesToRender.map((service, i) => (
        <ServiceSection
          key={service.titre}
          service={service as typeof facial}
          bg={bgs[i % bgs.length]}
        />
      ))}

      {/* Note tarifaire */}
      <section style={{ background: "var(--beige-clair)", borderTop: "1px solid oklch(73% 0.072 158 / 0.15)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-8">
          <p className="font-corps text-caption text-texte-doux/50 text-center">
            Les prix indiqués sont à titre indicatif. Une consultation est incluse au premier soin.
          </p>
        </div>
      </section>

      {/* Consultation CTA */}
      <section style={{ background: "var(--beige)" }}>
        <RevealSection className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center reveal">
            <div className="md:col-span-7">
              <p className="font-corps text-caption text-sauge mb-4">À noter</p>
              <h3 className="font-corps text-headline text-texte mb-5">
                Consultation incluse
              </h3>
              <p className="font-corps text-body text-texte-doux">
                Chaque nouvelle cliente bénéficie d&apos;une consultation personnalisée pour analyser
                sa peau et déterminer le protocole idéal. Cette analyse est incluse dans le premier soin.
              </p>
            </div>
            <div className="md:col-span-5 md:text-right">
              <Link
                href="/reservation"
                className="btn-press inline-flex items-center justify-center font-corps text-caption bg-texte text-beige-clair px-8 py-4 hover:bg-sauge transition-colors duration-300"
              >
                Réserver un soin
              </Link>
            </div>
          </div>
        </RevealSection>
      </section>
    </>
  );
}
