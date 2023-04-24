/* @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,tsx}"],
    // custom thêm các biến ngoài cái có sẵn trong tailwind
    theme: {
        colors: {
            black: "#000000",
            white: "#ffffff",
        },
        fontFamily: {
            // Roboto: ["Roboto", "sans-serif"],
        },
        // container: {
        // center: true,
        // padding: "15px",
        // },
        extend: {},
    },
    // plugin cài thêm một số công cụ hỗ trợ thêm
    plugins: []
    // important: true,
}