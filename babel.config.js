/**
 * Developed by Anthony Cox in 2024
 */
module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        corejs: '3.41',
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
