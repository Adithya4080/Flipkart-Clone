module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blue_gray: { 100: "#d2d1d1", 400: "#8a8a8a", "100_01": "#d9d9d9" },
        white: { A700: "#ffffff" },
        gray: { 200: "#f1efef", 400: "#afadad", 600: "#6f6f6f", 800: "#474748", 900: "#031828" },
        blue: {
          50: "#ddebff",
          300: "#6dbefb",
          600: "#198ada",
          "600_23": "#1a89db23",
          "50_01": "#d1e4ff",
          "600_01": "#1a89db",
        },
        black: { 900: "#000000", "900_0f": "#0000000f" },
        green: { 50: "#e1ffe4", A700: "#04bb00", A100: "#cbffd0" },
        light_green: { 100: "#d3ffd8" },
        deep_orange: { 50: "#ffe7e8", "50_01": "#ffe1e3" },
        light_blue: { 50: "#dbf6ff" },
        yellow: { 200: "#ffe99d", 400: "#fcdf5b", "100_01": "#fcf8cc" },
        red: { 100: "#fad6da", A700: "#ff0000", "100_01": "#ffc7ca" },
        cyan: { 50: "#caf2ff" },
        deep_purple: { 50: "#e4d6fb", 100: "#cfb0ff" },
        teal_900: "#082c4d",
        green_A700_01: "#1dc31a",
        yellow_A400: "#ffe602",
        deep_purple_A400: "#680cfb",
      },
      boxShadow: { xs: "0px 4px  34px 3px #0000003f" },
      fontFamily: { inter: "Inter", notosansjp: "Noto Sans JP" },
      backgroundImage: {
        gradient: "linear-gradient(260deg, #ffffffba,#ffffffe5)",
        gradient1: "linear-gradient(131deg, #3ca3ea,#66de87)",
        gradient2: "linear-gradient(181deg, #8466d8,#2c1370)",
        gradient3: "linear-gradient(180deg, #82a6fd,#1342b4)",
        gradient4: "linear-gradient(141deg, #c9d1ff,#f9f4bb)",
      },
    },
  },
  // plugins: [require("@tailwindcss/forms")],
  plugins: [],
};
