/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "./src/common/ipcevents.ts":
/*!*********************************!*\
  !*** ./src/common/ipcevents.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst IPCEvents = {\n    COMPILE_SCSS: \"HOLYMOD_COMPILE_SCSS\",\n    COMPILE_TYPESCRIPT: \"HOLYMOD_COMPILE_TYPESCRIPT\",\n    COMPILE_JAVASCRIPT: \"HOLYMOD_COMPILE_JAVASCRIPT\",\n    GET_APP_PATH: \"HOLYMOD_GET_APP_PATH\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IPCEvents);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2lwY2V2ZW50cy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsS0FBSyxDQUFDQSxTQUFTLEdBQUcsQ0FBQztJQUNmQyxZQUFZLEVBQUUsQ0FBc0I7SUFDcENDLGtCQUFrQixFQUFFLENBQTRCO0lBQ2hEQyxrQkFBa0IsRUFBRSxDQUE0QjtJQUNoREMsWUFBWSxFQUFFLENBQXNCO0FBQ3hDLENBQUM7QUFFRCxpRUFBZUosU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9seW1vZC8uL3NyYy9jb21tb24vaXBjZXZlbnRzLnRzP2UyNzkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSVBDRXZlbnRzID0ge1xyXG4gICAgQ09NUElMRV9TQ1NTOiBcIkhPTFlNT0RfQ09NUElMRV9TQ1NTXCIsXHJcbiAgICBDT01QSUxFX1RZUEVTQ1JJUFQ6IFwiSE9MWU1PRF9DT01QSUxFX1RZUEVTQ1JJUFRcIixcclxuICAgIENPTVBJTEVfSkFWQVNDUklQVDogXCJIT0xZTU9EX0NPTVBJTEVfSkFWQVNDUklQVFwiLFxyXG4gICAgR0VUX0FQUF9QQVRIOiBcIkhPTFlNT0RfR0VUX0FQUF9QQVRIXCJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElQQ0V2ZW50czsiXSwibmFtZXMiOlsiSVBDRXZlbnRzIiwiQ09NUElMRV9TQ1NTIiwiQ09NUElMRV9UWVBFU0NSSVBUIiwiQ09NUElMRV9KQVZBU0NSSVBUIiwiR0VUX0FQUF9QQVRIIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/common/ipcevents.ts\n");

/***/ }),

