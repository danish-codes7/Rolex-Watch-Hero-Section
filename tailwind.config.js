/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        underlineIn: "underlineIn 0.3s ease forwards",
        underlineOut: "underlineOut 0.3s ease forwards",
      },
      keyframes: {
        underlineIn: {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        underlineOut: {
          "0%": { transform: "scaleX(1)", transformOrigin: "left" },
          "100%": { transform: "scaleX(0)", transformOrigin: "left" },
        },
      },
    },
  },
  plugins: [],
}
