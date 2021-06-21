"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgComponent(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    width: "100%",
    height: "100%",
    viewBox: "0 0 62 57"
  }, props), /*#__PURE__*/_react["default"].createElement("title", null, 'E2AF6CBC-F534-4B62-B3D7-8F890B4416F7@1.00x'), /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("filter", {
    x: "-31.3%",
    y: "-36.2%",
    width: "162.5%",
    height: "173.4%",
    filterUnits: "objectBoundingBox",
    id: "prefix__a"
  }, /*#__PURE__*/_react["default"].createElement("feMorphology", {
    radius: 1.75,
    operator: "dilate",
    "in": "SourceAlpha",
    result: "shadowSpreadOuter1"
  }), /*#__PURE__*/_react["default"].createElement("feOffset", {
    "in": "shadowSpreadOuter1",
    result: "shadowOffsetOuter1"
  }), /*#__PURE__*/_react["default"].createElement("feGaussianBlur", {
    stdDeviation: 4,
    "in": "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), /*#__PURE__*/_react["default"].createElement("feComposite", {
    "in": "shadowBlurOuter1",
    in2: "SourceAlpha",
    operator: "out",
    result: "shadowBlurOuter1"
  }), /*#__PURE__*/_react["default"].createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.64 0",
    "in": "shadowBlurOuter1"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M27 46l-2.55-1.774C16.504 38.755 6.556 32.003 5.207 24.067c-.7-4.238.4-8.477 3.099-11.631C10.705 9.626 14.103 8 17.552 8c3.5 0 6.799 1.577 9.448 4.534C29.65 9.577 32.948 8 36.448 8c3.499 0 6.848 1.626 9.247 4.436 2.7 3.154 3.8 7.393 3.1 11.631-1.35 7.936-11.248 14.688-19.246 20.159L27 46z",
    id: "prefix__b"
  })), /*#__PURE__*/_react["default"].createElement("g", {
    fillRule: "nonzero",
    fill: "#000",
    transform: "translate(4 1)"
  }, /*#__PURE__*/_react["default"].createElement("use", {
    filter: "url(#prefix__a)",
    xlinkHref: "#prefix__b"
  }), /*#__PURE__*/_react["default"].createElement("use", {
    stroke: "#FFF",
    strokeWidth: 3.5,
    fillOpacity: 0.6,
    xlinkHref: "#prefix__b"
  })));
}

var _default = SvgComponent;
exports["default"] = _default;