/***/ "./src/common/logger.ts":
/*!******************************!*\
  !*** ./src/common/logger.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoggerModule\": () => (/* binding */ LoggerModule),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classPrivateMethodGet(receiver, privateSet, fn) {\n    if (!privateSet.has(receiver)) {\n        throw new TypeError(\"attempted to get private field on non-instance\");\n    }\n    return fn;\n}\nvar _parseType = new WeakSet(), _log = new WeakSet();\nclass LoggerModule {\n    log(...message) {\n        _classPrivateMethodGet(this, _log, log).call(this, \"log\", ...message);\n    }\n    info(...message) {\n        _classPrivateMethodGet(this, _log, log).call(this, \"info\", ...message);\n    }\n    warn(...message) {\n        _classPrivateMethodGet(this, _log, log).call(this, \"warn\", ...message);\n    }\n    error(...message) {\n        _classPrivateMethodGet(this, _log, log).call(this, \"error\", ...message);\n    }\n    debug(...message) {\n        _classPrivateMethodGet(this, _log, log).call(this, \"debug\", ...message);\n    }\n    static create(name) {\n        return new LoggerModule(name);\n    }\n    constructor(name){\n        _parseType.add(this);\n        _log.add(this);\n        this.module = name;\n    }\n}\nfunction parseType(type) {\n    switch(type){\n        case \"info\":\n        case \"warn\":\n        case \"error\":\n        case \"debug\":\n            return type;\n        default:\n            return \"log\";\n    }\n}\nfunction log(type, ...message) {\n    console[_classPrivateMethodGet(this, _parseType, parseType).call(this, type)](`%c[HolyMod]%c %c[${this.module}]%c`, \"color: #fff133; font-weight: 700;\", \"\", \"color: #fff133;\", \"\", ...message);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoggerModule);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2xvZ2dlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQVNJLFVBQVUsa0JBWVYsSUFBSTtBQW5CRCxNQUFNQSxZQUFZO0lBdUJyQkMsR0FBRyxJQUFJQyxPQUFPLEVBQVMsQ0FBQzsrQkFBQSxJQUFJLEVBQUVELElBQUcsRUFBSEEsR0FBRyxhQUFDLENBQUssU0FBS0MsT0FBTztJQUFFLENBQUM7SUFDdERDLElBQUksSUFBSUQsT0FBTyxFQUFTLENBQUM7K0JBQUEsSUFBSSxFQUFFRCxJQUFHLEVBQUhBLEdBQUcsYUFBQyxDQUFNLFVBQUtDLE9BQU87SUFBRSxDQUFDO0lBQ3hERSxJQUFJLElBQUlGLE9BQU8sRUFBUyxDQUFDOytCQUFBLElBQUksRUFBRUQsSUFBRyxFQUFIQSxHQUFHLGFBQUMsQ0FBTSxVQUFLQyxPQUFPO0lBQUUsQ0FBQztJQUN4REcsS0FBSyxJQUFJSCxPQUFPLEVBQVMsQ0FBQzsrQkFBQSxJQUFJLEVBQUVELElBQUcsRUFBSEEsR0FBRyxhQUFDLENBQU8sV0FBS0MsT0FBTztJQUFFLENBQUM7SUFDMURJLEtBQUssSUFBSUosT0FBTyxFQUFTLENBQUM7K0JBQUEsSUFBSSxFQUFFRCxJQUFHLEVBQUhBLEdBQUcsYUFBQyxDQUFPLFdBQUtDLE9BQU87SUFBRSxDQUFDO1dBRW5ESyxNQUFNLENBQUNDLElBQVksRUFBRSxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUNSLFlBQVksQ0FBQ1EsSUFBSTtJQUNoQyxDQUFDO2dCQTVCV0EsSUFBWSxDQUFFLENBQUM7UUFJM0IsVUFBVTtRQVlWLElBQUk7UUFmQSxJQUFJLENBQUNDLE1BQU0sR0FBR0QsSUFBSTtJQUN0QixDQUFDOztTQUVELFNBVUMsQ0FWVUUsSUFBYSxFQUFFLENBQUM7SUFDdkIsTUFBTSxDQUFFQSxJQUFJO1FBQ1IsSUFBSSxDQUFDLENBQU07UUFDWCxJQUFJLENBQUMsQ0FBTTtRQUNYLElBQUksQ0FBQyxDQUFPO1FBQ1osSUFBSSxDQUFDLENBQU87WUFDUixNQUFNLENBQUNBLElBQUk7O1lBRVgsTUFBTSxDQUFDLENBQUs7O0FBRXhCLENBQUM7U0FFRCxHQUVDLENBRklBLElBQWEsS0FBTVIsT0FBTyxFQUFTLENBQUM7SUFDckNTLE9BQU8sd0JBQUMsSUFBSSxFQUFFQyxVQUFTLEVBQVRBLFNBQVMsYUFBQ0YsSUFBSSxJQUFJLGlCQUFpQixFQUFFLElBQUksQ0FBQ0QsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFtQyxvQ0FBRSxDQUFFLEdBQUUsQ0FBaUIsa0JBQUUsQ0FBRSxNQUFLUCxPQUFPO0FBQ25KLENBQUM7QUFhTCxpRUFBZUYsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9seW1vZC8uL3NyYy9jb21tb24vbG9nZ2VyLnRzPzhiYzIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgTG9nVHlwZSA9IGtleW9mIHR5cGVvZiBjb25zb2xlO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2dlck1vZHVsZSB7XHJcbiAgICBtb2R1bGU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm1vZHVsZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgI3BhcnNlVHlwZSh0eXBlOiBMb2dUeXBlKSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbmZvXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3YXJuXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJlcnJvclwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiZGVidWdcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibG9nXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNsb2codHlwZTogTG9nVHlwZSwgIC4uLm1lc3NhZ2U6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc29sZVt0aGlzLiNwYXJzZVR5cGUodHlwZSldKGAlY1tIb2x5TW9kXSVjICVjWyR7dGhpcy5tb2R1bGV9XSVjYCwgXCJjb2xvcjogI2ZmZjEzMzsgZm9udC13ZWlnaHQ6IDcwMDtcIiwgXCJcIiwgXCJjb2xvcjogI2ZmZjEzMztcIiwgXCJcIiwgLi4ubWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nKC4uLm1lc3NhZ2U6IGFueVtdKSB7dGhpcy4jbG9nKFwibG9nXCIsIC4uLm1lc3NhZ2UpO31cclxuICAgIGluZm8oLi4ubWVzc2FnZTogYW55W10pIHt0aGlzLiNsb2coXCJpbmZvXCIsIC4uLm1lc3NhZ2UpO31cclxuICAgIHdhcm4oLi4ubWVzc2FnZTogYW55W10pIHt0aGlzLiNsb2coXCJ3YXJuXCIsIC4uLm1lc3NhZ2UpO31cclxuICAgIGVycm9yKC4uLm1lc3NhZ2U6IGFueVtdKSB7dGhpcy4jbG9nKFwiZXJyb3JcIiwgLi4ubWVzc2FnZSk7fVxyXG4gICAgZGVidWcoLi4ubWVzc2FnZTogYW55W10pIHt0aGlzLiNsb2coXCJkZWJ1Z1wiLCAuLi5tZXNzYWdlKTt9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IExvZ2dlck1vZHVsZShuYW1lKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyTW9kdWxlOyJdLCJuYW1lcyI6WyJMb2dnZXJNb2R1bGUiLCJsb2ciLCJtZXNzYWdlIiwiaW5mbyIsIndhcm4iLCJlcnJvciIsImRlYnVnIiwiY3JlYXRlIiwibmFtZSIsIm1vZHVsZSIsInR5cGUiLCJjb25zb2xlIiwicGFyc2VUeXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/common/logger.ts\n");

/***/ }),

