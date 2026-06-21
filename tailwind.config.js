module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './public/**/*.html',
  ],
  safelist: [
    'bg-brand',
    'text-brand',
    'border-brand',
    'bg-dark-base',
    'bg-dark-light',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          light: 'var(--brand-light, #64748b)',
          DEFAULT: 'var(--brand, #475569)',
          dark: 'var(--brand-dark, #334155)',
        },
        accent: {
          light: 'var(--accent-light, #14b8a6)',
          DEFAULT: 'var(--accent, #0d9488)',
          dark: 'var(--accent-dark, #0f766e)',
        },
        secondary: {
          light: 'var(--accent-tertiary-light, #94a3b8)',
          DEFAULT: 'var(--accent-tertiary, #64748b)',
          dark: 'var(--accent-tertiary-dark, #475569)',
        },
        dark: {
          base: 'var(--dark-base, #1e293b)',
          light: 'var(--dark-light, #334155)',
          lighter: 'var(--dark-lighter, #475569)',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(6, 182, 212, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}

