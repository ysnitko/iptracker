/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'header-pattern': "url('./assets/images/pattern-bg-desktop.png')",
      },
      backgroundColor: {
        'btn-bg': 'hsl(0, 0%, 17%)',
      },
      colors: {
        'text-clr': 'hsl(0, 0%, 59%)',
      },
    },
  },
  plugins: [],
};
