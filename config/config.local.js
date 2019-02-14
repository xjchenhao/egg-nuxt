'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1550132783709_127';

  // add your config here
  config.middleware = [];

  // 客户端资源配置
  config.assets = {
    publicPath: '/public',
    devServer: {
      debug: false,
      command: 'nuxt',
      port: 3000,
      env: {
        APP_ROOT: process.cwd() + '/app/assets',
        BROWSER: 'none',
        ESLINT: 'none',
        SOCKET_SERVER: 'http://127.0.0.1:3000',
        PUBLIC_PATH: 'http://127.0.0.1:3000',
      },
    },
  };

  return config;
};
