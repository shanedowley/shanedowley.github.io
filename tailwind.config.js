/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./_includes/**/*.{html,md,liquid}",
        "./_layouts/**/*.{html,md,liquid}",
        "./_posts/**/*.{html,md,liquid}",
        "./_drafts/**/*.{html,md,liquid}",
        "./*.{html,md,liquid}",
        "!./_site/**/*",       // ignore generated site output
        "!./node_modules/**/*" // ignore dependencies
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
