/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      tertiary: "#FFE0B3",
      textColor: "#2A414F",
    },
    daisyui: {
      themes: false,
    },
    plugins: [require("daisyui")],
  },
};
