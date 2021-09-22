module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            blur: {
                d: '200px'
            },
            zIndex: {
                '200': -200
            },
            height: {
                '70vh': '70vh',
                // '90vh': '90vh'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
