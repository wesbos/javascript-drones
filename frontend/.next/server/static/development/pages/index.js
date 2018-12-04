module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Battery.js":
/*!*******************************!*\
  !*** ./components/Battery.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/wesbos/Dropbox/0243 - Drone Challenge/frontend/components/Battery.js";


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100px;\n  height: 200px;\n  border: 2px solid black;\n  border-radius: 5px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column-reverse;\n  box-shadow: 0 0 10px #1af21a;\n  .batteryLevel {\n    height: ", "%;\n    text-align: center;\n    color: white;\n    display: block;\n    background: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var BatteryStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), function (props) {
  return props.level;
}, function (props) {
  return props.level > 20 ? '#1af21a' : '#bb0707';
});

var Battery = function Battery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BatteryStyles, {
    level: props.battery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "batteryLevel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, props.battery, "%"));
};

Battery.defaultProps = {
  battery: 'LOADING'
};
/* harmony default export */ __webpack_exports__["default"] = (Battery);

/***/ }),

/***/ "./components/Commands.js":
/*!********************************!*\
  !*** ./components/Commands.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../socket */ "./socket.js");
var _jsxFileName = "/Users/wesbos/Dropbox/0243 - Drone Challenge/frontend/components/Commands.js";



function sendCommand(command) {
  return function () {
    console.log("Sending the command ".concat(command));
    _socket__WEBPACK_IMPORTED_MODULE_1__["default"].emit('command', command);
  };
}

var Commands = function Commands() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: sendCommand('takeoff'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Take Off"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: sendCommand('land'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Land"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: sendCommand('up 20'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Up 20cm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: sendCommand('down 20'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Down 20cm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: sendCommand('right 120'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Right 120cm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: sendCommand('left 120'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "left 120cm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: sendCommand('forward 20'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "forward 20cm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: sendCommand('back 20'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "back 20cm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: sendCommand('land'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Land"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: sendCommand('flip l'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Flip Left!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: sendCommand('emergency'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "emergency"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: sendCommand('streamon'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "streamon"));
};

/* harmony default export */ __webpack_exports__["default"] = (Commands);

/***/ }),

/***/ "./components/DroneState.js":
/*!**********************************!*\
  !*** ./components/DroneState.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../socket */ "./socket.js");
/* harmony import */ var _Battery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Battery */ "./components/Battery.js");
/* harmony import */ var _Tilt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tilt */ "./components/Tilt.js");
var _jsxFileName = "/Users/wesbos/Dropbox/0243 - Drone Challenge/frontend/components/DroneState.js";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function useDroneState() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      droneState = _useState2[0],
      updateDroneState = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _socket__WEBPACK_IMPORTED_MODULE_1__["default"].on('dronestate', updateDroneState);
  }, []);
  return droneState;
}

function useSocket() {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('DISCONNECTED'),
      _useState4 = _slicedToArray(_useState3, 2),
      status = _useState4[0],
      updateStatus = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _socket__WEBPACK_IMPORTED_MODULE_1__["default"].on('status', updateStatus);
  }, []);
  return status;
}

var DroneState = function DroneState() {
  var status = useSocket();
  var droneState = useDroneState([]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Status: ", status), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Battery__WEBPACK_IMPORTED_MODULE_2__["default"], {
    battery: droneState.bat,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tilt__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pitch: droneState.pitch,
    roll: droneState.roll,
    yaw: droneState.yaw,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DroneState);

/***/ }),

/***/ "./components/Tilt.js":
/*!****************************!*\
  !*** ./components/Tilt.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/wesbos/Dropbox/0243 - Drone Challenge/frontend/components/Tilt.js";


function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-image: url('/static/drone.jpg');\n  background-size: contain;\n  width: 300px;\n  height: 200px;\n  /* transition: all 0.2s; */\n  color: white;\n  transform: rotateX(", "deg)\n    rotate(", "deg)\n    rotateY(", "deg);\n  position: relative;\n"]);

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


var TiltWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var TiltStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2(), function (props) {
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
      lineNumber: 24
    },
    __self: this
  }, "Pitch: ", pitch, "Roll: ", roll, "Yaw: ", yaw, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TiltStyles, {
    pitch: pitch,
    roll: roll,
    yaw: yaw,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }));
};

Tilt.defaultProps = {
  pitch: 0,
  roll: 0,
  yaw: 0
};
/* harmony default export */ __webpack_exports__["default"] = (Tilt);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_DroneState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DroneState */ "./components/DroneState.js");
/* harmony import */ var _components_Commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Commands */ "./components/Commands.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/wesbos/Dropbox/0243 - Drone Challenge/frontend/pages/index.js";


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  body {\n    background: white;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-weight: 900;\n    font-size: 1rem;\n  }\n  * {\n    font-weight: inherit;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject());

var IndexPage = function IndexPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DroneState__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Commands__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./socket.js":
/*!*******************!*\
  !*** ./socket.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);

var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()('http://localhost:6767');
/* harmony default export */ __webpack_exports__["default"] = (socket);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map