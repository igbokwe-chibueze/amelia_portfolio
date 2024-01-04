/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baseFont: ['DM Sans', 'sans-serif'],
      },
      colors: {
        'primary-color': '#edf2f8',
        'secondary-color': '#313bac',
        'black-color': '#030303',
        'lightGray-color': '#e4e4e4',
        'gray-color': '#6b7688',
        'brown-color': '#46364a',
        'white-color': '#ffffff',
        'midnight-green': '#004650',
        'caribbean-current': '#006B7A',
        'chartreuse-color': '#88FF00',
        'tea-green': '#E4FFC4'
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}