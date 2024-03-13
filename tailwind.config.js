/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  screens: {
    'sm': '640px',
    'md': '768px',
    'ms': '900px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px'
  },
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Space Grotesk', 'sans-serif'],
    },
  },
  plugins: [],
  }
}

