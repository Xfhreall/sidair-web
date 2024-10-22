/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        irish: ["var(--font-irish)"],
        mont: ["var(--font-mont)"],
      },
      borderRadius: {
        "4xl": "32px",
      },
      backgroundImage: {},
    },
  },
};
