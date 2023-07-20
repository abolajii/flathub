module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    // screens: {
    //   sm: "540px",
    //   // => @media (min-width: 576px) { ... }

    //   md: "720px",
    //   // => @media (min-width: 768px) { ... }

    //   lg: "960px",
    //   // => @media (min-width: 992px) { ... }

    //   xl: "1140px",
    //   // => @media (min-width: 1200px) { ... }

    //   "2xl": "1320px",
    //   // => @media (min-width: 1400px) { ... }
    // },
    extend: {
      // colors: {
      //   black: "#212b36",
      //   dark: "#090E34",
      //   "dark-700": "#090e34b3",
      //   primary: "#3056D3",
      //   secondary: "#13C296",
      //   "body-color": "#637381",
      //   warning: "#FBBF24",
      // },

    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
};