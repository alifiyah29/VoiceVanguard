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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SpeakerLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakerLine */ \"./src/components/speakers/SpeakerLine.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction List(param) {\n    var speakers1 = param.speakers, updateSpeaker = param.updateSpeaker;\n    var toggleFavoriteSpeaker = function toggleFavoriteSpeaker(speakerRec) {\n        var speakerRecUpdated = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, speakerRec), {\n            favorite: !speakerRec.favorite\n        });\n        updateSpeaker(speakerRecUpdated);\n        function updateAsync(rec) {\n            return _updateAsync.apply(this, arguments);\n        }\n        function _updateAsync() {\n            _updateAsync = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function(rec) {\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            setUpdatingId(rec.id);\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].put(\"api/speakers/\".concat(rec.id), speakerRecUpdated)\n                            ];\n                        case 1:\n                            _state.sent();\n                            setUpdatingId(0);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _updateAsync.apply(this, arguments);\n        }\n        updateAsync(speakerRecUpdated);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), updatingId = ref[0], setUpdatingId = ref[1];\n    var isPending = false;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"btn-toolbar\",\n                    role: \"toolbar\",\n                    \"aria-label\": \"Speaker toolbar filter\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"toolbar-trigger mb-3 flex-grow-04\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"toolbar-search w-100\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    value: \"\",\n                                    onChange: function(event) {},\n                                    type: \"text\",\n                                    className: \"form-control\",\n                                    placeholder: \"Highlight Names\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"spinner-height\",\n                                children: isPending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"spinner-border text-dark\",\n                                    role: \"status\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row g-3\",\n                children: speakers1.map(function(speakerRec) {\n                    var highlight = false;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerLine__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        speakerRec: speakerRec,\n                        updating: updatingId === speakerRec.id ? updatingId : 0,\n                        toggleFavoriteSpeaker: function() {\n                            return toggleFavoriteSpeaker(speakerRec);\n                        },\n                        highlight: highlight\n                    }, speakerRec.id, false, {\n                        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(List, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = List;\nvar SpeakerList = function() {\n    var updateSpeaker = function updateSpeaker(speakerRec) {\n        var speakerUpdated = speakers.map(function(rec) {\n            return speakerRec.id === rec.id ? speakerRec : rec;\n        });\n        setSpeakers(speakerUpdated);\n    };\n    _s1();\n    var darkTheme = false;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        function getDataAsync() {\n            return _getDataAsync.apply(this, arguments);\n        }\n        function _getDataAsync() {\n            _getDataAsync = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n                var results;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            setLoading(true);\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"/api/speakers\")\n                            ];\n                        case 1:\n                            results = _state.sent();\n                            setSpeakers(results.data);\n                            setLoading(false);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _getDataAsync.apply(this, arguments);\n        }\n        getDataAsync();\n    }, []), state = ref[0], dispatch = ref[1];\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 87,\n        columnNumber: 23\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: darkTheme ? \"theme-dark\" : \"theme-light\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(List, {\n            speakers: speakers,\n            updateSpeaker: updateSpeaker\n        }, void 0, false, {\n            fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n            lineNumber: 91,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, _this);\n};\n_s1(SpeakerList, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c1 = SpeakerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerList);\nvar _c, _c1;\n$RefreshReg$(_c, \"List\");\n$RefreshReg$(_c1, \"SpeakerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zcGVha2Vycy9TcGVha2VyTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBQTRDO0FBQ0o7QUFDZDtBQUUxQixTQUFTSSxJQUFJLENBQUMsS0FBMkIsRUFBRTtRQUEzQkMsU0FBUSxHQUFWLEtBQTJCLENBQXpCQSxRQUFRLEVBQUVDLGFBQWEsR0FBekIsS0FBMkIsQ0FBZkEsYUFBYTtRQUk1QkMscUJBQXFCLEdBQTlCLFNBQVNBLHFCQUFxQixDQUFDQyxVQUFVLEVBQUU7UUFDekMsSUFBTUMsaUJBQWlCLEdBQUcsd0tBQUtELFVBQVU7WUFBRUUsUUFBUSxFQUFFLENBQUNGLFVBQVUsQ0FBQ0UsUUFBUTtVQUFFO1FBQzNFSixhQUFhLENBQUNHLGlCQUFpQixDQUFDLENBQUM7aUJBQ2xCRSxXQUFXLENBQUNDLEdBQUc7bUJBQWZELFlBQVc7O2lCQUFYQSxZQUFXO1lBQVhBLFlBQVcsR0FBMUIsNkZBQTJCQyxHQUFHLEVBQUU7Ozs7NEJBQzlCQyxhQUFhLENBQUNELEdBQUcsQ0FBQ0UsRUFBRSxDQUFDLENBQUM7NEJBQ3RCOztnQ0FBTVgsaURBQVMsQ0FBQyxlQUFjLENBQVMsT0FBUFMsR0FBRyxDQUFDRSxFQUFFLENBQUUsRUFBRUwsaUJBQWlCLENBQUM7OEJBQUE7OzRCQUE1RCxhQUE0RCxDQUFDOzRCQUM3REksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7WUFDbkIsQ0FBQzttQkFKY0YsWUFBVzs7UUFLMUJBLFdBQVcsQ0FBQ0YsaUJBQWlCLENBQUMsQ0FBQztJQUNqQyxDQUFDOztJQVpELElBQW9DUixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQXhDZSxVQUFVLEdBQW1CZixHQUFXLEdBQTlCLEVBQUVZLGFBQWEsR0FBSVosR0FBVyxHQUFmO0lBQ2hDLElBQU1nQixTQUFTLEdBQUcsS0FBSztJQWF2QixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsV0FB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SUFFMUMscUJBQ0UsOERBQUNBLEtBQUc7UUFBQ0MsU0FBUyxFQUFFZ0IsU0FBUyxHQUFHLFlBQVksR0FBRyxhQUFhO2tCQUN0RCw0RUFBQy9CLElBQUk7WUFBQ0MsUUFBUSxFQUFFQSxRQUFRO1lBQUVDLGFBQWEsRUFBRUEsYUFBYTs7Ozs7aUJBQUk7Ozs7O2FBQ3RELENBQ047QUFDSixDQUFDO0lBN0JLMEIsV0FBVztBQUFYQSxNQUFBQSxXQUFXO0FBK0JqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NwZWFrZXJzL1NwZWFrZXJMaXN0LmpzP2YzMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNwZWFrZXJMaW5lIGZyb20gXCIuL1NwZWFrZXJMaW5lXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmZ1bmN0aW9uIExpc3QoeyBzcGVha2VycywgdXBkYXRlU3BlYWtlciB9KSB7XG4gIGNvbnN0IFt1cGRhdGluZ0lkLCBzZXRVcGRhdGluZ0lkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBpc1BlbmRpbmcgPSBmYWxzZTtcblxuICBmdW5jdGlvbiB0b2dnbGVGYXZvcml0ZVNwZWFrZXIoc3BlYWtlclJlYykge1xuICAgIGNvbnN0IHNwZWFrZXJSZWNVcGRhdGVkID0geyAuLi5zcGVha2VyUmVjLCBmYXZvcml0ZTogIXNwZWFrZXJSZWMuZmF2b3JpdGUgfTtcbiAgICB1cGRhdGVTcGVha2VyKHNwZWFrZXJSZWNVcGRhdGVkKTtcbiAgICBhc3luYyBmdW5jdGlvbiB1cGRhdGVBc3luYyhyZWMpIHtcbiAgICAgIHNldFVwZGF0aW5nSWQocmVjLmlkKTtcbiAgICAgIGF3YWl0IGF4aW9zLnB1dChgYXBpL3NwZWFrZXJzLyR7cmVjLmlkfWAsIHNwZWFrZXJSZWNVcGRhdGVkKTtcbiAgICAgIHNldFVwZGF0aW5nSWQoMCk7XG4gICAgfVxuICAgIHVwZGF0ZUFzeW5jKHNwZWFrZXJSZWNVcGRhdGVkKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTBcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi10b29sYmFyXCJcbiAgICAgICAgICByb2xlPVwidG9vbGJhclwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlNwZWFrZXIgdG9vbGJhciBmaWx0ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYmFyLXRyaWdnZXIgbWItMyBmbGV4LWdyb3ctMDRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJhci1zZWFyY2ggdy0xMDBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHt9fVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGlnaGxpZ2h0IE5hbWVzXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWhlaWdodFwiPlxuICAgICAgICAgICAgICB7aXNQZW5kaW5nICYmIChcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcGlubmVyLWJvcmRlciB0ZXh0LWRhcmtcIiByb2xlPVwic3RhdHVzXCIgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBnLTNcIj5cbiAgICAgICAge3NwZWFrZXJzLm1hcChmdW5jdGlvbiAoc3BlYWtlclJlYykge1xuICAgICAgICAgIGNvbnN0IGhpZ2hsaWdodCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3BlYWtlckxpbmVcbiAgICAgICAgICAgICAga2V5PXtzcGVha2VyUmVjLmlkfVxuICAgICAgICAgICAgICBzcGVha2VyUmVjPXtzcGVha2VyUmVjfVxuICAgICAgICAgICAgICB1cGRhdGluZz17dXBkYXRpbmdJZCA9PT0gc3BlYWtlclJlYy5pZCA/IHVwZGF0aW5nSWQgOiAwfVxuICAgICAgICAgICAgICB0b2dnbGVGYXZvcml0ZVNwZWFrZXI9eygpID0+IHRvZ2dsZUZhdm9yaXRlU3BlYWtlcihzcGVha2VyUmVjKX1cbiAgICAgICAgICAgICAgaGlnaGxpZ2h0PXtoaWdobGlnaHR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IFNwZWFrZXJMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBkYXJrVGhlbWUgPSBmYWxzZTtcbiBcbmNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhQXN5bmMoKSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvc3BlYWtlcnNcIik7XG4gICAgICBzZXRTcGVha2VycyhyZXN1bHRzLmRhdGEpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICAgIGdldERhdGFBc3luYygpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlU3BlYWtlcihzcGVha2VyUmVjKSB7XG4gICAgY29uc3Qgc3BlYWtlclVwZGF0ZWQgPSBzcGVha2Vycy5tYXAoZnVuY3Rpb24gKHJlYykge1xuICAgICAgcmV0dXJuIHNwZWFrZXJSZWMuaWQgPT09IHJlYy5pZCA/IHNwZWFrZXJSZWMgOiByZWM7XG4gICAgfSk7XG4gICAgc2V0U3BlYWtlcnMoc3BlYWtlclVwZGF0ZWQpO1xuICB9XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17ZGFya1RoZW1lID8gXCJ0aGVtZS1kYXJrXCIgOiBcInRoZW1lLWxpZ2h0XCJ9PlxuICAgICAgPExpc3Qgc3BlYWtlcnM9e3NwZWFrZXJzfSB1cGRhdGVTcGVha2VyPXt1cGRhdGVTcGVha2VyfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckxpc3Q7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTcGVha2VyTGluZSIsImF4aW9zIiwiTGlzdCIsInNwZWFrZXJzIiwidXBkYXRlU3BlYWtlciIsInRvZ2dsZUZhdm9yaXRlU3BlYWtlciIsInNwZWFrZXJSZWMiLCJzcGVha2VyUmVjVXBkYXRlZCIsImZhdm9yaXRlIiwidXBkYXRlQXN5bmMiLCJyZWMiLCJzZXRVcGRhdGluZ0lkIiwiaWQiLCJwdXQiLCJ1cGRhdGluZ0lkIiwiaXNQZW5kaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwicm9sZSIsImFyaWEtbGFiZWwiLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImkiLCJtYXAiLCJoaWdobGlnaHQiLCJ1cGRhdGluZyIsIlNwZWFrZXJMaXN0Iiwic3BlYWtlclVwZGF0ZWQiLCJzZXRTcGVha2VycyIsImRhcmtUaGVtZSIsImdldERhdGFBc3luYyIsInJlc3VsdHMiLCJzZXRMb2FkaW5nIiwiZ2V0IiwiZGF0YSIsInN0YXRlIiwiZGlzcGF0Y2giLCJsb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/speakers/SpeakerList.js\n"));

/***/ })

});