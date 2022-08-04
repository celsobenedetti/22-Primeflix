const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      textColor: {
        light: "var(--text)",
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
          blue: "var(--blue)",
        },
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
