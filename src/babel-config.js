/**
 * Developed by Anthony Cox in 2024
 */

/**
 * Configures Babel with all relevant settings for transpiling React components and ES6 JavaScript code
 * @param {any} api
 * @returns {{ presets: Array.<JSON>, plugins: Array.<string> }}
 */
const configureBabel = (api) => {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        corejs: 3.39,
        useBuiltIns: "usage",
      }
    ],
    '@babel/preset-react'
  ];

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-arrow-functions'
  ];

  return {
    presets,
    plugins
  };
};
export default configureBabel;
