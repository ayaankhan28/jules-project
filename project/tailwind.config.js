/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#fff5f2',
          100: '#ffe6e1',
          200: '#ffc9bc',
          300: '#ffa28e',
          400: '#ff7a5c',
          500: '#ff4d2e',
          600: '#ed3615',
          700: '#c52a0e',
          800: '#9e2410',
          900: '#802114',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
