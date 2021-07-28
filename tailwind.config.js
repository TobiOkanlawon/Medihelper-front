module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#E2ECFC',
          1000: '#0C2D48',
          cool: '#2E8BC0'
        }
      },
      height: {
        124: '405px'
      },
      width: {
        100: '479px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
