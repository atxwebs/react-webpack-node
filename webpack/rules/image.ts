const PATHS = require('../paths');

export default ({ limit = 10000 } = {}) => ({
  test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
  loader: 'url-loader',
  options: { name: '[hash].[ext]', limit, esModule: false },
  include: PATHS.app
});

