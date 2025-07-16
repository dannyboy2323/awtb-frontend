/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
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
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        // Custom story colors
        journal: {
          'paper': '#f7f3e8',
          'line': '#d4c5a0',
          'ink': '#2c1810',
          'stain': '#e8dcc0',
        },
        bull: {
          'brown': '#8B4513',
          'horn': '#F5DEB3',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        journal: ['var(--font-kalam)', 'cursive'],
      },
      backgroundImage: {
        'journal-paper': "linear-gradient(to bottom, transparent 23px, #d4c5a0 24px, transparent 25px), linear-gradient(to right, #f7f3e8 0%, #f7f3e8 100%)",
        'journal-aged': "linear-gradient(135deg, #f7f3e8 0%, #e8dcc0 25%, #f7f3e8 50%, #e8dcc0 75%, #f7f3e8 100%)",
      },
      backgroundSize: {
        'journal-lines': '100% 25px',
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
        journal: {
          css: {
            color: '#2c1810',
            fontFamily: 'var(--font-kalam), cursive',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            maxWidth: 'none',
            p: {
              marginBottom: '1.5rem',
            },
            h1: {
              color: '#2c1810',
              fontWeight: '700',
              fontSize: '2rem',
              marginBottom: '1rem',
            },
            h2: {
              color: '#2c1810',
              fontWeight: '600',
              fontSize: '1.5rem',
              marginBottom: '0.75rem',
            },
            blockquote: {
              borderLeft: '4px solid #8B4513',
              paddingLeft: '1rem',
              fontStyle: 'italic',
              color: '#5d4037',
            },
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'autohide': 'autohide 3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        autohide: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '80%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("tailwindcss-animate"),
  ],
}