/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      white: 'hsl(0, 0%, 100%)',
      gray: {
        light: 'hsl(212, 45%, 89%)',
      },
      grayish: {
        blue: 'hsl(220, 15%, 55%)',
      },
      blue: {
        dark: 'hsl(218, 44%, 22%)',
      },
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
  },
  extend: {},
  plugins: [],
};
