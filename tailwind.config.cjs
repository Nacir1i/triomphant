/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0C0C0C",
        design: "#E85638",
        marketing: "#227A63",
        project: "#173754",
      },
    },
  },
  plugins: [],
};
