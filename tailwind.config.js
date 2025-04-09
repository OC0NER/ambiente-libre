/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C7A7B",
        secondary: "#ECC94B",
        background: "#F7FAFC",
        textDark: "#2D3748",
        accent: "#F6AD55",
      },
    },
  },
  plugins: [],
};
