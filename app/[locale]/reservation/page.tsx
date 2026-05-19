import type { Metadata } from "next";
import RevealSection from "@/components/RevealSection";
import AcuityEmbed from "@/components/AcuityEmbed";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";

// TODO: domaine cible = dermaglowbyhanane.ca
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return buildMetadata({
    locale: params.locale,
    path: "/reservation",
    titleFr: "Prendre rendez-vous en ligne | Dermaglow by Hanane | Verdun",
    titleEn: "Book an Appointment Online | Dermaglow by Hanane | Verdun",
    descriptionFr: "Réservez votre soin du visage ou peeling en ligne avec Dermaglow by Hanane à Verdun. Confirmation automatique par courriel. Politique d'annulation 24h.",
    descriptionEn: "Book your facial treatment or chemical peeling online with Dermaglow by Hanane in Verdun. Automatic email confirmation. 24-hour cancellation policy.",
    keywordsFr: ["rendez-vous esthéticienne Verdun", "réserver soin visage Verdun", "réservation peeling Montréal"],
    keywordsEn: ["book esthetician Verdun", "facial appointment Verdun", "book peeling Montreal"],
  });
}

export default async function ReservationPage() {
  const t = await getTranslations("reservation");

  return (
    <>
      <section
        style={{ background: "var(--beige-clair)" }}
        className="pt-24 md:pt-28"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 pt-6 md:pt-8 pb-4 md:pb-6">
          <p className="font-corps text-caption text-sauge mb-3">
            {t("heroEyebrow")}
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8">
            <div>
              <h1 className="font-corps text-headline text-texte mb-2">
                {t("heroTitle")}
              </h1>
              <p className="font-corps text-body text-texte-doux max-w-2xl">
                {t("heroSubtitle")}
              </p>
            </div>
            <a
              href="https://app.acuityscheduling.com/schedule.php?owner=39259283"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press shrink-0 inline-flex items-center justify-center font-corps text-caption bg-texte text-beige-clair px-7 py-4 hover:bg-sauge transition-colors duration-300 self-start md:self-auto"
            >
              {t("bookBtn")}
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-12 md:pb-16">
          <div style={{ borderTop: "1px solid oklch(73% 0.072 158 / 0.25)" }} className="pt-4">
            <AcuityEmbed acuityUrl="https://app.acuityscheduling.com/schedule.php?owner=39259283" />
          </div>
        </div>
      </section>

      <section style={{ background: "var(--gris-blanc)" }}>
        <RevealSection className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <div className="lg:col-span-4 reveal">
              <p className="font-corps text-caption text-sauge mb-4">{t("beforeLabel")}</p>
              <h2 className="font-corps text-headline text-texte mb-6">
                {t("beforeTitle")}
              </h2>
              <Link
                href="/politiques"
                className="font-corps text-caption text-sauge inline-flex items-center gap-2 link-slide group"
              >
                {t("policiesLink")}
                <span className="block h-px w-5 bg-sauge transition-all duration-300 group-hover:w-8" />
              </Link>
            </div>

            <div className="lg:col-span-8">
              <div style={{ borderTop: "1px solid oklch(73% 0.072 158 / 0.20)" }}>
                {([
                  { labelKey: "infoConfirmLabel", textKey: "infoConfirmText" },
                  { labelKey: "infoCancelLabel", textKey: "infoCancelText" },
                  { labelKey: "infoPrepLabel", textKey: "infoPrepText" },
                  { labelKey: "infoPayLabel", textKey: "infoPayText" },
                ] as const).map(({ labelKey, textKey }, i) => (
                  <div
                    key={labelKey}
                    className="grid grid-cols-12 gap-6 py-7 reveal"
                    style={{
                      borderBottom: "1px solid oklch(73% 0.072 158 / 0.15)",
                      transitionDelay: `${i * 60}ms`,
                    }}
                  >
                    <div className="col-span-12 sm:col-span-3">
                      <p className="font-corps text-caption text-sauge">{t(labelKey)}</p>
                    </div>
                    <div className="col-span-12 sm:col-span-9">
                      <p className="font-corps text-body text-texte-doux">{t(textKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>
      </section>
    </>
  );
}
