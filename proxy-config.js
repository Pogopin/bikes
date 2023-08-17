// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     'https://fakestoreapi.com/products?limit=3', // URL путь, который будет проксироваться
//     createProxyMiddleware({
//       target: 'http://localhost:5173/bikes', // Адрес вашего API-сервера
//       changeOrigin: true, // Изменение "Origin" заголовка для корректного проксирования
//     })
//   );
// };