module.exports = {
  publicPath: process.env.NODE_ENV == 'production' ? 'https://www.newhair.com.br/tema/vitabe-vue/dist' : '/',
  devServer: {
    port: 8080,
  }
}
