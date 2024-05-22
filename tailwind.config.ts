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
        primary: {
          100: "#01080E",
          200: "#011627",
          300: "#011221",
        },
        secondary: {
          100: "#607B96",
          200: "#3C9D93",
          300: "#4D5BCE",
          400: "#FFFFFF",
        },
        accent: {
          100: "#FEA55F",
          200: "#43D9AD",
          300: "#E99287",
          400: "#C98BDF",
          500: "#1C2B3A",
          600: "#FFAC6B",
          700: "#263B50",
        },
        line: "#1E2D3D",
        gradient: {
          primary: "#4D5BCE",
          secondary: "#43D9AD",
        },
      },
      fontSize: {
        headline: [
          "62px",
          {
            letterSpacing: "-2px",
            lineHeight: "1",
          },
        ],
        subheadline: [
          "32px",
          {
            letterSpacing: "-1px",
            lineHeight: "1",
          },
        ],
        body: [
          "18px",
          {
            letterSpacing: "0",
            lineHeight: "1.5",
          },
        ],
        label: [
          "16px",
          {
            letterSpacing: "0",
            lineHeight: "1.5",
          },
        ],
        "code-snippet": [
          "14px",
          {
            letterSpacing: "0",
            lineHeight: "1.5",
          },
        ],
      },
      boxShadow: {
        input: "0px 0px 0px 2px rgba(96, 123, 150, 0.30)",
        card: "0px 2px 0px 0px rgba(255, 255, 255, 0.30) inset",
        "snake-card": "1px 5px 11px 0px rgba(2, 18, 27, 0.71) inset",
        "game-over": "1px 5px 11px 0px rgba(2, 18, 27, 0.71) inset",
      },
    },
  },
  plugins: [],
};
export default config;
