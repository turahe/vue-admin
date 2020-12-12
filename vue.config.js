module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/admin-one/'
    : '/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Admin One'
        return args
      })
  }
}
