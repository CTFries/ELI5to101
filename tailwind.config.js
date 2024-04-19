/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7800ff",
          secondary: "#00ff86",
          accent: "#8bc900",
          neutral: "#131b12",
          "base-100": "#1f231e",
          info: "#00feff",
          success: "#00ffb9",
          warning: "#a96400",
          error: "#f12842",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
