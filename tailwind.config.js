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
      mobile: "320px",
      tablet: "768px",
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
            foreground: "#012e3d",
            background: "#e5e5e5",
            primary: {
              DEFAULT: "#DBC078",
              colors: "white",
              foreground: "white",
            },
            secondary: {
              DEFAULT: "#e6d3a0",
              colors: "white",
              foreground: "white",
            },
            success: {
              DEFAULT: "#012e3d",
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

            success: {
              DEFAULT: "#00080b",
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
