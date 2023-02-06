const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/watch': { 
        target: 'https://www.youtube.com',
        changeOrigin: true,
      }, 
    },
  },
})
