/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F81539',
        secondary: '#FC4308',
        gray: '#F5F5F5',
        stroke: '#E6E6E6'
      }
    }
  },
  plugins: []
}
