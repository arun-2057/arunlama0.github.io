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
    'neon-border',
    'neon-text-glow',
    'neon-pulse',
    'bg-navy-base',
    'bg-navy-light',
    'bg-navy-dark',
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
          light: 'var(--brand-light, #67E8F9)',
          DEFAULT: 'var(--brand, #00FFFF)',
          dark: 'var(--brand-dark, #06B6D4)',
          neon: 'var(--brand-neon, #00FFFF)',
        },
        accent: {
          light: 'var(--accent-light, #38BDF8)',
          DEFAULT: 'var(--accent, #0EA5E9)',
          dark: 'var(--accent-dark, #0284C7)',
        },
        navy: {
          base: 'var(--navy-base, #0A1628)',
          light: 'var(--navy-light, #0F2440)',
          dark: 'var(--navy-dark, #050C18)',
        },
      },
      spacing: {
        'grid': 'var(--grid-unit, 8px)',
        'max': 'var(--max-width, 1440px)',
      },
      animation: {
        'swiss-fade-up': 'swissFadeUp 700ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
        'slideInLeft': 'slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'slideInRight': 'slideInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'scaleUp': 'scaleUp 0.4s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
        'checkmark': 'bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'successPulse': 'successPulse 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'drawCircle': 'drawCircle 0.6s ease-out forwards',
        'drawCheckmark': 'drawCheckmark 0.6s ease-out 0.3s forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scaleUp: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1' },
          '70%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        successPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.7)' },
          '50%': { boxShadow: '0 0 0 10px rgba(34, 197, 94, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        drawCircle: {
          from: { strokeDashoffset: '239' },
          to: { strokeDashoffset: '0' },
        },
        drawCheckmark: {
          from: { strokeDashoffset: '35' },
          to: { strokeDashoffset: '0' },
        },
      },
      boxShadow: {
        'swiss': '0 0 20px rgba(0, 255, 255, 0.1)',
        'swiss-hover': '0 0 40px rgba(0, 255, 255, 0.4), 0 0 80px rgba(0, 255, 255, 0.2)',
        'swiss-dark': '0 0 25px rgba(0, 255, 255, 0.15)',
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 30px rgba(0, 255, 255, 0.6), 0 0 60px rgba(0, 255, 255, 0.3)',
        'neon': '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3)',
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
