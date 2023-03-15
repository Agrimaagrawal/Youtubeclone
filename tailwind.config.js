/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        'xs':'320px',
      },
    },
  },
  plugins: [  require('tailwind-scrollbar-hide')],
  
}
