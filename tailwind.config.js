/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './mdx-components.tsx',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#fbbf24', // amber-400
            '[class~="lead"]': {
              color: '#f59e0b', // amber-500
            },
            a: {
              color: '#fbbf24', // amber-400
              textDecoration: 'underline',
              fontWeight: '500',
            },
            strong: {
              color: '#f3f4f6', // gray-100
              fontWeight: '600',
            },
            'ol[type="A"]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a"]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="A" s]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a" s]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="I"]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i"]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="I" s]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i" s]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="1"]': {
              '--list-counter-style': 'decimal',
            },
            'ol > li': {
              position: 'relative',
            },
            'ol > li::marker': {
              fontWeight: '400',
              color: '#d97706', // amber-600
            },
            'ul > li': {
              position: 'relative',
            },
            'ul > li::marker': {
              color: '#d97706', // amber-600
            },
            hr: {
              borderColor: '#d97706', // amber-600
              borderTopWidth: 1,
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: '#f3f4f6', // gray-100
              borderLeftWidth: '0.25rem',
              borderLeftColor: '#d97706', // amber-600
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
            },
            h1: {
              color: '#f3f4f6', // gray-100
              fontWeight: '800',
            },
            h2: {
              color: '#f3f4f6', // gray-100
              fontWeight: '700',
            },
            h3: {
              color: '#f3f4f6', // gray-100
              fontWeight: '600',
            },
            h4: {
              color: '#f3f4f6', // gray-100
              fontWeight: '600',
            },
            code: {
              color: '#fbbf24', // amber-400
              fontWeight: '600',
            },
            'a code': {
              color: '#fbbf24', // amber-400
            },
            pre: {
              color: '#f3f4f6', // gray-100
              backgroundColor: '#1f2937', // gray-800
            },
            thead: {
              color: '#f3f4f6', // gray-100
              fontWeight: '600',
              borderBottomWidth: '1px',
              borderBottomColor: '#d97706', // amber-600
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: '#374151', // gray-700
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}