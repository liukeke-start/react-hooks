const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://123.sogou.com/getjson.api',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      },
    })
  );
  app.use(
    '/apc',
    createProxyMiddleware({
        target: 'http://i.sogou.com/',
        changeOrigin: true,
        pathRewrite: {
            '^/apc': '',
        }
    })
  );
};
