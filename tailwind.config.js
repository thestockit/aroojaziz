/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackShade: "#1a1a1a",
        black1:"#222222",
        grayShade: "#4d4d4d",
      },
      keyframes: {
        zoomSlow: {
          "0%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        zoomSlow: "zoomSlow 6s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
