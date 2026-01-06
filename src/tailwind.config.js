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
          light: 'var(--brand-light, #38BDF8)',
          DEFAULT: 'var(--brand, #2545a8)',
          dark: 'var(--brand-dark, #1E293B)',
        },
      },
    },
  },
  plugins: [],
}
