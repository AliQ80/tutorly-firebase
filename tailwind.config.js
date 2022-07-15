module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        salsa: ['"Salsa"', 'cursive']
      }
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')]
  }
}
