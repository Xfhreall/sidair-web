/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
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
      colors: {
        primary: "#032629",
        secondary: "#9ECB63",
      },
      borderRadius: {
        "4xl": "32px",
      },
      backgroundImage: {},
    },
  },
};
