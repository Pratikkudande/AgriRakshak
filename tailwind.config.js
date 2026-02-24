/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: "#f2f8f1",
          100: "#ddeedb",
          200: "#b7d9b4",
          300: "#8dc188",
          400: "#65a95f",
          500: "#4c9147",
          600: "#3a7438",
          700: "#2f5d2f",
          800: "#284a29",
          900: "#223d24",
        },
        soil: {
          50: "#fbf9f5",
          100: "#f4efe2",
          200: "#e8dcc4",
          300: "#d7c29e",
          400: "#c4a47a",
          500: "#b58f62",
          600: "#9c744f",
          700: "#7d5b41",
          800: "#664b38",
          900: "#563f30",
        },
      },
      boxShadow: {
        soft: "0 10px 35px rgba(33, 63, 35, 0.12)",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      backgroundImage: {
        hero: "radial-gradient(circle at top right, #d8ecd7 0%, #f8f3ea 46%, #eef7ed 100%)",
      },
    },
  },
  plugins: [],
};
