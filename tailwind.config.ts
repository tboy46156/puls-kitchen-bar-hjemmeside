import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Core luxury palette */
        obsidian:    "#0A0908",
        charcoal:    "#161310",
        gold:        "#B8935A",
        "gold-light":"#D4AC6E",
        ivory:       "#F2EBE0",
        bone:        "#E8DFD1",
        sand:        "#D4C9B8",
        stone:       "#7A6D5E",
        "border-col":"#2A221A",

        /* Semantic aliases kept for backward-compat */
        bg:          "#0A0908",
        surface:     "#161310",
        cream:       "#F2EBE0",
        "cream-soft":"#E8DFD1",
        "ink2":      "#0A0908",
        muted:       "#7A6D5E",
        accent:      "#B8935A",
        border:      "#2A221A",
        text:        "#F2EBE0",

        /* Pastel accents (for event/testimonial cards) */
        pink:  "#E8D4C8",
        sage:  "#C8D8C0",
        sky:   "#C8D4DC",
      },
      fontFamily: {
        brand:     ["var(--font-brand)", "Playfair Display", "Georgia", "serif"],
        display:   ["var(--font-display)", "Fraunces", "Georgia", "serif"],
        editorial: ["var(--font-editorial)", "Cormorant Garamond", "Georgia", "serif"],
        sans:      ["var(--font-body)", "Outfit", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
