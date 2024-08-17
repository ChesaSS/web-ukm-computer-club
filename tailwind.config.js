/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    colors: {
      'primary': '#3838E3',
      'secondary': '#8787FF',
      'hover-blue': '#16165B',
      'hitam': '#1F2227',
      'tetiary': '#C8C8FE',
    },
    extend: {
      backgroundImage: {
        "ornamen": "url('/src/assets/img/ornamen/teksture 1.png')",
      },
      width: {
        'navfot': '95%',
        'konten': '90%',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

