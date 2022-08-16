const defaultTheme = require("tailwindcss/defaultTheme");

const secondary = "var(--mauve)";
const terciary = "var(--lavender)";
const inactive = "var(--surface2)";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      shadow: {
        secondary: secondary,
      },
      textColor: {
        light: "var(--text)",
        inactive: inactive,
        secondary: secondary,
        terciary: terciary,
      },
      colors: {
        secondary: secondary,
        inactive: inactive,
        dark: "var(--crust)",
      },
      borderColor: {
        secondary: secondary,
        inactive: inactive,
      },
      backgroundColor: {
        main: {
          100: "var(--overlay2)",
          200: "var(--overlay1)",
          300: "var(--overlay0)",
          400: "var(--surface2)",
          500: "var(--surface1)",
          600: "var(--surface0)",
          700: "var(--base)",
          800: "var(--mantle)",
          900: "var(--crust)",
          secondary: secondary,
          terciary: terciary,
        },
        tr: {
          dark: "var(--transparent-dark)",
        },
      },
      ringColor: {
        secondary: secondary,
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
