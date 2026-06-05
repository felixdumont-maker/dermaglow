import type { Metadata } from "next";
import Hero from "@/components/Hero";
import RevealSection from "@/components/RevealSection";
import { Link } from "@/i18n/navigation";
import { getPagePolitiques } from "@/lib/sanity";
import { getTranslations, getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return buildMetadata({
    locale: params.locale,
    path: "/politiques",
    titleFr: "Politiques & Informations | Dermaglow by Hanane | Verdun",
    titleEn: "Policies & Information | Dermaglow by Hanane | Verdun",
    descriptionFr: "Politiques d'annulation, retards, contre-indications et paiement chez Dermaglow by Hanane à Verdun. Tout ce que vous devez savoir avant votre rendez-vous.",
    descriptionEn: "Cancellation policy, late arrivals, contraindications and payment at Dermaglow by Hanane in Verdun. Everything you need to know before your appointment.",
  });
}

const DEFAULT_SECTIONS = [
  {
    numero: "01",
    titre: "Politique d'annulation",
    contenu: [
      { sous_titre: "Annulation standard", texte: "Toute annulation ou modification de rendez-vous doit être effectuée au moins 24 heures avant l'heure prévue du soin. Vous pouvez nous contacter par courriel à dermaglowbyhanane@gmail.com ou via le formulaire de réservation en ligne." },
      { sous_titre: "Annulation tardive", texte: "Une annulation effectuée moins de 24 heures à l'avance entraîne des frais équivalant à 50 % du tarif du soin réservé. Ce montant sera exigible lors de votre prochain rendez-vous." },
      { sous_titre: "Absence sans préavis", texte: "En cas d'absence sans annulation préalable (no-show), la totalité du tarif du soin sera facturée. Un historique de no-shows répétés peut entraîner le refus de futures réservations." },
    ],
  },
  {
    numero: "02",
    titre: "Retards",
    contenu: [
      { sous_titre: "Retard de la cliente", texte: "Nous vous demandons d'arriver à l'heure prévue pour votre rendez-vous. Un retard de plus de 10 minutes entraîne un raccourcissement du soin afin de respecter les créneaux des autres clientes. Un retard supérieur à 15 minutes peut nécessiter une reprogrammation du rendez-vous." },
      { sous_titre: "Circonstances exceptionnelles", texte: "Nous comprenons que des imprévus peuvent survenir. En cas d'urgence, contactez-nous dès que possible au dermaglowbyhanane@gmail.com. Nous ferons notre possible pour trouver une solution adaptée." },
    ],
  },
  {
    numero: "03",
    titre: "Contre-indications",
    contenu: [
      { sous_titre: "Conditions générales", texte: "Certaines conditions de peau ou traitements médicaux peuvent contre-indiquer la réalisation d'un soin. Il est de votre responsabilité d'informer votre esthéticienne de tout traitement dermatologique en cours, prescription médicale (notamment rétinoïdes ou antibiotiques), ou condition cutanée active." },
      { sous_titre: "Peeling chimique", texte: "Le peeling est contre-indiqué en cas de grossesse, d'allaitement, d'exposition solaire intense dans les 2 semaines précédant le soin, de traitement à l'isotrétinoïne (Accutane) dans les 6 derniers mois, de peau lésée ou en phase inflammatoire active. Une consultation préalable obligatoire est incluse avant tout premier peeling." },
      { sous_titre: "Responsabilité", texte: "Dermaglow by Hanane se réserve le droit de refuser ou d'interrompre un soin si une contre-indication est détectée lors de la consultation, afin d'assurer votre sécurité. Aucuns frais ne seront facturés dans ce cas." },
    ],
  },
  {
    numero: "04",
    titre: "Préparation avant le soin",
    contenu: [
      { sous_titre: "Recommandations générales", texte: "Arrivez de préférence sans maquillage. Évitez l'utilisation d'acides, de rétinoïdes ou de produits exfoliants dans les 48 heures précédant votre rendez-vous. Signalez tout changement dans votre routine de soins ou votre état de santé depuis votre dernière visite." },
      { sous_titre: "Avant un peeling", texte: "Évitez toute exposition solaire intense et l'utilisation d'autobronzant dans les deux semaines précédant le traitement. N'épillez pas la zone à traiter dans les 72 heures avant le soin. Des recommandations spécifiques vous seront envoyées par courriel à la confirmation de votre rendez-vous." },
    ],
  },
  {
    numero: "05",
    titre: "Hygiène et sécurité",
    contenu: [
      { sous_titre: "Protocoles d'hygiène", texte: "Tous les soins sont réalisés dans le strict respect des normes d'hygiène professionnelles. Le matériel utilisé est désinfecté ou à usage unique selon les protocoles en vigueur. L'espace de soin est nettoyé et désinfecté entre chaque cliente." },
      { sous_titre: "Santé de la cliente", texte: "Si vous présentez des symptômes de maladie infectieuse le jour de votre rendez-vous, nous vous demandons de nous en informer et de reporter votre soin. Aucuns frais d'annulation ne seront appliqués dans ce cas." },
    ],
  },
  {
    numero: "06",
    titre: "Paiements",
    contenu: [
      { sous_titre: "Modes de paiement acceptés", texte: "Nous acceptons le virement Interac, les cartes de crédit (Visa, Mastercard) et les paiements en espèces. Aucuns frais de transaction ne sont appliqués. Le paiement s'effectue en personne à la fin de chaque soin." },
      { sous_titre: "Tarifs", texte: "Les tarifs affichés sur le site sont à titre indicatif. Ils peuvent être ajustés selon les besoins spécifiques identifiés lors de la consultation. Vous serez informée du tarif exact avant le début du soin." },
    ],
  },
];