/***/ "./src/preload/api/compilers.ts":
/*!**************************************!*\
  !*** ./src/preload/api/compilers.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"compileJS\": () => (/* binding */ compileJS),\n/* harmony export */   \"compileTS\": () => (/* binding */ compileTS),\n/* harmony export */   \"compileSCSS\": () => (/* binding */ compileSCSS)\n/* harmony export */ });\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_ipcevents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/ipcevents */ \"./src/common/ipcevents.ts\");\n\n\nfunction compileJS(path) {\n    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.sendSync(_common_ipcevents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].COMPILE_JAVASCRIPT, path);\n}\nfunction compileTS(path) {\n    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.sendSync(_common_ipcevents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].COMPILE_TYPESCRIPT, path);\n}\nfunction compileSCSS(path) {\n    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.sendSync(_common_ipcevents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].COMPILE_SCSS, path);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJlbG9hZC9hcGkvY29tcGlsZXJzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUNHO0FBRXZDLFNBQVNHLFNBQVMsQ0FBQ0MsSUFBWSxFQUFVLENBQUM7SUFDN0MsTUFBTSxDQUFDSCwwREFBWSxDQUFDQyw0RUFBNEIsRUFBRUUsSUFBSTtBQUMxRCxDQUFDO0FBRU0sU0FBU0csU0FBUyxDQUFDSCxJQUFZLEVBQVUsQ0FBQztJQUM3QyxNQUFNLENBQUNILDBEQUFZLENBQUNDLDRFQUE0QixFQUFFRSxJQUFJO0FBQzFELENBQUM7QUFFTSxTQUFTSyxXQUFXLENBQUNMLElBQVksRUFBVSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ0gsMERBQVksQ0FBQ0Msc0VBQXNCLEVBQUVFLElBQUk7QUFDcEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbHltb2QvLi9zcmMvcHJlbG9hZC9hcGkvY29tcGlsZXJzLnRzP2E5MWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpcGNSZW5kZXJlciBhcyBJUEN9IGZyb20gXCJlbGVjdHJvblwiO1xyXG5pbXBvcnQgSVBDRXZlbnRzIGZyb20gXCIuLi8uLi9jb21tb24vaXBjZXZlbnRzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZUpTKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gSVBDLnNlbmRTeW5jKElQQ0V2ZW50cy5DT01QSUxFX0pBVkFTQ1JJUFQsIHBhdGgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVUUyhwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIElQQy5zZW5kU3luYyhJUENFdmVudHMuQ09NUElMRV9UWVBFU0NSSVBULCBwYXRoKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlU0NTUyhwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIElQQy5zZW5kU3luYyhJUENFdmVudHMuQ09NUElMRV9TQ1NTLCBwYXRoKTtcclxufTsiXSwibmFtZXMiOlsiaXBjUmVuZGVyZXIiLCJJUEMiLCJJUENFdmVudHMiLCJjb21waWxlSlMiLCJwYXRoIiwic2VuZFN5bmMiLCJDT01QSUxFX0pBVkFTQ1JJUFQiLCJjb21waWxlVFMiLCJDT01QSUxFX1RZUEVTQ1JJUFQiLCJjb21waWxlU0NTUyIsIkNPTVBJTEVfU0NTUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/preload/api/compilers.ts\n");

/***/ }),

