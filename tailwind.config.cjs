/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#003B95",
                secondary: "#006CE4",
                yellowish: "#FFB700",
            },
        },
    },
    plugins: [],
};
