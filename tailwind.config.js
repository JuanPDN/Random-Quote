/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*/*.html"
  ],
  theme: {
    colors:{
      primary: "#111729",
      tags: "#6466E9",
      card: "#20293A",
      body: "#97A3B6",
      buttons: "#4A5567"
    },
    fontFamily:{
      outfit:[ '"Outfit"', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'bg-hero':'url("../assets/bg-image-random-quote.svg")' 
      }
    },
  },
  plugins: [],
}

