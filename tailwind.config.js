/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                accent: {
                    DEFAULT: "#06B6D4",
                    vibrant: "#ff2d55",
                    amber: "#ffb300",
                }
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                display: ["var(--font-outfit)", "sans-serif"],
                mono: ["var(--font-mono)", "monospace"],
            },
            animation: {
                "blur-in": "blur-in 1s ease-out forwards",
                "slide-up": "slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                "slide-right": "slide-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                "parallax": "parallax 10s ease-in-out infinite alternate",
            },
            keyframes: {
                "blur-in": {
                    "0%": { filter: "blur(20px)", opacity: "0" },
                    "100%": { filter: "blur(0px)", opacity: "1" },
                },
                "slide-up": {
                    "0%": { transform: "translateY(100px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                "slide-right": {
                    "0%": { transform: "translateX(-100px)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                "parallax": {
                    "0%": { transform: "translate(0, 0)" },
                    "100%": { transform: "translate(20px, 20px)" },
                },
            },
        },
    },
    plugins: [],
};
