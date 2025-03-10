import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                iceland: ["Iceland"], // Global font
                bigShoulders: ["'Big Shoulders Display'", "sans-serif"], // Specific font
            },
            colors: {
                fg: "hsla(var(--foreground))",
                bg: {
                    DEFAULT: "hsla(var(--background))",
                    pm: "hsla(var(--primary))",
                    sc: "hsla(var(--secondary))",
                    tr: "hsla(var(--tertairy))",
                    fr: "hsla(var(--fourth))",
                    ff: "hsla(var(--fifth))",
                },
                txt: {
                    DEFAULT: "hsla(var(--secondary))",
                },
            },
            // fontSize: {
            //     fnt14: [
            //         "hsla(var(--fnt-14))",
            //         { lineHeight: "150%" },
            //     ],
            //     "fnt14-bold": [
            //         "hsla(var(--fnt-14))",
            //         {
            //             lineHeight: "150%",
            //             fontWeight: "700",
            //         },
            //     ],

            //     fnt16: [
            //         "hsla(var(--fnt-16))",
            //         { lineHeight: "150%" },
            //     ],
            //     "fnt16-bold": [
            //         "hsla(var(--fnt-16))",
            //         {
            //             lineHeight: "150%",
            //             fontWeight: "700",
            //         },
            //     ],

            //     fnt18: [
            //         "hsla(var(--fnt-18))",
            //         { lineHeight: "150%" },
            //     ],
            //     "fnt18-bold": [
            //         "hsla(var(--fnt-18))",
            //         {
            //             lineHeight: "150%",
            //             fontWeight: "700",
            //         },
            //     ],

            //     fnt20: [
            //         "hsla(var(--fnt-20))",
            //         { lineHeight: "150%" },
            //     ],
            //     "fnt20-bold": [
            //         "hsla(var(--fnt-20))",
            //         {
            //             lineHeight: "150%",
            //             fontWeight: "700",
            //         },
            //     ],

            //     fnt22: [
            //         "hsla(var(--fnt-22))",
            //         { lineHeight: "150%" },
            //     ],
            //     "fnt22-bold": [
            //         "hsla(var(--fnt-22))",
            //         {
            //             lineHeight: "150%",
            //             fontWeight: "700",
            //         },
            //     ],

            //     fnt26: [
            //         "hsla(var(--fnt-26))",
            //         { lineHeight: "150%" },
            //     ],
            //     "fnt26-bold": [
            //         "hsla(var(--fnt-26))",
            //         {
            //             lineHeight: "150%",
            //             fontWeight: "700",
            //         },
            //     ],
            // },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

// --primary: 200, 100%, 50%;
