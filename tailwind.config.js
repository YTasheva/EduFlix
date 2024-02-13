/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "410",
      },
      backgroundImage: {
        homefrontbg: "url('/assets/home/images/banners.concept.jpg')",
        "quiz.bg": "url('/assets/home/images/quiz.jpg')",
      },
      colors: {
        "button-primary": "#D9CAB8",
        "button-primary-hoover": "#b9CAB8",
      },
    },
  },
  plugins: [],
};

