/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,vue}'],
    theme: {
        extend: {
            colors: {
                'background-light': '#FAFAFA',
                'foreground-light': '#FFFFFF',
                'error-light': '#F87171',
                'text-light': '#5E6978',
                'text-accent-light': '#334155',
                'panel-light': '#F1F5F9',

                'background-dark': '#1E293B',
                'foreground-dark': '#334155',
                'error-dark': '#991B1B',
                'text-dark': '#5E6978',
                'text-accent-dark': '#FFFFFF',
                'panel-dark': '#1E293B',

                accent: '#3B82F6',

                'white-sh': '#00000038'
            },
            fontFamily: {
                noto: ['Noto Sans', 'Arial', 'sans-serif'],
                play: ['Play', 'Arial', 'sans-serif']
            }
        }
    },
    plugins: [],
    darkMode: 'class'
}
