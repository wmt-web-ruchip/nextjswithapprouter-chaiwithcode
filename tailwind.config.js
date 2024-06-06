const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      primary: "#09B5A5",
      darkPrimary:"#175B57",
      success: "#07A02F",
      danger: "#930707",
      yellow:"#D0BC04",
      darkGray: "#121212",
      lightGray: "#1A1A1A",
      extraLightGray: "#333333",
      xExtraLightGray: "#5A5A5A",
      xxExtraLightGray: "#2C2C2C",
      white: "#FFFFFF",
      offWhite: "#E9E9E9",
      darkOffWhite: "#ACACAC",
      blue: "#466FB9",
      darkBlue:"#29488F",
    },
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // <== disable this!
  },
};
