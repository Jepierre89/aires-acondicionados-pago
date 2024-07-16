import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primary: {
          100: "#FF9B53",
          300: "#FF6600",
          500: "#FD761C"
        },
        secondary: {
          700: "#0038A7",
          500: "#326BDD",
          800: "#0241BF"
        },
        neutral: {
          100: "#DEDEE3",
          200: "#BDBDC7",
          400: "#8C8C95",
          600: "#5D5D66",
        },
        white: "#FCFCFC",
        black: "#1A1A1A",
        exito: {
          200: "#A5D6A7",
          400: "#66BB6A",
          600: "#43A047"
        },
        error: {
          200: "#EF9A9A",
          400: "#EF5350",
          600: "#E53935"
        },
        advertencia: {
          200: "#FFCC80",
          400: "#FFA726",
          600: "#FB8C00"
        },
        informacion: {
          200: "#90CAF9",
          400: "#42A5F5",
          600: "#1E88E5"
        }
      }
    },
  },
  plugins: [],
};
export default config;
