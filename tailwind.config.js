/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#ef484f",
          "red-dark": "#d92f57",
          "red-light": "#fee2e2",
          blue: "#289ad6",
          "blue-dark": "#0284c7",
          "blue-light": "#e0f2fe",
          ice: "#f4f7fc",
          emerald: "#23834c",
          "emerald-light": "#dcfce7",
          slate: "#17191d",
          gray: "#64748b",
          border: "#dfe3e6"
        }
      }
    },
  },
  plugins: [],
}
