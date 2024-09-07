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

/***/ "./src/components/speakers/SpeakerList.js":
/*!************************************************!*\
  !*** ./src/components/speakers/SpeakerList.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SpeakerLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakerLine */ \"./src/components/speakers/SpeakerLine.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction List(param) {\n    var speakers = param.speakers, updateSpeaker = param.updateSpeaker;\n    var toggleFavoriteSpeaker = function toggleFavoriteSpeaker(speakerRec) {\n        var speakerRecUpdated = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, speakerRec), {\n            favorite: !speakerRec.favorite\n        });\n        updateSpeaker(speakerRecUpdated);\n        function updateAsync(rec) {\n            return _updateAsync.apply(this, arguments);\n        }\n        function _updateAsync() {\n            _updateAsync = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function(rec) {\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            setUpdatingId;\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].put(\"api/speakers/\".concat(rec.id), speakerRecUpdated)\n                            ];\n                        case 1:\n                            _state.sent();\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _updateAsync.apply(this, arguments);\n        }\n        updateAsync(speakerRecUpdated);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), updatingId = ref[0], setUpdatingId = ref[1];\n    var isPending = false;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"btn-toolbar\",\n                    role: \"toolbar\",\n                    \"aria-label\": \"Speaker toolbar filter\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"toolbar-trigger mb-3 flex-grow-04\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"toolbar-search w-100\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    value: \"\",\n                                    onChange: function(event) {},\n                                    type: \"text\",\n                                    className: \"form-control\",\n                                    placeholder: \"Highlight Names\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"spinner-height\",\n                                children: isPending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"spinner-border text-dark\",\n                                    role: \"status\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row g-3\",\n                children: speakers.map(function(speakerRec) {\n                    var highlight = false;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerLine__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        speakerRec: speakerRec,\n                        updating: updatingId === speakerRec.id ? updatingId : 0,\n                        toggleFavoriteSpeaker: function() {\n                            return toggleFavoriteSpeaker(speakerRec);\n                        },\n                        highlight: highlight\n                    }, speakerRec.id, false, {\n                        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(List, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = List;\nvar SpeakerList = function() {\n    var updateSpeaker = function updateSpeaker(speakerRec) {\n        var speakerUpdated = speakers.map(function(rec) {\n            return speakerRec.id === rec.id ? speakerRec : rec;\n        });\n        setSpeakers(speakerUpdated);\n    };\n    _s1();\n    var darkTheme = false;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), speakers = ref[0], setSpeakers = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref1[0], setLoading = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        function getDataAsync() {\n            return _getDataAsync.apply(this, arguments);\n        }\n        function _getDataAsync() {\n            _getDataAsync = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n                var results;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            setLoading(true);\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"/api/speakers\")\n                            ];\n                        case 1:\n                            results = _state.sent();\n                            setSpeakers(results.data);\n                            setLoading(false);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _getDataAsync.apply(this, arguments);\n        }\n        getDataAsync();\n    }, []);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 86,\n        columnNumber: 23\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: darkTheme ? \"theme-dark\" : \"theme-light\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(List, {\n            speakers: speakers,\n            updateSpeaker: updateSpeaker\n        }, void 0, false, {\n            fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n            lineNumber: 90,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, _this);\n};\n_s1(SpeakerList, \"3XG0QAqH/uLX/8072lok9QRLMk0=\");\n_c1 = SpeakerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerList);\nvar _c, _c1;\n$RefreshReg$(_c, \"List\");\n$RefreshReg$(_c1, \"SpeakerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zcGVha2Vycy9TcGVha2VyTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBQTRDO0FBQ0o7QUFDZDtBQUUxQixTQUFTSSxJQUFJLENBQUMsS0FBMkIsRUFBRTtRQUEzQkMsUUFBUSxHQUFWLEtBQTJCLENBQXpCQSxRQUFRLEVBQUVDLGFBQWEsR0FBekIsS0FBMkIsQ0FBZkEsYUFBYTtRQUk1QkMscUJBQXFCLEdBQTlCLFNBQVNBLHFCQUFxQixDQUFDQyxVQUFVLEVBQUU7UUFDekMsSUFBTUMsaUJBQWlCLEdBQUcsd0tBQUtELFVBQVU7WUFBRUUsUUFBUSxFQUFFLENBQUNGLFVBQVUsQ0FBQ0UsUUFBUTtVQUFFO1FBQzNFSixhQUFhLENBQUNHLGlCQUFpQixDQUFDLENBQUM7aUJBQ2xCRSxXQUFXLENBQUNDLEdBQUc7bUJBQWZELFlBQVc7O2lCQUFYQSxZQUFXO1lBQVhBLFlBQVcsR0FBMUIsNkZBQTJCQyxHQUFHLEVBQUU7Ozs7NEJBQzlCQyxhQUFhOzRCQUNiOztnQ0FBTVYsaURBQVMsQ0FBQyxlQUFjLENBQVMsT0FBUFMsR0FBRyxDQUFDRyxFQUFFLENBQUUsRUFBRU4saUJBQWlCLENBQUM7OEJBQUE7OzRCQUE1RCxhQUE0RCxDQUFDOzs7Ozs7WUFDL0QsQ0FBQzttQkFIY0UsWUFBVzs7UUFJMUJBLFdBQVcsQ0FBQ0YsaUJBQWlCLENBQUMsQ0FBQztJQUNqQyxDQUFDOztJQVhELElBQW9DUixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQXhDZSxVQUFVLEdBQW1CZixHQUFXLEdBQTlCLEVBQUVZLGFBQWEsR0FBSVosR0FBVyxHQUFmO0lBQ2hDLElBQU1nQixTQUFTLEdBQUcsS0FBSztJQVl2QixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsV0FBVzs7MEJBQ3hCLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsVUFBVTswQkFDdkIsNEVBQUNELEtBQUc7b0JB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QUFDLENBQUM7SUFTUCxJQUFJRixPQUFPLEVBQUUscUJBQU8sOERBQUNsQixLQUFHO2tCQUFDLFlBQVU7Ozs7O2FBQU0sQ0FBQztJQUUxQyxxQkFDRSw4REFBQ0EsS0FBRztRQUFDQyxTQUFTLEVBQUVnQixTQUFTLEdBQUcsWUFBWSxHQUFHLGFBQWE7a0JBQ3RELDRFQUFDL0IsSUFBSTtZQUFDQyxRQUFRLEVBQUVBLFFBQVE7WUFBRUMsYUFBYSxFQUFFQSxhQUFhOzs7OztpQkFBSTs7Ozs7YUFDdEQsQ0FDTjtBQUNKLENBQUM7SUE3QkswQixXQUFXO0FBQVhBLE1BQUFBLFdBQVc7QUErQmpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc3BlYWtlcnMvU3BlYWtlckxpc3QuanM/ZjMwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU3BlYWtlckxpbmUgZnJvbSBcIi4vU3BlYWtlckxpbmVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZnVuY3Rpb24gTGlzdCh7IHNwZWFrZXJzLCB1cGRhdGVTcGVha2VyIH0pIHtcbiAgY29uc3QgW3VwZGF0aW5nSWQsIHNldFVwZGF0aW5nSWRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGlzUGVuZGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUZhdm9yaXRlU3BlYWtlcihzcGVha2VyUmVjKSB7XG4gICAgY29uc3Qgc3BlYWtlclJlY1VwZGF0ZWQgPSB7IC4uLnNwZWFrZXJSZWMsIGZhdm9yaXRlOiAhc3BlYWtlclJlYy5mYXZvcml0ZSB9O1xuICAgIHVwZGF0ZVNwZWFrZXIoc3BlYWtlclJlY1VwZGF0ZWQpO1xuICAgIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUFzeW5jKHJlYykge1xuICAgICAgc2V0VXBkYXRpbmdJZFxuICAgICAgYXdhaXQgYXhpb3MucHV0KGBhcGkvc3BlYWtlcnMvJHtyZWMuaWR9YCwgc3BlYWtlclJlY1VwZGF0ZWQpO1xuICAgIH1cbiAgICB1cGRhdGVBc3luYyhzcGVha2VyUmVjVXBkYXRlZCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0wXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4tdG9vbGJhclwiXG4gICAgICAgICAgcm9sZT1cInRvb2xiYXJcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJTcGVha2VyIHRvb2xiYXIgZmlsdGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJhci10cmlnZ2VyIG1iLTMgZmxleC1ncm93LTA0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xiYXItc2VhcmNoIHctMTAwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7fX1cbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhpZ2hsaWdodCBOYW1lc1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1oZWlnaHRcIj5cbiAgICAgICAgICAgICAge2lzUGVuZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3Bpbm5lci1ib3JkZXIgdGV4dC1kYXJrXCIgcm9sZT1cInN0YXR1c1wiIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZy0zXCI+XG4gICAgICAgIHtzcGVha2Vycy5tYXAoZnVuY3Rpb24gKHNwZWFrZXJSZWMpIHtcbiAgICAgICAgICBjb25zdCBoaWdobGlnaHQgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNwZWFrZXJMaW5lXG4gICAgICAgICAgICAgIGtleT17c3BlYWtlclJlYy5pZH1cbiAgICAgICAgICAgICAgc3BlYWtlclJlYz17c3BlYWtlclJlY31cbiAgICAgICAgICAgICAgdXBkYXRpbmc9e3VwZGF0aW5nSWQgPT09IHNwZWFrZXJSZWMuaWQgPyB1cGRhdGluZ0lkIDogMH1cbiAgICAgICAgICAgICAgdG9nZ2xlRmF2b3JpdGVTcGVha2VyPXsoKSA9PiB0b2dnbGVGYXZvcml0ZVNwZWFrZXIoc3BlYWtlclJlYyl9XG4gICAgICAgICAgICAgIGhpZ2hsaWdodD17aGlnaGxpZ2h0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBTcGVha2VyTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgZGFya1RoZW1lID0gZmFsc2U7XG4gIGNvbnN0IFtzcGVha2Vycywgc2V0U3BlYWtlcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGFBc3luYygpIHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9zcGVha2Vyc1wiKTtcbiAgICAgIHNldFNwZWFrZXJzKHJlc3VsdHMuZGF0YSk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gICAgZ2V0RGF0YUFzeW5jKCk7XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiB1cGRhdGVTcGVha2VyKHNwZWFrZXJSZWMpIHtcbiAgICBjb25zdCBzcGVha2VyVXBkYXRlZCA9IHNwZWFrZXJzLm1hcChmdW5jdGlvbiAocmVjKSB7XG4gICAgICByZXR1cm4gc3BlYWtlclJlYy5pZCA9PT0gcmVjLmlkID8gc3BlYWtlclJlYyA6IHJlYztcbiAgICB9KTtcbiAgICBzZXRTcGVha2VycyhzcGVha2VyVXBkYXRlZCk7XG4gIH1cblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtkYXJrVGhlbWUgPyBcInRoZW1lLWRhcmtcIiA6IFwidGhlbWUtbGlnaHRcIn0+XG4gICAgICA8TGlzdCBzcGVha2Vycz17c3BlYWtlcnN9IHVwZGF0ZVNwZWFrZXI9e3VwZGF0ZVNwZWFrZXJ9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyTGlzdDtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNwZWFrZXJMaW5lIiwiYXhpb3MiLCJMaXN0Iiwic3BlYWtlcnMiLCJ1cGRhdGVTcGVha2VyIiwidG9nZ2xlRmF2b3JpdGVTcGVha2VyIiwic3BlYWtlclJlYyIsInNwZWFrZXJSZWNVcGRhdGVkIiwiZmF2b3JpdGUiLCJ1cGRhdGVBc3luYyIsInJlYyIsInNldFVwZGF0aW5nSWQiLCJwdXQiLCJpZCIsInVwZGF0aW5nSWQiLCJpc1BlbmRpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJyb2xlIiwiYXJpYS1sYWJlbCIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiaSIsIm1hcCIsImhpZ2hsaWdodCIsInVwZGF0aW5nIiwiU3BlYWtlckxpc3QiLCJzcGVha2VyVXBkYXRlZCIsInNldFNwZWFrZXJzIiwiZGFya1RoZW1lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJnZXREYXRhQXN5bmMiLCJyZXN1bHRzIiwiZ2V0IiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/speakers/SpeakerList.js\n"));

/***/ })

});