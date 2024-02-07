/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  
  daisyui: {
    themes: [
      {
        valentinstag: {
          "primary": "#FF5D8F",
          "secondary": "#FFA6C1",
          "accent": "#9f1239",
          "neutral": "#FFC4D6",
          "base-100": "#FADDE1",
          "info": "#FFACC5",
          "success": "#fb7185",
          "warning": "#a855f7",
          "error": "#4c1d95",
        },
      },
    ],
  },


  plugins: [
    require("daisyui")
  ],
}

