/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Code Pro', 'Roboto', 'Helvetica Neue', 'Noto Sans', 'sans-serif'],
      },
      colors: {
        primary: '#FFFFFF',
        secondary: '#5598c8',
        accent: '#147953',
        title: '#222222',
        text: '#333333',
        
      }
    },
  },
  plugins: [],
}

