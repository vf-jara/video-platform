/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-is': '#F26321',
        'orange-hv-is': '#D94E0E',
        'purple-is': '#7671B4',
        'blue-is': '#6D8CC7'
      },
    },
  },
  plugins: [],
}
