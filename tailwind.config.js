/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}", "./main.js"],
  theme: {
    extend: {
      colors: {
        primary: "#5F0080",
      },
      spacing: {
        8.5: "34px",
      },
      fontFamily: {
        pretendard: ["Pretendard-Regular"],
      },
    },
  },
  plugins: [],
  safelist: ["text-blue-400"],
};
