const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,

        yellow: {
          DEFAULT: "#b6c218",
        },
        purple: {
          DEFAULT: "#240c50",
        },
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "20px",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "calc(1.375rem + 1.5vw)",
        "5xl": "3rem",
        "6xl": "4rem",
        "8xl": "max(8vw, 40px)",
        "9xl": "max(10vw,60px)",
      },
      fontFamily: {
        sans: ["Trebuchet MS,Arial,Helvetica,sans-serif"],
        apple: ["Segoe UI ,Roboto,Helvetica Neue"],
      },
      keyframes: {
        colorchange: {
          "0%": {
            color: "#ff0000",
          },
          "50%": {
            color: "#5615cf",
          },
          "100%": {
            color: "#fffb00",
          },
        },
        backgroundColor: {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
      },
      animation: {
        colorchange: "colorchange 3s infinite",
        backgroundColor: "backgroundColor 15s ease infinite",
      },
      gridTemplateColumns: {
        4: "4fr repeat(4,1fr) 4fr",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
