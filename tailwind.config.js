module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            blur: {
                d: '200px'
            },
            zIndex: {
                '200': '-200',
                '-20': '-20'
            },
            height: {
                // '70vh': '70vh',
                '90vh': '90vh'
            },
            spacing: {
                '110': '110%'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
