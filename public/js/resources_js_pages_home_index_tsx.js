"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_home_index_tsx"],{

/***/ "./resources/js/pages/home/index.tsx":
/*!*******************************************!*\
  !*** ./resources/js/pages/home/index.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

function Home(props) {
  return react_1["default"].createElement("div", null, react_1["default"].createElement("div", null, "Home"), react_1["default"].createElement(inertia_react_1.Link, {
    href: "/help"
  }, "Help"));
}

exports["default"] = Home;

/***/ })

}]);