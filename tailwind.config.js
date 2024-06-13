/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {     
       backdropBlur: {
      'none': '0',
      'xs': '2px',
      'sm': '4px',
      'DEFAULT': '8px',
      'md': '12px',
      'lg': '16px',
      'xl': '24px',
      '2xl': '40px',
      '3xl': '64px',
    }},
  },
  variants: {
    extend: {
      // Enable backdrop blur on hover, focus, and other states
      backdropBlur: ['responsive', 'hover', 'focus'],
    }
  },
  plugins: [],
}

