"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/**
 * Developed by Anthony Cox in 2024
 */

/**
 * Configures Babel with all relevant settings for transpiling React components and ES6 JavaScript code
 * @param {any} api
 * @returns {{ presets: Array.<JSON>, plugins: Array.<string> }}
 */
var configureBabel = function configureBabel(api) {
  api.cache(true);
  var presets = [['@babel/preset-env', {
    corejs: '3.40',
    useBuiltIns: "usage"
  }], '@babel/preset-react'];
  var plugins = ['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-dynamic-import', '@babel/plugin-transform-arrow-functions'];
  return {
    presets: presets,
    plugins: plugins
  };
};
var _default = exports["default"] = configureBabel;