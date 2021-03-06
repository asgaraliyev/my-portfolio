module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      "primary-darker": "#1f1f1c",
      "primary-dark": "#4a4a3b",
      primary: "#96964b",
      "primary-light": "#c9c98f",
      "primary-lighter": "#ffffe3",
      "secondary-darker": "#1f1c1c",
      "secondary-dark": "#423333",
      secondary: "#873e3e",
      "secondary-light": "#c47c7c",
      "secondary-lighter": "#ffd1d1",

      "primary-darker-border":"#1f1f1c7d",
      "primary-lighter-border":"#ffffe361",

    },
  },
  // safelist: [
  //   {
  //     pattern:
  //       /(bg|text|border)-(primary|secondary)/,
  //   },
  // ],
};
