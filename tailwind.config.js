/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#2E7D32',
        'brand-brown': '#5D4037',
        'brand-light': '#F1F8E9',
        'brand-gold': '#FFC107',
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}