const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss-writing-mode")


module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            zIndex: {
                '200': '-200',
                '-20': '-20'
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
                trueGray: colors.trueGray
            }, }
    },
    variants: {
        extend: {}
    },
    plugins: [
        require('tailwindcss-writing-mode')({
            variants: ['responsive', 'hover']
        })
    ],
 }
