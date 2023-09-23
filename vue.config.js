const { defineConfig } = require('@vue/cli-service')

module.exports = 
{
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Vue-recipe-book/'
    : '/'
}
defineConfig({
  transpileDependencies: true
})
