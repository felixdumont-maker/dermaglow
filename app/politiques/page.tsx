import Hero from "@/components/Hero";
import RevealSection from "@/components/RevealSection";
import Link from "next/link";

const sections = [
  {
    numero: "01",
    titre: "Politique d'annulation",
    contenu: [
      {
        sous_titre: "Annulation standard",
        texte:
          "Toute annulation ou modification de rendez-vous doit être effectuée au moins 24 heures avant l'heure prévue du soin. Vous pouvez nous contacter par courriel à dermaglowbyhanane@gmail.com ou via le formulaire de réservation en ligne.",
      },
      {
        sous_titre: "Annulation tardive",
        texte:
          "Une annulation effectuée moins de 24 heures à l'avance entraîne des frais équivalant à 50 % du tarif du soin réservé. Ce montant sera exigible lors de votre prochain rendez-vous.",
      },
      {
        sous_titre: "Absence sans préavis",
        texte:
          "En cas d'absence sans annulation préalable (no-show), la totalité du tarif du soin sera facturée. Un historique de no-shows répétés peut entraîner le refus de futures réservations.",
      },
    ],
  },
  {
    numero: "02",
    titre: "Retards",
    contenu: [
      {
        sous_titre: "Retard de la cliente",
        texte:
          "Nous vous demandons d'arriver à l'heure prévue pour votre rendez-vous. Un retard de plus de 10 minutes entraîne un raccourcissement du soin afin de respecter les créneaux des autres clientes. Un retard supérieur à 15 minutes peut nécessiter une reprogrammation du rendez-vous.",
      },
      {
        sous_titre: "Circonstances exceptionnelles",
        texte:
          "Nous comprenons que des imprévus peuvent survenir. En cas d'urgence, contactez-nous dès que possible au dermaglowbyhanane@gmail.com. Nous ferons notre possible pour trouver une solution adaptée.",
      },
    ],
  },
  {
    numero: "03",
    titre: "Contre-indications",
    contenu: [
      {
        sous_titre: "Conditions générales",
        texte:
          "Certaines conditions de peau ou traitements médicaux peuvent contre-indiquer la réalisation d'un soin. Il est de votre responsabilité d'informer votre esthéticienne de tout traitement dermatologique en cours, prescription médicale (notamment rétinoïdes ou antibiotiques), ou condition cutanée active.",
      },
      {
        sous_titre: "Peeling chimique",
        texte:
          "Le peeling est contre-indiqué en cas de grossesse, d'allaitement, d'exposition solaire intense dans les 2 semaines précédant le soin, de traitement à l'isotrétinoïne (Accutane) dans les 6 derniers mois, de peau lésée ou en phase inflammatoire active. Une consultation préalable obligatoire est incluse avant tout premier peeling.",
      },
      {
        sous_titre: "Responsabilité",
        texte:
          "Dermaglow by Hanane se réserve le droit de refuser ou d'interrompre un soin si une contre-indication est détectée lors de la consultation, afin d'assurer votre sécurité. Aucuns frais ne seront facturés dans ce cas.",
      },
    ],
  },
  {
    numero: "04",
    titre: "Préparation avant le soin",
    contenu: [
      {
        sous_titre: "Recommandations générales",
        texte:
          "Arrivez de préférence sans maquillage. Évitez l'utilisation d'acides, de rétinoïdes ou de produits exfoliants dans les 48 heures précédant votre rendez-vous. Signalez tout changement dans votre routine de soins ou votre état de santé depuis votre dernière visite.",
      },
      {
        sous_titre: "Avant un peeling",
        texte:
          "Évitez toute exposition solaire intense et l'utilisation d'autobronzant dans les deux semaines précédant le traitement. N'épillez pas la zone à traiter dans les 72 heures avant le soin. Des recommandations spécifiques vous seront envoyées par courriel à la confirmation de votre rendez-vous.",
      },
    ],
  },
  {
    numero: "05",
    titre: "Hygiène et sécurité",
    contenu: [
      {
        sous_titre: "Protocoles d'hygiène",
        texte:
          "Tous les soins sont réalisés dans le strict respect des normes d'hygiène professionnelles. Le matériel utilisé est désinfecté ou à usage unique selon les protocoles en vigueur. L'espace de soin est nettoyé et désinfecté entre chaque cliente.",
      },
      {
        sous_titre: "Santé de la cliente",
        texte:
          "Si vous présentez des symptômes de maladie infectieuse le jour de votre rendez-vous, nous vous demandons de nous en informer et de reporter votre soin. Aucuns frais d'annulation ne seront appliqués dans ce cas.",
      },
    ],
  },
  {
    numero: "06",
    titre: "Paiements",
    contenu: [
      {
        sous_titre: "Modes de paiement acceptés",
        texte:
          "Nous acceptons le virement Interac, les cartes de crédit (Visa, Mastercard) et les paiements en espèces. Aucuns frais de transaction ne sont appliqués. Le paiement s'effectue en personne à la fin de chaque soin.",
      },
      {
        sous_titre: "Tarifs",
        texte:
          "Les tarifs affichés sur le site sont à titre indicatif. Ils peuvent être ajustés selon les besoins spécifiques identifiés lors de la consultation. Vous serez informée du tarif exact avant le début du soin.",
      },
    ],
  },
];

export default function PolitiquesPage() {
  return (
    <>
      <Hero
        title="Politiques et informations"
        subtitle="Tout ce que vous devez savoir avant votre visite chez Dermaglow by Hanane."
        tall={false}
        centered
        eyebrow="Informations · Dermaglow by Hanane"
      />

      <section style={{ background: "var(--beige-clair)" }}>
        <RevealSection className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">

          {sections.map((section, i) => (
            <div
              key={section.numero}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-16 reveal"
              style={{
                borderTop: "1px solid oklch(73% 0.072 158 / 0.20)",
                transitionDelay: `${i * 40}ms`,
              }}
            >
              {/* Left — numéro + titre */}
              <div className="lg:col-span-4">
                <span
                  className="font-corps leading-none text-texte-leger/10 select-none block mb-3"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 100 }}
                  aria-hidden="true"
                >
                  {section.numero}
                </span>
                <h2 className="font-corps text-title text-texte font-semibold">
                  {section.titre}
                </h2>
              </div>

              {/* Right — contenu */}
              <div className="lg:col-span-8 space-y-8">
                {section.contenu.map(({ sous_titre, texte }) => (
                  <div key={sous_titre}>
                    <p className="font-corps text-caption text-sauge mb-3">{sous_titre}</p>
                    <p className="font-corps text-body text-texte-doux">{texte}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div
            className="pt-16 reveal"
            style={{ borderTop: "1px solid oklch(73% 0.072 158 / 0.20)" }}
          >
            <p className="font-corps text-body text-texte-doux max-w-2xl mb-8">
              Des questions sur nos politiques ? N&apos;hésitez pas à nous contacter avant votre rendez-vous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/reservation"
                className="btn-press inline-flex items-center justify-center font-corps text-caption bg-texte text-beige-clair px-8 py-4 hover:bg-sauge transition-colors duration-300"
              >
                Prendre rendez-vous
              </Link>
              <Link
                href="/contact"
                className="btn-press inline-flex items-center justify-center font-corps text-caption border border-texte-leger text-texte-doux px-8 py-4 hover:border-sauge hover:text-sauge transition-colors duration-300"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </RevealSection>
      </section>
    </>
  );
}
