/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'netflix': "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0,0,0,1) 85%), url('./imgs/netflix-bg.jpg') ",

      },
      screens: {
        // 'sm': {'min': '640px', 'max': '767px'},
        // 'md': {'min': '768px', 'max': '1023px'},
        // 'lg': {'min': '1024px', 'max': '1279px'},
        // 'xl': {'min': '1280px'},
      },
    },
  },
  plugins: [],
}
