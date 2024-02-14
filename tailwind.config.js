/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins',sans-serif"],
      },
      backgroundSize: {
        Bgsize100: "100% 100%",
      },
    },
  },
  plugins: [],
};
