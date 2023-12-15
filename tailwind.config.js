/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: 'var(--primary-color-100)',
                    600: 'var(--primary-color-600)',
                    700: 'var(--primary-color-700)',
                },
                secondary: {
                    600: 'var(--secondary-color-600)',
                },
                gray: {
                    500: 'var(--gray-color-500)',
                    700: 'var(--gray-color-700)',
                },
            },
            borderRadius: {
                md: 'var(--border-radius-md)',
            },
            transitionProperty: {
                transform: 'transform',
            },
        },
    },
    plugins: [],
};

