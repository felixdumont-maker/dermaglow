import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import RevealSection from "@/components/RevealSection";
import { Link } from "@/i18n/navigation";
import { getPageAPropos, urlFor } from "@/lib/sanity";
import { getTranslations, getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return buildMetadata({
    locale: params.locale,
    path: "/a-propos",
    titleFr: "Hanane Ali-Eddine | Esthéticienne certifiée à Verdun | Dermaglow",
    titleEn: "Hanane Ali-Eddine | Certified Esthetician in Verdun | Dermaglow",
    descriptionFr: "Rencontrez Hanane Ali-Eddine, esthéticienne certifiée à Verdun. Formée à l'Académie Aya Benzekri, spécialisée en soins du visage, peelings chimiques et microneedling. Approche douce et personnalisée.",
    descriptionEn: "Meet Hanane Ali-Eddine, certified esthetician in Verdun, QC. Trained at Académie Aya Benzekri, specialized in facials, chemical peeling and microneedling. Gentle, personalized approach.",
    keywordsFr: ["Hanane Ali-Eddine esthéticienne", "esthéticienne certifiée Verdun", "Académie Aya Benzekri"],
    keywordsEn: ["Hanane Ali-Eddine esthetician", "certified esthetician Verdun Montreal"],
  });
}

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

