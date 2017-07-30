const setup = require('webpack-setup')

setup
  .init({
    output: 'build',
  })
  .js('app/index.js', 'js')
  .eslint('app')
  .babel('app')
  .sass('app/styles', 'css')
  .html('app/index.html')
  .images('img')
  .fonts('fonts')
  .copy([{ from: 'public' }])
  .define()
  .vendors([
    'babel-polyfill',
    'prop-types',
    'react',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'redux',
  ])
  .notify()
  // Development config
  .when('development')
  .server({ open: true })
  .hot()
  // Production config
  .when('production')
  .uglify()

module.exports = setup.config
