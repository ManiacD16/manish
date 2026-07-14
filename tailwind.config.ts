import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)"
      },
      fontFamily: {
        editorial: ["var(--font-editorial)", "serif"],
        display: ["var(--font-display)", "serif"],
        domaine: ["var(--font-domaine)", "serif"],
        gothic: ["var(--font-gothic)", "serif"]
      },
      maxWidth: {
        page: "1440px"
      },
      spacing: {
        4.25: "1.0625rem",
        10.75: "2.6875rem",
        14.5: "3.625rem",
        16.25: "4.0625rem",
        28.75: "7.1875rem"
      },
      borderRadius: {
        stamp: "2.88px",
        panel: "11.52px"
      },
      boxShadow: {
        ink: "-4px 4px 0 rgba(29, 29, 27, 0.18)"
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.76, 0, 0.24, 1)"
      }
    }
  },
  plugins: []
};

export default config;
