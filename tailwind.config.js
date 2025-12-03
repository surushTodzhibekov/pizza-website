/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF6432",
          start: "#FF6533",
          end: "#FFA728",
          dark: "#FF5924",
          light: "#FFA333",
        },
        background: {
          dark: "#1E0C00",
          darker: "#1F0700",
          section: "#170A00",
          footer: "#170700",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A3A3A3",
          muted: "#515151",
        },
      },
      fontFamily: {
        sans: ["Muller", "system-ui", "sans-serif"],
        heading: ["Muller", "system-ui", "sans-serif"],
        script: ["Alex Brush", "cursive"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(215deg, #FF5924 0%, #FFA328 100%)",
        "gradient-button": "linear-gradient(214deg, #FE9C1C 0%, #FF5E2A 100%)",
        "gradient-dark":
          "linear-gradient(223deg, #1E0C00 4%, #1F0700 34%, #170A00 71%, #1E0D00 100%)",
      },
      boxShadow: {
        orange: "0px 4px 29px rgba(255, 78, 21, 0.1)",
        "orange-lg": "0px 4px 33px rgba(255, 78, 21, 0.29)",
        "orange-xl": "0px 7.59px 33.75px rgba(255, 107, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
