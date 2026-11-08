import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hotel: {
          50: "#fbf8f3",
          100: "#f5eee4",
          200: "#eadbc7",
          300: "#ddc4a3",
          400: "#cfa67c",
          500: "#b98b58",
          600: "#9c6e43",
          700: "#7c5336",
          800: "#654430",
          900: "#53392a",
          gold: "#D4AF37",
          navy: "#0f172a",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

