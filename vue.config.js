module.exports = {
  // ...other vue-cli plugin options...
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/qr/'
    : '/',
  pwa: {
    name: 'QR Butter 🧈',
    themeColor: '#B01A06',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
  }
}