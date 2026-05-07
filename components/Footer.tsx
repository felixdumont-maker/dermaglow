import Link from "next/link";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/reservation", label: "Réservation" },
  { href: "/contact", label: "Contact" },
  { href: "/politiques", label: "Politiques" },
];

const horaires = [
  { jour: "Mardi – Vendredi", heure: "10 h – 18 h" },
  { jour: "Samedi", heure: "9 h – 16 h" },
  { jour: "Dim. – Lun.", heure: "Fermé" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--texte)", color: "var(--beige-clair)" }}>

      {/* Lueur sauge — atmosphère botanique sur fond sombre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: "-80px",
          right: "-100px",
          width: "clamp(280px, 38vw, 520px)",
          height: "clamp(280px, 38vw, 520px)",
          background: "oklch(53% 0.13 158 / 0.10)",
          filter: "blur(90px)",
          borderRadius: "50%",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          bottom: "40px",
          left: "-80px",
          width: "clamp(180px, 22vw, 320px)",
          height: "clamp(180px, 22vw, 320px)",
          background: "oklch(73% 0.072 158 / 0.06)",
          filter: "blur(70px)",
          borderRadius: "50%",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 pt-6 md:pt-8">

        {/* Trois colonnes */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 pb-20 md:pb-28"
          style={{ borderTop: "1px solid oklch(53% 0.13 158 / 0.28)" }}
        >
          {/* Col 1 — logo + tagline + CTA */}
          <div className="flex flex-row items-start gap-5 pt-10">
            <img
              src="/logo-complet.svg"
              alt="Dermaglow by Hanane"
              className="h-auto w-24 md:w-28 shrink-0 brightness-0 invert opacity-90"
            />
            <div className="flex flex-col items-start text-left">
              <p className="font-corps text-sm leading-relaxed mb-6" style={{ color: "oklch(87% 0.032 74 / 0.45)" }}>
                Esthéticienne professionnelle dédiée à révéler votre éclat naturel grâce à des soins sur mesure, à Chambly.
              </p>
              <Link
                href="/reservation"
                className="footer-cta btn-press inline-flex items-center font-corps text-caption px-6 py-3 transition-colors duration-300 whitespace-nowrap"
                style={{
                  border: "1px solid oklch(87% 0.032 74 / 0.22)",
                  color: "oklch(87% 0.032 74 / 0.55)",
                }}
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>

          {/* Col 2 — navigation */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left pt-10">
            <h3 className="font-corps text-caption font-semibold mb-6" style={{ color: "oklch(87% 0.032 74 / 0.80)" }}>
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="footer-nav-link font-corps text-sm transition-colors duration-300"
                    style={{ color: "oklch(87% 0.032 74 / 0.40)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — contact + horaires */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left pt-10">
            <h3 className="font-corps text-caption font-semibold mb-6" style={{ color: "oklch(87% 0.032 74 / 0.80)" }}>
              Contact
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="font-corps text-sm" style={{ color: "oklch(87% 0.032 74 / 0.40)" }}>
                dermaglowbyhanane@gmail.com
              </li>
              <li className="font-corps text-sm" style={{ color: "oklch(87% 0.032 74 / 0.40)" }}>
                845 Boul. de Périigny<br />Chambly, Québec
              </li>
            </ul>

            <h3 className="font-corps text-caption font-semibold mb-4" style={{ color: "oklch(87% 0.032 74 / 0.80)" }}>
              Horaires
            </h3>
            <ul className="space-y-2 w-full">
              {horaires.map(({ jour, heure }) => (
                <li key={jour} className="flex flex-col md:flex-row md:justify-between gap-0.5 md:gap-3 font-corps text-xs">
                  <span style={{ color: "oklch(87% 0.032 74 / 0.35)" }}>{jour}</span>
                  <span className="font-semibold" style={{ color: "oklch(87% 0.032 74 / 0.80)" }}>{heure}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Barre basse */}
      <div
        className="relative max-w-6xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: "1px solid oklch(53% 0.13 158 / 0.18)" }}
      >
        <p className="font-corps text-xs" style={{ color: "oklch(87% 0.032 74 / 0.28)" }}>
          © {new Date().getFullYear()} Dermaglow by Hanane. Tous droits réservés.
        </p>
        <div className="flex items-center gap-4">
          <p className="font-corps text-xs font-semibold" style={{ color: "oklch(87% 0.032 74 / 0.80)" }}>
            Chambly, QC
          </p>
          <a
            href="https://dermaglow.sanity.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="font-corps text-xs text-white/20 hover:text-white/50 transition-colors duration-300"
          >
            Admin
          </a>
        </div>
      </div>

    </footer>
  );
}
