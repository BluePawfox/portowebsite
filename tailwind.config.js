/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "index2.html", "pag1.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        cave: ["Caveat"],
        nanum: ["Nanum Pen"],
      },

      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        dark: "#0f172a",
        bloft: "#4D77FF",
        bluf2: "#56BBF1",
        yello: "#FFD32D",
        navy: "#325288",
        pinky: "#D96098",
        beige: "#F5EFE6",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
