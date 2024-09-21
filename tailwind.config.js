/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(82.32% 82.32% at 50% 17.68%, #000000 55%, #0000FF 100%)',
      },
    },
  },
  plugins: [],
}