module.exports = ({ env } = {}) => {
  return {
    plugins: {
      tailwindcss: {},
      autoprefixer: { grid: true },
      // add production-only plugins here, e.g. cssnano
      // ...(env === 'production' ? { 'cssnano': {} } : {}),
    },
  }
}