/***/ "./src/preload/api/file.ts":
/*!*********************************!*\
  !*** ./src/preload/api/file.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"readFile\": () => (/* binding */ readFile),\n/* harmony export */   \"createFile\": () => (/* binding */ createFile),\n/* harmony export */   \"deleteFile\": () => (/* binding */ deleteFile),\n/* harmony export */   \"exists\": () => (/* binding */ exists),\n/* harmony export */   \"readDirectory\": () => (/* binding */ readDirectory),\n/* harmony export */   \"createDirectory\": () => (/* binding */ createDirectory),\n/* harmony export */   \"deleteDirectory\": () => (/* binding */ deleteDirectory),\n/* harmony export */   \"getStats\": () => (/* binding */ getStats)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction readFile(path, options = \"utf8\") {\n    return fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path, options);\n}\nfunction createFile(path, content, options) {\n    fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(path, content, options);\n}\nfunction deleteFile(path) {\n    return fs__WEBPACK_IMPORTED_MODULE_0___default().unlinkSync(path);\n}\nfunction exists(path) {\n    return fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(path);\n}\nfunction readDirectory(path) {\n    return fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(path);\n}\nfunction createDirectory(path, options) {\n    return fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(path, options);\n}\nfunction deleteDirectory(path, options) {\n    return fs__WEBPACK_IMPORTED_MODULE_0___default().rmdirSync(path, options);\n}\nfunction getStats(path) {\n    const stats = fs__WEBPACK_IMPORTED_MODULE_0___default().statSync(path);\n    return {\n        isFile: ()=>stats.isFile()\n        ,\n        isDirectory: ()=>stats.isDirectory()\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJlbG9hZC9hcGkvZmlsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW1CO0FBRVosU0FBU0MsUUFBUSxDQUFDQyxJQUFZLEVBQUVDLE9BQWUsR0FBRyxDQUFNLE9BQVUsQ0FBQztJQUN0RSxNQUFNLENBQUNILHNEQUFlLENBQUNFLElBQUksRUFBRUMsT0FBTztBQUN4QyxDQUFDO0FBRU0sU0FBU0UsVUFBVSxDQUFDSCxJQUFZLEVBQUVJLE9BQXdDLEVBQUVILE9BQVksRUFBUSxDQUFDO0lBQ3BHSCx1REFBZ0IsQ0FBQ0UsSUFBSSxFQUFFSSxPQUFPLEVBQUVILE9BQU87QUFDM0MsQ0FBQztBQUVNLFNBQVNLLFVBQVUsQ0FBQ04sSUFBWSxFQUFRLENBQUM7SUFDNUMsTUFBTSxDQUFDRixvREFBYSxDQUFDRSxJQUFJO0FBQzdCLENBQUM7QUFFTSxTQUFTUSxNQUFNLENBQUNSLElBQVksRUFBVyxDQUFDO0lBQzNDLE1BQU0sQ0FBQ0Ysb0RBQWEsQ0FBQ0UsSUFBSTtBQUM3QixDQUFDO0FBRU0sU0FBU1UsYUFBYSxDQUFDVixJQUFZLEVBQVksQ0FBQztJQUNuRCxNQUFNLENBQUNGLHFEQUFjLENBQUNFLElBQUk7QUFDOUIsQ0FBQztBQUVNLFNBQVNZLGVBQWUsQ0FBQ1osSUFBWSxFQUFFQyxPQUFZLEVBQTJCLENBQUM7SUFDbEYsTUFBTSxDQUFDSCxtREFBWSxDQUFDRSxJQUFJLEVBQUVDLE9BQU87QUFDckMsQ0FBQztBQUVNLFNBQVNhLGVBQWUsQ0FBQ2QsSUFBWSxFQUFFQyxPQUFZLEVBQVEsQ0FBQztJQUMvRCxNQUFNLENBQUNILG1EQUFZLENBQUNFLElBQUksRUFBRUMsT0FBTztBQUNyQyxDQUFDO0FBRU0sU0FBU2UsUUFBUSxDQUFDaEIsSUFBWSxFQUduQyxDQUFDO0lBQ0MsS0FBSyxDQUFDaUIsS0FBSyxHQUFHbkIsa0RBQVcsQ0FBQ0UsSUFBSTtJQUU5QixNQUFNLENBQUMsQ0FBQztRQUNKbUIsTUFBTSxNQUFRRixLQUFLLENBQUNFLE1BQU07O1FBQzFCQyxXQUFXLE1BQVFILEtBQUssQ0FBQ0csV0FBVztJQUN4QyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbHltb2QvLi9zcmMvcHJlbG9hZC9hcGkvZmlsZS50cz84MWI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFkRmlsZShwYXRoOiBzdHJpbmcsIG9wdGlvbnM6IHN0cmluZyA9IFwidXRmOFwiKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBmcy5yZWFkRmlsZVN5bmMocGF0aCwgb3B0aW9ucyBhcyBcInV0ZjhcIik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmlsZShwYXRoOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZyB8IE5vZGVKUy5BcnJheUJ1ZmZlclZpZXcsIG9wdGlvbnM6IGFueSk6IHZvaWQge1xyXG4gICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLCBjb250ZW50LCBvcHRpb25zKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUZpbGUocGF0aDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICByZXR1cm4gZnMudW5saW5rU3luYyhwYXRoKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleGlzdHMocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZnMuZXhpc3RzU3luYyhwYXRoKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFkRGlyZWN0b3J5KHBhdGg6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBmcy5yZWFkZGlyU3luYyhwYXRoKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXJlY3RvcnkocGF0aDogc3RyaW5nLCBvcHRpb25zOiBhbnkpOiB2b2lkIHwgYm9vbGVhbiB8IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZnMubWtkaXJTeW5jKHBhdGgsIG9wdGlvbnMpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZURpcmVjdG9yeShwYXRoOiBzdHJpbmcsIG9wdGlvbnM6IGFueSk6IHZvaWQge1xyXG4gICAgcmV0dXJuIGZzLnJtZGlyU3luYyhwYXRoLCBvcHRpb25zKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0cyhwYXRoOiBzdHJpbmcpOiB7XHJcbiAgICBpc0ZpbGUoKTogYm9vbGVhbjtcclxuICAgIGlzRGlyZWN0b3J5KCk6IGJvb2xlYW47XHJcbn0ge1xyXG4gICAgY29uc3Qgc3RhdHMgPSBmcy5zdGF0U3luYyhwYXRoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzRmlsZTogKCkgPT4gc3RhdHMuaXNGaWxlKCksXHJcbiAgICAgICAgaXNEaXJlY3Rvcnk6ICgpID0+IHN0YXRzLmlzRGlyZWN0b3J5KClcclxuICAgIH07XHJcbn07Il0sIm5hbWVzIjpbImZzIiwicmVhZEZpbGUiLCJwYXRoIiwib3B0aW9ucyIsInJlYWRGaWxlU3luYyIsImNyZWF0ZUZpbGUiLCJjb250ZW50Iiwid3JpdGVGaWxlU3luYyIsImRlbGV0ZUZpbGUiLCJ1bmxpbmtTeW5jIiwiZXhpc3RzIiwiZXhpc3RzU3luYyIsInJlYWREaXJlY3RvcnkiLCJyZWFkZGlyU3luYyIsImNyZWF0ZURpcmVjdG9yeSIsIm1rZGlyU3luYyIsImRlbGV0ZURpcmVjdG9yeSIsInJtZGlyU3luYyIsImdldFN0YXRzIiwic3RhdHMiLCJzdGF0U3luYyIsImlzRmlsZSIsImlzRGlyZWN0b3J5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/preload/api/file.ts\n");

