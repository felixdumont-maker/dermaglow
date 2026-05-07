import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import RevealSection from "@/components/RevealSection";
import Link from "next/link";
import { getPageAPropos, urlFor } from "@/lib/sanity";

const DEFAULT_POUR_QUI = [
  {
    titre: "Celles qui veulent retrouver leur éclat",
    texte:
      "Teint terne, acné, taches, pores dilatés : peu importe la préoccupation, mes soins sont conçus pour s'y attaquer avec méthode. Pas de solutions génériques — un protocole pensé pour votre peau, ici et maintenant.",
  },
  {
    titre: "Les peaux sensibles et réactives",
    texte:
      "Les peaux difficiles méritent une attention particulière. Mon approche douce et progressive respecte les peaux intolérantes, réactives ou en déséquilibre, sans jamais les agresser.",
  },
  {
    titre: "Celles qui débutent en soins professionnels",
    texte:
      "Vous n'avez jamais mis les pieds dans un institut ? Parfait. La consultation incluse dans votre premier soin est faite pour ça : vous guider, répondre à vos questions et vous mettre à l'aise.",
  },
  {
    titre: "Celles qui cherchent des résultats durables",
    texte:
      "Pas de promesses exagérées. Mon objectif est de vous aider à comprendre votre peau et à adopter des habitudes qui fonctionnent réellement, bien au-delà de votre rendez-vous.",
  },
];

const DEFAULT_APPROCHE = [
  {
    label: "01",
    titre: "L'écoute avant tout",
    texte:
      "Chaque soin commence par une conversation. J'analyse votre peau, je comprends votre quotidien, vos habitudes et vos attentes. Ce n'est qu'après cette étape que le protocole prend forme. Rien n'est décidé à l'avance.",
  },
  {
    label: "02",
    titre: "La précision dans chaque geste",
    texte:
      "Des techniques éprouvées, des produits soigneusement sélectionnés pour leur efficacité et leur tolérance cutanée. Chaque mouvement, chaque application est intentionnel. Le soin que vous méritez, sans compromis.",
  },
  {
    label: "03",
    titre: "Des résultats qui durent",
    texte:
      "Mon travail ne s'arrête pas quand vous quittez l'espace. Je vous transmets les bons gestes, les bons produits et les bonnes habitudes pour prolonger les résultats chez vous et transformer votre routine.",
  },
];

