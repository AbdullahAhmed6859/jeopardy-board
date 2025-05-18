/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#2e2e2e",
          200: "rgb(32, 32, 32)",
        },
        blue: {
          200: "rgb(26, 26, 255)",
        },
        yellow: {
          200: "#ff0",
        },
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
      },
    },
  },
  plugins: [],
};
