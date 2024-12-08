/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#333',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            'h2, h3, h4': {
              color: '#111827',
              fontWeight: '700',
            },
            h2: {
              marginTop: '2em',
              marginBottom: '1em',
            },
            h3: {
              marginTop: '1.5em',
              marginBottom: '0.75em',
            },
            strong: {
              color: '#111827',
              fontWeight: '600',
            },
            ul: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            a: {
              color: '#e11d48',
              '&:hover': {
                color: '#be123c',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}