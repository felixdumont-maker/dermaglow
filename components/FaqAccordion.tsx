"use client";

import { useState } from "react";

const DEFAULT_FAQS_FR = [
  {
    question: "Comment prendre rendez-vous ?",
    answer:
      "Vous pouvez réserver directement en ligne via notre formulaire de réservation, disponible 24 h/24. Vous pouvez également nous écrire par courriel à dermaglowbyhanane@gmail.com et nous vous répondrons dans les plus brefs délais.",
  },
  {
    question: "La consultation est-elle incluse dans le premier soin ?",
    answer:
      "Oui, chaque nouvelle cliente bénéficie d'une analyse de peau personnalisée incluse dans son premier soin. Cette étape permet d'adapter le protocole à vos besoins spécifiques et d'obtenir les meilleurs résultats.",
  },
  {
    question: "Combien de temps dure un soin ?",
    answer:
      "La durée varie selon la formule choisie : de 30 minutes pour le Peeling Professionnel jusqu'à 90 minutes pour le Facial Signature + Massage. Chaque soin est détaillé sur la page Services avec sa durée et son tarif.",
  },
  {
    question: "Le peeling convient-il à tous les types de peau ?",
    answer:
      "Une consultation préalable est obligatoire avant tout traitement de peeling. Elle permet de choisir la formule et la concentration adaptées à votre peau, qu'elle soit sensible, mixte ou mature, pour un résultat optimal en toute sécurité.",
  },
  {
    question: "Comment me préparer avant un soin ?",
    answer:
      "Arrivez sans maquillage si possible. Évitez toute exposition solaire intense et l'utilisation d'acides ou de rétinoïdes dans les 48 heures précédant votre rendez-vous. Des recommandations spécifiques vous seront envoyées à la confirmation.",
  },
  {
    question: "Offrez-vous des soins pour hommes ?",
    answer:
      "Absolument. Tous les soins sont ouverts à tous, peu importe le genre. Les protocoles sont toujours adaptés à votre type de peau lors de la consultation initiale.",
  },
];

const DEFAULT_FAQS_EN = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book directly online via our booking form, available 24/7. You can also email us at dermaglowbyhanane@gmail.com and we will get back to you as soon as possible.",
  },
  {
    question: "Is the consultation included in the first treatment?",
    answer:
      "Yes, every new client receives a personalized skin analysis included in their first treatment. This step allows us to tailor the protocol to your specific needs and achieve the best results.",
  },
  {
    question: "How long does a treatment take?",
    answer:
      "Duration varies by treatment: from 30 minutes for the Professional Peeling to 90 minutes for the Signature Facial + Massage. Each treatment is detailed on the Services page with its duration and price.",
  },
  {
    question: "Is peeling suitable for all skin types?",
    answer:
      "A prior consultation is mandatory before any peeling treatment. It allows us to choose the formula and concentration best suited to your skin — whether sensitive, combination or mature — for optimal results in complete safety.",
  },
  {
    question: "How should I prepare before a treatment?",
    answer:
      "Arrive without makeup if possible. Avoid intense sun exposure and the use of acids or retinoids in the 48 hours before your appointment. Specific recommendations will be sent to you upon confirmation.",
  },
  {
    question: "Do you offer treatments for men?",
    answer:
      "Absolutely. All treatments are open to everyone, regardless of gender. Protocols are always adapted to your skin type during the initial consultation.",
  },
];

interface FaqAccordionProps {
  faqs?: { question: string; answer: string }[];
  locale?: string;
}

export default function FaqAccordion({ faqs, locale = "fr" }: FaqAccordionProps) {
  const items = faqs ?? (locale === "en" ? DEFAULT_FAQS_EN : DEFAULT_FAQS_FR);
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {items.map(({ question, answer }, i) => (
        <div
          key={i}
          className="border-b"
          style={{ borderColor: "oklch(73% 0.072 158 / 0.20)" }}
        >
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between gap-6 py-6 text-left group"
            aria-expanded={open === i}
          >
            <span className="font-corps text-title text-texte group-hover:text-sauge transition-colors duration-300">
              {question}
            </span>
            <span
              className="shrink-0 mt-1 w-5 h-5 flex items-center justify-center transition-transform duration-400"
              style={{
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                color: open === i ? "var(--sauge)" : "var(--texte-leger)",
              }}
              aria-hidden="true"
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                <path d="M8 2v12M2 8h12" strokeLinecap="round" />
              </svg>
            </span>
          </button>

          <div
            className="grid transition-[grid-template-rows] duration-500"
            style={{
              gridTemplateRows: open === i ? "1fr" : "0fr",
              transitionTimingFunction: "var(--ease-out)",
            }}
          >
            <div className="overflow-hidden">
              <p
                className="font-corps text-body text-texte-doux pb-6"
                style={{ maxWidth: "65ch" }}
              >
                {answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
