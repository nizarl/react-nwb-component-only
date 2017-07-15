module.exports = {
  type: 'react-component',
  webpack: {
    rules: {
      'sass-css': {
        data: '@import "_variables"',
        includePaths: ['src/styles']
      }
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
