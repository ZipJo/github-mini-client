module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            textColor: ['disabled'],
            backgroundColor: ['disabled'],
            pointerEvents: ['disabled'],
        },
    },
    plugins: [],
};
