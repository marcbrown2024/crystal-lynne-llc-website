/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "390px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      poppins: [`var(--font-poppins)`, "sans-serif"],
      sora: [`var(--font-sora)`, "sans-serif"],
    },
    extend: {
      backgroundImage: {
      },
    },
  },
  plugins: [],
}
