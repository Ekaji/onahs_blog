const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss-writing-mode")


module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            zIndex: {
                '200': '-200',
                '-20': '-20',
                'closest': '1000'
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
                trueGray: colors.trueGray,
                emerald: colors.emerald,
                rose: colors.rose,
                coolGray: colors.coolGray
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [
        require('@tailwindcss/line-clamp'), require('tailwindcss-writing-mode')(
            {
                variants: ['responsive', 'hover']
            }
        )
    ]
}
