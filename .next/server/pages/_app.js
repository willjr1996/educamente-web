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

/***/ "./src/contexts/AuthContext.js":
/*!*************************************!*\
  !*** ./src/contexts/AuthContext.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~utils/utils */ \"./src/utils/utils.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__, _utils_utils__WEBPACK_IMPORTED_MODULE_4__]);\n([axios__WEBPACK_IMPORTED_MODULE_3__, _utils_utils__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = ({ children  })=>{\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        if (token) {\n            setUser({\n                token\n            });\n        }\n    }, []);\n    const login = async (username, password)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:8080/api/auth\", {\n                username,\n                password\n            });\n            const { token  } = response.data;\n            localStorage.setItem(\"token\", token);\n            setUser({\n                token\n            });\n            axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.headers.common.Authorization = `Bearer ${token}`;\n            router.push(\"/\");\n        } catch (error) {\n            console.error(\"Erro ao fazer login\", error);\n            (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.notifyError)(\"Erro ao fazer login\");\n        }\n    };\n    const logout = ()=>{\n        localStorage.removeItem(\"token\");\n        setUser(null);\n        delete axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.headers.common.Authorization;\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Desktop\\\\educamente-web\\\\src\\\\contexts\\\\AuthContext.js\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXVFO0FBQy9CO0FBQ2Q7QUFDaUI7QUFDM0MsTUFBTU8sV0FBVyxpQkFBR1Asb0RBQWEsRUFBRTtBQUU1QixNQUFNUSxZQUFZLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsR0FBSztJQUMxQyxNQUFNLEtBQUNDLElBQUksTUFBRUMsT0FBTyxNQUFJUiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUN0QyxNQUFNUyxNQUFNLEdBQUdSLHNEQUFTLEVBQUU7SUFFMUJGLGdEQUFTLENBQUMsSUFBTTtRQUNaLE1BQU1XLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQzNDLElBQUlGLEtBQUssRUFBRTtZQUNQRixPQUFPLENBQUM7Z0JBQUVFLEtBQUs7YUFBRSxDQUFDLENBQUM7UUFDdkIsQ0FBQztJQUNMLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE1BQU1HLEtBQUssR0FBRyxPQUFPQyxRQUFRLEVBQUVDLFFBQVEsR0FBSztRQUN4QyxJQUFJO1lBQ0EsTUFBTUMsUUFBUSxHQUFHLE1BQU1kLGtEQUFVLENBQUMsZ0NBQWdDLEVBQUU7Z0JBQ2hFWSxRQUFRO2dCQUNSQyxRQUFRO2FBQ1gsQ0FBQztZQUVGLE1BQU0sRUFBRUwsS0FBSyxHQUFFLEdBQUdNLFFBQVEsQ0FBQ0UsSUFBSTtZQUMvQlAsWUFBWSxDQUFDUSxPQUFPLENBQUMsT0FBTyxFQUFFVCxLQUFLLENBQUMsQ0FBQztZQUNyQ0YsT0FBTyxDQUFDO2dCQUFFRSxLQUFLO2FBQUUsQ0FBQyxDQUFDO1lBQ25CUixtRkFBOEMsR0FBRyxDQUFDLE9BQU8sRUFBRVEsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuRUQsTUFBTSxDQUFDYyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsRUFBRSxPQUFPQyxLQUFLLEVBQUU7WUFDWkMsT0FBTyxDQUFDRCxLQUFLLENBQUMscUJBQXFCLEVBQUVBLEtBQUssQ0FBQyxDQUFDO1lBQzVDckIseURBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTXVCLE1BQU0sR0FBRyxJQUFNO1FBQ2pCZixZQUFZLENBQUNnQixVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakNuQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZCxPQUFPTixtRkFBOEMsQ0FBQztRQUN0RE8sTUFBTSxDQUFDYyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELHFCQUNJLDhEQUFDbkIsV0FBVyxDQUFDd0IsUUFBUTtRQUFDQyxLQUFLLEVBQUU7WUFBRXRCLElBQUk7WUFBRU0sS0FBSztZQUFFYSxNQUFNO1NBQUU7a0JBQy9DcEIsUUFBUTs7Ozs7aUJBQ1UsQ0FDekI7QUFDTixDQUFDLENBQUM7QUFFSyxNQUFNd0IsT0FBTyxHQUFHLElBQU1oQyxpREFBVSxDQUFDTSxXQUFXLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VkdWNhbWVudGUtd2ViLy4vc3JjL2NvbnRleHRzL0F1dGhDb250ZXh0LmpzPzc4NzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBub3RpZnlFcnJvciB9IGZyb20gJ351dGlscy91dGlscyc7XHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHNldFVzZXIoeyB0b2tlbiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgbG9naW4gPSBhc3luYyAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9hdXRoXCIsIHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgIHNldFVzZXIoeyB0b2tlbiB9KTtcclxuICAgICAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJBdXRob3JpemF0aW9uXCJdID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJybyBhbyBmYXplciBsb2dpblwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIG5vdGlmeUVycm9yKFwiRXJybyBhbyBmYXplciBsb2dpblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xyXG4gICAgICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICAgICAgZGVsZXRlIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiQXV0aG9yaXphdGlvblwiXTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgbG9naW4sIGxvZ291dCB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTsiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImF4aW9zIiwibm90aWZ5RXJyb3IiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJyb3V0ZXIiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsInBvc3QiLCJkYXRhIiwic2V0SXRlbSIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.js\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var react_color_picker_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-color-picker/index.css */ \"./node_modules/react-color-picker/index.css\");\n/* harmony import */ var react_color_picker_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_color_picker_index_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./src/contexts/AuthContext.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_3__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_3__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction Main({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n                fileName: \"D:\\\\Desktop\\\\educamente-web\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__.AuthProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"D:\\\\Desktop\\\\educamente-web\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Desktop\\\\educamente-web\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Desktop\\\\educamente-web\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQWlEO0FBQ1o7QUFFVztBQUNEO0FBQ1E7QUFHeEMsU0FBU0csSUFBSSxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDL0QscUJBQ0UsOERBQUNMLDREQUFjOzswQkFDYiw4REFBQ0MsMERBQWM7Ozs7b0JBQUc7MEJBQ2xCLDhEQUFDQywrREFBWTswQkFDWCw0RUFBQ0UsU0FBUztvQkFBRSxHQUFHQyxTQUFTOzs7Ozt3QkFBSTs7Ozs7b0JBQ2I7Ozs7OztZQUNGLENBQ2xCO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VkdWNhbWVudGUtd2ViLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgJ3JlYWN0LWNvbG9yLXBpY2tlci9pbmRleC5jc3MnXHJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XHJcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0cy9BdXRoQ29udGV4dFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hha3JhUHJvdmlkZXI+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICA8QXV0aFByb3ZpZGVyPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L0F1dGhQcm92aWRlcj5cclxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDaGFrcmFQcm92aWRlciIsIlRvYXN0Q29udGFpbmVyIiwiQXV0aFByb3ZpZGVyIiwiTWFpbiIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"notify\": () => (/* binding */ notify),\n/* harmony export */   \"notifyError\": () => (/* binding */ notifyError),\n/* harmony export */   \"notifyInfo\": () => (/* binding */ notifyInfo),\n/* harmony export */   \"notifySuccess\": () => (/* binding */ notifySuccess),\n/* harmony export */   \"notifyWarn\": () => (/* binding */ notifyWarn)\n/* harmony export */ });\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_0__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst notify = (mensagem)=>(0,react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast)(mensagem, {\n        position: \"top-center\"\n    });\nconst notifyInfo = (mensagem)=>react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.info(mensagem, {\n        position: \"top-center\"\n    });\nconst notifyWarn = (mensagem)=>react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.warn(mensagem, {\n        position: \"top-center\"\n    });\nconst notifySuccess = (mensagem)=>react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success(mensagem, {\n        position: \"top-center\"\n    });\nconst notifyError = (mensagem)=>react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(mensagem, {\n        position: \"top-center\"\n    });\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvdXRpbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXVDO0FBRWhDLE1BQU1DLE1BQU0sR0FBRyxDQUFDQyxRQUFRLEdBQUtGLHFEQUFLLENBQUNFLFFBQVEsRUFBRTtRQUFFQyxRQUFRLEVBQUUsWUFBWTtLQUFFLENBQUMsQ0FBQztBQUV6RSxNQUFNQyxVQUFVLEdBQUcsQ0FBQ0YsUUFBUSxHQUFLRixzREFBVSxDQUFDRSxRQUFRLEVBQUU7UUFBRUMsUUFBUSxFQUFFLFlBQVk7S0FBRSxDQUFDLENBQUM7QUFFbEYsTUFBTUcsVUFBVSxHQUFHLENBQUNKLFFBQVEsR0FBS0Ysc0RBQVUsQ0FBQ0UsUUFBUSxFQUFFO1FBQUVDLFFBQVEsRUFBRSxZQUFZO0tBQUUsQ0FBQyxDQUFDO0FBRWxGLE1BQU1LLGFBQWEsR0FBRyxDQUFDTixRQUFRLEdBQUtGLHlEQUFhLENBQUNFLFFBQVEsRUFBRTtRQUFFQyxRQUFRLEVBQUUsWUFBWTtLQUFFLENBQUMsQ0FBQztBQUV4RixNQUFNTyxXQUFXLEdBQUcsQ0FBQ1IsUUFBUSxHQUFLRix1REFBVyxDQUFDRSxRQUFRLEVBQUU7UUFBRUMsUUFBUSxFQUFFLFlBQVk7S0FBRSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZHVjYW1lbnRlLXdlYi8uL3NyYy91dGlscy91dGlscy5qcz83ZDdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgbm90aWZ5ID0gKG1lbnNhZ2VtKSA9PiB0b2FzdChtZW5zYWdlbSwgeyBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIgfSk7XHJcblxyXG5leHBvcnQgY29uc3Qgbm90aWZ5SW5mbyA9IChtZW5zYWdlbSkgPT4gdG9hc3QuaW5mbyhtZW5zYWdlbSwgeyBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIgfSk7XHJcblxyXG5leHBvcnQgY29uc3Qgbm90aWZ5V2FybiA9IChtZW5zYWdlbSkgPT4gdG9hc3Qud2FybihtZW5zYWdlbSwgeyBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIgfSk7XHJcblxyXG5leHBvcnQgY29uc3Qgbm90aWZ5U3VjY2VzcyA9IChtZW5zYWdlbSkgPT4gdG9hc3Quc3VjY2VzcyhtZW5zYWdlbSwgeyBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIgfSk7XHJcblxyXG5leHBvcnQgY29uc3Qgbm90aWZ5RXJyb3IgPSAobWVuc2FnZW0pID0+IHRvYXN0LmVycm9yKG1lbnNhZ2VtLCB7IHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIiB9KTsiXSwibmFtZXMiOlsidG9hc3QiLCJub3RpZnkiLCJtZW5zYWdlbSIsInBvc2l0aW9uIiwibm90aWZ5SW5mbyIsImluZm8iLCJub3RpZnlXYXJuIiwid2FybiIsIm5vdGlmeVN1Y2Nlc3MiLCJzdWNjZXNzIiwibm90aWZ5RXJyb3IiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/utils.js\n");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

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