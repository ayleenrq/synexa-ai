/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#14F1D9",
        "dark-blue": "#0A0F1E",
        "medium-blue": "#111827",
        "light-blue": "#1F2937",
        "accent": "#3B82F6",
      }
    },
  },
  plugins: [],
}
