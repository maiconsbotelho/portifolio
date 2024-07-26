import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },

      height: {
        'custom-calc': 'calc(100vh - 112px)',
      },

      colors: {
        primaryColor: 'var(--primaryColor)',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        whatsappColor: '#25d366',
        linkedinColor: '#0a66c2',

        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },

      boxShadow: {
        secondaryColor: '0 0 10px #0056D2',
        primaryColor: '0 0 5px #007BFF',
        primaryColorHover: '0 0 10px #007BFF',
        githubColor: '0 0 10px #333',
        githubColorDark: '0 0 10px #fff',
        whatsappColor: '0 0 10px #25d366',
        linkedinColor: '0 0 10px #0a66c2',
        box: '5px 5px 1px 2px #1f242d',
        boxDark: '5px 5px 10px 2px #fff',
        quadro: '5px 5px 1px 2px #fff',
        quadroDark: '5px 5px 1px 2px #1b1b1b',
      },

      letterSpacing: {
        tighCustom: '.13em',
      },

      screens: {
        xss: { min: '0px', max: '399px' },
        xs: { min: '400px', max: '639px' },
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px',
        customLG: { max: '1023px' },
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
