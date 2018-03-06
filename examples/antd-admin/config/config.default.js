'use strict';

const path = require('path');

module.exports = {
  keys: 'secret',
  webpack: {
    config: path.join(__dirname, './webpack.config.js'),
  },
  router: {
    root: '/pages',
    entry: 'page',
  },
  react: {
    static: true,
    cache: true,
  },
  security: {
    domainWhiteList: ['localhost:6001'],
  },
  session: {
    key: 'BEIDOU_SESS',
    maxAge: 1 * 3600 * 1000, // 1 hour
    httpOnly: true,
    encrypt: true,
  },
};
