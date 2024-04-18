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
          primary: "#00aca1",
          secondary: "#007800",
          accent: "#942100",
          neutral: "#2b2b2b",
          "base-100": "#2c2615",
          info: "#0063e4",
          success: "#53e668",
          warning: "#ff5a00",
          error: "#ec5161",
          fontFamily: "Chalkboard,comic sans ms,sans-serif",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
