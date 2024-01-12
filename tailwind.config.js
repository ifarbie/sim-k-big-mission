/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'Montserrat',
        roboto: 'Roboto'
      },
      colors: {
        primary: '#002662',
        borderColor: '#F1F1F1',
        textPrimary: '#1D2433',
        textDisabled: '#6C717A',
        bgSecondary: '#F1F3F9',
        hover: '#00547C'
      }
    },
  },
  plugins: [],
}

