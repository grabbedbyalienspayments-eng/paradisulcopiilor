import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        joy: {
          orange: "#FF6B35",
          "orange-light": "#FF8C5A",
          "orange-dark": "#E5502A",
          yellow: "#FFD166",
          "yellow-light": "#FFE4A0",
          green: "#7BC67E",
          "green-dark": "#5aA85D",
          coral: "#EF476F",
          cream: "#FFFAF5",
          "cream-dark": "#FFF3E8",
          brown: "#5C3D2E",
          "text-dark": "#2D2010",
          "text-mid": "#6B5744",
          "text-light": "#A08060",
        },
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        fredoka: ["Baloo 2", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
