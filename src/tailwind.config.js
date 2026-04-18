module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './**/*.html',
  ],
  safelist: [
    'bg-brand',
    'text-brand',
    'border-brand',
    'gradient-text',
    'gradient-bg',
    'swiss-card',
    'hover-lift',
    'glow-on-hover',
    'text-display',
    'text-headline',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        brand: {
          light: 'var(--brand-light, #6366F1)',
          DEFAULT: 'var(--brand, #4F46E5)',
          dark: 'var(--brand-dark, #3730A3)',
          neon: 'var(--brand-neon, #7C3AED)',
        },
        accent: {
          light: 'var(--accent-light, #22D3EE)',
          DEFAULT: 'var(--accent, #06B6D4)',
          dark: 'var(--accent-dark, #0891B2)',
        },
        offWhite: 'var(--off-white, #F4F4F0)',
        charcoal: 'var(--charcoal, #121212)',
        slateDark: 'var(--slate-dark, #1A1A1A)',
      },
      spacing: {
        'grid': 'var(--grid-unit, 8px)',
        'max': 'var(--max-width, 1440px)',
      },
      animation: {
        'swiss-fade-up': 'swissFadeUp 700ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'swiss': '4px 4px 0 var(--pure-black, #000000)',
        'swiss-hover': '6px 6px 0 var(--brand, #4F46E5)',
        'swiss-dark': '4px 4px 0 var(--pure-white, #FFFFFF)',
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'glow': '0 8px 16px rgba(79, 70, 229, 0.3)',
      },
      borderRadius: {
        'none': '0',
        'sm': '2px',
        'DEFAULT': '4px',
        'lg': '8px',
      },
      letterSpacing: {
        'tighter': '-0.03em',
        'tight': '-0.02em',
        'normal': '0',
      },
    },
  },
  plugins: [],
}
