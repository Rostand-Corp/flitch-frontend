const path = require('path');

/** @type {import("next").NextConfig} */
module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@api': path.join(__dirname, 'src/api'),
      '@components': path.join(__dirname, 'src/components'),
      '@config': path.join(__dirname, 'src/config'),
      '@hooks': path.join(__dirname, 'src/hooks'),
      '@layouts': path.join(__dirname, 'src/layouts'),
      '@pages': path.join(__dirname, 'src/pages'),
      '@store': path.join(__dirname, 'src/store'),
      '@styles': path.join(__dirname, 'src/styles'),
      '@typings': path.join(__dirname, 'src/typings'),
      '@utils': path.join(__dirname, 'src/utils'),
    };

    return config;
  },
  reactStrictMode: true,
};
