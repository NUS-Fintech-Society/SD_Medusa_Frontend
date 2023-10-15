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
      colors: {
        'brand-yellow': '#F9A72B',
        'brand-blue': '#0C1747',
        'ftnal-black': '#151515',
        'ftnal-darkgrey': '#5A5A5A',
        'ftnal-lightgrey': '#CACACA',
        'ftnal-lightpink': '#FBF3EF',
        'ftnal-cream': '#FEF8EF',
        'ftnal-offwhite': '#FAFAFA',
        'ftnal-white': '#FFFFFF',
        'fdbk-green': '#ECFAEC',
        'fdbk-red': '#FFEEEE',
        'fdbk-purple': '#EEF1FF',
        'fdbk-blue': '#EBF8FD',
        'accent-blue': '#528EE8',
        'accent-orange': '#FB965C',
        'accent-green': '#8BCA80',
        'accent-red': '#EA5959',
        'accent-yellow': '#FDCE55',
        'accent-purple': '#C179B9',
        'accent-aqua': '#7DCACF',
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
