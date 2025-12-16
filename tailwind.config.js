/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-primary': '#252525',
        'text-secondary': '#535353',
        'form-bg': '#D5E1E7',
        'page-bg': '#F0F6F9',
        'accent': '#00A6F4'
      }
    },
  },
  plugins: [],
}
