/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#000000',
          100: '#0A0A0A',
          200: '#121212',
          300: '#1F1F1F',
          400: '#242424',
          500: '#363636',
        },
      },
    },
  },
  plugins: [],
}
