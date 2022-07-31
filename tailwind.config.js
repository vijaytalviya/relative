/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#14172b",
        primaryText: "#ecf0ff",
        label: "#737bae",
        blueLight: "#ecf0ff",
        blue: "#626a88",
        blueMid: "#2e3149",
        priceInc: "#00FFA3",
        PriceDec: "#FF4D4D",
      },
      boxShadow: {
        card: " 0px -16px 0 0 #14172b",
      },
    },
  },
  plugins: [],
};
