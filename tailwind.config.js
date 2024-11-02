/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Ensure it's 'class' and not 'media'

  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "indigo":'#4B0082',
        "seaBreeze":"#14c2dd",
        'midNight':"#252C37"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}
