/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    'bg-amber-200',
    'bg-blue-200',
    'bg-purple-200',
    'bg-orange-200',
    'bg-red-200',
    'bg-yellow-200',
    'bg-green-200',
    'bg-indigo-200',
    
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
