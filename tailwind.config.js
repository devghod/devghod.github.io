import fluid, { extract } from 'fluid-tailwind'
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: {
    files: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    extract,
  },
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      work: ['Work Sans', 'sans-serif'],
    },
  },
  plugins: [fluid],
}
