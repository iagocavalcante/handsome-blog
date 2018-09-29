module.exports = {
  pwa: {
    name: 'Iago Cavalcante',
    themeColor: '#050505'
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }))
  }
}