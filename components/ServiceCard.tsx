import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  duration: string;
  price?: string;
  index?: number;
  featured?: boolean;
  href?: string;
}

export default function ServiceCard({
  title,
  description,
  duration,
  price,
  index = 1,
  featured = false,
  href,
}: ServiceCardProps) {
  const num = String(index).padStart(2, "0");

  return (
    <article className="group relative py-7 border-b border-sauge-clair/40 hover:border-sauge/50 transition-colors duration-400">
      {href && <Link href={href} className="absolute inset-0 z-10" aria-label={title} />}
      <div className="grid grid-cols-12 gap-4 items-baseline">

        {/* Index */}
        <div className="col-span-1">
          <span className="font-corps text-caption text-texte-leger tabular-nums select-none" aria-hidden="true">
            {num}
          </span>
        </div>

        {/* Content */}
        <div className={price ? "col-span-8 md:col-span-9" : "col-span-11"}>
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="font-corps text-title text-texte group-hover:text-sauge transition-colors duration-400">
              {title}
            </h3>
            {featured && (
              <span className="font-corps text-caption text-white bg-sauge px-2 py-0.5">
                Signature
              </span>
            )}
          </div>

          {/* Description — grid reveal on hover, always visible on touch */}
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] [@media(hover:none)]:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[var(--ease-out)]">
            <p className="overflow-hidden font-corps text-sm text-texte-doux leading-relaxed pt-0 group-hover:pt-3 [@media(hover:none)]:pt-3 transition-[padding-top] duration-500 ease-[var(--ease-out)]">
              {description}
            </p>
          </div>

          <p className="font-corps text-caption text-texte-leger mt-2">{duration}</p>
        </div>

        {/* Price — only rendered when provided */}
        {price && (
          <div className="col-span-3 md:col-span-2 text-right">
            <span className="font-corps text-title text-texte">{price}</span>
          </div>
        )}
      </div>

      {/* Bottom accent — slides in on hover */}
      <span
        className="absolute bottom-0 left-0 h-px bg-sauge w-0 group-hover:w-full transition-all duration-500 ease-[var(--ease-out)]"
        aria-hidden="true"
      />
    </article>
  );
}
