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
        /* Core palette */
        obsidian:    "#0A0908",
        charcoal:    "#161310",
        gold:        "#B8935A",
        "gold-light":"#D4AC6E",
        ivory:       "#FFFFFF",
        bone:        "#F5F7F2",
        sand:        "#ECF0E8",
        stone:       "#6B7A62",
        "border-col":"#D8DDD1",
        sage:        "#7A9467",
        forest:      "#2A3525",

        /* Semantic aliases */
        bg:          "#F5F7F2",
        surface:     "#FFFFFF",
        cream:       "#F5F7F2",
        "cream-soft":"#ECF0E8",
        "ink2":      "#2A3525",
        muted:       "#6B7A62",
        accent:      "#B8935A",
        border:      "#D8DDD1",
        text:        "#2A3525",

        /* Pastel accents */
        pink:  "#E8D4C8",
        sky:   "#C8D4DC",
      },
      fontFamily: {
        brand:     ["var(--font-sans)", "DM Sans", "system-ui", "sans-serif"],
        display:   ["var(--font-sans)", "DM Sans", "system-ui", "sans-serif"],
        editorial: ["var(--font-sans)", "DM Sans", "system-ui", "sans-serif"],
        sans:      ["var(--font-sans)", "DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
