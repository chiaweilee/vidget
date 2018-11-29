// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.module
      .rule('js')
      .test(/\.js?$/)
      .use('remove-flow-types-loader')
      .loader('remove-flow-types-loader')
  },
  productionSourceMap: false,
  runtimeCompiler: true // to use the template option in Vue components, extra 10kb payload
}
