import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      tablet: "768px",
      mobile: "320px",
      labtop: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            foreground: "white",
            background: "#012e3d",
            primary: {
              DEFAULT: "#e6d3a0",
              colors: "white",
              foreground: "white",
            },
            secondary: {
              DEFAULT: "#DBC078",
              colors: "white",
              foreground: "white",
            },
            content1: {
              DEFAULT: "#d0ad50",
              colors: "white",
              foreground: "white",
            },
            content2: {
              DEFAULT: "#02546f",
              colors: "white",
              foreground: "white",
            },
          },
        },
        dark: {
          colors: {
            background: "#00080b",
            foreground: "white",
            default: "white",
            primary: {
              DEFAULT: "#d0ad50",
              colors: "white",
              foreground: "white",
            },
            secondary: {
              DEFAULT: "#DBC078",
              colors: "white",
              foreground: "white",
            },
            content1: {
              DEFAULT: "#e6d3a0",
              colors: "white",
              foreground: "white",
            },
            content2: {
              DEFAULT: "#02546f",
              colors: "white",
              foreground: "white",
            },
          },
        },
      },
    }),
  ],
};
