/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],

  theme: {
    colors: {
      // _____________ Primary ____________
      'very-dark-blue': 'hsl(243, 87%, 12%)',
      'desaturated-blue': 'hsl(238, 22%, 44%)',

      // _____________ Accent ____________
      'bright-blue': 'hsl(224, 93%, 58%)',
      'moderate-cyan': 'hsl(170, 45%, 43%)',

      // _____________ Neutral ____________
      'light-grayish-blue': 'hsl(240, 75%, 98%)',
      'light-gray': 'hsl(0, 0%, 75%)',
      white: 'hsl(0, 0%, 100%)',
      black: 'hsl(0, 0%, 0%)',
    },

    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
    },

    extend: {
      screens: {
        mob: '375px',
      },
    },
  },
  plugins: [],
};
