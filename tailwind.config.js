module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        recicla: {
          900: "#61919F",
          800: "#B0E0E9",
          700: "#DEF1F8",
          hover: "#72ADBE",
        },
      },

      textColor: {
        recicla: {
          900: "#61919F",
          800: "#B0E0E9",
          700: "#DEF1F8",
          hover: "#72ADBE",
        },
      },

      backgroundImage: {
        'mapImage': `url('/src/assets/map.jpeg')`,
      },
    },
  },
  plugins: [],
};
