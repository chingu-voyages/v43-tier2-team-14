/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-main": "#f1eee3",
        "text-main": "#1c1f2c",
        "bg-alt": "#fdfbf7",
        "text-btn": "#999ba0",
        "bg-btn": "#272a34",
      },
    },
  },
  plugins: [],
}
