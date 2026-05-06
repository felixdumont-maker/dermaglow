"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    // Observe the element and all .reveal children
    const targets = el.querySelectorAll<HTMLElement>(".reveal");
    targets.forEach((t) => observer.observe(t));
    if (el.classList.contains("reveal")) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
