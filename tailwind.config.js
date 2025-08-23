/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eefbf3",
          100: "#d6f4e2",
          200: "#ade8c4",
          300: "#7ddfa5",
          400: "#4ed786",
          500: "#2bbb6a",   // primary green, close to your screenshot
          600: "#199b56",
          700: "#127846",
          800: "#0d5a37",
          900: "#093f29",
        },
      },
    },
  },
  plugins: [],
};
