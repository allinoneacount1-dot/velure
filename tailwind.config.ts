import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: "rgb(var(--color-alabaster) / <alpha-value>)",
        obsidian: "rgb(var(--color-obsidian) / <alpha-value>)",
        umber: "rgb(var(--color-umber) / <alpha-value>)",
        crimson: "rgb(var(--color-crimson) / <alpha-value>)",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
