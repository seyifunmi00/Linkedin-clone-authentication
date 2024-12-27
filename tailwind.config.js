/** @type {import('tailwindcss').Config} */
export default {
  content: [

    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      utilities: {
        '.overflow-wrap-anywhere': {
          'overflow-wrap': 'anywhere',
        },
      },
    },
  },
  plugins: [],
}
