import Hero from "@/components/Hero";
import RevealSection from "@/components/RevealSection";
import AcuityEmbed from "@/components/AcuityEmbed";
import Link from "next/link";

const infos = [
  {
    label: "Confirmation",
    texte: "Un courriel de confirmation vous est envoyé automatiquement après votre réservation.",
  },
  {
    label: "Annulation",
    texte: "Toute annulation doit être effectuée au moins 24 heures à l'avance.",
  },
  {
    label: "Préparation",
    texte: "Arrivez sans maquillage si possible. Signalez toute allergie ou traitement en cours.",
  },
  {
    label: "Paiement",
    texte: "Interac, carte de crédit ou espèces. Le paiement s'effectue en personne après le soin.",
  },
];

export default function ReservationPage() {
  return (
    <>
      <Hero
        title="Prenez rendez-vous"
        subtitle="Choisissez votre soin et votre créneau. Vous recevrez une confirmation par courriel."
        tall={false}
        centered
        eyebrow="Réservation · Dermaglow by Hanane"
      />

      {/* Widget Acuity */}
      <section style={{ background: "var(--beige-clair)" }}>
        <RevealSection className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="reveal">
            <p className="font-corps text-caption text-sauge mb-4">Calendrier en ligne</p>
            <h2 className="font-corps text-headline text-texte mb-10">
              Choisissez votre moment
            </h2>
            <div style={{ borderTop: "1px solid oklch(73% 0.072 158 / 0.20)" }}>
              <AcuityEmbed acuityUrl="https://app.acuityscheduling.com/schedule.php?owner=39259283" />
            </div>
          </div>
        </RevealSection>
      </section>

      {/* Informations essentielles */}
      <section style={{ background: "var(--gris-blanc)" }}>
        <RevealSection className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left */}
            <div className="lg:col-span-4 reveal">
              <p className="font-corps text-caption text-sauge mb-4">Avant votre visite</p>
              <h2 className="font-corps text-headline text-texte mb-6">
                Quelques points importants
              </h2>
              <Link
                href="/politiques"
                className="font-corps text-caption text-sauge inline-flex items-center gap-2 link-slide group"
              >
                Politiques complètes
                <span className="block h-px w-5 bg-sauge transition-all duration-300 group-hover:w-8" />
              </Link>
            </div>

            {/* Right — liste éditoriale */}
            <div className="lg:col-span-8">
              <div style={{ borderTop: "1px solid oklch(73% 0.072 158 / 0.20)" }}>
                {infos.map(({ label, texte }, i) => (
                  <div
                    key={label}
                    className="grid grid-cols-12 gap-6 py-7 reveal"
                    style={{
                      borderBottom: "1px solid oklch(73% 0.072 158 / 0.15)",
                      transitionDelay: `${i * 60}ms`,
                    }}
                  >
                    <div className="col-span-12 sm:col-span-3">
                      <p className="font-corps text-caption text-sauge">{label}</p>
                    </div>
                    <div className="col-span-12 sm:col-span-9">
                      <p className="font-corps text-body text-texte-doux">{texte}</p>
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
