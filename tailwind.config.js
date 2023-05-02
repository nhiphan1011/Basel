/* @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,tsx}"],
    // custom thêm các biến ngoài cái có sẵn trong tailwind
    theme: {
        colors: {
            black: "#000000",
            white: "#ffffff",
            mint: "#1daaa3",
            blog: "#4c4c4c",
            footerText: "rgba(255,255,255,.6)"
        },
        fontFamily: {
            // Roboto: ["Roboto", "sans-serif"],
        },
        container: false,
        screens: {
            sm: "480px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "992px",
            // => @media (min-width: 980px) { ... }
            mxl: "1024px",
            xl: "1200px"
            // => @media (min-width: 1200px) { ... }
        },
        extend: {},
    },
    // plugin cài thêm một số công cụ hỗ trợ thêm
    plugins: [
        require('@tailwindcss/line-clamp'),
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    width: '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    '@screen sm': {
                        maxWidth: '100%'
                    },
                    '@screen md': {
                        maxWidth: '750px',
                    },
                    '@screen lg': {
                        maxWidth: '970px',
                    },
                    '@screen xl': {
                        maxWidth: '1170px',
                    },
                }
            })
        }
    ]
    // important: true,
}