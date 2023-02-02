const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://198.251.65.152:8080',
      changeOrigin: true,
    })
  ); 
};