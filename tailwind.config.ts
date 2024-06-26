import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    extend: {
      colors: {
        primary: {
          1: '#ffc54d'
        },
        dark: {
          1: '#000000',
          2: '#1B1E22',
          3: '#24282d'
        },
        light: {
          1: '#e5fcf5',
          2: '#6D8881'
        }
      },
      mono: {
        1: '#76520e',
        2: '#805b10',
        3: '#926c15',
        4: '#a47e1b',
        5: '#b69121',
        6: '#c9a227',
        7: '#dbb42c',
        8: '#ffc54d',
        9: '#fad643',
        10: '#ffe169'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config