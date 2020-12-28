module.exports = {
  //   purge: [],
  purge: ["./src/**/*.js", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          200: "#FFAB91",
          300: "#FF8A65",
          400: "#FF7043",
          500: "#FF5722",
          600: "#F4511E",
          700: "#E64A19",
          800: "#D84315",
          900: "#BF360C",
          A400: "#FF3D00",
        },
      },
      borderWidth: {
        3: "3px",
      },
      margin: {
        34: "8.7rem",
      },
      screens: {
        xs: { max: "639px" },
      },
    },
  },
  variants: {},
  plugins: [],
};
