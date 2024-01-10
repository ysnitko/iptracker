/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-pattern": "url('./assets/images/pattern-bg-desktop.png')",
        "header-mob": "url('./assets/images/pattern-bg-mobile.png')",
      },
      backgroundColor: {
        "btn-bg": "hsl(0, 0%, 17%)",
      },
      colors: {
        "text-clr": "hsl(0, 0%, 59%)",
        "text-info": "hsl(0, 0%, 17%)",
      },
      fontFamily: {
        rubik: ['"Rubik"', ...defaultTheme.fontFamily.serif],
      },
      screen: {
        mobile: "375px",
        md: "640px",
        lg: "1028px",
      },
    },
  },
  plugins: [],
};
