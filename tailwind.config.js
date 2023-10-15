/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          sidebarBG:"rgb(4,5,65)",
          skin:"rgb(241,194,125)",
        

      }
    },
  },
  plugins: [],
}