export default async function AProposPage() {
  const data = await getPageAPropos();

  const heroTitre = data?.heroTitre ?? "Derrière Dermaglow";
  const heroSousTitre = data?.heroSousTitre ?? "Esthéticienne certifiée à Chambly, je crée des soins sur mesure qui révèlent votre éclat naturel avec douceur et précision.";
  const bioImageSrc = data?.bioImage ? urlFor(data.bioImage).url() : "/approche-soin.jpg";
  const bioTexte1 = data?.bioTexte1 ?? "Un endroit chaleureux, apaisant et professionnel, pensé pour vous offrir un vrai moment de détente tout en prenant soin de votre peau. Chaque soin est réalisé dans le respect des normes d'hygiène, avec douceur et précision.";
  const bioTexte2 = data?.bioTexte2 ?? "Passionnée par les soins de la peau, j'ai choisi de me certifier en soins du visage et peeling pour vous offrir des traitements efficaces, sécuritaires et adaptés à vos besoins. Mon objectif : révéler l'éclat naturel de votre peau et vous aider à vous sentir belle et confiante.";
  const pourQui = data?.pourQui && data.pourQui.length > 0 ? data.pourQui : DEFAULT_POUR_QUI;
  const approche = data?.approchePilliers && data.approchePilliers.length > 0 ? data.approchePilliers : DEFAULT_APPROCHE;
  const pourquoiTexte = data?.pourquoiTexte ?? "Parce que chaque peau est unique. Je prends le temps de vous écouter, de comprendre vos besoins et de vous accompagner dans votre parcours beauté avec sérieux et bienveillance.";
  const formationImageSrc = data?.formationImage ? urlFor(data.formationImage).url() : "/aya-benzekri.png";
  const formationTitre = data?.formationTitre ?? "Certifiée et formée à la source";
  const formationTexte1 = data?.formationTexte1 ?? "C'est à l'Académie Aya Benzekri que Hanane a acquis les bases solides et les techniques avancées qui définissent aujourd'hui son approche. Une formation rigoureuse axée sur la maîtrise des soins du visage, des peelings chimiques et des protocoles adaptés à tous les types de peau.";
  const formationTexte2 = data?.formationTexte2 ?? "Reconnue pour l'excellence de son enseignement, l'Académie Aya Benzekri forme des esthéticiennes professionnelles avec un souci constant du détail, de l'hygiène et du résultat. Des valeurs que Hanane applique à chaque soin qu'elle réalise.";
  const formationSpecialisations = data?.formationSpecialisations ?? ["Soins du visage avancés", "Peelings chimiques AHA/BHA", "Analyse et bilan cutané", "Soins adaptés peaux sensibles"];
  const formationCertifications = data?.formationCertifications ?? ["Esthéticienne certifiée", "Peeling chimique professionnel", "Soins de la peau — niveau avancé"];

  return (
    <>
      <Hero
        title={heroTitre}
        subtitle={heroSousTitre}
        tall={false}
        centered
        eyebrow="À propos · Dermaglow by Hanane"
      />

      {/* Bio */}
      <SectionWrapper bg="beige-clair">
        <RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center stagger">
            <div className="relative aspect-[4/5] max-h-72 md:max-h-none overflow-hidden">
              <img
                src={bioImageSrc}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-6 left-6 z-10">
                <span
                  className="font-corps text-caption"
                  style={{ color: "oklch(95% 0.010 78 / 0.6)" }}
                >
                  Chambly, Québec
                </span>
              </div>
            </div>

            <div>
              <p className="font-corps text-caption text-sauge mb-4">À propos</p>
              <h2 className="font-titre text-headline text-texte mb-2">
                Hanane Ali-Eddine
              </h2>
              <p className="font-corps text-sm text-texte-doux tracking-wide mb-8">
                Esthéticienne certifiée
              </p>
              <p className="font-corps text-body text-texte-doux mb-5">
                {bioTexte1}
              </p>
              <p className="font-corps text-body text-texte-doux mb-8">
                {bioTexte2}
              </p>
              <Link
                href="/reservation"
                className="btn-press inline-flex items-center font-corps text-caption bg-sauge text-white px-8 py-4 hover:bg-sauge/80 transition-colors duration-300"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </RevealSection>
      </SectionWrapper>

      {/* Formation */}
      <SectionWrapper bg="beige">
        <RevealSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <div className="lg:col-span-4 reveal">
              <p className="font-corps text-caption text-sauge mb-4">Formation</p>
              <h2 className="font-corps text-headline text-texte">
                {formationTitre}
              </h2>
            </div>

            <div className="lg:col-span-8 reveal" style={{ transitionDelay: "100ms" }}>
              <div
                className="pb-10 mb-10"
                style={{ borderBottom: "1px solid oklch(73% 0.072 158 / 0.22)" }}
              >
                <div className="relative overflow-hidden mb-8" style={{ aspectRatio: "16/7" }}>
                  <img
                    src={formationImageSrc}
                    alt="Académie Aya Benzekri"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                <div className="flex items-start justify-between gap-8 flex-wrap mb-5">
                  <div>
                    <h3 className="font-corps text-title text-texte mb-1">Académie Aya Benzekri</h3>
                    <p className="font-corps text-sm text-texte-leger">1310 Bd des Récollets, Trois-Rivières, QC G8Z 3X2</p>
                  </div>
                  <a
                    href="https://academieaya.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-corps text-caption text-sauge shrink-0 inline-flex items-center gap-2 link-slide group"
                  >
                    academieaya.ca
                    <span className="block h-px w-4 bg-sauge transition-all duration-300 group-hover:w-6" />
                  </a>
                </div>
                <p className="font-corps text-body text-texte-doux mb-4">
                  {formationTexte1}
                </p>
                <p className="font-corps text-body text-texte-doux">
                  {formationTexte2}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <p className="font-corps text-caption text-sauge mb-3">Spécialisations</p>
                  <ul className="space-y-2">
                    {formationSpecialisations.map((item) => (
                      <li key={item} className="flex items-start gap-3 font-corps text-sm text-texte-doux">
                        <span className="mt-2 shrink-0 block w-4 h-px" style={{ background: "var(--sauge-clair)" }} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-corps text-caption text-sauge mb-3">Certifications</p>
                  <ul className="space-y-2">
                    {formationCertifications.map((item) => (
                      <li key={item} className="flex items-start gap-3 font-corps text-sm text-texte-doux">
                        <span className="mt-2 shrink-0 block w-4 h-px" style={{ background: "var(--sauge-clair)" }} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </SectionWrapper>

      {/* Pour qui */}
      <SectionWrapper bg="gris-blanc">
        <RevealSection>
          <div className="mb-16 reveal">
            <p className="font-corps text-caption text-sauge mb-4">Clientèle</p>
            <h2 className="font-corps text-headline text-texte max-w-xl">
              Pour qui sont ces soins ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 stagger">
            {pourQui.map((item, i) => (
              <div
                key={i}
                className="py-10 pr-0 md:pr-16"
                style={{
                  borderTop: "1px solid oklch(73% 0.072 158 / 0.20)",
                  borderRight: i % 2 === 0 ? "1px solid oklch(73% 0.072 158 / 0.20)" : undefined,
                }}
              >
                <span className="font-corps text-caption text-sauge/50 tabular-nums block mb-5 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-corps text-title text-texte mb-4 leading-snug">
                  {item.titre}
                </h3>
                <p className="font-corps text-body text-texte-doux">
                  {item.texte}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>
      </SectionWrapper>

      {/* Mon approche */}
      <SectionWrapper bg="beige-clair">
        <RevealSection>
          <div className="mb-16 reveal">
            <p className="font-corps text-caption text-sauge mb-4">Méthode</p>
            <h2 className="font-corps text-headline text-texte max-w-xl">
              Mon approche, en trois temps
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 stagger">
            {approche.map((item, i) => (
              <div
                key={i}
                className="py-10 lg:pr-12"
                style={{
                  borderTop: "1px solid oklch(73% 0.072 158 / 0.22)",
                  borderRight: i < approche.length - 1 ? "1px solid oklch(73% 0.072 158 / 0.22)" : undefined,
                }}
              >
                <span
                  className="font-corps leading-none text-texte-leger/15 select-none block mb-6"
                  style={{ fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 100 }}
                  aria-hidden="true"
                >
                  {item.label}
                </span>
                <h3 className="font-corps text-title text-texte mb-4">
                  {item.titre}
                </h3>
                <p className="font-corps text-body text-texte-doux">
                  {item.texte}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>
      </SectionWrapper>

      {/* Pourquoi me choisir */}
      <SectionWrapper bg="beige">
        <RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start stagger">
            <div className="md:col-span-4">
              <p className="font-corps text-caption text-sauge mb-4">Engagement</p>
              <h2 className="font-corps text-headline text-texte whitespace-nowrap">Pourquoi me choisir ?</h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="font-corps text-title text-texte leading-snug mb-10">
                {pourquoiTexte}
              </p>
              <Link
                href="/reservation"
                className="btn-press inline-flex items-center font-corps text-caption bg-texte text-beige-clair px-8 py-4 hover:bg-sauge transition-colors duration-300"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </RevealSection>
      </SectionWrapper>
    </>
  );
}
