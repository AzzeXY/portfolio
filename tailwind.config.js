/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  variants: {
    animation: ["motion-safe"],
  },
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        fadeIcon1: "trans-top 1s ease-in forwards",
        fadeIcon2: "trans-top  1.25s ease-in forwards",
        fadeIcon3: "trans-top  1.5s ease-in forwards",
        fadeIcon4: "trans-top  2s ease-in forwards",
        fadeIcon5: "trans-top  2.25s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "trans-top": {
          "0%": { transform: "translateY(60px)" },
          "0%": { opacity: 0 },
          "100%": { transform: "none" },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