/***/ }),

/***/ "./src/preload/api/index.ts":
/*!**********************************!*\
  !*** ./src/preload/api/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FS\": () => (/* reexport module object */ _file__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   \"Compilers\": () => (/* reexport module object */ _compilers__WEBPACK_IMPORTED_MODULE_1__),\n/* harmony export */   \"Path\": () => (/* reexport module object */ _path__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   \"unsafeExecuteJS\": () => (/* reexport safe */ _internal__WEBPACK_IMPORTED_MODULE_3__.unsafeExecuteJS)\n/* harmony export */ });\n/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file */ \"./src/preload/api/file.ts\");\n/* harmony import */ var _compilers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compilers */ \"./src/preload/api/compilers.ts\");\n/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path */ \"./src/preload/api/path.ts\");\n/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal */ \"./src/preload/api/internal.ts\");\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJlbG9hZC9hcGkvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEI7QUFDWTtBQUNWO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob2x5bW9kLy4vc3JjL3ByZWxvYWQvYXBpL2luZGV4LnRzPzEyNDYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogYXMgRlMgZnJvbSBcIi4vZmlsZVwiO1xyXG5leHBvcnQgKiBhcyBDb21waWxlcnMgZnJvbSBcIi4vY29tcGlsZXJzXCI7XHJcbmV4cG9ydCAqIGFzIFBhdGggZnJvbSBcIi4vcGF0aFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9pbnRlcm5hbFwiOyJdLCJuYW1lcyI6WyJGUyIsIkNvbXBpbGVycyIsIlBhdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/preload/api/index.ts\n");

/***/ }),

/***/ "./src/preload/api/internal.ts":
/*!*************************************!*\
  !*** ./src/preload/api/internal.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"unsafeExecuteJS\": () => (/* binding */ unsafeExecuteJS)\n/* harmony export */ });\nfunction unsafeExecuteJS(code) {\n    return eval(code);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJlbG9hZC9hcGkvaW50ZXJuYWwudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLFNBQVNBLGVBQWUsQ0FBQ0MsSUFBWSxFQUFPLENBQUM7SUFDaEQsTUFBTSxDQUFDQyxJQUFJLENBQUNELElBQUk7QUFDcEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbHltb2QvLi9zcmMvcHJlbG9hZC9hcGkvaW50ZXJuYWwudHM/YjFlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdW5zYWZlRXhlY3V0ZUpTKGNvZGU6IHN0cmluZyk6IGFueSB7XHJcbiAgICByZXR1cm4gZXZhbChjb2RlKTtcclxufTsiXSwibmFtZXMiOlsidW5zYWZlRXhlY3V0ZUpTIiwiY29kZSIsImV2YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/preload/api/internal.ts\n");

/***/ }),

