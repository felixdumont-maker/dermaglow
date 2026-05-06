"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  tall?: boolean;
  eyebrow?: string;
  centered?: boolean;
  bg?: string;
}

const blobs = [
  {
    keyframe: "blobFloat1",
    duration: "28s",
    factor: 0.06,
    style: {
      top: "10%", right: "6%",
      width: "clamp(240px, 32vw, 480px)",
      height: "clamp(240px, 32vw, 480px)",
      background: "oklch(53% 0.13 158 / 0.12)",
      filter: "blur(72px)",
      borderRadius: "58% 42% 68% 32% / 52% 64% 36% 48%",
    },
  },
  {
    keyframe: "blobFloat2",
    duration: "35s",
    factor: 0.04,
    style: {
      bottom: "15%", left: "4%",
      width: "clamp(200px, 26vw, 400px)",
      height: "clamp(200px, 26vw, 400px)",
      background: "oklch(87% 0.032 74 / 0.60)",
      filter: "blur(60px)",
      borderRadius: "65% 35% 40% 60% / 55% 45% 60% 40%",
    },
  },
  {
    keyframe: "blobFloat3",
    duration: "22s",
    factor: 0.10,
    style: {
      top: "40%", left: "30%",
      width: "clamp(160px, 20vw, 300px)",
      height: "clamp(160px, 20vw, 300px)",
      background: "oklch(77% 0.060 158 / 0.30)",
      filter: "blur(50px)",
      borderRadius: "45% 55% 60% 40% / 60% 40% 55% 45%",
    },
  },
  {
    keyframe: "blobFloat4",
    duration: "42s",
    factor: 0.13,
    style: {
      top: "5%", left: "15%",
      width: "clamp(120px, 14vw, 220px)",
      height: "clamp(120px, 14vw, 220px)",
      background: "oklch(91% 0.026 158 / 0.45)",
      filter: "blur(40px)",
      borderRadius: "70% 30% 52% 48% / 48% 52% 45% 55%",
    },
  },
];

function AtmosphericPanel({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="relative overflow-hidden h-72 sm:h-96 lg:h-auto" aria-hidden="true">
      {/* Separator — desktop only */}
      <div
        className="hidden lg:block absolute left-0 inset-y-0 w-px z-10"
        style={{ background: "oklch(73% 0.072 158 / 0.22)" }}
      />

      {/* Photo */}
      <img
        src="/hero_section_picture.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Subtle vignette to blend photo edges with the page */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(ellipse 100% 90% at 50% 50%, transparent 50%, oklch(60% 0.022 148 / 0.18) 100%)",
        }}
      />

      {/* Grain over photo */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: "url('/noise.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px 300px",
          opacity: reducedMotion ? 0.04 : 0.05,
          mixBlendMode: "multiply",
        }}
      />

      {/* Location caption */}
      <div className="absolute bottom-8 left-8 z-20">
        <span
          className="font-corps text-caption"
          style={{ color: "oklch(95% 0.010 78 / 0.6)" }}
        >
          Chambly, Québec
        </span>
      </div>
    </div>
  );
}

