/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./assets/**/*.js"],
    theme: {
        extend: {
            colors: {
                dark: {
                    bg: '#0a0a0f',
                    card: '#12121a',
                    border: '#1e1e2e',
                },
                accent: {
                    blue: '#4a9eff',
                    purple: '#8b5cf6',
                },
            },
            fontFamily: {
                heading: ['"Times New Roman"', 'Times', 'serif'],
                body: ['Roboto', 'system-ui', 'sans-serif'],
            },
            maxWidth: {
                content: '800px',
            },
            lineHeight: {
                relaxed: '1.7',
            },
        },
    },
    plugins: [],
}