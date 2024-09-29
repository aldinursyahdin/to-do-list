/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0px 1px 2px 0px rgba(0, 0, 0, 0.06)', // equivalent of #0000000F
        'custom-dark': '0px 1px 3px 0px rgba(0, 0, 0, 0.1)',   // equivalent of #0000001A
      },
    }, 
      fontFamily: {
      sans: [
        '"Inter var", sans-serif',
      ],
    },
  },
  plugins: [],
}