"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "configureBabel", {
  enumerable: true,
  get: function get() {
    return _babelConfig["default"];
  }
});
var _babelConfig = _interopRequireDefault(require("./babel-config"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }