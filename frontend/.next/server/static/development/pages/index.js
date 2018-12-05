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


var BatteryStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Battery__BatteryStyles",
  componentId: "zfm18v-0"
})(["width:100%;--color:", ";border:2px solid black;border-radius:5px;overflow:hidden;display:flex;flex-direction:column-reverse;background:#c5c5c5;.batteryLevel{transition:all 0.5s;height:", "%;text-align:center;color:white;display:block;background:var(--color);}"], function (props) {
  return props.level > 20 ? '#1af21a' : '#bb0707';
}, function (props) {
  return props.level;
});

var Battery = function Battery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BatteryStyles, {
    level: props.battery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "batteryLevel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, props.battery, "%"));
};

Battery.defaultProps = {
  // battery: 'LOADING',
  battery: 60
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../socket */ "./socket.js");
var _jsxFileName = "/Users/wesbos/Dropbox/0243 - Drone Challenge/frontend/components/Commands.js";



var CommandGrid = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Commands__CommandGrid",
  componentId: "sc-1yqthc9-0"
})(["display:grid;grid-template-columns:1fr 1.25fr 1fr;grid-template-rows:repeat(3,1fr);border:1px solid black;grid-gap:3px;button{text-shadow:2px 2px 0 rgba(0,0,0,0.05);border:0;background:#fe2c70;border:4px solid transparent;color:white;font-size:1rem;position:relative;&:active{top:2px;}&:focus{outline:0;border-color:#ffc600;}&.takeoff{background:#41c7ff;}&.land{background:#00ff00;}&.emergency{background:orange;text-transform:uppercase;color:black;}&.rotate{background:#00fff9;color:black;}&.height{background:#fff;color:black;}span.symbol{display:block;font-size:2rem;font-weight:400;}}.center{display:grid;grid-gap:3px;grid-template-columns:1fr 1fr;button:last-child{grid-column:span 2;}}h2{grid-column:1 / -1;background:#ffc600;margin:0;font-size:1rem;text-align:center;padding:0.5rem;color:black;}"]);

function sendCommand(command) {
  return function () {
    console.log("Sending the command ".concat(command));
    _socket__WEBPACK_IMPORTED_MODULE_2__["default"].emit('command', command);
  };
}

var amount = 100;

var Commands = function Commands() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommandGrid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "rotate",
    onClick: sendCommand('ccw 90'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "\u27F2"), " 90\xB0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: sendCommand("forward ".concat(amount)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "\u2191"), " forward ", amount, "cm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "rotate",
    onClick: sendCommand('cw 15'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "\u27F3"), " 15\xB0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: sendCommand("left ".concat(amount)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "\u2190"), " left ", amount, "cm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "takeoff",
    onClick: sendCommand('takeoff'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Take Off"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "land",
    onClick: sendCommand('land'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Land"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "emergency",
    onClick: sendCommand('emergency'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "!! emergency !!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: sendCommand("right ".concat(amount)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "\u2192"), "right ", amount, "cm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "height",
    onClick: sendCommand("up ".concat(amount)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "\u2912"), " ", amount, "cm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: sendCommand("back ".concat(amount)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "\u2193"), " back ", amount, "cm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "height",
    onClick: sendCommand("down ".concat(amount)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "\u2913"), " ", amount, "cm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Fancy Pants"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: sendCommand('flip l'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Flip Left"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: sendCommand('flip r'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Flip Right"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: sendCommand('flip b'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Flip Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: sendCommand('flip f'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Flip Forward"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: sendCommand('go 25 25 25 25'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Go 25 25 25 25"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: sendCommand('curve 100 100 100 150 250 350 50'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Curve!"));
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../socket */ "./socket.js");
/* harmony import */ var _Battery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Battery */ "./components/Battery.js");
/* harmony import */ var _Tilt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tilt */ "./components/Tilt.js");
var _jsxFileName = "/Users/wesbos/Dropbox/0243 - Drone Challenge/frontend/components/DroneState.js";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function useDroneState() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      droneState = _useState2[0],
      updateDroneState = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _socket__WEBPACK_IMPORTED_MODULE_2__["default"].on('dronestate', updateDroneState);
    return function () {
      return _socket__WEBPACK_IMPORTED_MODULE_2__["default"].removeListener('dronestate');
    };
  }, []);
  return droneState;
}

function useSocket() {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('DISCONNECTED'),
      _useState4 = _slicedToArray(_useState3, 2),
      status = _useState4[0],
      updateStatus = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _socket__WEBPACK_IMPORTED_MODULE_2__["default"].on('status', updateStatus);
    return function () {
      return _socket__WEBPACK_IMPORTED_MODULE_2__["default"].removeListener('status');
    };
  }, []);
  return status;
}

var DroneStateStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DroneState__DroneStateStyles",
  componentId: "knanam-0"
})(["display:grid;grid-template-columns:1fr 4fr;grid-gap:5px;.status{grid-column:1 / -1;text-align:center;}"]);

var DroneState = function DroneState() {
  var status = useSocket();
  var droneState = useDroneState([]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DroneStateStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Status: ", status), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Battery__WEBPACK_IMPORTED_MODULE_3__["default"], {
    battery: droneState.bat,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tilt__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pitch: droneState.pitch,
    roll: droneState.roll,
    yaw: droneState.yaw,
    height: droneState.h,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
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


var TiltWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Tilt__TiltWrap",
  componentId: "r4dnot-0"
})(["perspective:500px;transform-style:preserve-3d;text-align:center;display:grid;justify-content:center;overflow:hidden;grid-gap:5px;grid-template-columns:repeat(4,1fr);span{background:#fe2c70;}"]);
var TiltStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Tilt__TiltStyles",
  componentId: "r4dnot-1"
})(["background-image:url('/static/drone.jpg');background-size:contain;background-position:center;height:200px;color:white;transform:rotateX(", "deg) rotate(", "deg) rotateY(", "deg);position:relative;grid-column:1 / -1;"], function (props) {
  return props.pitch;
}, function (props) {
  return props.yaw * -1;
}, function (props) {
  return props.roll * -1;
});

var Tilt = function Tilt(_ref) {
  var pitch = _ref.pitch,
      roll = _ref.roll,
      yaw = _ref.yaw,
      height = _ref.height;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TiltWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Pitch: ", pitch), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Roll: ", roll), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Yaw: ", yaw), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Height: ", height / 100, "M"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TiltStyles, {
    pitch: pitch,
    roll: roll,
    yaw: yaw,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
};

Tilt.defaultProps = {
  pitch: 0,
  roll: 0,
  yaw: 0,
  height: 0
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
  var data = _taggedTemplateLiteral(["\n  body {\n    background: white;\n    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */\n    font-family: 'Operator Mono', monospace;\n    font-weight: 900;\n    font-size: 1rem;\n    background:#193549;\n    color: white;\n  }\n  * {\n    font-family: 'Operator Mono', monospace;\n    box-sizing: border-box;\n  }\n  h2 {\n    text-align: center;\n    font-style: italic;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject());
var PageStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__PageStyles",
  componentId: "sc-1fr1wxi-0"
})(["max-width:500px;margin:0 auto;"]);

var IndexPage = function IndexPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "JavaScript Drone"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Commands__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DroneState__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
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