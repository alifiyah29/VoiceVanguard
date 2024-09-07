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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SpeakerLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakerLine */ \"./src/components/speakers/SpeakerLine.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction List(param) {\n    var speakers1 = param.speakers, updateSpeaker = param.updateSpeaker;\n    var toggleFavoriteSpeaker = function toggleFavoriteSpeaker(speakerRec) {\n        var speakerRecUpdated = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, speakerRec), {\n            favorite: !speakerRec.favorite\n        });\n        updateSpeaker(speakerRecUpdated);\n        function updateAsync(rec) {\n            return _updateAsync.apply(this, arguments);\n        }\n        function _updateAsync() {\n            _updateAsync = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function(rec) {\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            setUpdatingId(rec.id);\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].put(\"api/speakers/\".concat(rec.id), speakerRecUpdated)\n                            ];\n                        case 1:\n                            _state.sent();\n                            setUpdatingId(0);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _updateAsync.apply(this, arguments);\n        }\n        updateAsync(speakerRecUpdated);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), updatingId = ref[0], setUpdatingId = ref[1];\n    var isPending = false;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"btn-toolbar\",\n                    role: \"toolbar\",\n                    \"aria-label\": \"Speaker toolbar filter\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"toolbar-trigger mb-3 flex-grow-04\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"toolbar-search w-100\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    value: \"\",\n                                    onChange: function(event) {},\n                                    type: \"text\",\n                                    className: \"form-control\",\n                                    placeholder: \"Highlight Names\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"spinner-height\",\n                                children: isPending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"spinner-border text-dark\",\n                                    role: \"status\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row g-3\",\n                children: speakers1.map(function(speakerRec) {\n                    var highlight = false;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerLine__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        speakerRec: speakerRec,\n                        updating: updatingId === speakerRec.id ? updatingId : 0,\n                        toggleFavoriteSpeaker: function() {\n                            return toggleFavoriteSpeaker(speakerRec);\n                        },\n                        highlight: highlight\n                    }, speakerRec.id, false, {\n                        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(List, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = List;\nvar SpeakerList = function() {\n    var updateSpeaker = function updateSpeaker(speakerRec) {\n        var speakerUpdated = speakers.map(function(rec) {\n            return speakerRec.id === rec.id ? speakerRec : rec;\n        });\n        setSpeakers(speakerUpdated);\n    };\n    _s1();\n    var darkTheme = false;\n    var reducer = function(state, action) {\n        switch(action.type){\n            case \"speakerLoaded\":\n                return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, state);\n        }\n    };\n    var initialState = {\n        speakers: [],\n        loading: true\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState), state = ref[0], dispatch = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        function getDataAsync() {\n            return _getDataAsync.apply(this, arguments);\n        }\n        function _getDataAsync() {\n            _getDataAsync = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n                var results;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            setLoading(true);\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"/api/speakers\")\n                            ];\n                        case 1:\n                            results = _state.sent();\n                            setSpeakers(results.data);\n                            setLoading(false);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _getDataAsync.apply(this, arguments);\n        }\n        getDataAsync();\n    }, []);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 98,\n        columnNumber: 23\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: darkTheme ? \"theme-dark\" : \"theme-light\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(List, {\n            speakers: speakers,\n            updateSpeaker: updateSpeaker\n        }, void 0, false, {\n            fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n            lineNumber: 102,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, _this);\n};\n_s1(SpeakerList, \"fPKvVo1WePSSkqBu6pd5SIJ+qm8=\");\n_c1 = SpeakerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerList);\nvar _c, _c1;\n$RefreshReg$(_c, \"List\");\n$RefreshReg$(_c1, \"SpeakerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zcGVha2Vycy9TcGVha2VyTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBQXdEO0FBQ2hCO0FBQ2Q7QUFFMUIsU0FBU0ssSUFBSSxDQUFDLEtBQTJCLEVBQUU7UUFBM0JDLFNBQVEsR0FBVixLQUEyQixDQUF6QkEsUUFBUSxFQUFFQyxhQUFhLEdBQXpCLEtBQTJCLENBQWZBLGFBQWE7UUFJNUJDLHFCQUFxQixHQUE5QixTQUFTQSxxQkFBcUIsQ0FBQ0MsVUFBVSxFQUFFO1FBQ3pDLElBQU1DLGlCQUFpQixHQUFHLHdLQUFLRCxVQUFVO1lBQUVFLFFBQVEsRUFBRSxDQUFDRixVQUFVLENBQUNFLFFBQVE7VUFBRTtRQUMzRUosYUFBYSxDQUFDRyxpQkFBaUIsQ0FBQyxDQUFDO2lCQUNsQkUsV0FBVyxDQUFDQyxHQUFHO21CQUFmRCxZQUFXOztpQkFBWEEsWUFBVztZQUFYQSxZQUFXLEdBQTFCLDZGQUEyQkMsR0FBRyxFQUFFOzs7OzRCQUM5QkMsYUFBYSxDQUFDRCxHQUFHLENBQUNFLEVBQUUsQ0FBQyxDQUFDOzRCQUN0Qjs7Z0NBQU1YLGlEQUFTLENBQUMsZUFBYyxDQUFTLE9BQVBTLEdBQUcsQ0FBQ0UsRUFBRSxDQUFFLEVBQUVMLGlCQUFpQixDQUFDOzhCQUFBOzs0QkFBNUQsYUFBNEQsQ0FBQzs0QkFDN0RJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7O1lBQ25CLENBQUM7bUJBSmNGLFlBQVc7O1FBSzFCQSxXQUFXLENBQUNGLGlCQUFpQixDQUFDLENBQUM7SUFDakMsQ0FBQzs7SUFaRCxJQUFvQ1IsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUF4Q2UsVUFBVSxHQUFtQmYsR0FBVyxHQUE5QixFQUFFWSxhQUFhLEdBQUlaLEdBQVcsR0FBZjtJQUNoQyxJQUFNZ0IsU0FBUyxHQUFHLEtBQUs7SUFhdkIscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFdB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QUM7OEJBQUE7OzRCQUExQ3dDLE9BQU8sR0FBRyxhQUFnQzs0QkFDaERULFdBQVcsQ0FBQ1MsT0FBTyxDQUFDRyxJQUFJLENBQUMsQ0FBQzs0QkFDMUJGLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7O1lBQ3BCLENBQUM7bUJBTGNGLGFBQVk7O1FBTTNCQSxZQUFZLEVBQUUsQ0FBQztJQUNqQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFTUCxJQUFJRixPQUFPLEVBQUUscUJBQU8sOERBQUN0QixLQUFHO2tCQUFDLFlBQVU7Ozs7O2FBQU0sQ0FBQztJQUUxQyxxQkFDRSw4REFBQ0EsS0FBRztRQUFDQyxTQUFTLEVBQUVnQixTQUFTLEdBQUcsWUFBWSxHQUFHLGFBQWE7a0JBQ3RELDRFQUFDL0IsSUFBSTtZQUFDQyxRQUFRLEVBQUVBLFFBQVE7WUFBRUMsYUFBYSxFQUFFQSxhQUFhOzs7OztpQkFBSTs7Ozs7YUFDdEQsQ0FDTjtBQUNKLENBQUM7SUF4Q0swQixXQUFXO0FBQVhBLE1BQUFBLFdBQVc7QUEwQ2pCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc3BlYWtlcnMvU3BlYWtlckxpc3QuanM/ZjMwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU3BlYWtlckxpbmUgZnJvbSBcIi4vU3BlYWtlckxpbmVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZnVuY3Rpb24gTGlzdCh7IHNwZWFrZXJzLCB1cGRhdGVTcGVha2VyIH0pIHtcbiAgY29uc3QgW3VwZGF0aW5nSWQsIHNldFVwZGF0aW5nSWRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGlzUGVuZGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUZhdm9yaXRlU3BlYWtlcihzcGVha2VyUmVjKSB7XG4gICAgY29uc3Qgc3BlYWtlclJlY1VwZGF0ZWQgPSB7IC4uLnNwZWFrZXJSZWMsIGZhdm9yaXRlOiAhc3BlYWtlclJlYy5mYXZvcml0ZSB9O1xuICAgIHVwZGF0ZVNwZWFrZXIoc3BlYWtlclJlY1VwZGF0ZWQpO1xuICAgIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUFzeW5jKHJlYykge1xuICAgICAgc2V0VXBkYXRpbmdJZChyZWMuaWQpO1xuICAgICAgYXdhaXQgYXhpb3MucHV0KGBhcGkvc3BlYWtlcnMvJHtyZWMuaWR9YCwgc3BlYWtlclJlY1VwZGF0ZWQpO1xuICAgICAgc2V0VXBkYXRpbmdJZCgwKTtcbiAgICB9XG4gICAgdXBkYXRlQXN5bmMoc3BlYWtlclJlY1VwZGF0ZWQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXRvb2xiYXJcIlxuICAgICAgICAgIHJvbGU9XCJ0b29sYmFyXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiU3BlYWtlciB0b29sYmFyIGZpbHRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xiYXItdHJpZ2dlciBtYi0zIGZsZXgtZ3Jvdy0wNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYmFyLXNlYXJjaCB3LTEwMFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge319XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIaWdobGlnaHQgTmFtZXNcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItaGVpZ2h0XCI+XG4gICAgICAgICAgICAgIHtpc1BlbmRpbmcgJiYgKFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyIHRleHQtZGFya1wiIHJvbGU9XCJzdGF0dXNcIiAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGctM1wiPlxuICAgICAgICB7c3BlYWtlcnMubWFwKGZ1bmN0aW9uIChzcGVha2VyUmVjKSB7XG4gICAgICAgICAgY29uc3QgaGlnaGxpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTcGVha2VyTGluZVxuICAgICAgICAgICAgICBrZXk9e3NwZWFrZXJSZWMuaWR9XG4gICAgICAgICAgICAgIHNwZWFrZXJSZWM9e3NwZWFrZXJSZWN9XG4gICAgICAgICAgICAgIHVwZGF0aW5nPXt1cGRhdGluZ0lkID09PSBzcGVha2VyUmVjLmlkID8gdXBkYXRpbmdJZCA6IDB9XG4gICAgICAgICAgICAgIHRvZ2dsZUZhdm9yaXRlU3BlYWtlcj17KCkgPT4gdG9nZ2xlRmF2b3JpdGVTcGVha2VyKHNwZWFrZXJSZWMpfVxuICAgICAgICAgICAgICBoaWdobGlnaHQ9e2hpZ2hsaWdodH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgU3BlYWtlckxpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGRhcmtUaGVtZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT57XG5zd2l0Y2goYWN0aW9uLnR5cGUpe1xuICBjYXNlIFwic3BlYWtlckxvYWRlZFwiOlxuICAgIHJldHVybiB7Li4uc3RhdGUsIH1cbn1cbiAgfVxuXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBzcGVha2VyczogW10sXG4gICAgbG9hZGluZzogdHJ1ZSxcbiAgfTtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhQXN5bmMoKSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvc3BlYWtlcnNcIik7XG4gICAgICBzZXRTcGVha2VycyhyZXN1bHRzLmRhdGEpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICAgIGdldERhdGFBc3luYygpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlU3BlYWtlcihzcGVha2VyUmVjKSB7XG4gICAgY29uc3Qgc3BlYWtlclVwZGF0ZWQgPSBzcGVha2Vycy5tYXAoZnVuY3Rpb24gKHJlYykge1xuICAgICAgcmV0dXJuIHNwZWFrZXJSZWMuaWQgPT09IHJlYy5pZCA/IHNwZWFrZXJSZWMgOiByZWM7XG4gICAgfSk7XG4gICAgc2V0U3BlYWtlcnMoc3BlYWtlclVwZGF0ZWQpO1xuICB9XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17ZGFya1RoZW1lID8gXCJ0aGVtZS1kYXJrXCIgOiBcInRoZW1lLWxpZ2h0XCJ9PlxuICAgICAgPExpc3Qgc3BlYWtlcnM9e3NwZWFrZXJzfSB1cGRhdGVTcGVha2VyPXt1cGRhdGVTcGVha2VyfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckxpc3Q7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVkdWNlciIsInVzZVN0YXRlIiwiU3BlYWtlckxpbmUiLCJheGlvcyIsIkxpc3QiLCJzcGVha2VycyIsInVwZGF0ZVNwZWFrZXIiLCJ0b2dnbGVGYXZvcml0ZVNwZWFrZXIiLCJzcGVha2VyUmVjIiwic3BlYWtlclJlY1VwZGF0ZWQiLCJmYXZvcml0ZSIsInVwZGF0ZUFzeW5jIiwicmVjIiwic2V0VXBkYXRpbmdJZCIsImlkIiwicHV0IiwidXBkYXRpbmdJZCIsImlzUGVuZGluZyIsImRpdiIsImNsYXNzTmFtZSIsInJvbGUiLCJhcmlhLWxhYmVsIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpIiwibWFwIiwiaGlnaGxpZ2h0IiwidXBkYXRpbmciLCJTcGVha2VyTGlzdCIsInNwZWFrZXJVcGRhdGVkIiwic2V0U3BlYWtlcnMiLCJkYXJrVGhlbWUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwiZGlzcGF0Y2giLCJnZXREYXRhQXN5bmMiLCJyZXN1bHRzIiwic2V0TG9hZGluZyIsImdldCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/speakers/SpeakerList.js\n"));

/***/ })

});