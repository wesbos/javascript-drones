webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Tilt.js":
/*!****************************!*\
  !*** ./components/Tilt.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/wesbos/Dropbox/0243 - Drone Challenge/frontend/components/Tilt.js";


function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-image: url('/static/drone.jpg');\n  background-size: contain;\n  border: 1px solid pink;\n  width: 300px;\n  height: 200px;\n  /* transition: all 0.2s; */\n  color: white;\n  transform: rotateX(", "deg)\n    rotate(", "deg)\n    rotateY(", "deg);\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  perspective: 500px;\n  transform-style: preserve-3d;\n  text-align: center;\n  display: grid;\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var TiltWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var TiltStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2(), function (props) {
  return props.pitch;
}, function (props) {
  return props.yaw * -1;
}, function (props) {
  return props.roll * -1;
});

var Tilt = function Tilt(_ref) {
  var pitch = _ref.pitch,
      roll = _ref.roll,
      yaw = _ref.yaw;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TiltWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Pitch: ", pitch, "Roll: ", roll, "Yaw: ", yaw, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TiltStyles, {
    pitch: pitch,
    roll: roll,
    yaw: yaw,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }));
};

Tilt.defaultProps = {
  pitch: 0,
  roll: 50,
  yaw: 50
};
/* harmony default export */ __webpack_exports__["default"] = (Tilt);

/***/ })

})
//# sourceMappingURL=index.js.501765db585e751afd10.hot-update.js.map