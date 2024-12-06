import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        zIndex: {
            '200': '-200',
            '-20': '-20',
            'closest': '9999'
        },
        height: {
            '90vh': '90vh',
            '80vh': '80vh',
            '70vh': '70vh',
            'px-350': '350px'
        },
        spacing: {
            '110': '110%'
        },
        colors: {
            trueGray: colors.gray,
            emerald: colors.emerald,
            rose: colors.rose,
            coolGray: colors.gray
        }
    }
},
  plugins: [],
} satisfies Config;
