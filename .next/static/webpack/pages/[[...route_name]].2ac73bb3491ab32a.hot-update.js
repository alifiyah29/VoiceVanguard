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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SpeakerLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakerLine */ \"./src/components/speakers/SpeakerLine.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction List(param) {\n    var speakers1 = param.speakers, updateSpeaker = param.updateSpeaker;\n    var toggleFavoriteSpeaker = function toggleFavoriteSpeaker(speakerRec) {\n        var speakerRecUpdated = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, speakerRec), {\n            favorite: !speakerRec.favorite\n        });\n        updateSpeaker(speakerRecUpdated);\n        function updateAsync(rec) {\n            return _updateAsync.apply(this, arguments);\n        }\n        function _updateAsync() {\n            _updateAsync = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function(rec) {\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            setUpdatingId(rec.id);\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].put(\"api/speakers/\".concat(rec.id), speakerRecUpdated)\n                            ];\n                        case 1:\n                            _state.sent();\n                            setUpdatingId(0);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _updateAsync.apply(this, arguments);\n        }\n        updateAsync(speakerRecUpdated);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), updatingId = ref[0], setUpdatingId = ref[1];\n    var isPending = false;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"btn-toolbar\",\n                    role: \"toolbar\",\n                    \"aria-label\": \"Speaker toolbar filter\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"toolbar-trigger mb-3 flex-grow-04\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"toolbar-search w-100\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    value: \"\",\n                                    onChange: function(event) {},\n                                    type: \"text\",\n                                    className: \"form-control\",\n                                    placeholder: \"Highlight Names\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"spinner-height\",\n                                children: isPending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"spinner-border text-dark\",\n                                    role: \"status\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row g-3\",\n                children: speakers1.map(function(speakerRec) {\n                    var highlight = false;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerLine__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        speakerRec: speakerRec,\n                        updating: updatingId === speakerRec.id ? updatingId : 0,\n                        toggleFavoriteSpeaker: function() {\n                            return toggleFavoriteSpeaker(speakerRec);\n                        },\n                        highlight: highlight\n                    }, speakerRec.id, false, {\n                        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(List, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = List;\nvar SpeakerList = function() {\n    var updateSpeaker = function updateSpeaker(speakerRec) {\n        var speakerUpdated = speakers.map(function(rec) {\n            return speakerRec.id === rec.id ? speakerRec : rec;\n        });\n        setSpeakers(speakerUpdated);\n    };\n    _s1();\n    var darkTheme = false;\n    var reducer = function(state, action) {\n        switch(action.type){\n            case \"speakerLoaded\":\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, state), {\n                    loading: false,\n                    speakers: action.speakers\n                });\n            case \"setLoadingStatus\":\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, state), {\n                    loading: true\n                });\n            case \"updateSpeaker\":\n                var speakersUpdated = state.speakers.map(function(rec) {\n                    return action.speaker.id === rec.id ? action.speaker : rec;\n                });\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, state), {\n                    speakers: speakersUpdated\n                });\n            default:\n                throw new Error(\"case failure. type: \".concat(action.type));\n        }\n    };\n    var initialState = {\n        speakers: [],\n        loading: true\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState), state = ref[0], dispatch = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        function getDataAsync() {\n            return _getDataAsync.apply(this, arguments);\n        }\n        function _getDataAsync() {\n            _getDataAsync = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n                var results;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            dispatch({\n                                type: \"setLoadingStatus\"\n                            });\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"/api/speakers\")\n                            ];\n                        case 1:\n                            results = _state.sent();\n                            dispatch({\n                                type: \"speakersLoaded\",\n                                speakers: results.data\n                            });\n                            setLoading(false);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _getDataAsync.apply(this, arguments);\n        }\n        getDataAsync();\n    }, []);\n    if (state.loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 107,\n        columnNumber: 29\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: darkTheme ? \"theme-dark\" : \"theme-light\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(List, {\n            state: state,\n            dispatch: dispatch\n        }, void 0, false, {\n            fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n            lineNumber: 111,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, _this);\n};\n_s1(SpeakerList, \"fPKvVo1WePSSkqBu6pd5SIJ+qm8=\");\n_c1 = SpeakerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerList);\nvar _c, _c1;\n$RefreshReg$(_c, \"List\");\n$RefreshReg$(_c1, \"SpeakerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zcGVha2Vycy9TcGVha2VyTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBQXdEO0FBQ2hCO0FBQ2Q7QUFFMUIsU0FBU0ssSUFBSSxDQUFDLEtBQTJCLEVBQUU7UUFBM0JDLFNBQVEsR0FBVixLQUEyQixDQUF6QkEsUUFBUSxFQUFFQyxhQUFhLEdBQXpCLEtBQTJCLENBQWZBLGFBQWE7UUFJNUJDLHFCQUFxQixHQUE5QixTQUFTQSxxQkFBcUIsQ0FBQ0MsVUFBVSxFQUFFO1FBQ3pDLElBQU1DLGlCQUFpQixHQUFHLHdLQUFLRCxVQUFVO1lBQUVFLFFBQVEsRUFBRSxDQUFDRixVQUFVLENBQUNFLFFBQVE7VUFBRTtRQUMzRUosYUFBYSxDQUFDRyxpQkFBaUIsQ0FBQyxDQUFDO2lCQUNsQkUsV0FBVyxDQUFDQyxHQUFHO21CQUFmRCxZQUFXOztpQkFBWEEsWUFBVztZQUFYQSxZQUFXLEdBQTFCLDZGQUEyQkMsR0FBRyxFQUFFOzs7OzRCQUM5QkMsYUFBYSxDQUFDRCxHQUFHLENBQUNFLEVBQUUsQ0FBQyxDQUFDOzRCQUN0Qjs7Z0NBQU1YLGlEQUFTLENBQUMsZUFBYyxDQUFTLE9BQVBTLEdBQUcsQ0FBQ0UsRUFBRSxDQUFFLEVBQUVMLGlCQUFpQixDQUFDOzhCQUFBOzs0QkFBNUQsYUFBNEQsQ0FBQzs0QkFDN0RJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7O1lBQ25CLENBQUM7bUJBSmNGLFlBQVc7O1FBSzFCQSxXQUFXLENBQUNGLGlCQUFpQixDQUFDLENBQUM7SUFDakMsQ0FBQzs7SUFaRCxJQUFvQ1IsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUF4Q2UsVUFBVSxHQUFtQmYsR0FBVyxHQUE5QixFQUFFWSxhQUFhLEdBQUlaLEdBQVcsR0FBZjtJQUNoQyxJQUFNZ0IsU0FBUyxHQUFHLEtBQUs7SUFhdkIscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFdB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QUFDL0IsSUFBSTtZQUFDaUMsS0FBSyxFQUFFQSxLQUFLO1lBQUVPLFFBQVEsRUFBRUEsUUFBUTs7Ozs7aUJBQUk7Ozs7O2FBQ3RDLENBQ047QUFDSixDQUFDO0lBakRLWixXQUFXO0FBQVhBLE1BQUFBLFdBQVc7QUFtRGpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc3BlYWtlcnMvU3BlYWtlckxpc3QuanM/ZjMwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU3BlYWtlckxpbmUgZnJvbSBcIi4vU3BlYWtlckxpbmVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZnVuY3Rpb24gTGlzdCh7IHNwZWFrZXJzLCB1cGRhdGVTcGVha2VyIH0pIHtcbiAgY29uc3QgW3VwZGF0aW5nSWQsIHNldFVwZGF0aW5nSWRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGlzUGVuZGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUZhdm9yaXRlU3BlYWtlcihzcGVha2VyUmVjKSB7XG4gICAgY29uc3Qgc3BlYWtlclJlY1VwZGF0ZWQgPSB7IC4uLnNwZWFrZXJSZWMsIGZhdm9yaXRlOiAhc3BlYWtlclJlYy5mYXZvcml0ZSB9O1xuICAgIHVwZGF0ZVNwZWFrZXIoc3BlYWtlclJlY1VwZGF0ZWQpO1xuICAgIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUFzeW5jKHJlYykge1xuICAgICAgc2V0VXBkYXRpbmdJZChyZWMuaWQpO1xuICAgICAgYXdhaXQgYXhpb3MucHV0KGBhcGkvc3BlYWtlcnMvJHtyZWMuaWR9YCwgc3BlYWtlclJlY1VwZGF0ZWQpO1xuICAgICAgc2V0VXBkYXRpbmdJZCgwKTtcbiAgICB9XG4gICAgdXBkYXRlQXN5bmMoc3BlYWtlclJlY1VwZGF0ZWQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXRvb2xiYXJcIlxuICAgICAgICAgIHJvbGU9XCJ0b29sYmFyXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiU3BlYWtlciB0b29sYmFyIGZpbHRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xiYXItdHJpZ2dlciBtYi0zIGZsZXgtZ3Jvdy0wNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYmFyLXNlYXJjaCB3LTEwMFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge319XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIaWdobGlnaHQgTmFtZXNcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItaGVpZ2h0XCI+XG4gICAgICAgICAgICAgIHtpc1BlbmRpbmcgJiYgKFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyIHRleHQtZGFya1wiIHJvbGU9XCJzdGF0dXNcIiAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGctM1wiPlxuICAgICAgICB7c3BlYWtlcnMubWFwKGZ1bmN0aW9uIChzcGVha2VyUmVjKSB7XG4gICAgICAgICAgY29uc3QgaGlnaGxpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTcGVha2VyTGluZVxuICAgICAgICAgICAgICBrZXk9e3NwZWFrZXJSZWMuaWR9XG4gICAgICAgICAgICAgIHNwZWFrZXJSZWM9e3NwZWFrZXJSZWN9XG4gICAgICAgICAgICAgIHVwZGF0aW5nPXt1cGRhdGluZ0lkID09PSBzcGVha2VyUmVjLmlkID8gdXBkYXRpbmdJZCA6IDB9XG4gICAgICAgICAgICAgIHRvZ2dsZUZhdm9yaXRlU3BlYWtlcj17KCkgPT4gdG9nZ2xlRmF2b3JpdGVTcGVha2VyKHNwZWFrZXJSZWMpfVxuICAgICAgICAgICAgICBoaWdobGlnaHQ9e2hpZ2hsaWdodH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgU3BlYWtlckxpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGRhcmtUaGVtZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJzcGVha2VyTG9hZGVkXCI6XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgc3BlYWtlcnM6IGFjdGlvbi5zcGVha2VycyB9O1xuICAgICAgY2FzZSBcInNldExvYWRpbmdTdGF0dXNcIjpcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUgfTtcbiAgICAgIGNhc2UgXCJ1cGRhdGVTcGVha2VyXCI6XG4gICAgICAgIGNvbnN0IHNwZWFrZXJzVXBkYXRlZCA9IHN0YXRlLnNwZWFrZXJzLm1hcCgocmVjKSA9PlxuICAgICAgICAgIGFjdGlvbi5zcGVha2VyLmlkID09PSByZWMuaWQgPyBhY3Rpb24uc3BlYWtlciA6IHJlY1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc3BlYWtlcnM6IHNwZWFrZXJzVXBkYXRlZCB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBjYXNlIGZhaWx1cmUuIHR5cGU6ICR7YWN0aW9uLnR5cGV9YCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBzcGVha2VyczogW10sXG4gICAgbG9hZGluZzogdHJ1ZSxcbiAgfTtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhQXN5bmMoKSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwic2V0TG9hZGluZ1N0YXR1c1wiIH0pO1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvc3BlYWtlcnNcIik7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwic3BlYWtlcnNMb2FkZWRcIiwgc3BlYWtlcnM6IHJlc3VsdHMuZGF0YSB9KTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgICBnZXREYXRhQXN5bmMoKTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNwZWFrZXIoc3BlYWtlclJlYykge1xuICAgIGNvbnN0IHNwZWFrZXJVcGRhdGVkID0gc3BlYWtlcnMubWFwKGZ1bmN0aW9uIChyZWMpIHtcbiAgICAgIHJldHVybiBzcGVha2VyUmVjLmlkID09PSByZWMuaWQgPyBzcGVha2VyUmVjIDogcmVjO1xuICAgIH0pO1xuICAgIHNldFNwZWFrZXJzKHNwZWFrZXJVcGRhdGVkKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5sb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2RhcmtUaGVtZSA/IFwidGhlbWUtZGFya1wiIDogXCJ0aGVtZS1saWdodFwifT5cbiAgICAgIDxMaXN0IHN0YXRlPXtzdGF0ZX0gZGlzcGF0Y2g9e2Rpc3BhdGNofSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckxpc3Q7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVkdWNlciIsInVzZVN0YXRlIiwiU3BlYWtlckxpbmUiLCJheGlvcyIsIkxpc3QiLCJzcGVha2VycyIsInVwZGF0ZVNwZWFrZXIiLCJ0b2dnbGVGYXZvcml0ZVNwZWFrZXIiLCJzcGVha2VyUmVjIiwic3BlYWtlclJlY1VwZGF0ZWQiLCJmYXZvcml0ZSIsInVwZGF0ZUFzeW5jIiwicmVjIiwic2V0VXBkYXRpbmdJZCIsImlkIiwicHV0IiwidXBkYXRpbmdJZCIsImlzUGVuZGluZyIsImRpdiIsImNsYXNzTmFtZSIsInJvbGUiLCJhcmlhLWxhYmVsIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpIiwibWFwIiwiaGlnaGxpZ2h0IiwidXBkYXRpbmciLCJTcGVha2VyTGlzdCIsInNwZWFrZXJVcGRhdGVkIiwic2V0U3BlYWtlcnMiLCJkYXJrVGhlbWUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJsb2FkaW5nIiwic3BlYWtlcnNVcGRhdGVkIiwic3BlYWtlciIsIkVycm9yIiwiaW5pdGlhbFN0YXRlIiwiZGlzcGF0Y2giLCJnZXREYXRhQXN5bmMiLCJyZXN1bHRzIiwiZ2V0IiwiZGF0YSIsInNldExvYWRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/speakers/SpeakerList.js\n"));

/***/ })

});