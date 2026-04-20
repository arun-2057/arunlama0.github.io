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
        dark: {
          base: 'var(--dark-base, #0F0F0F)',
          light: 'var(--dark-light, #1A1A1A)',
          lighter: 'var(--dark-lighter, #2A2A2A)',
        },
      },
    },
  },
  plugins: [],
}