/***/ "./src/preload/api/path.ts":
/*!*********************************!*\
  !*** ./src/preload/api/path.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBasePath\": () => (/* binding */ getBasePath),\n/* harmony export */   \"getAppPath\": () => (/* binding */ getAppPath),\n/* harmony export */   \"resolve\": () => (/* binding */ resolve),\n/* harmony export */   \"dirname\": () => (/* binding */ dirname),\n/* harmony export */   \"extname\": () => (/* binding */ extname),\n/* harmony export */   \"basename\": () => (/* binding */ basename),\n/* harmony export */   \"isAbsolute\": () => (/* binding */ isAbsolute)\n/* harmony export */ });\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_ipcevents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/ipcevents */ \"./src/common/ipcevents.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction getBasePath() {\n    return path__WEBPACK_IMPORTED_MODULE_2___default().resolve(eval(\"__dirname\"), \"..\");\n}\nfunction getAppPath() {\n    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.sendSync(_common_ipcevents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GET_APP_PATH);\n}\nfunction resolve(...pathSegments) {\n    return path__WEBPACK_IMPORTED_MODULE_2___default().resolve(...pathSegments);\n}\nfunction dirname(filePath) {\n    return path__WEBPACK_IMPORTED_MODULE_2___default().dirname(filePath);\n}\nfunction extname(file) {\n    return path__WEBPACK_IMPORTED_MODULE_2___default().extname(file);\n}\nfunction basename(filePath) {\n    return path__WEBPACK_IMPORTED_MODULE_2___default().basename(filePath);\n}\nfunction isAbsolute(filePath) {\n    return path__WEBPACK_IMPORTED_MODULE_2___default().isAbsolute(filePath);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJlbG9hZC9hcGkvcGF0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDRztBQUN2QjtBQUVoQixTQUFTSSxXQUFXLEdBQVcsQ0FBQztJQUNuQyxNQUFNLENBQUNELG1EQUFZLENBQUNHLElBQUksQ0FBQyxDQUFXLGFBQUcsQ0FBSTtBQUMvQyxDQUFDO0FBRU0sU0FBU0MsVUFBVSxHQUFXLENBQUM7SUFDbEMsTUFBTSxDQUFDTiwwREFBWSxDQUFDQyxzRUFBc0I7QUFDOUMsQ0FBQztBQUVNLFNBQVNHLE9BQU8sSUFBSUssWUFBWSxFQUFvQixDQUFDO0lBQ3hELE1BQU0sQ0FBQ1AsbURBQVksSUFBSU8sWUFBWTtBQUN2QyxDQUFDO0FBRU0sU0FBU0MsT0FBTyxDQUFDQyxRQUFnQixFQUFVLENBQUM7SUFDL0MsTUFBTSxDQUFDVCxtREFBWSxDQUFDUyxRQUFRO0FBQ2hDLENBQUM7QUFFTSxTQUFTQyxPQUFPLENBQUNDLElBQVksRUFBVSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1gsbURBQVksQ0FBQ1csSUFBSTtBQUM1QixDQUFDO0FBRU0sU0FBU0MsUUFBUSxDQUFDSCxRQUFnQixFQUFVLENBQUM7SUFDaEQsTUFBTSxDQUFDVCxvREFBYSxDQUFDUyxRQUFRO0FBQ2pDLENBQUM7QUFFTSxTQUFTSSxVQUFVLENBQUNKLFFBQWdCLEVBQVcsQ0FBQztJQUNuRCxNQUFNLENBQUNULHNEQUFlLENBQUNTLFFBQVE7QUFDbkMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbHltb2QvLi9zcmMvcHJlbG9hZC9hcGkvcGF0aC50cz9jODY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXBjUmVuZGVyZXIgYXMgSVBDfSBmcm9tIFwiZWxlY3Ryb25cIjtcclxuaW1wb3J0IElQQ0V2ZW50cyBmcm9tIFwiLi4vLi4vY29tbW9uL2lwY2V2ZW50c1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhc2VQYXRoKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gcGF0aC5yZXNvbHZlKGV2YWwoXCJfX2Rpcm5hbWVcIiksIFwiLi5cIik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBwUGF0aCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIElQQy5zZW5kU3luYyhJUENFdmVudHMuR0VUX0FQUF9QQVRIKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlKC4uLnBhdGhTZWdtZW50czogc3RyaW5nW10pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHBhdGgucmVzb2x2ZSguLi5wYXRoU2VnbWVudHMpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpcm5hbWUoZmlsZVBhdGg6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gcGF0aC5kaXJuYW1lKGZpbGVQYXRoKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRuYW1lKGZpbGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gcGF0aC5leHRuYW1lKGZpbGUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhc2VuYW1lKGZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHBhdGguYmFzZW5hbWUoZmlsZVBhdGgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQWJzb2x1dGUoZmlsZVBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHBhdGguaXNBYnNvbHV0ZShmaWxlUGF0aCk7XHJcbn07Il0sIm5hbWVzIjpbImlwY1JlbmRlcmVyIiwiSVBDIiwiSVBDRXZlbnRzIiwicGF0aCIsImdldEJhc2VQYXRoIiwicmVzb2x2ZSIsImV2YWwiLCJnZXRBcHBQYXRoIiwic2VuZFN5bmMiLCJHRVRfQVBQX1BBVEgiLCJwYXRoU2VnbWVudHMiLCJkaXJuYW1lIiwiZmlsZVBhdGgiLCJleHRuYW1lIiwiZmlsZSIsImJhc2VuYW1lIiwiaXNBYnNvbHV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/preload/api/path.ts\n");

/***/ }),

