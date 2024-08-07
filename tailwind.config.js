/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
    },
    extend: {
      fontFamily: {
        kubmh: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
