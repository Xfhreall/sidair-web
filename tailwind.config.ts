import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
        nav: "#C6E3D1",
      },
      borderRadius: {
        "4xl": "32px",
      },
      backgroundImage: {},
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
