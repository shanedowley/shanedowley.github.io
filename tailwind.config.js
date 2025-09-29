/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.{html,md}",
    "./_layouts/**/*.{html,md}",
    "./_posts/**/*.{html,md}",
    "./*.{html,md}",
    "./**/*.html", // catch index.html and any generated pages
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
