"use client";

import { useEffect, useState } from "react";

type ConsentState = {
  decided: boolean;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "dermaglow_consent";

const defaultConsent: ConsentState = {
  decided: false,
  analytics: false,
  marketing: false,
};

function loadConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : null;
  } catch {
    return null;
  }
}

function saveConsent(state: ConsentState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [panel, setPanel] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: false, marketing: false });

  useEffect(() => {
    const stored = loadConsent();
    if (!stored?.decided) {
      // Small delay so page loads first, then banner slides in
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  function acceptAll() {
    saveConsent({ decided: true, analytics: true, marketing: true });
    setVisible(false);
    setPanel(false);
  }

  function refuseAll() {
    saveConsent({ decided: true, analytics: false, marketing: false });
    setVisible(false);
    setPanel(false);
  }

  function saveCustom() {
    saveConsent({ decided: true, ...prefs });
    setVisible(false);
    setPanel(false);
  }

  if (!visible) return null;

  return (
    <>
      {/* Backdrop — only when panel is open */}
      {panel && (
        <div
          className="fixed inset-0 z-40"
          style={{ background: "oklch(18% 0.022 63 / 0.30)" }}
          onClick={() => setPanel(false)}
          aria-hidden="true"
        />
      )}

      {/* Main banner */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Préférences de confidentialité"
        className="fixed bottom-0 left-0 right-0 z-50"
        style={{
          animation: "fadeUp 500ms 0ms var(--ease-out) both",
        }}
      >
        {/* Customise panel — slides above the banner */}
        {panel && (
          <div
            className="max-w-2xl mx-auto mb-2 rounded-sm px-6 py-6 shadow-lg"
            style={{
              background: "var(--beige-clair)",
              border: "1px solid oklch(73% 0.072 158 / 0.25)",
              animation: "fadeUp 350ms var(--ease-out) both",
            }}
          >
            <h3 className="font-corps text-title text-texte mb-1">
              Personnaliser les cookies
            </h3>
            <p className="font-corps text-sm text-texte-doux mb-6 leading-relaxed">
              Choisissez les catégories que vous acceptez. Les cookies fonctionnels sont requis pour le bon fonctionnement du site.
            </p>

            <div className="space-y-4">
              {/* Functional — always on */}
              <CategoryRow
                label="Fonctionnels"
                description="Nécessaires au fonctionnement du site (navigation, formulaires). Ne peuvent pas être désactivés."
                checked={true}
                disabled
                onChange={() => {}}
              />
              <div className="h-px" style={{ background: "oklch(73% 0.072 158 / 0.15)" }} />
              <CategoryRow
                label="Analytiques"
                description="Nous aident à comprendre comment vous utilisez le site (pages visitées, durée). Aucune donnée personnelle transmise à des tiers."
                checked={prefs.analytics}
                onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
              />
              <div className="h-px" style={{ background: "oklch(73% 0.072 158 / 0.15)" }} />
              <CategoryRow
                label="Marketing"
                description="Permettent d'afficher des publicités pertinentes sur d'autres sites et de mesurer l'efficacité des campagnes."
                checked={prefs.marketing}
                onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
              />
            </div>

            <div className="flex gap-3 mt-6 flex-wrap">
              <button
                onClick={saveCustom}
                className="btn-press font-corps text-caption bg-sauge text-white px-6 py-3 hover:bg-sauge/80 transition-colors duration-300"
              >
                Enregistrer mes choix
              </button>
              <button
                onClick={() => setPanel(false)}
                className="font-corps text-caption text-texte-doux hover:text-texte transition-colors duration-300 px-2"
              >
                Annuler
              </button>
            </div>
          </div>
        )}

        {/* Banner */}
        <div
          className="px-6 py-5 md:py-4"
          style={{
            background: "var(--beige-clair)",
            borderTop: "1px solid oklch(73% 0.072 158 / 0.22)",
          }}
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="font-corps text-sm text-texte leading-relaxed">
                <span className="font-medium">Vos préférences en matière de confidentialité.</span>{" "}
                Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic, conformément à la{" "}
                <span className="text-sauge">Loi 25</span> (Québec).{" "}
                <button
                  onClick={() => setPanel((p) => !p)}
                  className="underline underline-offset-2 text-texte-doux hover:text-texte transition-colors duration-200"
                >
                  Personnaliser
                </button>
              </p>
            </div>

            {/* Actions — visually equal weight */}
            <div className="flex items-center gap-3 shrink-0 flex-wrap">
              <button
                onClick={refuseAll}
                className="btn-press font-corps text-caption text-texte border border-texte-leger px-5 py-2.5 hover:border-texte hover:text-texte transition-colors duration-300 whitespace-nowrap"
              >
                Refuser
              </button>
              <button
                onClick={acceptAll}
                className="btn-press font-corps text-caption bg-sauge text-white px-5 py-2.5 hover:bg-sauge/80 transition-colors duration-300 whitespace-nowrap"
              >
                Accepter tout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CategoryRow({
  label,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
}) {
  const id = `cookie-${label.toLowerCase()}`;
  return (
    <div className="flex items-start gap-4">
      <div className="flex-1 min-w-0">
        <label
          htmlFor={id}
          className={`font-corps text-sm font-medium block mb-0.5 ${disabled ? "text-texte-leger" : "text-texte cursor-pointer"}`}
        >
          {label}
          {disabled && (
            <span className="ml-2 font-normal text-caption text-texte-leger">
              Toujours actif
            </span>
          )}
        </label>
        <p className="font-corps text-xs text-texte-doux leading-relaxed">{description}</p>
      </div>
      {/* Toggle switch */}
      <button
        id={id}
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className="shrink-0 mt-0.5 relative w-10 h-6 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sauge focus-visible:ring-offset-2"
        style={{
          background: checked
            ? "var(--sauge)"
            : disabled
            ? "oklch(73% 0.072 158 / 0.20)"
            : "oklch(73% 0.072 158 / 0.35)",
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        <span
          className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300"
          style={{ transform: checked ? "translateX(16px)" : "translateX(0)" }}
        />
      </button>
    </div>
  );
}
