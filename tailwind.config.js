/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marker: {
          '0%': { filter: 'brightness(100%)'},
          '50%': { filter: 'brightness(200%)'},
          '100%': { filter: 'brightness(100%)'},
        }
      }
    },
  },
  plugins: [],
  darkMode: 'selector'
};
