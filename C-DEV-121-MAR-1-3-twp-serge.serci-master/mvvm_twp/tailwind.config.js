module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        heropattern: "url('../src/assets/lac.jpg')",
      }),
      outline: {
        solidblack: "2px solid grey",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
