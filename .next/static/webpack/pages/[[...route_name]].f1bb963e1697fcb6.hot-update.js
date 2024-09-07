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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SpeakerLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakerLine */ \"./src/components/speakers/SpeakerLine.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction List(param) {\n    var speakers1 = param.speakers, updateSpeaker = param.updateSpeaker;\n    var toggleFavoriteSpeaker = function toggleFavoriteSpeaker(speakerRec) {\n        var speakerRecUpdated = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, speakerRec), {\n            favorite: !speakerRec.favorite\n        });\n        updateSpeaker(speakerRecUpdated);\n        function updateAsync(rec) {\n            return _updateAsync.apply(this, arguments);\n        }\n        function _updateAsync() {\n            _updateAsync = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function(rec) {\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            setUpdatingId(rec.id);\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].put(\"api/speakers/\".concat(rec.id), speakerRecUpdated)\n                            ];\n                        case 1:\n                            _state.sent();\n                            setUpdatingId(0);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _updateAsync.apply(this, arguments);\n        }\n        updateAsync(speakerRecUpdated);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), updatingId = ref[0], setUpdatingId = ref[1];\n    var isPending = false;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"btn-toolbar\",\n                    role: \"toolbar\",\n                    \"aria-label\": \"Speaker toolbar filter\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"toolbar-trigger mb-3 flex-grow-04\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"toolbar-search w-100\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    value: \"\",\n                                    onChange: function(event) {},\n                                    type: \"text\",\n                                    className: \"form-control\",\n                                    placeholder: \"Highlight Names\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"spinner-height\",\n                                children: isPending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"spinner-border text-dark\",\n                                    role: \"status\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row g-3\",\n                children: speakers1.map(function(speakerRec) {\n                    var highlight = false;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerLine__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        speakerRec: speakerRec,\n                        updating: updatingId === speakerRec.id ? updatingId : 0,\n                        toggleFavoriteSpeaker: function() {\n                            return toggleFavoriteSpeaker(speakerRec);\n                        },\n                        highlight: highlight\n                    }, speakerRec.id, false, {\n                        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(List, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = List;\nvar SpeakerList = function() {\n    var updateSpeaker = function updateSpeaker(speakerRec) {\n        var speakerUpdated = speakers.map(function(rec) {\n            return speakerRec.id === rec.id ? speakerRec : rec;\n        });\n        setSpeakers(speakerUpdated);\n    };\n    _s1();\n    var darkTheme = false;\n    var reducer = function(state, action) {\n        switch(action.type){\n            case \"speakerLoaded\":\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, state), {\n                    loading: false,\n                    speakers: action.speakers\n                });\n            case \"setLoadingStatus\":\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, state), {\n                    loading: true\n                });\n            case \"updateSpeaker\":\n                ret;\n        }\n    };\n    var initialState = {\n        speakers: [],\n        loading: true\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState), state = ref[0], dispatch = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        function getDataAsync() {\n            return _getDataAsync.apply(this, arguments);\n        }\n        function _getDataAsync() {\n            _getDataAsync = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n                var results;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            setLoading(true);\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"/api/speakers\")\n                            ];\n                        case 1:\n                            results = _state.sent();\n                            setSpeakers(results.data);\n                            setLoading(false);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _getDataAsync.apply(this, arguments);\n        }\n        getDataAsync();\n    }, []);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 102,\n        columnNumber: 23\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: darkTheme ? \"theme-dark\" : \"theme-light\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(List, {\n            speakers: speakers,\n            updateSpeaker: updateSpeaker\n        }, void 0, false, {\n            fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n            lineNumber: 106,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, _this);\n};\n_s1(SpeakerList, \"fPKvVo1WePSSkqBu6pd5SIJ+qm8=\");\n_c1 = SpeakerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerList);\nvar _c, _c1;\n$RefreshReg$(_c, \"List\");\n$RefreshReg$(_c1, \"SpeakerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zcGVha2Vycy9TcGVha2VyTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBQXdEO0FBQ2hCO0FBQ2Q7QUFFMUIsU0FBU0ssSUFBSSxDQUFDLEtBQTJCLEVBQUU7UUFBM0JDLFNBQVEsR0FBVixLQUEyQixDQUF6QkEsUUFBUSxFQUFFQyxhQUFhLEdBQXpCLEtBQTJCLENBQWZBLGFBQWE7UUFJNUJDLHFCQUFxQixHQUE5QixTQUFTQSxxQkFBcUIsQ0FBQ0MsVUFBVSxFQUFFO1FBQ3pDLElBQU1DLGlCQUFpQixHQUFHLHdLQUFLRCxVQUFVO1lBQUVFLFFBQVEsRUFBRSxDQUFDRixVQUFVLENBQUNFLFFBQVE7VUFBRTtRQUMzRUosYUFBYSxDQUFDRyxpQkFBaUIsQ0FBQyxDQUFDO2lCQUNsQkUsV0FBVyxDQUFDQyxHQUFHO21CQUFmRCxZQUFXOztpQkFBWEEsWUFBVztZQUFYQSxZQUFXLEdBQTFCLDZGQUEyQkMsR0FBRyxFQUFFOzs7OzRCQUM5QkMsYUFBYSxDQUFDRCxHQUFHLENBQUNFLEVBQUUsQ0FBQyxDQUFDOzRCQUN0Qjs7Z0NBQU1YLGlEQUFTLENBQUMsZUFBYyxDQUFTLE9BQVBTLEdBQUcsQ0FBQ0UsRUFBRSxDQUFFLEVBQUVMLGlCQUFpQixDQUFDOzhCQUFBOzs0QkFBNUQsYUFBNEQsQ0FBQzs0QkFDN0RJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7O1lBQ25CLENBQUM7bUJBSmNGLFlBQVc7O1FBSzFCQSxXQUFXLENBQUNGLGlCQUFpQixDQUFDLENBQUM7SUFDakMsQ0FBQzs7SUFaRCxJQUFvQ1IsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUF4Q2UsVUFBVSxHQUFtQmYsR0FBVyxHQUE5QixFQUFFWSxhQUFhLEdBQUlaLEdBQVcsR0FBZjtJQUNoQyxJQUFNZ0IsU0FBUyxHQUFHLEtBQUs7SUFhdkIscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFdB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RXRCRCxnREFBUyxDQUFDLFdBQU07aUJBQ0M0QyxZQUFZO21CQUFaQSxhQUFZOztpQkFBWkEsYUFBWTtZQUFaQSxhQUFZLEdBQTNCLCtGQUE4QjtvQkFFdEJDLE9BQU87Ozs7NEJBRGJDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDRDs7Z0NBQU0xQyxpREFBUyxDQUFDLGVBQWUsQ0FBQzs4QkFBQTs7NEJBQTFDeUMsT0FBTyxHQUFHLGFBQWdDOzRCQUNoRFYsV0FBVyxDQUFDVSxPQUFPLENBQUNHLElBQUksQ0FBQyxDQUFDOzRCQUMxQkYsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7WUFDcEIsQ0FBQzttQkFMY0YsYUFBWTs7UUFNM0JBLFlBQVksRUFBRSxDQUFDO0lBQ2pCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQVNQLElBQUlKLE9BQU8sRUFBRSxxQkFBTyw4REFBQ3JCLEtBQUc7a0JBQUMsWUFBVTs7Ozs7YUFBTSxDQUFDO0lBRTFDLHFCQUNFLDhEQUFDQSxLQUFHO1FBQUNDLFNBQVMsRUFBRWdCLFNBQVMsR0FBRyxZQUFZLEdBQUcsYUFBYTtrQkFDdEQsNEVBQUMvQixJQUFJO1lBQUNDLFFBQVEsRUFBRUEsUUFBUTtZQUFFQyxhQUFhLEVBQUVBLGFBQWE7Ozs7O2lCQUFJOzs7OzthQUN0RCxDQUNOO0FBQ0osQ0FBQztJQTVDSzBCLFdBQVc7QUFBWEEsTUFBQUEsV0FBVztBQThDakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zcGVha2Vycy9TcGVha2VyTGlzdC5qcz9mMzA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTcGVha2VyTGluZSBmcm9tIFwiLi9TcGVha2VyTGluZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5mdW5jdGlvbiBMaXN0KHsgc3BlYWtlcnMsIHVwZGF0ZVNwZWFrZXIgfSkge1xuICBjb25zdCBbdXBkYXRpbmdJZCwgc2V0VXBkYXRpbmdJZF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgaXNQZW5kaW5nID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlRmF2b3JpdGVTcGVha2VyKHNwZWFrZXJSZWMpIHtcbiAgICBjb25zdCBzcGVha2VyUmVjVXBkYXRlZCA9IHsgLi4uc3BlYWtlclJlYywgZmF2b3JpdGU6ICFzcGVha2VyUmVjLmZhdm9yaXRlIH07XG4gICAgdXBkYXRlU3BlYWtlcihzcGVha2VyUmVjVXBkYXRlZCk7XG4gICAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQXN5bmMocmVjKSB7XG4gICAgICBzZXRVcGRhdGluZ0lkKHJlYy5pZCk7XG4gICAgICBhd2FpdCBheGlvcy5wdXQoYGFwaS9zcGVha2Vycy8ke3JlYy5pZH1gLCBzcGVha2VyUmVjVXBkYXRlZCk7XG4gICAgICBzZXRVcGRhdGluZ0lkKDApO1xuICAgIH1cbiAgICB1cGRhdGVBc3luYyhzcGVha2VyUmVjVXBkYXRlZCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0wXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4tdG9vbGJhclwiXG4gICAgICAgICAgcm9sZT1cInRvb2xiYXJcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJTcGVha2VyIHRvb2xiYXIgZmlsdGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJhci10cmlnZ2VyIG1iLTMgZmxleC1ncm93LTA0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xiYXItc2VhcmNoIHctMTAwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7fX1cbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhpZ2hsaWdodCBOYW1lc1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1oZWlnaHRcIj5cbiAgICAgICAgICAgICAge2lzUGVuZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3Bpbm5lci1ib3JkZXIgdGV4dC1kYXJrXCIgcm9sZT1cInN0YXR1c1wiIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZy0zXCI+XG4gICAgICAgIHtzcGVha2Vycy5tYXAoZnVuY3Rpb24gKHNwZWFrZXJSZWMpIHtcbiAgICAgICAgICBjb25zdCBoaWdobGlnaHQgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNwZWFrZXJMaW5lXG4gICAgICAgICAgICAgIGtleT17c3BlYWtlclJlYy5pZH1cbiAgICAgICAgICAgICAgc3BlYWtlclJlYz17c3BlYWtlclJlY31cbiAgICAgICAgICAgICAgdXBkYXRpbmc9e3VwZGF0aW5nSWQgPT09IHNwZWFrZXJSZWMuaWQgPyB1cGRhdGluZ0lkIDogMH1cbiAgICAgICAgICAgICAgdG9nZ2xlRmF2b3JpdGVTcGVha2VyPXsoKSA9PiB0b2dnbGVGYXZvcml0ZVNwZWFrZXIoc3BlYWtlclJlYyl9XG4gICAgICAgICAgICAgIGhpZ2hsaWdodD17aGlnaGxpZ2h0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBTcGVha2VyTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgZGFya1RoZW1lID0gZmFsc2U7XG5cbiAgY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBcInNwZWFrZXJMb2FkZWRcIjpcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBzcGVha2VyczogYWN0aW9uLnNwZWFrZXJzIH07XG4gICAgICAgIGNhc2UgXCJzZXRMb2FkaW5nU3RhdHVzXCI6XG4gICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZX1cbiAgICAgICAgICBjYXNlIFwidXBkYXRlU3BlYWtlclwiOlxuICAgICAgICAgICAgcmV0XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBzcGVha2VyczogW10sXG4gICAgbG9hZGluZzogdHJ1ZSxcbiAgfTtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhQXN5bmMoKSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvc3BlYWtlcnNcIik7XG4gICAgICBzZXRTcGVha2VycyhyZXN1bHRzLmRhdGEpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICAgIGdldERhdGFBc3luYygpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlU3BlYWtlcihzcGVha2VyUmVjKSB7XG4gICAgY29uc3Qgc3BlYWtlclVwZGF0ZWQgPSBzcGVha2Vycy5tYXAoZnVuY3Rpb24gKHJlYykge1xuICAgICAgcmV0dXJuIHNwZWFrZXJSZWMuaWQgPT09IHJlYy5pZCA/IHNwZWFrZXJSZWMgOiByZWM7XG4gICAgfSk7XG4gICAgc2V0U3BlYWtlcnMoc3BlYWtlclVwZGF0ZWQpO1xuICB9XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17ZGFya1RoZW1lID8gXCJ0aGVtZS1kYXJrXCIgOiBcInRoZW1lLWxpZ2h0XCJ9PlxuICAgICAgPExpc3Qgc3BlYWtlcnM9e3NwZWFrZXJzfSB1cGRhdGVTcGVha2VyPXt1cGRhdGVTcGVha2VyfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckxpc3Q7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVkdWNlciIsInVzZVN0YXRlIiwiU3BlYWtlckxpbmUiLCJheGlvcyIsIkxpc3QiLCJzcGVha2VycyIsInVwZGF0ZVNwZWFrZXIiLCJ0b2dnbGVGYXZvcml0ZVNwZWFrZXIiLCJzcGVha2VyUmVjIiwic3BlYWtlclJlY1VwZGF0ZWQiLCJmYXZvcml0ZSIsInVwZGF0ZUFzeW5jIiwicmVjIiwic2V0VXBkYXRpbmdJZCIsImlkIiwicHV0IiwidXBkYXRpbmdJZCIsImlzUGVuZGluZyIsImRpdiIsImNsYXNzTmFtZSIsInJvbGUiLCJhcmlhLWxhYmVsIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpIiwibWFwIiwiaGlnaGxpZ2h0IiwidXBkYXRpbmciLCJTcGVha2VyTGlzdCIsInNwZWFrZXJVcGRhdGVkIiwic2V0U3BlYWtlcnMiLCJkYXJrVGhlbWUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJsb2FkaW5nIiwicmV0IiwiaW5pdGlhbFN0YXRlIiwiZGlzcGF0Y2giLCJnZXREYXRhQXN5bmMiLCJyZXN1bHRzIiwic2V0TG9hZGluZyIsImdldCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/speakers/SpeakerList.js\n"));

/***/ })

});