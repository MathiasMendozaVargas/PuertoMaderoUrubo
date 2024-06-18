/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Vollkorn', 'sans-serif'],
      'serif': ['Vollkorn', 'serif'],
      // You can define additional font families here
    },
    extend: {
      colors: {
        'secondary': '#021b4b',
      },
      animation: {
        fadeIn: 'fadeIn 1s forwards',
        grow: 'grow 2s forwards',
        spin: 'spin 0.5s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        grow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      textShadow: {
        lg: '0 10px 15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}