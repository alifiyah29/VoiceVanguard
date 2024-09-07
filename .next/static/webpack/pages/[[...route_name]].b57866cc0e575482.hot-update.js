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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SpeakerLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakerLine */ \"./src/components/speakers/SpeakerLine.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction List(param) {\n    var state = param.state, dispatch = param.dispatch;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), updatingId = ref[0], setUpdatingId = ref[1];\n    var isPending = false;\n    var speakers1 = function toggleFavoriteSpeaker1(speakerRec) {\n        var speakerRecUpdated = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, speakerRec), {\n            favorite: !speakerRec.favorite\n        });\n        updateSpeaker(speakerRecUpdated);\n        function updateAsync(rec) {\n            return _updateAsync.apply(this, arguments);\n        }\n        function _updateAsync() {\n            _updateAsync = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function(rec) {\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            setUpdatingId(rec.id);\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].put(\"api/speakers/\".concat(rec.id), speakerRecUpdated)\n                            ];\n                        case 1:\n                            _state.sent();\n                            setUpdatingId(0);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _updateAsync.apply(this, arguments);\n        }\n        updateAsync(speakerRecUpdated);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"btn-toolbar\",\n                    role: \"toolbar\",\n                    \"aria-label\": \"Speaker toolbar filter\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"toolbar-trigger mb-3 flex-grow-04\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"toolbar-search w-100\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    value: \"\",\n                                    onChange: function(event) {},\n                                    type: \"text\",\n                                    className: \"form-control\",\n                                    placeholder: \"Highlight Names\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"spinner-height\",\n                                children: isPending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"spinner-border text-dark\",\n                                    role: \"status\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row g-3\",\n                children: speakers1.map(function(speakerRec) {\n                    var highlight = false;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerLine__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        speakerRec: speakerRec,\n                        updating: updatingId === speakerRec.id ? updatingId : 0,\n                        toggleFavoriteSpeaker: function() {\n                            return toggleFavoriteSpeaker(speakerRec);\n                        },\n                        highlight: highlight\n                    }, speakerRec.id, false, {\n                        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(List, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = List;\nvar SpeakerList = function() {\n    var updateSpeaker1 = function updateSpeaker1(speakerRec) {\n        var speakerUpdated = speakers.map(function(rec) {\n            return speakerRec.id === rec.id ? speakerRec : rec;\n        });\n        setSpeakers(speakerUpdated);\n    };\n    _s1();\n    var darkTheme = false;\n    var reducer = function(state, action) {\n        switch(action.type){\n            case \"speakerLoaded\":\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, state), {\n                    loading: false,\n                    speakers: action.speakers\n                });\n            case \"setLoadingStatus\":\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, state), {\n                    loading: true\n                });\n            case \"updateSpeaker\":\n                var speakersUpdated = state.speakers.map(function(rec) {\n                    return action.speaker.id === rec.id ? action.speaker : rec;\n                });\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, state), {\n                    speakers: speakersUpdated\n                });\n            default:\n                throw new Error(\"case failure. type: \".concat(action.type));\n        }\n    };\n    var initialState = {\n        speakers: [],\n        loading: true\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState), state = ref[0], dispatch = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        function getDataAsync() {\n            return _getDataAsync.apply(this, arguments);\n        }\n        function _getDataAsync() {\n            _getDataAsync = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n                var results;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            dispatch({\n                                type: \"setLoadingStatus\"\n                            });\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"/api/speakers\")\n                            ];\n                        case 1:\n                            results = _state.sent();\n                            dispatch({\n                                type: \"speakersLoaded\",\n                                speakers: results.data\n                            });\n                            setLoading(false);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _getDataAsync.apply(this, arguments);\n        }\n        getDataAsync();\n    }, []);\n    if (state.loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 108,\n        columnNumber: 29\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: darkTheme ? \"theme-dark\" : \"theme-light\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(List, {\n            state: state,\n            dispatch: dispatch\n        }, void 0, false, {\n            fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n            lineNumber: 112,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Tech-Workspace\\\\React.js\\\\React-Hooks\\\\pluralsight-using-hooks-in-react18-main\\\\m2\\\\m2-clip-03\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 111,\n        columnNumber: 5\n    }, _this);\n};\n_s1(SpeakerList, \"fPKvVo1WePSSkqBu6pd5SIJ+qm8=\");\n_c1 = SpeakerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerList);\nvar _c, _c1;\n$RefreshReg$(_c, \"List\");\n$RefreshReg$(_c1, \"SpeakerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zcGVha2Vycy9TcGVha2VyTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBQXdEO0FBQ2hCO0FBQ2Q7QUFFMUIsU0FBU0ssSUFBSSxDQUFDLEtBQW1CLEVBQUU7UUFBbkJDLEtBQUssR0FBUCxLQUFtQixDQUFqQkEsS0FBSyxFQUFFQyxRQUFRLEdBQWpCLEtBQW1CLENBQVZBLFFBQVE7O0lBQzdCLElBQW9DTCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQXhDTSxVQUFVLEdBQW1CTixHQUFXLEdBQTlCLEVBQUVPLGFBQWEsR0FBSVAsR0FBVyxHQUFmO0lBQ2hDLElBQU1RLFNBQVMsR0FBRyxLQUFLO0lBQ3ZCLElBQU1DLFNBQVEsR0FFZCxTQUFTQyxzQkFBcUIsQ0FBQ0MsVUFBVSxFQUFFO1FBQ3pDLElBQU1DLGlCQUFpQixHQUFHLHdLQUFLRCxVQUFVO1lBQUVFLFFBQVEsRUFBRSxDQUFDRixVQUFVLENBQUNFLFFBQVE7VUFBRTtRQUMzRUMsYUFBYSxDQUFDRixpQkFBaUIsQ0FBQyxDQUFDO2lCQUNsQkcsV0FBVyxDQUFDQyxHQUFHO21CQUFmRCxZQUFXOztpQkFBWEEsWUFBVztZQUFYQSxZQUFXLEdBQTFCLDZGQUEyQkMsR0FBRyxFQUFFOzs7OzRCQUM5QlQsYUFBYSxDQUFDUyxHQUFHLENBQUNDLEVBQUUsQ0FBQyxDQUFDOzRCQUN0Qjs7Z0NBQU1mLGlEQUFTLENBQUMsZUFBYyxDQUFTLE9BQVBjLEdBQUcsQ0FBQ0MsRUFBRSxDQUFFLEVBQUVMLGlCQUFpQixDQUFDOzhCQUFBOzs0QkFBNUQsYUFBNEQsQ0FBQzs0QkFDN0RMLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7O1lBQ25CLENBQUM7bUJBSmNRLFlBQVc7O1FBSzFCQSxXQUFXLENBQUNILGlCQUFpQixDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELHFCQUNFLDhEQUFDTyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxX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dEQsNEVBQUNqQyxJQUFJO1lBQUNDLEtBQUssRUFBRUEsS0FBSztZQUFFQyxRQUFRLEVBQUVBLFFBQVE7Ozs7O2lCQUFJOzs7OzthQUN0QyxDQUNOO0FBQ0osQ0FBQztJQWpESzRCLFdBQVc7QUFBWEEsTUFBQUEsV0FBVztBQW1EakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zcGVha2Vycy9TcGVha2VyTGlzdC5qcz9mMzA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTcGVha2VyTGluZSBmcm9tIFwiLi9TcGVha2VyTGluZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5mdW5jdGlvbiBMaXN0KHsgc3RhdGUsIGRpc3BhdGNoIH0pIHtcbiAgY29uc3QgW3VwZGF0aW5nSWQsIHNldFVwZGF0aW5nSWRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGlzUGVuZGluZyA9IGZhbHNlO1xuICBjb25zdCBzcGVha2VycyA9IFxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUZhdm9yaXRlU3BlYWtlcihzcGVha2VyUmVjKSB7XG4gICAgY29uc3Qgc3BlYWtlclJlY1VwZGF0ZWQgPSB7IC4uLnNwZWFrZXJSZWMsIGZhdm9yaXRlOiAhc3BlYWtlclJlYy5mYXZvcml0ZSB9O1xuICAgIHVwZGF0ZVNwZWFrZXIoc3BlYWtlclJlY1VwZGF0ZWQpO1xuICAgIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUFzeW5jKHJlYykge1xuICAgICAgc2V0VXBkYXRpbmdJZChyZWMuaWQpO1xuICAgICAgYXdhaXQgYXhpb3MucHV0KGBhcGkvc3BlYWtlcnMvJHtyZWMuaWR9YCwgc3BlYWtlclJlY1VwZGF0ZWQpO1xuICAgICAgc2V0VXBkYXRpbmdJZCgwKTtcbiAgICB9XG4gICAgdXBkYXRlQXN5bmMoc3BlYWtlclJlY1VwZGF0ZWQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXRvb2xiYXJcIlxuICAgICAgICAgIHJvbGU9XCJ0b29sYmFyXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiU3BlYWtlciB0b29sYmFyIGZpbHRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xiYXItdHJpZ2dlciBtYi0zIGZsZXgtZ3Jvdy0wNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYmFyLXNlYXJjaCB3LTEwMFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge319XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIaWdobGlnaHQgTmFtZXNcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItaGVpZ2h0XCI+XG4gICAgICAgICAgICAgIHtpc1BlbmRpbmcgJiYgKFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyIHRleHQtZGFya1wiIHJvbGU9XCJzdGF0dXNcIiAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGctM1wiPlxuICAgICAgICB7c3BlYWtlcnMubWFwKGZ1bmN0aW9uIChzcGVha2VyUmVjKSB7XG4gICAgICAgICAgY29uc3QgaGlnaGxpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTcGVha2VyTGluZVxuICAgICAgICAgICAgICBrZXk9e3NwZWFrZXJSZWMuaWR9XG4gICAgICAgICAgICAgIHNwZWFrZXJSZWM9e3NwZWFrZXJSZWN9XG4gICAgICAgICAgICAgIHVwZGF0aW5nPXt1cGRhdGluZ0lkID09PSBzcGVha2VyUmVjLmlkID8gdXBkYXRpbmdJZCA6IDB9XG4gICAgICAgICAgICAgIHRvZ2dsZUZhdm9yaXRlU3BlYWtlcj17KCkgPT4gdG9nZ2xlRmF2b3JpdGVTcGVha2VyKHNwZWFrZXJSZWMpfVxuICAgICAgICAgICAgICBoaWdobGlnaHQ9e2hpZ2hsaWdodH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgU3BlYWtlckxpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGRhcmtUaGVtZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJzcGVha2VyTG9hZGVkXCI6XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgc3BlYWtlcnM6IGFjdGlvbi5zcGVha2VycyB9O1xuICAgICAgY2FzZSBcInNldExvYWRpbmdTdGF0dXNcIjpcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUgfTtcbiAgICAgIGNhc2UgXCJ1cGRhdGVTcGVha2VyXCI6XG4gICAgICAgIGNvbnN0IHNwZWFrZXJzVXBkYXRlZCA9IHN0YXRlLnNwZWFrZXJzLm1hcCgocmVjKSA9PlxuICAgICAgICAgIGFjdGlvbi5zcGVha2VyLmlkID09PSByZWMuaWQgPyBhY3Rpb24uc3BlYWtlciA6IHJlY1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc3BlYWtlcnM6IHNwZWFrZXJzVXBkYXRlZCB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBjYXNlIGZhaWx1cmUuIHR5cGU6ICR7YWN0aW9uLnR5cGV9YCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBzcGVha2VyczogW10sXG4gICAgbG9hZGluZzogdHJ1ZSxcbiAgfTtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhQXN5bmMoKSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwic2V0TG9hZGluZ1N0YXR1c1wiIH0pO1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvc3BlYWtlcnNcIik7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwic3BlYWtlcnNMb2FkZWRcIiwgc3BlYWtlcnM6IHJlc3VsdHMuZGF0YSB9KTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgICBnZXREYXRhQXN5bmMoKTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNwZWFrZXIoc3BlYWtlclJlYykge1xuICAgIGNvbnN0IHNwZWFrZXJVcGRhdGVkID0gc3BlYWtlcnMubWFwKGZ1bmN0aW9uIChyZWMpIHtcbiAgICAgIHJldHVybiBzcGVha2VyUmVjLmlkID09PSByZWMuaWQgPyBzcGVha2VyUmVjIDogcmVjO1xuICAgIH0pO1xuICAgIHNldFNwZWFrZXJzKHNwZWFrZXJVcGRhdGVkKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5sb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2RhcmtUaGVtZSA/IFwidGhlbWUtZGFya1wiIDogXCJ0aGVtZS1saWdodFwifT5cbiAgICAgIDxMaXN0IHN0YXRlPXtzdGF0ZX0gZGlzcGF0Y2g9e2Rpc3BhdGNofSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckxpc3Q7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVkdWNlciIsInVzZVN0YXRlIiwiU3BlYWtlckxpbmUiLCJheGlvcyIsIkxpc3QiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXBkYXRpbmdJZCIsInNldFVwZGF0aW5nSWQiLCJpc1BlbmRpbmciLCJzcGVha2VycyIsInRvZ2dsZUZhdm9yaXRlU3BlYWtlciIsInNwZWFrZXJSZWMiLCJzcGVha2VyUmVjVXBkYXRlZCIsImZhdm9yaXRlIiwidXBkYXRlU3BlYWtlciIsInVwZGF0ZUFzeW5jIiwicmVjIiwiaWQiLCJwdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJyb2xlIiwiYXJpYS1sYWJlbCIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiaSIsIm1hcCIsImhpZ2hsaWdodCIsInVwZGF0aW5nIiwiU3BlYWtlckxpc3QiLCJzcGVha2VyVXBkYXRlZCIsInNldFNwZWFrZXJzIiwiZGFya1RoZW1lIiwicmVkdWNlciIsImFjdGlvbiIsImxvYWRpbmciLCJzcGVha2Vyc1VwZGF0ZWQiLCJzcGVha2VyIiwiRXJyb3IiLCJpbml0aWFsU3RhdGUiLCJnZXREYXRhQXN5bmMiLCJyZXN1bHRzIiwiZ2V0IiwiZGF0YSIsInNldExvYWRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/speakers/SpeakerList.js\n"));

/***/ })

});