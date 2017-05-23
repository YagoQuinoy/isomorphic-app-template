module.exports = (ctx) => ({
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-cssnext': {
      'features': {
        'customMedia': {
          'extensions': {
            '--phone': '(min-width: 544px)',
            '--tablet': '(min-width: 768px)',
            '--desktop': '(min-width: 992px)',
            '--large-desktop': '(min-width: 1200px)'
          }
        }
      }
    },
    // add your "plugins" here
    // ...
    // and if you want to compress
    // "cssnano",
    'postcss-browser-reporter': ctx.env === 'development' ? {} : null,
    'postcss-reporter': ctx.env === 'development' ? {} : null
  }
})
