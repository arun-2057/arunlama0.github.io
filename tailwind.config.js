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
          light: 'var(--brand-light, #6366F1)',
          DEFAULT: 'var(--brand, #4F46E5)',
          dark: 'var(--brand-dark, #4338CA)',
        },
        accent: {
          light: 'var(--accent-light, #22D3EE)',
          DEFAULT: 'var(--accent, #06B6D4)',
          dark: 'var(--accent-dark, #0891B2)',
        },
        secondary: {
          light: 'var(--accent-tertiary-light, #F472B6)',
          DEFAULT: 'var(--accent-tertiary, #EC4899)',
          dark: 'var(--accent-tertiary-dark, #BE185D)',
        },
        dark: {
          base: 'var(--dark-base, #0F0F0F)',
          light: 'var(--dark-light, #1A1A1A)',
          lighter: 'var(--dark-lighter, #2A2A2A)',
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

