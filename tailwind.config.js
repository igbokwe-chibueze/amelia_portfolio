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
        'midnight-green': '#004650',
        'caribbean-current': '#006B7A',
        'chartreuse-color': '#88FF00',
        'tea-green': '#E4FFC4',

        'platinum-gray': '#E4E4E4',
        'electric-indigo': '#7700FF',
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }

        'wide-desktop': '2000px',
        // => @media (min-width: 2000px) { ... }
      },
    },
  },
  plugins: [],
}