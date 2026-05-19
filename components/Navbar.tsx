"use client";

import { useState, useEffect } from "react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";

const links = [
  { href: "/" as const, labelKey: "home" as const },
  { href: "/services" as const, labelKey: "services" as const },
  { href: "/a-propos" as const, labelKey: "about" as const },
  { href: "/contact" as const, labelKey: "contact" as const },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("nav");
  const locale = useLocale();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  function switchLocale(next: "fr" | "en") {
    router.replace(pathname, { locale: next });
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        transition: "background 400ms var(--ease-out), box-shadow 400ms var(--ease-out)",
        background: scrolled ? "oklch(93% 0.020 74 / 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 oklch(73% 0.072 158 / 0.20)" : "none",
      }}
    >
      <div className="h-16 md:h-20 flex items-center">

        {/* Logo */}
        <div className="flex-shrink-0 flex items-center px-6 md:px-10 lg:px-14 xl:px-20 lg:w-[55%]">
          <Link
            href="/"
            className="flex items-center gap-3 btn-press"
            aria-label="Dermaglow by Hanane — Accueil"
          >
            <img src="/logo-icone.svg" alt="" aria-hidden="true" className="h-10 md:h-14 w-auto" />
            <img src="/logo-texte.svg" alt="Dermaglow by Hanane" className="h-6 md:h-8 w-auto" />
          </Link>
        </div>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-9 flex-1 px-8 xl:px-10 justify-end">
          {links.map(({ href, labelKey }) => (
            <li key={href} className="flex-shrink-0">
              <Link
                href={href}
                className={`font-corps text-caption tracking-wide transition-colors duration-300 relative whitespace-nowrap ${
                  pathname === href
                    ? "text-sauge"
                    : "text-texte-doux hover:text-texte"
                }`}
              >
                {t(labelKey)}
                {pathname === href && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px bg-sauge"
                    style={{
                      transformOrigin: "left",
                      animation: "revealLine 300ms var(--ease-out) forwards",
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
          <li className="flex-shrink-0">
            <Link
              href="/reservation"
              className="btn-press font-corps text-caption bg-texte text-beige-clair px-5 py-2.5 hover:bg-sauge transition-colors duration-300 whitespace-nowrap"
            >
              {t("book")}
            </Link>
          </li>
          {/* Language switcher */}
          <li className="flex-shrink-0 flex items-center gap-1.5 ml-1">
            <button
              onClick={() => switchLocale("fr")}
              className={`font-corps text-caption transition-colors duration-300 ${
                locale === "fr" ? "text-sauge" : "text-texte-doux/50 hover:text-texte-doux"
              }`}
            >
              FR
            </button>
            <span className="text-texte-doux/30 text-xs">|</span>
            <button
              onClick={() => switchLocale("en")}
              className={`font-corps text-caption transition-colors duration-300 ${
                locale === "en" ? "text-sauge" : "text-texte-doux/50 hover:text-texte-doux"
              }`}
            >
              EN
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 btn-press ml-auto mr-6 md:mr-10"
          onClick={() => setOpen(!open)}
          aria-label={open ? t("closeMenu") : t("openMenu")}
          aria-expanded={open}
        >
          <span
            className="block h-px bg-texte origin-center"
            style={{
              width: "24px",
              transition: "transform 300ms var(--ease-out)",
              transform: open ? "rotate(45deg) translateY(5px)" : "none",
            }}
          />
          <span
            className="block h-px bg-texte"
            style={{
              width: "24px",
              transition: "opacity 200ms, transform 300ms var(--ease-out)",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block h-px bg-texte origin-center"
            style={{
              width: "24px",
              transition: "transform 300ms var(--ease-out)",
              transform: open ? "rotate(-45deg) translateY(-5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden"
        aria-hidden={!open}
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 500ms var(--ease-drawer), opacity 300ms var(--ease-out)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            background: "oklch(93% 0.020 74 / 0.97)",
            borderTop: "1px solid oklch(73% 0.072 158 / 0.20)",
            backdropFilter: "blur(12px)",
          }}
        >
          <ul className="flex flex-col px-6 md:px-10 py-3 gap-0">
            {links.map(({ href, labelKey }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`font-corps text-caption min-h-[44px] flex items-center ${
                    pathname === href ? "text-sauge" : "text-texte-doux"
                  }`}
                >
                  {t(labelKey)}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/reservation"
                className="btn-press inline-flex items-center font-corps text-caption bg-texte text-beige-clair px-6 min-h-[44px] hover:bg-sauge transition-colors duration-300"
              >
                {t("book")}
              </Link>
            </li>
            {/* Mobile language switcher */}
            <li className="flex items-center gap-2 pt-3 pb-1">
              <button
                onClick={() => switchLocale("fr")}
                className={`font-corps text-caption min-h-[44px] transition-colors duration-300 ${
                  locale === "fr" ? "text-sauge" : "text-texte-doux/50"
                }`}
              >
                FR
              </button>
              <span className="text-texte-doux/30 text-xs">|</span>
              <button
                onClick={() => switchLocale("en")}
                className={`font-corps text-caption min-h-[44px] transition-colors duration-300 ${
                  locale === "en" ? "text-sauge" : "text-texte-doux/50"
                }`}
              >
                EN
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
