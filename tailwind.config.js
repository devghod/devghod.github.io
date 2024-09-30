/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   'custgreen': {
    //     light: '#9EC8B9',
    //     DEFAULT: '#5C8374',
    //     dark: '#1B4242',
    //   },
    // },
    extend: {},
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      work: ['Work Sans', 'sans-serif'],
    },
  },
  plugins: [],
}
