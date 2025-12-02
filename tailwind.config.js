/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue"
    ],
    theme: {
        extend: {
            colors: {
                primary: '#f38d74',
                secondary: '#438bc8',
                tertiary: '#fac43c',
                dark: '#1D203E'
            }
        }
    },
    plugins: [
        
    ]
}
