/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        kubmh: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
