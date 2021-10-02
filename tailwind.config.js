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
