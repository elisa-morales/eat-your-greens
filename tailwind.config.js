/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      textColor: "#020302",
      bgColor: "#f6efdd",
      primary: "#324a24",
      white: "#ffffff",
      accent: "#d3e6b3",
      hoverColor: "#961e1d",
    },
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      })
    }),
  ],
}
