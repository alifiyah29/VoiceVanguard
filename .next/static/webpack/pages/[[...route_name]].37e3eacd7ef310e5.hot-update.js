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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Speaker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeakerDetail */ \"./src/components/speakers/SpeakerDetail.js\");\n/* harmony import */ var _speakersData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../speakersData */ \"./speakersData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/ThemeContext */ \"./src/components/context/ThemeContext.js\");\n/* harmony import */ var _context_SpeakersDataContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/SpeakersDataContext */ \"./src/components/context/SpeakersDataContext.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nvar Inner = function(param) {\n    var id = param.id;\n    _s();\n    var darkTheme = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.ThemeContext).darkTheme;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_SpeakersDataContext__WEBPACK_IMPORTED_MODULE_5__.SpeakersDataContext), speakerList = ref.speakerList, loadingStatus = ref.loadingStatus;\n    var speakerRec = speakerList === null || speakerList === void 0 ? void 0 : speakerList.find(function(rec) {\n        return rec.id;\n    });\n};\n_s(Inner, \"SM7CuJGVin3BfdWDPjw118W3nZM=\");\n_c = Inner;\nfunction Speaker(param) {\n    var id = param.id;\n    _s1();\n    var darkTheme = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.ThemeContext).darkTheme;\n    var speakerRec = _speakersData__WEBPACK_IMPORTED_MODULE_2__.speakerList === null || _speakersData__WEBPACK_IMPORTED_MODULE_2__.speakerList === void 0 ? void 0 : _speakersData__WEBPACK_IMPORTED_MODULE_2__.speakerList.find(function(rec) {\n        return rec.id === id;\n    });\n    return speakerRec ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: darkTheme ? \"theme-dark\" : \"theme-light\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            speakerRec: speakerRec,\n            showDetails: true\n        }, void 0, false, {\n            fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\Speaker.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\Speaker.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"text-danger\",\n        children: [\n            \"Speaker \",\n            id,\n            \" not found\"\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\Speaker.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s1(Speaker, \"g941YcCeJON9Hh0mW96OT7mOLxA=\");\n_c1 = Speaker;\nvar _c, _c1;\n$RefreshReg$(_c, \"Inner\");\n$RefreshReg$(_c1, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zcGVha2Vycy9TcGVha2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUE0QztBQUNRO0FBQ2pCO0FBQ29CO0FBQ2M7QUFFckUsSUFBTUssS0FBSyxHQUFHLGdCQUFTO1FBQVBDLEVBQUUsU0FBRkEsRUFBRTs7SUFDbEIsSUFBTSxTQUFVLEdBQUlKLGlEQUFVLENBQUNDLCtEQUFZLENBQUMsQ0FBckNJLFNBQVM7SUFDaEIsSUFBcUNMLEdBQStCLEdBQS9CQSxpREFBVSxDQUFDRSw2RUFBbUIsQ0FBQyxFQUE3REgsV0FBVyxHQUFtQkMsR0FBK0IsQ0FBN0RELFdBQVcsRUFBRU8sYUFBYSxHQUFJTixHQUErQixDQUFoRE0sYUFBYTtJQUNqQyxJQUFNQyxVQUFVLEdBQUdSLFdBQVcsYUFBWEEsV0FBVyxXQUFNLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsV0FBVyxDQUFFUyxJQUFJLENBQUMsU0FBQ0MsR0FBRztlQUFLQSxHQUFHLENBQUNMLEVBQUU7S0FBQSxDQUFDO0FBQ3JELENBQUM7R0FKS0QsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBTUksU0FBU08sT0FBTyxDQUFDLEtBQU0sRUFBRTtRQUFSLEVBQUksR0FBSixLQUFNLENBQUpOLEVBQUU7O0lBQ2xDLElBQU0sU0FBVyxHQUFLSixpREFBVSxDQUFDQywrREFBWSxDQUFDLENBQXRDSSxTQUFTO0lBQ2pCLElBQU1FLFVBQVUsR0FBR1Isc0RBQVcsYUFBWEEsc0RBQVcsV0FBTSxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLDJEQUFpQixDQUFDLFNBQUNVLEdBQUc7ZUFBS0EsR0FBRyxDQUFDTCxFQUFFLEtBQUtBLEVBQUU7S0FBQSxDQUFDO0lBRTVELE9BQU9HLFVBQVUsaUJBQ2YsOERBQUNJLEtBQUc7UUFBQ0MsU0FBUyxFQUFFUCxTQUFTLEdBQUcsWUFBWSxHQUFHLGFBQWE7a0JBQ3RELDRFQUFDUCxzREFBYTtZQUFDUyxVQUFVLEVBQUVBLFVBQVU7WUFBRU0sV0FBVyxFQUFFLElBQUk7Ozs7O2dCQUFJOzs7OztZQUN4RCxpQkFFTiw4REFBQ0MsSUFBRTtRQUFDRixTQUFTLEVBQUMsYUFBYTs7WUFBQyxVQUFRO1lBQUNSLEVBQUU7WUFBQyxZQUFVOzs7Ozs7WUFBSyxDQUN2RDtBQUNKLENBQUM7SUFYdUJNLE9BQU87QUFBUEEsTUFBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zcGVha2Vycy9TcGVha2VyLmpzPzgzMjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXJEZXRhaWwgZnJvbSBcIi4vU3BlYWtlckRldGFpbFwiO1xuaW1wb3J0IHsgc3BlYWtlckxpc3QgfSBmcm9tIFwiLi4vLi4vLi4vc3BlYWtlcnNEYXRhXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9UaGVtZUNvbnRleHRcIjtcbmltcG9ydCB7IFNwZWFrZXJzRGF0YUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9TcGVha2Vyc0RhdGFDb250ZXh0XCI7XG5cbmNvbnN0IElubmVyID0gKHtpZH0pID0+e1xuY29uc3Qge2RhcmtUaGVtZX0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dClcbmNvbnN0IHtzcGVha2VyTGlzdCwgbG9hZGluZ1N0YXR1c30gPSB1c2VDb250ZXh0KFNwZWFrZXJzRGF0YUNvbnRleHQpXG5jb25zdCBzcGVha2VyUmVjID0gc3BlYWtlckxpc3Q/LmZpbmQoKHJlYykgPT4gcmVjLmlkKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGVha2VyKHsgaWQgfSkge1xuICBjb25zdCB7IGRhcmtUaGVtZSB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuICBjb25zdCBzcGVha2VyUmVjID0gc3BlYWtlckxpc3Q/LmZpbmQoKHJlYykgPT4gcmVjLmlkID09PSBpZCk7XG5cbiAgcmV0dXJuIHNwZWFrZXJSZWMgPyAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2RhcmtUaGVtZSA/IFwidGhlbWUtZGFya1wiIDogXCJ0aGVtZS1saWdodFwifT5cbiAgICAgIDxTcGVha2VyRGV0YWlsIHNwZWFrZXJSZWM9e3NwZWFrZXJSZWN9IHNob3dEZXRhaWxzPXt0cnVlfSAvPlxuICAgIDwvZGl2PlxuICApIDogKFxuICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlNwZWFrZXIge2lkfSBub3QgZm91bmQ8L2gyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlNwZWFrZXJEZXRhaWwiLCJzcGVha2VyTGlzdCIsInVzZUNvbnRleHQiLCJUaGVtZUNvbnRleHQiLCJTcGVha2Vyc0RhdGFDb250ZXh0IiwiSW5uZXIiLCJpZCIsImRhcmtUaGVtZSIsImxvYWRpbmdTdGF0dXMiLCJzcGVha2VyUmVjIiwiZmluZCIsInJlYyIsIlNwZWFrZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzaG93RGV0YWlscyIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/speakers/Speaker.js\n"));

/***/ })

});