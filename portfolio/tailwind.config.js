/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-mode="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xl: "1536px",
      lg: "1280px",
      sm:"600px",
    },
    fontFamily: {
      raleway: ["Raleway"],
    },
    colors: {
      // backGround Color
      main: "rgb(35, 39, 47)",
      sectionDark: "rgb(28, 30, 33)",
      sectionLite: "rgb(255, 255, 255)",
      lite: "#f5deb3",
      /* Color Scheme */
      textDark: "rgb(230, 237, 243)",
      textLite: "rgb(1, 1, 0)",
      highlightDark: "#ffea00",
      highlightLite: "#097969",
    },
  },
  plugins: [],
};
