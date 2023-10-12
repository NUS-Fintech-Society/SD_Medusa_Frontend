/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontSize: {
      'h1-s': '1.875rem',
      'h1-l': '3.125rem',
      'h2-s': '1.625rem',
      'h2-l': '2.625rem',
      'h3-s': '1.375rem',
      'h3-l': '2.125rem',
      'h4-s': '1.125rem',
      'h4-l': '1.625rem',
      'body-s': '0.75rem',
      'body-l': '1.0rem',
      'button-s': '0.625rem',
      'button-l': '0.875rem',
    },
  },
  fontFamily: {
    dmsans: ['var(--font-dmsans)'],
  },
  plugins: [],
};
