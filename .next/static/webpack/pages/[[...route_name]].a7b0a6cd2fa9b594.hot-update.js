"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[[...route_name]]",{

/***/ "./src/components/speakers/Speaker.js":
/*!********************************************!*\
  !*** ./src/components/speakers/Speaker.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Speaker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeakerDetail */ \"./src/components/speakers/SpeakerDetail.js\");\n/* harmony import */ var _speakersData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../speakersData */ \"./speakersData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/ThemeContext */ \"./src/components/context/ThemeContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Inner = function() {};\n_c = Inner;\nfunction Speaker(param) {\n    var id = param.id;\n    _s();\n    var darkTheme = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.ThemeContext).darkTheme;\n    var speakerRec = _speakersData__WEBPACK_IMPORTED_MODULE_2__.speakerList === null || _speakersData__WEBPACK_IMPORTED_MODULE_2__.speakerList === void 0 ? void 0 : _speakersData__WEBPACK_IMPORTED_MODULE_2__.speakerList.find(function(rec) {\n        return rec.id === id;\n    });\n    return speakerRec ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: darkTheme ? \"theme-dark\" : \"theme-light\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            speakerRec: speakerRec,\n            showDetails: true\n        }, void 0, false, {\n            fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\Speaker.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\Speaker.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"text-danger\",\n        children: [\n            \"Speaker \",\n            id,\n            \" not found\"\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\Speaker.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Speaker, \"g941YcCeJON9Hh0mW96OT7mOLxA=\");\n_c1 = Speaker;\nvar _c, _c1;\n$RefreshReg$(_c, \"Inner\");\n$RefreshReg$(_c1, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zcGVha2Vycy9TcGVha2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBQ1E7QUFDakI7QUFDb0I7QUFFdkQsSUFBTUksS0FBSyxHQUFHLFdBQUssQ0FFbkIsQ0FBQztBQUZLQSxLQUFBQSxLQUFLO0FBSUksU0FBU0MsT0FBTyxDQUFDLEtBQU0sRUFBRTtRQUFSLEVBQUksR0FBSixLQUFNLENBQUpDLEVBQUU7O0lBQ2xDLElBQU0sU0FBVyxHQUFLSixpREFBVSxDQUFDQywrREFBWSxDQUFDLENBQXRDSSxTQUFTO0lBQ2pCLElBQU1DLFVBQVUsR0FBR1Asc0RBQVcsYUFBWEEsc0RBQVcsV0FBTSxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLDJEQUFpQixDQUFDLFNBQUNTLEdBQUc7ZUFBS0EsR0FBRyxDQUFDSixFQUFFLEtBQUtBLEVBQUU7S0FBQSxDQUFDO0lBRTVELE9BQU9FLFVBQVUsaUJBQ2YsOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFFTCxTQUFTLEdBQUcsWUFBWSxHQUFHLGFBQWE7a0JBQ3RELDRFQUFDUCxzREFBYTtZQUFDUSxVQUFVLEVBQUVBLFVBQVU7WUFBRUssV0FBVyxFQUFFLElBQUk7Ozs7O2dCQUFJOzs7OztZQUN4RCxpQkFFTiw4REFBQ0MsSUFBRTtRQUFDRixTQUFTLEVBQUMsYUFBYTs7WUFBQyxVQUFRO1lBQUNOLEVBQUU7WUFBQyxZQUFVOzs7Ozs7WUFBSyxDQUN2RDtBQUNKLENBQUM7R0FYdUJELE9BQU87QUFBUEEsTUFBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zcGVha2Vycy9TcGVha2VyLmpzPzgzMjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXJEZXRhaWwgZnJvbSBcIi4vU3BlYWtlckRldGFpbFwiO1xuaW1wb3J0IHsgc3BlYWtlckxpc3QgfSBmcm9tIFwiLi4vLi4vLi4vc3BlYWtlcnNEYXRhXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9UaGVtZUNvbnRleHRcIjtcblxuY29uc3QgSW5uZXIgPSAoKSA9PntcbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwZWFrZXIoeyBpZCB9KSB7XG4gIGNvbnN0IHsgZGFya1RoZW1lIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gIGNvbnN0IHNwZWFrZXJSZWMgPSBzcGVha2VyTGlzdD8uZmluZCgocmVjKSA9PiByZWMuaWQgPT09IGlkKTtcblxuICByZXR1cm4gc3BlYWtlclJlYyA/IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17ZGFya1RoZW1lID8gXCJ0aGVtZS1kYXJrXCIgOiBcInRoZW1lLWxpZ2h0XCJ9PlxuICAgICAgPFNwZWFrZXJEZXRhaWwgc3BlYWtlclJlYz17c3BlYWtlclJlY30gc2hvd0RldGFpbHM9e3RydWV9IC8+XG4gICAgPC9kaXY+XG4gICkgOiAoXG4gICAgPGgyIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+U3BlYWtlciB7aWR9IG5vdCBmb3VuZDwvaDI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiU3BlYWtlckRldGFpbCIsInNwZWFrZXJMaXN0IiwidXNlQ29udGV4dCIsIlRoZW1lQ29udGV4dCIsIklubmVyIiwiU3BlYWtlciIsImlkIiwiZGFya1RoZW1lIiwic3BlYWtlclJlYyIsImZpbmQiLCJyZWMiLCJkaXYiLCJjbGFzc05hbWUiLCJzaG93RGV0YWlscyIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/speakers/Speaker.js\n"));

/***/ })

});