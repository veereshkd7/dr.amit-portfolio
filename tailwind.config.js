/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F4EE",
        paperDim: "#EDEAE1",
        ink: "#20262B",
        inkSoft: "#5B6469",
        navy: "#153241",
        navyDeep: "#0E2530",
        maroon: "#6E2A38",
        maroonDeep: "#521F2A",
        sage: "#7C9885",
        line: "#D8D2C4",
        cream: "#FBFAF6",
      },
      fontFamily: {
        display: ["'Source Serif 4'", "Georgia", "serif"],
        body: ["'IBM Plex Sans'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "'Courier New'", "monospace"],
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-18px) translateX(10px)" },
        },
        floatSlower: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(14px) translateX(-14px)" },
        },
      },
      animation: {
        floatSlow: "floatSlow 9s ease-in-out infinite",
        floatSlower: "floatSlower 13s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
