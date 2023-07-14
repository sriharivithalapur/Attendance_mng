/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.js", "./src/Components/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
