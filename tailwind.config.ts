import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sauge:        "#2B7452",
        "sauge-clair":"#7AAF8C",
        "sauge-pale": "#DAEEE2",
        beige:        "#E0D4B8",
        "beige-clair":"#EDE8DB",
        "gris-blanc": "#E0E9E4",
        texte:        "#271D13",
        "texte-doux": "#6B6454",
        "texte-leger":"#978F83",
      },
      fontFamily: {
        titre: ["var(--font-alex-brush)", "cursive"],
        corps: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      letterSpacing: {
        "super": "0.2em",
        "wide":  "0.08em",
      },
      transitionTimingFunction: {
        "out-expo":   "cubic-bezier(0.23, 1, 0.32, 1)",
        "in-out-expo":"cubic-bezier(0.77, 0, 0.175, 1)",
      },
      transitionDuration: {
        "160": "160ms",
        "400": "400ms",
        "600": "600ms",
        "700": "700ms",
      },
    },
  },
  plugins: [],
};
export default config;
