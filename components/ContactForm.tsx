"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  nom: string;
  email: string;
  telephone?: string;
  message: string;
}

const inputClass =
  "contact-input w-full border px-4 py-3 font-corps text-sm text-texte placeholder-texte-doux/50 focus:outline-none focus:[box-shadow:0_0_0_3px_oklch(53%_0.13_158_/_0.12)] transition-[border-color,box-shadow] duration-300";

const inputStyle = {
  background: "oklch(97% 0.006 74)",
  borderColor: "oklch(73% 0.072 158 / 0.35)",
} as React.CSSProperties;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      reset();
    } catch {
      alert("Une erreur est survenue. Veuillez réessayer ou nous écrire directement.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="py-16"
        style={{ animation: reducedMotion ? undefined : "fadeUp 600ms var(--ease-out) both" }}
      >
        <span className="line-ornament mb-6 block" />
        <h3 className="font-corps text-title text-texte mb-2">
          Merci pour votre message
        </h3>
        <p className="font-corps text-body text-texte-doux mb-8">
          Je vous répondrai dans les plus brefs délais.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-press font-corps text-caption border border-sauge text-sauge px-6 py-3 hover:bg-sauge hover:text-white transition-colors duration-300"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-nom" className="sr-only">Nom complet</label>
          <input
            id="contact-nom"
            {...register("nom", { required: "Votre nom est requis" })}
            placeholder="Nom complet *"
            autoComplete="name"
            className={inputClass}
            style={inputStyle}
            aria-invalid={errors.nom ? "true" : undefined}
            aria-describedby={errors.nom ? "err-nom" : undefined}
          />
          {errors.nom && (
            <p id="err-nom" role="alert" className="font-corps text-xs mt-1" style={{ color: "oklch(55% 0.18 25)" }}>
              {errors.nom.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className="sr-only">Adresse courriel</label>
          <input
            id="contact-email"
            {...register("email", {
              required: "Votre email est requis",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Email invalide" },
            })}
            type="email"
            placeholder="Adresse courriel *"
            autoComplete="email"
            className={inputClass}
            style={inputStyle}
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? "err-email" : undefined}
          />
          {errors.email && (
            <p id="err-email" role="alert" className="font-corps text-xs mt-1" style={{ color: "oklch(55% 0.18 25)" }}>
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="contact-telephone" className="sr-only">Téléphone</label>
        <input
          id="contact-telephone"
          {...register("telephone")}
          type="tel"
          placeholder="Téléphone (optionnel)"
          autoComplete="tel"
          className={inputClass}
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="sr-only">Message</label>
        <textarea
          id="contact-message"
          {...register("message", { required: "Votre message est requis" })}
          placeholder="Votre message *"
          rows={5}
          className={`${inputClass} resize-none`}
          style={inputStyle}
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "err-message" : undefined}
        />
        {errors.message && (
          <p id="err-message" role="alert" className="font-corps text-xs mt-1" style={{ color: "oklch(55% 0.18 25)" }}>
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2 font-corps text-caption bg-sauge text-white px-10 py-4 hover:bg-sauge/80 transition-colors duration-300 disabled:opacity-60"
      >
        {loading && (
          <svg
            className="motion-safe:animate-spin h-3.5 w-3.5 shrink-0 text-white/80"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {loading ? "Envoi en cours…" : "Envoyer le message"}
      </button>
    </form>
  );
}
