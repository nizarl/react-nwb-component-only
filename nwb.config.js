module.exports = {
  type: 'react-component',
   webpack: {
    rules: {
      'sass-css': {
        modules: true,
        localIdentName:  '[hash:base64:5]'
      },
    }
  },
  npm: {
    esModules: true,
    umd: {
      global: 'MyComponent',
      externals: {
        react: 'React'
      }
    }
  }
}
