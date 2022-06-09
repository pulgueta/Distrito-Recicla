module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        recicla: {
          900: "#171717",
          800: "#1EA6FC",
          700: "#FDBB06",
          hover: "#72ADBE",
        },
      },

      textColor: {
        recicla: {
          900: "#171717",
          800: "#1EA6FC",
          700: "#FDBB06",
          hover: "#72ADBE",
        },
      },

      backgroundImage: {
        mapImage: `url('/src/assets/map.jpeg')`,
      },
    },
  },
  plugins: [],
};
