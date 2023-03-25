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
      '@public': path.join(__dirname, './public'),
      '@store': path.join(__dirname, 'src/store'),
      '@styles': path.join(__dirname, 'src/styles'),
      '@typings': path.join(__dirname, 'src/typings'),
      '@utils': path.join(__dirname, 'src/utils'),
    };

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  reactStrictMode: true,
};
