import { ReactNode, CSSProperties } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: "beige-clair" | "gris-blanc" | "sauge-pale" | "sauge-clair" | "beige" | "texte";
  narrow?: boolean;
}

const bgMap: Record<string, CSSProperties> = {
  "beige-clair": { background: "var(--beige-clair)" },
  "gris-blanc":  { background: "var(--gris-blanc)" },
  "sauge-pale":  { background: "var(--sauge-pale)" },
  "sauge-clair": { background: "color-mix(in oklch, var(--sauge-clair) 30%, transparent)" },
  "beige":       { background: "var(--beige)" },
  "texte":       { background: "var(--texte)" },
};

export default function SectionWrapper({
  children,
  className = "",
  id,
  bg = "beige-clair",
  narrow = false,
}: SectionWrapperProps) {
  return (
    <section id={id} style={bgMap[bg] ?? { background: "var(--beige-clair)" }}>
      <div
        className={`mx-auto px-6 md:px-12 py-24 md:py-32 ${
          narrow ? "max-w-4xl" : "max-w-6xl"
        } ${className}`}
      >
        {children}
      </div>
    </section>
  );
}
