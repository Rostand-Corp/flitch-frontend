import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-mock',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config?.resolve?.alias,
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
    }

    // This modifies the existing image rule to exclude `.svg` files
    // since we handle those with `@svgr/webpack`.
    const imageRule = config.module?.rules?.find((rule) => {
      if (typeof rule !== 'string' && rule.test instanceof RegExp) {
        return rule.test.test('.svg');
      }
    });

    if (imageRule && typeof imageRule !== 'string') {
      imageRule.exclude = /\.svg$/;
    }

    config.module?.rules?.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
export default config;