const DEFAULT_POUR_QUI_EN = [
  {
    titre: "Those who want to restore their radiance",
    texte:
      "Dull complexion, acne, spots, enlarged pores: whatever the concern, my treatments are designed to tackle it methodically. No generic solutions — a protocol designed for your skin, here and now.",
  },
  {
    titre: "Sensitive and reactive skin",
    texte:
      "Difficult skin deserves special attention. My gentle, progressive approach respects intolerant, reactive or imbalanced skin without ever being aggressive.",
  },
  {
    titre: "Those new to professional skincare",
    texte:
      "Never been to a beauty institute? Perfect. The consultation included in your first treatment is designed just for that: to guide you, answer your questions and put you at ease.",
  },
  {
    titre: "Those seeking lasting results",
    texte:
      "No exaggerated promises. My goal is to help you understand your skin and adopt habits that genuinely work, well beyond your appointment.",
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

const DEFAULT_APPROCHE_EN = [
  {
    label: "01",
    titre: "Listening first",
    texte:
      "Every treatment begins with a conversation. I analyze your skin, understand your daily routine, habits and expectations. Only after this step does the protocol take shape. Nothing is decided in advance.",
  },
  {
    label: "02",
    titre: "Precision in every gesture",
    texte:
      "Proven techniques, products carefully selected for their efficacy and skin tolerance. Every movement, every application is intentional. The care you deserve, without compromise.",
  },
  {
    label: "03",
    titre: "Results that last",
    texte:
      "My work doesn't stop when you leave. I pass on the right gestures, products and habits to extend results at home and transform your routine.",
  },
];

export default async function AProposPage() {
  const [t, locale, data] = await Promise.all([
    getTranslations("about"),
    getLocale(),
    getPageAPropos(),
  ]);

  const heroTitre = data?.heroTitre ?? "Derrière Dermaglow";
  const heroSousTitre = data?.heroSousTitre ?? "Esthéticienne certifiée à Verdun, je crée des soins sur mesure qui révèlent votre éclat naturel avec douceur et précision.";
  const bioImageSrc = data?.bioImage ? urlFor(data.bioImage).url() : "/portrait-hanane.jpg";
  const bioTexte1 = data?.bioTexte1 ?? "Un endroit chaleureux, apaisant et professionnel, pensé pour vous offrir un vrai moment de détente tout en prenant soin de votre peau. Chaque soin est réalisé dans le respect des normes d'hygiène, avec douceur et précision.";
  const bioTexte2 = data?.bioTexte2 ?? "Passionnée par les soins de la peau, j'ai choisi de me certifier en soins du visage et peeling pour vous offrir des traitements efficaces, sécuritaires et adaptés à vos besoins. Mon objectif : révéler l'éclat naturel de votre peau et vous aider à vous sentir belle et confiante.";
  const pourQui = data?.pourQui && data.pourQui.length > 0
    ? data.pourQui
    : (locale === "en" ? DEFAULT_POUR_QUI_EN : DEFAULT_POUR_QUI);
  const approche = data?.approchePilliers && data.approchePilliers.length > 0
    ? data.approchePilliers
    : (locale === "en" ? DEFAULT_APPROCHE_EN : DEFAULT_APPROCHE);
  const pourquoiTexte = data?.pourquoiTexte ?? "Parce que chaque peau est unique. Je prends le temps de vous écouter, de comprendre vos besoins et de vous accompagner dans votre parcours beauté avec sérieux et bienveillance.";
  const formationImageSrc = data?.formationImage ? urlFor(data.formationImage).url() : "/formation-hanane.jpg";
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
        eyebrow={t("heroEyebrow")}
      />

      {/* Bio */}
      <SectionWrapper bg="beige-clair">
        <RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center stagger">
            <div className="relative aspect-[4/5] max-h-72 md:max-h-none overflow-hidden">
              <Image
                src={bioImageSrc}
                alt="Hanane Ali-Eddine, esthéticienne"
                fill
                className="object-cover object-center"
              />
              <div className="absolute bottom-6 left-6 z-10">
                <span
                  className="font-corps text-caption"
                  style={{ color: "oklch(95% 0.010 78 / 0.6)" }}
                >
                  {t("locationCaption")}
                </span>
              </div>
            </div>

            <div>
              <p className="font-corps text-caption text-sauge mb-4">{t("sectionLabel")}</p>
              <h2 className="font-titre text-headline text-texte mb-2">
                {t("name")}
              </h2>
              <p className="font-corps text-sm text-texte-doux tracking-wide mb-8">
                {t("title")}
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
                {t("bookBtn")}
              </Link>
            </div>
          </div>
        </RevealSection>
      </SectionWrapper>

      {/* Mon espace à Verdun */}
      <SectionWrapper bg="beige">
        <RevealSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <div className="lg:col-span-4 reveal">
              <p className="font-corps text-caption text-sauge mb-4">
                {locale === "en" ? "My space" : "Mon espace"}
              </p>
              <h2 className="font-corps text-headline text-texte">
                {locale === "en" ? "My space in Verdun" : "Mon espace à Verdun"}
              </h2>
            </div>

            <div className="lg:col-span-8 reveal" style={{ transitionDelay: "80ms" }}>
              <div
                className="pb-10 mb-10"
                style={{ borderBottom: "1px solid oklch(73% 0.072 158 / 0.22)" }}
              >
                {/* Photo placeholder */}
                <div
                  className="relative overflow-hidden mb-8 flex flex-col items-center justify-center"
                  style={{
                    aspectRatio: "16/7",
                    background: "linear-gradient(145deg, oklch(73% 0.072 158 / 0.15) 0%, oklch(87% 0.032 74 / 0.50) 55%, oklch(91% 0.014 158 / 0.28) 100%)",
                    border: "1px solid oklch(73% 0.072 158 / 0.18)",
                  }}
                >
                  <span
                    className="font-corps select-none"
                    style={{
                      fontSize: "clamp(4rem, 12vw, 8rem)",
                      fontWeight: 100,
                      color: "oklch(73% 0.072 158 / 0.15)",
                      lineHeight: 1,
                    }}
                    aria-hidden="true"
                  >
                    ✦
                  </span>
                  <span
                    className="font-corps absolute bottom-5 left-0 right-0 text-center tracking-widest uppercase"
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 300,
                      color: "oklch(53% 0.13 158 / 0.45)",
                      letterSpacing: "0.18em",
                    }}
                  >
                    Photo à venir
                  </span>
                </div>

                <p className="font-corps text-body text-texte-doux mb-4">
                  {locale === "en"
                    ? "Welcome to my esthetic treatment space in Verdun — a calm and intimate setting designed for your well-being. Working from home, I welcome you in a warm, clean and carefully arranged environment where every treatment is performed with attention and professionalism."
                    : "Bienvenue dans mon espace de soins esthétiques situé à Verdun, un lieu calme et intime pensé pour votre bien-être. Installée à domicile, je vous accueille dans un environnement chaleureux, propre et soigneusement aménagé, où chaque soin est réalisé avec attention et professionnalisme."}
                </p>
                <p className="font-corps text-body text-texte-doux mb-4">
                  {locale === "en"
                    ? "Easily accessible, my space is just a few minutes from downtown Montreal, while offering a more peaceful setting, away from the stress and urban bustle. It's the ideal place to enjoy a complete moment of relaxation, in full tranquility."
                    : "Facilement accessible, mon espace se trouve à quelques minutes du centre-ville de Montréal, tout en offrant un cadre plus paisible, loin du stress et de l'agitation urbaine. C'est l'endroit idéal pour profiter d'un moment de détente complet, en toute tranquillité."}
                </p>
                <p className="font-corps text-body text-texte-doux">
                  {locale === "en"
                    ? "I offer personalized esthetic treatments, tailored to your needs, with a gentle, modern and results-oriented approach."
                    : "Je mets à votre disposition des soins esthétiques personnalisés, adaptés à vos besoins, dans une approche douce, moderne et axée sur les résultats."}
                </p>
              </div>

              {/* Citation mise en valeur */}
              <blockquote
                className="relative pl-8"
                style={{ borderLeft: "2px solid var(--sauge)" }}
              >
                <p
                  className="font-corps text-title text-texte italic leading-snug"
                  style={{ color: "var(--texte)" }}
                >
                  &ldquo;{locale === "en"
                    ? "A private space, by appointment only, to guarantee an exclusive and personalized experience."
                    : "Un espace privé, sur rendez-vous seulement, pour garantir une expérience exclusive et personnalisée."}&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </RevealSection>
      </SectionWrapper>

      {/* Formation */}
      <SectionWrapper bg="beige">
        <RevealSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <div className="lg:col-span-4 reveal">
              <p className="font-corps text-caption text-sauge mb-4">{t("trainingLabel")}</p>
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
                  <Image
                    src={formationImageSrc}
                    alt="Académie Aya Benzekri"
                    fill
                    className="object-cover object-center"
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
                  <p className="font-corps text-caption text-sauge mb-3">{t("specializations")}</p>
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
                  <p className="font-corps text-caption text-sauge mb-3">{t("certifications")}</p>
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
            <p className="font-corps text-caption text-sauge mb-4">{t("clienteleLabel")}</p>
            <h2 className="font-corps text-headline text-texte max-w-xl">
              {t("clienteleTitle")}
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
            <p className="font-corps text-caption text-sauge mb-4">{t("methodLabel")}</p>
            <h2 className="font-corps text-headline text-texte max-w-xl">
              {t("methodTitle")}
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
              <p className="font-corps text-caption text-sauge mb-4">{t("engagementLabel")}</p>
              <h2 className="font-corps text-headline text-texte whitespace-nowrap">{t("engagementTitle")}</h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="font-corps text-title text-texte leading-snug mb-10">
                {pourquoiTexte}
              </p>
              <Link
                href="/reservation"
                className="btn-press inline-flex items-center font-corps text-caption bg-texte text-beige-clair px-8 py-4 hover:bg-sauge transition-colors duration-300"
              >
                {t("engagementBtn")}
              </Link>
            </div>
          </div>
        </RevealSection>
      </SectionWrapper>
    </>
  );
}
