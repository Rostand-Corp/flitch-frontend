// eslint-disable-next-line @typescript-eslint/no-var-requires
const theme = require('./src/config/theme-constants');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: theme.fontFamily,
      screens: {
        ...Object.fromEntries(
          Object.entries(theme.breakpoints).map(([key, value]) => [
            key,
            `${value}px`,
          ]),
        ),
      },
      lineClamp: {
        7: '7',
        8: '8',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
  corePlugins: {
    preflight: false,
  },
};
