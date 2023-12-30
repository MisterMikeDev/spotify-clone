/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,tsx}"],
    theme: {
        extend: {
            colors: {
                backgroundSpotify: "#000",
                textSpotify: "#b3b3b3",
                containerSpotify: "#121212",
                containerSpotifyOther: "#181818",
                greenSpotify: "#1fdf64",
                tagSpotify: "hsla(0,0%,100%,.1)"
            }
        }
    },
    plugins: []
};
