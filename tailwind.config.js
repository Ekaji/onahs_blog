const colors = require("tailwindcss/colors");

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            // backgroundImage: {
            //     'anylease-mobile': "url('/images/mobile/anyleaseMobile.png')",
            //     'anylease-desktop': "url('/images/desktop/anyleaseDesktop.png')",
            //     'landerdot-mobile': "url('/images/mobile/landerdotMobile.png')",
            //     'landerdot-desktop': "url('/images/desktop/landerdotDesktop.png)",
            // },
            zIndex: {
                '200': '-200',
                '-20': '-20'
            },
            height: {
                '90vh': '90vh'
            },
            spacing: {
                '110': '110%'
            },
            colors: {
                trueGray: colors.trueGray
            },
         }
    },
    variants: {
        extend: {}
    },
    plugins: [], }