/***/ "./src/preload/index.ts":
/*!******************************!*\
  !*** ./src/preload/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/logger */ \"./src/common/logger.ts\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./src/preload/api/index.ts\");\n\n\n\nconst Logger = new _common_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Preload\");\nconst listeners = {\n};\nconst NativeIPC = {\n    on (event, listener) {\n        if (!listeners[event]) listeners[event] = new Set();\n        listeners[event].add(listener);\n        return ()=>NativeIPC.off(event, listener)\n        ;\n    },\n    off (event, listener) {\n        if (!listeners[event]) return false;\n        return listeners[event].delete(listener);\n    },\n    emit (event, ...args) {\n        if (!listeners[event]) return null;\n        const callbacks = [\n            ...listeners[event]\n        ];\n        for(let i = 0; i < callbacks.length; i++){\n            try {\n                callbacks[i](...args);\n            } catch (error) {\n                console.error(error);\n            }\n        }\n    }\n};\nconst HolyNative = {\n    requireModule (module) {\n        switch(module){\n            case \"API\":\n                return _api__WEBPACK_IMPORTED_MODULE_2__;\n            case \"IPC\":\n                return NativeIPC;\n        }\n    }\n};\n// Expose native apis to renderer and respect context isolation.\nLogger.log(\"Exposing API's\");\nif (process.contextIsolated) {\n    electron__WEBPACK_IMPORTED_MODULE_0__.contextBridge.exposeInMainWorld(\"HolyNative\", HolyNative);\n} else {\n    Object.defineProperty(window, \"HolyNative\", {\n        value: HolyNative,\n        writable: false,\n        configurable: false\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJlbG9hZC9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFzQztBQUNLO0FBQ1Q7QUFFbEMsS0FBSyxDQUFDRyxNQUFNLEdBQUcsR0FBRyxDQUFDRixzREFBWSxDQUFDLENBQVM7QUFFekMsS0FBSyxDQUFDRyxTQUFTLEdBQUcsQ0FBQztBQUFBLENBQUM7QUFDcEIsS0FBSyxDQUFDQyxTQUFTLEdBQUcsQ0FBQztJQUNmQyxFQUFFLEVBQUNDLEtBQWEsRUFBRUMsUUFBa0IsRUFBRSxDQUFDO1FBQ25DLEVBQUUsR0FBR0osU0FBUyxDQUFDRyxLQUFLLEdBQUdILFNBQVMsQ0FBQ0csS0FBSyxJQUFJLEdBQUcsQ0FBQ0UsR0FBRztRQUVqREwsU0FBUyxDQUFDRyxLQUFLLEVBQUVHLEdBQUcsQ0FBQ0YsUUFBUTtRQUU3QixNQUFNLEtBQU9ILFNBQVMsQ0FBQ00sR0FBRyxDQUFDSixLQUFLLEVBQUVDLFFBQVE7O0lBQzlDLENBQUM7SUFDREcsR0FBRyxFQUFDSixLQUFhLEVBQUVDLFFBQWtCLEVBQVcsQ0FBQztRQUM3QyxFQUFFLEdBQUdKLFNBQVMsQ0FBQ0csS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLO1FBRW5DLE1BQU0sQ0FBQ0gsU0FBUyxDQUFDRyxLQUFLLEVBQUVLLE1BQU0sQ0FBQ0osUUFBUTtJQUMzQyxDQUFDO0lBQ0RLLElBQUksRUFBQ04sS0FBYSxLQUFLTyxJQUFJLEVBQVMsQ0FBQztRQUNqQyxFQUFFLEdBQUdWLFNBQVMsQ0FBQ0csS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJO1FBQ2xDLEtBQUssQ0FBQ1EsU0FBUyxHQUFHLENBQUM7ZUFBR1gsU0FBUyxDQUFDRyxLQUFLO1FBQUMsQ0FBQztRQUV2QyxHQUFHLENBQUUsR0FBRyxDQUFDUyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdELFNBQVMsQ0FBQ0UsTUFBTSxFQUFFRCxDQUFDLEdBQUksQ0FBQztZQUN4QyxHQUFHLENBQUMsQ0FBQ0Q7Z0JBQUFBLFNBQVMsQ0FBQ0MsQ0FBQyxLQUFLRixJQUFJO1lBQUUsQ0FBQyxDQUM1QixLQUFLLEVBQUVJLEtBQUssRUFBRSxDQUFDQztnQkFBQUEsT0FBTyxDQUFDRCxLQUFLLENBQUNBLEtBQUs7WUFBRSxDQUFDO1FBQ3pDLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUVELEtBQUssQ0FBQ0UsVUFBVSxHQUFHLENBQUM7SUFDaEJDLGFBQWEsRUFBQ0MsTUFBYyxFQUFFLENBQUM7UUFDM0IsTUFBTSxDQUFFQSxNQUFNO1lBQ1YsSUFBSSxDQUFDLENBQUs7Z0JBQUUsTUFBTSxDQUFDcEIsaUNBQVM7WUFDNUIsSUFBSSxDQUFDLENBQUs7Z0JBQUUsTUFBTSxDQUFDRyxTQUFTOztJQUVwQyxDQUFDO0FBQ0wsQ0FBQztBQUVELEVBQWdFO0FBQ2hFRixNQUFNLENBQUNvQixHQUFHLENBQUMsQ0FBZ0I7QUFDM0IsRUFBRSxFQUFFQyxPQUFPLENBQUNDLGVBQWUsRUFBRSxDQUFDO0lBQzFCekIscUVBQStCLENBQUMsQ0FBWSxhQUFFb0IsVUFBVTtBQUM1RCxDQUFDLE1BQU0sQ0FBQztJQUNKTyxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsTUFBTSxFQUFFLENBQVksYUFBRSxDQUFDO1FBQ3pDQyxLQUFLLEVBQUVWLFVBQVU7UUFDakJXLFFBQVEsRUFBRSxLQUFLO1FBQ2ZDLFlBQVksRUFBRSxLQUFLO0lBQ3ZCLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9seW1vZC8uL3NyYy9wcmVsb2FkL2luZGV4LnRzPzJlZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb250ZXh0QnJpZGdlfSBmcm9tIFwiZWxlY3Ryb25cIjtcclxuaW1wb3J0IExvZ2dlck1vZHVsZSBmcm9tIFwiLi4vY29tbW9uL2xvZ2dlclwiO1xyXG5pbXBvcnQgKiBhcyBOYXRpdmVBUEkgZnJvbSBcIi4vYXBpXCI7XHJcblxyXG5jb25zdCBMb2dnZXIgPSBuZXcgTG9nZ2VyTW9kdWxlKFwiUHJlbG9hZFwiKTtcclxuXHJcbmNvbnN0IGxpc3RlbmVycyA9IHt9O1xyXG5jb25zdCBOYXRpdmVJUEMgPSB7XHJcbiAgICBvbihldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogRnVuY3Rpb24pIHtcclxuICAgICAgICBpZiAoIWxpc3RlbmVyc1tldmVudF0pIGxpc3RlbmVyc1tldmVudF0gPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgICAgIGxpc3RlbmVyc1tldmVudF0uYWRkKGxpc3RlbmVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IE5hdGl2ZUlQQy5vZmYoZXZlbnQsIGxpc3RlbmVyKTtcclxuICAgIH0sXHJcbiAgICBvZmYoZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IEZ1bmN0aW9uKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnNbZXZlbnRdKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lcnNbZXZlbnRdLmRlbGV0ZShsaXN0ZW5lcik7XHJcbiAgICB9LFxyXG4gICAgZW1pdChldmVudDogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIGlmICghbGlzdGVuZXJzW2V2ZW50XSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gWy4uLmxpc3RlbmVyc1tldmVudF1dO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0cnkge2NhbGxiYWNrc1tpXSguLi5hcmdzKTt9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge2NvbnNvbGUuZXJyb3IoZXJyb3IpO31cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBIb2x5TmF0aXZlID0ge1xyXG4gICAgcmVxdWlyZU1vZHVsZShtb2R1bGU6IHN0cmluZykge1xyXG4gICAgICAgIHN3aXRjaCAobW9kdWxlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBUElcIjogcmV0dXJuIE5hdGl2ZUFQSTtcclxuICAgICAgICAgICAgY2FzZSBcIklQQ1wiOiByZXR1cm4gTmF0aXZlSVBDO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbi8vIEV4cG9zZSBuYXRpdmUgYXBpcyB0byByZW5kZXJlciBhbmQgcmVzcGVjdCBjb250ZXh0IGlzb2xhdGlvbi5cclxuTG9nZ2VyLmxvZyhcIkV4cG9zaW5nIEFQSSdzXCIpO1xyXG5pZiAocHJvY2Vzcy5jb250ZXh0SXNvbGF0ZWQpIHtcclxuICAgIGNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoXCJIb2x5TmF0aXZlXCIsIEhvbHlOYXRpdmUpO1xyXG59IGVsc2Uge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgXCJIb2x5TmF0aXZlXCIsIHtcclxuICAgICAgICB2YWx1ZTogSG9seU5hdGl2ZSxcclxuICAgICAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxyXG4gICAgfSk7XHJcbn0iXSwibmFtZXMiOlsiY29udGV4dEJyaWRnZSIsIkxvZ2dlck1vZHVsZSIsIk5hdGl2ZUFQSSIsIkxvZ2dlciIsImxpc3RlbmVycyIsIk5hdGl2ZUlQQyIsIm9uIiwiZXZlbnQiLCJsaXN0ZW5lciIsIlNldCIsImFkZCIsIm9mZiIsImRlbGV0ZSIsImVtaXQiLCJhcmdzIiwiY2FsbGJhY2tzIiwiaSIsImxlbmd0aCIsImVycm9yIiwiY29uc29sZSIsIkhvbHlOYXRpdmUiLCJyZXF1aXJlTW9kdWxlIiwibW9kdWxlIiwibG9nIiwicHJvY2VzcyIsImNvbnRleHRJc29sYXRlZCIsImV4cG9zZUluTWFpbldvcmxkIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ3aW5kb3ciLCJ2YWx1ZSIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/preload/index.ts\n");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval-source-map devtool is used.
/******/ var __webpack_exports__ = __webpack_require__("./src/preload/index.ts");
/******/ var __webpack_export_target__ = exports;
/******/ for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 
