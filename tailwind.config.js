module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      black: '#262825',
      white: '#fff',
      grey: "#f2f2f2",
      blue: '#00263a',
      blueDark: '#478DD0'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
