/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                anton: ['Anton', 'sans-serif'],
            },
            colors: {
                brand: '#126f86',
            },
        },
    },
    plugins: [],
}
  