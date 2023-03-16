/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        // 'sm': {'min': '640px', 'max': '767px'},
        // 'md': {'min': '768px', 'max': '1023px'},
        // 'lg': {'min': '1024px', 'max': '1279px'},
        // 'xl': {'min': '1280px'},
      },
      backgroundImage : {
        // 'bg1' : "url('./imgs/1.jpg')",
        // 'bg2' : "url('./imgs/2.jpg')",
        // 'bg3' : "url('./imgs/3.jpg')",
        // 'bg4' : "url('./imgs/4.jpg')",
      }
    },
  },
  plugins: [],
}