export default function Hero({
  title,
  subtitle,
  cta,
  ctaSecondary,
  tall = true,
  eyebrow = "Esthéticienne certifiée · Montréal",
  centered = false,
  bg,
}: HeroProps) {
  const [scrollY, setScrollY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    const canHover = window.matchMedia("(hover: hover)").matches;
    if (!canHover) return;

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* ── Sub-hero variant (inner pages) ── */
  if (!tall) {
    const heroBg = bg ?? "var(--gris-blanc)";
    const onDark = !!bg;
    return (
      <section
        className={`relative overflow-hidden ${centered ? "pt-32 md:pt-44 pb-20 md:pb-28" : "pt-24 md:pt-32 pb-14 md:pb-20"}`}
        style={{ background: heroBg }}
      >
        <div className={`max-w-6xl mx-auto px-6 md:px-12 ${centered ? "text-center flex flex-col items-center" : ""}`}>
          <p
            className="text-caption font-corps mb-6"
            style={{
              color: onDark ? "oklch(93% 0.020 74 / 0.70)" : "var(--sauge)",
              animation: reducedMotion ? undefined : "fadeIn 600ms 0ms var(--ease-out) both",
            }}
          >
            {eyebrow}
          </p>
          <h1
            className={`font-corps text-balance ${centered ? "text-display max-w-3xl" : "text-headline"}`}
            style={{
              color: onDark ? "var(--beige-clair)" : "var(--texte)",
              animation: reducedMotion ? undefined : "clipRevealUp 900ms 120ms var(--ease-out) both",
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`text-body font-corps mt-6 ${centered ? "max-w-xl" : "max-w-2xl"}`}
              style={{
                color: onDark ? "oklch(93% 0.020 74 / 0.65)" : "var(--texte-doux)",
                animation: reducedMotion ? undefined : "fadeUp 700ms 360ms var(--ease-out) both",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
        <span
          className="absolute bottom-0 left-0 h-px"
          style={{
            width: "100%",
            background: onDark ? "oklch(73% 0.072 158 / 0.35)" : "var(--sauge-clair)",
            transformOrigin: "left",
            animation: reducedMotion ? undefined : "revealLine 1.4s 200ms var(--ease-out) forwards",
          }}
        />
      </section>
    );
  }

  /* ── Main hero — split layout ── */
  return (
    <section
      className="relative overflow-hidden grid lg:grid-cols-[55%_45%]"
      style={{ minHeight: "100svh", background: "var(--gris-blanc)" }}
    >
      {/* Blobs — live behind content in left panel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        {blobs.map((blob, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              willChange: "transform",
              transform: reducedMotion
                ? undefined
                : `translateY(${scrollY * blob.factor}px)`,
            }}
          >
            <div
              style={{
                ...blob.style,
                animation: reducedMotion
                  ? undefined
                  : `${blob.keyframe} ${blob.duration} ease-in-out infinite`,
              }}
            />
          </div>
        ))}
      </div>

      {/* ── Left: text content ── */}
      <div className="relative z-10 flex flex-col justify-center items-center px-8 md:px-14 lg:px-16 xl:px-20 pt-28 pb-16 text-center">

        {/* Icône — grande, ancre visuelle */}
        <div
          className="mb-5"
          style={{
            animation: reducedMotion ? undefined : "fadeIn 1000ms 0ms var(--ease-out) both",
          }}
        >
          <img
            src="/logo-icone.svg"
            alt=""
            aria-hidden="true"
            className="h-48 md:h-64 w-auto opacity-90"
          />
        </div>

        {/* Eyebrow */}
        <div
          className="flex items-center gap-4 mb-5"
          style={{
            animation: reducedMotion ? undefined : "fadeIn 800ms 80ms var(--ease-out) both",
          }}
        >
          <span className="line-ornament" />
          <p className="text-caption font-corps text-sauge">{eyebrow}</p>
        </div>

        {/* Logo texte — nom de la marque en SVG */}
        <div
          className="mb-5"
          style={{
            animation: reducedMotion ? undefined : "fadeIn 900ms 150ms var(--ease-out) both",
          }}
        >
          <img
            src="/logo-texte.svg"
            alt="Dermaglow by Hanane"
            className="w-full max-w-[260px] md:max-w-[360px] h-auto opacity-95"
          />
        </div>

        {/* H1 — tagline, plus petit */}
        <h1
          className="font-corps text-title text-texte-doux mb-6 max-w-sm"
          style={{
            animation: reducedMotion
              ? undefined
              : "fadeUp 900ms 280ms var(--ease-out) both",
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="text-body font-corps text-texte-doux mb-6 max-w-sm"
            style={{
              animation: reducedMotion
                ? undefined
                : "fadeUp 900ms 400ms var(--ease-out) both",
            }}
          >
            {subtitle}
          </p>
        )}

        {/* CTAs */}
        {(cta || ctaSecondary) && (
          <div
            className="flex flex-col sm:flex-row gap-3 mb-16 justify-center lg:justify-start"
            style={{
              animation: reducedMotion
                ? undefined
                : "fadeUp 900ms 550ms var(--ease-out) both",
            }}
          >
            {cta && (
              <Link
                href={cta.href}
                className="btn-press group inline-flex items-center justify-center font-corps text-caption bg-texte text-beige-clair px-7 py-4 hover:bg-sauge"
                style={{ transition: "background-color 300ms var(--ease-out), transform 160ms var(--ease-out), color 300ms var(--ease-out)" }}
              >
                {cta.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="btn-press group inline-flex items-center justify-center font-corps text-caption text-texte-doux border border-texte-leger px-7 py-4 hover:border-sauge hover:text-sauge"
                style={{ transition: "border-color 300ms var(--ease-out), color 300ms var(--ease-out), transform 160ms var(--ease-out)" }}
              >
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        )}

        {/* Scroll indicator */}
        <div
          style={{
            animation: reducedMotion
              ? undefined
              : "fadeUp 800ms 700ms var(--ease-out) both",
          }}
        >
          <span
            className="block h-px bg-sauge-clair"
            style={{
              transformOrigin: "left",
              animation: reducedMotion
                ? undefined
                : "revealLine 1.4s 700ms var(--ease-out) both",
            }}
          />
          <div className="mt-6 flex items-center gap-3 opacity-40">
            <div
              className="w-px h-8 bg-texte-doux origin-top"
              style={{
                animation: reducedMotion ? undefined : "scrollPulse 2.5s ease-in-out infinite",
              }}
            />
            <span className="text-caption font-corps text-texte-doux">Faire défiler</span>
          </div>
        </div>
      </div>

      {/* ── Right: atmospheric image panel ── */}
      <AtmosphericPanel reducedMotion={reducedMotion} />

      {/* Year marker */}
      <div
        className="hidden lg:flex absolute right-8 bottom-8 flex-col items-center gap-2 opacity-25 z-20"
        style={{ writingMode: "vertical-rl" }}
        aria-hidden="true"
      >
        <span className="font-corps text-caption text-texte-doux tracking-super">2025</span>
      </div>
    </section>
  );
}
