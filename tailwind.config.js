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
      backgroundImage: {
        'home': "url('/assets/images/bg-home.png')"
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'fade-out-up': {
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
          '0%': {
              opacity: '0',
              transform: 'translateY(-10px)'
          },
      }
    },
    animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out'
    }
    },
  },
  plugins: [],
}
