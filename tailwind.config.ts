import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        river: {
          50: "#f0f7f4",
          100: "#d9ede2",
          200: "#b5dbc7",
          300: "#84c2a5",
          400: "#55a580",
          500: "#368963",
          600: "#276e4f",
          700: "#205941",
          800: "#1c4735",
          900: "#183b2d",
          950: "#0c211a",
        },
        earth: {
          50: "#faf6f1",
          100: "#f0e8da",
          200: "#e0cfb3",
          300: "#cdb086",
          400: "#bd9463",
          500: "#b0804d",
          600: "#9b6941",
          700: "#815238",
          800: "#6a4433",
          900: "#57392c",
          950: "#301c16",
        },
        sand: {
          50: "#faf8f3",
          100: "#f3efe3",
          200: "#e6dec6",
          300: "#d5c7a1",
          400: "#c3ad7c",
          500: "#b59961",
          600: "#a88554",
          700: "#8c6b46",
          800: "#72573d",
          900: "#5e4834",
          950: "#32251a",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
