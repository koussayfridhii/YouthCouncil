/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Ensure it's 'class' and not 'media'

  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
