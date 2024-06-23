/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#000000',
      'cream': '#F9E7E7',
      'white': '#ffffff',
      'brown': '#5A3131',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    extend: {
      // Other theme extensions
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.mix-blend-difference': {
          'mix-blend-mode': 'difference',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
