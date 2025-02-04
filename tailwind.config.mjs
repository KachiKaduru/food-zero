/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EBFF0E4",
          100: "#9CAA00",
          200: "#5E6600",
          300: "#233000",
        },
        accent: {
          50: "#FFFFFF",
          100: "#B0B0B0",
          200: "#4D4D4D",
          300: "#000000",
        },
      },
    },
  },
  plugins: [],
};

export default config;