const DEFAULT_SECTIONS_EN = [
  {
    numero: "01",
    titre: "Cancellation Policy",
    contenu: [
      { sous_titre: "Standard cancellation", texte: "Any cancellation or modification must be made at least 24 hours before the scheduled treatment. Contact us at dermaglowbyhanane@gmail.com or via the online booking form." },
      { sous_titre: "Late cancellation", texte: "A cancellation made less than 24 hours in advance incurs a fee equal to 50% of the booked treatment price. This amount will be due at your next appointment." },
      { sous_titre: "No-show", texte: "In case of no-show without prior cancellation, the full treatment fee will be charged. Repeated no-shows may result in refusal of future bookings." },
    ],
  },
  {
    numero: "02",
    titre: "Late arrivals",
    contenu: [
      { sous_titre: "Client late", texte: "Please arrive on time for your appointment. A delay of more than 10 minutes will result in a shortened treatment to respect other clients' schedules. A delay of more than 15 minutes may require rescheduling." },
      { sous_titre: "Exceptional circumstances", texte: "We understand that unexpected situations can arise. In case of emergency, contact us as soon as possible at dermaglowbyhanane@gmail.com." },
    ],
  },
  {
    numero: "03",
    titre: "Contraindications",
    contenu: [
      { sous_titre: "General conditions", texte: "Certain skin conditions or medical treatments may contraindicate a treatment. You are responsible for informing your esthetician of any ongoing dermatological treatment, medical prescription, or active skin condition." },
      { sous_titre: "Chemical peeling", texte: "Peeling is contraindicated during pregnancy, breastfeeding, intense sun exposure within 2 weeks prior, isotretinoin (Accutane) treatment in the last 6 months, or damaged/actively inflamed skin. A mandatory prior consultation is included before any first peeling." },
      { sous_titre: "Liability", texte: "Dermaglow by Hanane reserves the right to refuse or interrupt a treatment if a contraindication is detected during consultation. No fees will be charged in this case." },
    ],
  },
  {
    numero: "04",
    titre: "Pre-treatment preparation",
    contenu: [
      { sous_titre: "General recommendations", texte: "Arrive preferably without makeup. Avoid acids, retinoids or exfoliating products 48 hours before your appointment. Report any changes in your skincare routine or health since your last visit." },
      { sous_titre: "Before a peeling", texte: "Avoid intense sun exposure and self-tanner for two weeks prior. Do not wax the area within 72 hours before the treatment. Specific recommendations will be sent by email when your appointment is confirmed." },
    ],
  },
  {
    numero: "05",
    titre: "Hygiene & safety",
    contenu: [
      { sous_titre: "Hygiene protocols", texte: "All treatments are performed in strict accordance with professional hygiene standards. Equipment is disinfected or single-use. The treatment space is cleaned and disinfected between each client." },
      { sous_titre: "Client health", texte: "If you have symptoms of an infectious illness on the day of your appointment, please inform us and reschedule. No cancellation fees will apply in this case." },
    ],
  },
  {
    numero: "06",
    titre: "Payments",
    contenu: [
      { sous_titre: "Accepted payment methods", texte: "We accept Interac e-transfer, credit cards (Visa, Mastercard) and cash. No transaction fees. Payment is made in person at the end of each treatment." },
      { sous_titre: "Pricing", texte: "Prices shown on the website are indicative. They may be adjusted based on specific needs identified during consultation. You will be informed of the exact price before the treatment begins." },
    ],
  },
];

export default async function PolitiquesPage() {
  const [t, locale, pageData] = await Promise.all([
    getTranslations("politiques"),
    getLocale(),
    getPagePolitiques(),
  ]);

  const heroTitre = pageData?.heroTitre ?? (locale === "en" ? "Policies & information" : "Politiques et informations");
  const heroSousTitre = pageData?.heroSousTitre ?? (locale === "en" ? "Everything you need to know before your visit to Dermaglow by Hanane." : "Tout ce que vous devez savoir avant votre visite chez Dermaglow by Hanane.");
  const sections = pageData?.sections && pageData.sections.length > 0
    ? pageData.sections.map((s, i) => ({
        numero: String(i + 1).padStart(2, "0"),
        titre: s.titre,
        contenu: s.contenu,
      }))
    : (locale === "en" ? DEFAULT_SECTIONS_EN : DEFAULT_SECTIONS);

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

          {sections.map((section, i) => (
            <div
              key={section.numero}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-16 reveal"
              style={{
                borderTop: "1px solid oklch(73% 0.072 158 / 0.20)",
                transitionDelay: `${i * 40}ms`,
              }}
            >
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
              {t("footerText")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/reservation"
                className="btn-press inline-flex items-center justify-center font-corps text-caption bg-texte text-beige-clair px-8 py-4 hover:bg-sauge transition-colors duration-300"
              >
                {t("bookBtn")}
              </Link>
              <Link
                href="/contact"
                className="btn-press inline-flex items-center justify-center font-corps text-caption border border-texte-leger text-texte-doux px-8 py-4 hover:border-sauge hover:text-sauge transition-colors duration-300"
              >
                {t("contactBtn")}
              </Link>
            </div>
          </div>
        </RevealSection>
      </section>
    </>
  );
}
