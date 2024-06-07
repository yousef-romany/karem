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
      'tablet': '768px',
      'mobile': '320px',
      'labtop': '1440px'
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
            background: "#1b4b4d",
            primary: {
              DEFAULT: "#c6a25a",
              colors: "white",
              foreground: "white",
            },
          },
        },
        dark: {
          colors: {
            foreground: "white",
            default: "white",
            primary: {
              DEFAULT: "#c6a25a",
              colors: "white",
              foreground: "white",
            },
          },
        },
      },
    }),
  ],
};
