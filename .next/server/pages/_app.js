/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/ui/color-mode.tsx":
/*!******************************************!*\
  !*** ./src/components/ui/color-mode.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ColorModeButton\": () => (/* binding */ ColorModeButton),\n/* harmony export */   \"ColorModeIcon\": () => (/* binding */ ColorModeIcon),\n/* harmony export */   \"ColorModeProvider\": () => (/* binding */ ColorModeProvider),\n/* harmony export */   \"useColorMode\": () => (/* binding */ useColorMode),\n/* harmony export */   \"useColorModeValue\": () => (/* binding */ useColorModeValue)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/lu */ \"react-icons/lu\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_themes__WEBPACK_IMPORTED_MODULE_2__, react_icons_lu__WEBPACK_IMPORTED_MODULE_4__]);\n([next_themes__WEBPACK_IMPORTED_MODULE_2__, react_icons_lu__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Paulo Henrique\n\n\n\n\n\nfunction ColorModeProvider(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        attribute: \"class\",\n        disableTransitionOnChange: true,\n        ...props\n    }, void 0, false, {\n        fileName: \"D:\\\\Desktop\\\\PP-2\\\\organiconecta\\\\src\\\\components\\\\ui\\\\color-mode.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\nfunction useColorMode() {\n    const { resolvedTheme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    const { 0: colorMode , 1: setColorMode  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (resolvedTheme === \"light\" || resolvedTheme === \"dark\") {\n            setColorMode(resolvedTheme);\n        } else {}\n    }, [\n        resolvedTheme\n    ]);\n    const toggleColorMode = ()=>{\n        setTheme(colorMode === \"light\" ? \"dark\" : \"light\");\n    };\n    return {\n        colorMode: colorMode ?? \"light\",\n        setColorMode: setTheme,\n        toggleColorMode\n    };\n}\nfunction useColorModeValue(light, dark) {\n    const { colorMode  } = useColorMode();\n    return colorMode === \"light\" ? light : dark;\n}\nfunction ColorModeIcon() {\n    const { colorMode  } = useColorMode();\n    return colorMode === \"light\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_lu__WEBPACK_IMPORTED_MODULE_4__.LuSun, {}, void 0, false, {\n        fileName: \"D:\\\\Desktop\\\\PP-2\\\\organiconecta\\\\src\\\\components\\\\ui\\\\color-mode.tsx\",\n        lineNumber: 47,\n        columnNumber: 34\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_lu__WEBPACK_IMPORTED_MODULE_4__.LuMoon, {}, void 0, false, {\n        fileName: \"D:\\\\Desktop\\\\PP-2\\\\organiconecta\\\\src\\\\components\\\\ui\\\\color-mode.tsx\",\n        lineNumber: 47,\n        columnNumber: 46\n    }, this);\n}\nconst ColorModeButton = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function ColorModeButton(props, ref) {\n    const { toggleColorMode  } = useColorMode();\n    const color = useColorModeValue(\"gray.100\", \"gray.800\");\n    const bg = useColorModeValue(\"gray.800\", \"gray.100\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n        onClick: toggleColorMode,\n        variant: \"ghost\",\n        \"aria-label\": \"Toggle color mode\",\n        size: \"lg\",\n        ref: ref,\n        ...props,\n        position: \"fixed\",\n        bottom: 10,\n        left: 10,\n        bg: bg,\n        _hover: {\n            bg: \"gray.500\"\n        },\n        color: color,\n        css: {\n            _icon: {\n                width: \"5\",\n                height: \"5\"\n            }\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorModeIcon, {}, void 0, false, {\n            fileName: \"D:\\\\Desktop\\\\PP-2\\\\organiconecta\\\\src\\\\components\\\\ui\\\\color-mode.tsx\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Desktop\\\\PP-2\\\\organiconecta\\\\src\\\\components\\\\ui\\\\color-mode.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91aS9jb2xvci1tb2RlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBQWlCO0FBRWpCO0FBQzZDO0FBQ1E7QUFFRTtBQUNUO0FBSXZDLFNBQVNRLGlCQUFpQixDQUFDQyxLQUE2QixFQUFFO0lBQy9ELHFCQUNFLDhEQUFDUixzREFBYTtRQUFDUyxTQUFTLEVBQUMsT0FBTztRQUFDQyx5QkFBeUI7UUFBRSxHQUFHRixLQUFLOzs7OztZQUFJLENBQ3pFO0NBQ0Y7QUFFTSxTQUFTRyxZQUFZLEdBQUc7SUFDN0IsTUFBTSxFQUFFQyxhQUFhLEdBQUVDLFFBQVEsR0FBRSxHQUFHWixxREFBUSxFQUFFO0lBQzlDLE1BQU0sS0FBQ2EsU0FBUyxNQUFFQyxZQUFZLE1BQUliLCtDQUFRLENBQStCYyxTQUFTLENBQUM7SUFFbkZiLGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUlTLGFBQWEsS0FBSyxPQUFPLElBQUlBLGFBQWEsS0FBSyxNQUFNLEVBQUU7WUFDekRHLFlBQVksQ0FBQ0gsYUFBYSxDQUFDO1NBQzVCLE1BQU0sRUFDTjtLQUNGLEVBQUU7UUFBQ0EsYUFBYTtLQUFDLENBQUM7SUFFbkIsTUFBTUssZUFBZSxHQUFHLElBQU07UUFDNUJKLFFBQVEsQ0FBQ0MsU0FBUyxLQUFLLE9BQU8sR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDO0tBQ25EO0lBRUQsT0FBTztRQUNMQSxTQUFTLEVBQUVBLFNBQVMsSUFBSSxPQUFPO1FBQy9CQyxZQUFZLEVBQUVGLFFBQVE7UUFDdEJJLGVBQWU7S0FDaEI7Q0FDRjtBQUVNLFNBQVNDLGlCQUFpQixDQUFJQyxLQUFRLEVBQUVDLElBQU8sRUFBRTtJQUN0RCxNQUFNLEVBQUVOLFNBQVMsR0FBRSxHQUFHSCxZQUFZLEVBQUU7SUFDcEMsT0FBT0csU0FBUyxLQUFLLE9BQU8sR0FBR0ssS0FBSyxHQUFHQyxJQUFJO0NBQzVDO0FBRU0sU0FBU0MsYUFBYSxHQUFHO0lBQzlCLE1BQU0sRUFBRVAsU0FBUyxHQUFFLEdBQUdILFlBQVksRUFBRTtJQUNwQyxPQUFPRyxTQUFTLEtBQUssT0FBTyxpQkFBRyw4REFBQ1IsaURBQUs7Ozs7WUFBRyxpQkFBRyw4REFBQ0Qsa0RBQU07Ozs7WUFBRztDQUN0RDtBQUlNLE1BQU1pQixlQUFlLGlCQUFHbEIsaURBQVUsQ0FHdkMsU0FBU2tCLGVBQWUsQ0FBQ2QsS0FBSyxFQUFFZSxHQUFHLEVBQUU7SUFDckMsTUFBTSxFQUFFTixlQUFlLEdBQUUsR0FBR04sWUFBWSxFQUFFO0lBQzFDLE1BQU1hLEtBQUssR0FBR04saUJBQWlCLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztJQUN2RCxNQUFNTyxFQUFFLEdBQUdQLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7SUFDcEQscUJBQ0UsOERBQUNuQix3REFBVTtRQUNUMkIsT0FBTyxFQUFFVCxlQUFlO1FBQ3hCVSxPQUFPLEVBQUMsT0FBTztRQUNmQyxZQUFVLEVBQUMsbUJBQW1CO1FBQzlCQyxJQUFJLEVBQUMsSUFBSTtRQUNUTixHQUFHLEVBQUVBLEdBQUc7UUFDUCxHQUFHZixLQUFLO1FBQ1RzQixRQUFRLEVBQUUsT0FBTztRQUNqQkMsTUFBTSxFQUFFLEVBQUU7UUFDVkMsSUFBSSxFQUFFLEVBQUU7UUFDUlAsRUFBRSxFQUFFQSxFQUFFO1FBQ05RLE1BQU0sRUFBRTtZQUNOUixFQUFFLEVBQUUsVUFBVTtTQUNmO1FBQ0RELEtBQUssRUFBRUEsS0FBSztRQUNaVSxHQUFHLEVBQUU7WUFDSEMsS0FBSyxFQUFFO2dCQUNMQyxLQUFLLEVBQUUsR0FBRztnQkFDVkMsTUFBTSxFQUFFLEdBQUc7YUFDWjtTQUNGO2tCQUVELDRFQUFDaEIsYUFBYTs7OztnQkFBRzs7Ozs7WUFDTixDQUNkO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29yZ2FuaWNvbmVjdGEvLi9zcmMvY29tcG9uZW50cy91aS9jb2xvci1tb2RlLnRzeD9lMDFhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFBhdWxvIEhlbnJpcXVlXHJcblxyXG5pbXBvcnQgdHlwZSB7IEljb25CdXR0b25Qcm9wcyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgdXNlVGhlbWUgfSBmcm9tIFwibmV4dC10aGVtZXNcIlxyXG5pbXBvcnQgdHlwZSB7IFRoZW1lUHJvdmlkZXJQcm9wcyB9IGZyb20gXCJuZXh0LXRoZW1lc1wiXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBMdU1vb24sIEx1U3VuIH0gZnJvbSBcInJlYWN0LWljb25zL2x1XCJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3JNb2RlUHJvdmlkZXJQcm9wcyBleHRlbmRzIFRoZW1lUHJvdmlkZXJQcm9wcyB7fVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbG9yTW9kZVByb3ZpZGVyKHByb3BzOiBDb2xvck1vZGVQcm92aWRlclByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIGF0dHJpYnV0ZT1cImNsYXNzXCIgZGlzYWJsZVRyYW5zaXRpb25PbkNoYW5nZSB7Li4ucHJvcHN9IC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29sb3JNb2RlKCkge1xyXG4gIGNvbnN0IHsgcmVzb2x2ZWRUaGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKClcclxuICBjb25zdCBbY29sb3JNb2RlLCBzZXRDb2xvck1vZGVdID0gdXNlU3RhdGU8J2xpZ2h0JyB8ICdkYXJrJyB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJlc29sdmVkVGhlbWUgPT09IFwibGlnaHRcIiB8fCByZXNvbHZlZFRoZW1lID09PSBcImRhcmtcIikge1xyXG4gICAgICBzZXRDb2xvck1vZGUocmVzb2x2ZWRUaGVtZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICB9XHJcbiAgfSwgW3Jlc29sdmVkVGhlbWVdKVxyXG5cclxuICBjb25zdCB0b2dnbGVDb2xvck1vZGUgPSAoKSA9PiB7XHJcbiAgICBzZXRUaGVtZShjb2xvck1vZGUgPT09IFwibGlnaHRcIiA/IFwiZGFya1wiIDogXCJsaWdodFwiKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNvbG9yTW9kZTogY29sb3JNb2RlID8/IFwibGlnaHRcIixcclxuICAgIHNldENvbG9yTW9kZTogc2V0VGhlbWUsXHJcbiAgICB0b2dnbGVDb2xvck1vZGUsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29sb3JNb2RlVmFsdWU8VD4obGlnaHQ6IFQsIGRhcms6IFQpIHtcclxuICBjb25zdCB7IGNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKClcclxuICByZXR1cm4gY29sb3JNb2RlID09PSBcImxpZ2h0XCIgPyBsaWdodCA6IGRhcmtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbG9yTW9kZUljb24oKSB7XHJcbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpXHJcbiAgcmV0dXJuIGNvbG9yTW9kZSA9PT0gXCJsaWdodFwiID8gPEx1U3VuIC8+IDogPEx1TW9vbiAvPlxyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29sb3JNb2RlQnV0dG9uUHJvcHMgZXh0ZW5kcyBPbWl0PEljb25CdXR0b25Qcm9wcywgXCJhcmlhLWxhYmVsXCI+IHt9XHJcblxyXG5leHBvcnQgY29uc3QgQ29sb3JNb2RlQnV0dG9uID0gZm9yd2FyZFJlZjxcclxuICBIVE1MQnV0dG9uRWxlbWVudCxcclxuICBDb2xvck1vZGVCdXR0b25Qcm9wc1xyXG4+KGZ1bmN0aW9uIENvbG9yTW9kZUJ1dHRvbihwcm9wcywgcmVmKSB7XHJcbiAgY29uc3QgeyB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpXHJcbiAgY29uc3QgY29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheS4xMDAnLCAnZ3JheS44MDAnKVxyXG4gIGNvbnN0IGJnID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkuODAwJywgJ2dyYXkuMTAwJylcclxuICByZXR1cm4gKFxyXG4gICAgPEljb25CdXR0b25cclxuICAgICAgb25DbGljaz17dG9nZ2xlQ29sb3JNb2RlfVxyXG4gICAgICB2YXJpYW50PVwiZ2hvc3RcIlxyXG4gICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIGNvbG9yIG1vZGVcIlxyXG4gICAgICBzaXplPVwibGdcIlxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICBwb3NpdGlvbj17XCJmaXhlZFwifVxyXG4gICAgICBib3R0b209ezEwfVxyXG4gICAgICBsZWZ0PXsxMH1cclxuICAgICAgYmc9e2JnfVxyXG4gICAgICBfaG92ZXI9e3tcclxuICAgICAgICBiZzogXCJncmF5LjUwMFwiXHJcbiAgICAgIH19XHJcbiAgICAgIGNvbG9yPXtjb2xvcn1cclxuICAgICAgY3NzPXt7XHJcbiAgICAgICAgX2ljb246IHtcclxuICAgICAgICAgIHdpZHRoOiBcIjVcIixcclxuICAgICAgICAgIGhlaWdodDogXCI1XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPENvbG9yTW9kZUljb24gLz5cclxuICAgIDwvSWNvbkJ1dHRvbj5cclxuICApXHJcbn0pXHJcbiJdLCJuYW1lcyI6WyJJY29uQnV0dG9uIiwiVGhlbWVQcm92aWRlciIsInVzZVRoZW1lIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmb3J3YXJkUmVmIiwiTHVNb29uIiwiTHVTdW4iLCJDb2xvck1vZGVQcm92aWRlciIsInByb3BzIiwiYXR0cmlidXRlIiwiZGlzYWJsZVRyYW5zaXRpb25PbkNoYW5nZSIsInVzZUNvbG9yTW9kZSIsInJlc29sdmVkVGhlbWUiLCJzZXRUaGVtZSIsImNvbG9yTW9kZSIsInNldENvbG9yTW9kZSIsInVuZGVmaW5lZCIsInRvZ2dsZUNvbG9yTW9kZSIsInVzZUNvbG9yTW9kZVZhbHVlIiwibGlnaHQiLCJkYXJrIiwiQ29sb3JNb2RlSWNvbiIsIkNvbG9yTW9kZUJ1dHRvbiIsInJlZiIsImNvbG9yIiwiYmciLCJvbkNsaWNrIiwidmFyaWFudCIsImFyaWEtbGFiZWwiLCJzaXplIiwicG9zaXRpb24iLCJib3R0b20iLCJsZWZ0IiwiX2hvdmVyIiwiY3NzIiwiX2ljb24iLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ui/color-mode.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_color_picker_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-color-picker/index.css */ \"./node_modules/react-color-picker/index.css\");\n/* harmony import */ var react_color_picker_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_color_picker_index_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var _components_ui_color_mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~components/ui/color-mode */ \"./src/components/ui/color-mode.tsx\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_color_mode__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_5__]);\n([_components_ui_color_mode__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Paulo Henrique\n\n\n\n\n\n\n\nfunction Main({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n        resetCSS: true,\n        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {}, void 0, false, {\n                fileName: \"D:\\\\Desktop\\\\PP-2\\\\organiconecta\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_color_mode__WEBPACK_IMPORTED_MODULE_4__.ColorModeProvider, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_color_mode__WEBPACK_IMPORTED_MODULE_4__.ColorModeButton, {}, void 0, false, {\n                        fileName: \"D:\\\\Desktop\\\\PP-2\\\\organiconecta\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Desktop\\\\PP-2\\\\organiconecta\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Desktop\\\\PP-2\\\\organiconecta\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Desktop\\\\PP-2\\\\organiconecta\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBQWlCO0FBRWpCO0FBQWlEO0FBQ1o7QUFHSjtBQUM2QztBQUM5QjtBQUNEO0FBRWhDLFNBQVNLLElBQUksQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQy9ELHFCQUNFLDhEQUFDUCw0REFBYztRQUFDUSxRQUFRO1FBQUNQLEtBQUssRUFBRUEscURBQUs7OzBCQUNuQyw4REFBQ0csMERBQWM7Ozs7b0JBQUc7MEJBQ2xCLDhEQUFDRCx3RUFBaUI7O2tDQUNoQiw4REFBQ0Qsc0VBQWU7Ozs7NEJBQUc7a0NBQ25CLDhEQUFDSSxTQUFTO3dCQUFFLEdBQUdDLFNBQVM7Ozs7OzRCQUFJOzs7Ozs7b0JBQ1Y7Ozs7OztZQUNMLENBQ2xCO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcmdhbmljb25lY3RhLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUGF1bG8gSGVucmlxdWVcclxuXHJcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0ICdyZWFjdC1jb2xvci1waWNrZXIvaW5kZXguY3NzJ1xyXG5cclxuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IHRoZW1lIGZyb20gJ35zdHlsZXMvdGhlbWUnXHJcbmltcG9ydCB7IENvbG9yTW9kZUJ1dHRvbiwgQ29sb3JNb2RlUHJvdmlkZXIgfSBmcm9tICd+Y29tcG9uZW50cy91aS9jb2xvci1tb2RlJ1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbih7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGFrcmFQcm92aWRlciByZXNldENTUyB0aGVtZT17dGhlbWV9PlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgPENvbG9yTW9kZVByb3ZpZGVyPlxyXG4gICAgICAgIDxDb2xvck1vZGVCdXR0b24gLz5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvQ29sb3JNb2RlUHJvdmlkZXI+XHJcbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiQ2hha3JhUHJvdmlkZXIiLCJ0aGVtZSIsIkNvbG9yTW9kZUJ1dHRvbiIsIkNvbG9yTW9kZVByb3ZpZGVyIiwiVG9hc3RDb250YWluZXIiLCJNYWluIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicmVzZXRDU1MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n// Paulo Henrique\n\nconst config = {\n    initialColorMode: \"light\",\n    useSystemColorMode: false\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    config\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGlCQUFpQjtBQUUrQztBQUVoRSxNQUFNQyxNQUFNLEdBQWdCO0lBQzFCQyxnQkFBZ0IsRUFBRSxPQUFPO0lBQ3pCQyxrQkFBa0IsRUFBRSxLQUFLO0NBQzFCO0FBRUQsTUFBTUMsS0FBSyxHQUFHSiw2REFBVyxDQUFDO0lBQUVDLE1BQU07Q0FBRSxDQUFDO0FBRXJDLGlFQUFlRyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3JnYW5pY29uZWN0YS8uL3NyYy9zdHlsZXMvdGhlbWUudHM/NTE2MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQYXVsbyBIZW5yaXF1ZVxyXG5cclxuaW1wb3J0IHsgZXh0ZW5kVGhlbWUsIHR5cGUgVGhlbWVDb25maWcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5cclxuY29uc3QgY29uZmlnOiBUaGVtZUNvbmZpZyA9IHtcclxuICBpbml0aWFsQ29sb3JNb2RlOiAnbGlnaHQnLFxyXG4gIHVzZVN5c3RlbUNvbG9yTW9kZTogZmFsc2UsXHJcbn1cclxuXHJcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoeyBjb25maWcgfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lIl0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwiY29uZmlnIiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ "./node_modules/react-color-picker/index.css":
/*!***************************************************!*\
  !*** ./node_modules/react-color-picker/index.css ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("next-themes");;

/***/ }),

/***/ "react-icons/lu":
/*!*********************************!*\
  !*** external "react-icons/lu" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-icons/lu");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();