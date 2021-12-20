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

/***/ "./src/main/events.ts":
/*!****************************!*\
  !*** ./src/main/events.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Events)\n/* harmony export */ });\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_ipcevents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/ipcevents */ \"./src/common/ipcevents.ts\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst log = console.log.bind(null, \"[Holymod]\");\nclass Events {\n    static register() {\n        this.registerCompilers();\n        electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on(_common_ipcevents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GET_APP_PATH, (event)=>{\n            event.returnValue = electron__WEBPACK_IMPORTED_MODULE_0__.app.getAppPath();\n        });\n    }\n    static async registerCompilers() {\n        log(\"[Compilers] loading.\");\n        const sucrase = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! sucrase */ \"sucrase\", 23));\n        const sass = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! sass */ \"sass\", 23));\n        electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on(_common_ipcevents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].COMPILE_JAVASCRIPT, (event, filePath)=>{\n            if (!fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(filePath) || !fs__WEBPACK_IMPORTED_MODULE_2___default().statSync(filePath).isFile()) {\n                return event.returnValue = \"ERROR: File not found\";\n            }\n            let code = \"\";\n            try {\n                const filecontent = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, \"utf8\");\n                ({ code  } = sucrase.transform(filecontent, {\n                    transforms: [\n                        \"imports\",\n                        \"jsx\"\n                    ],\n                    production: false\n                }));\n            } catch (error) {\n                log(\"Failed to compile JS:\", error);\n            }\n            event.returnValue = code;\n        });\n        electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on(_common_ipcevents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].COMPILE_TYPESCRIPT, (event, filePath)=>{\n            if (!fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(filePath) || !fs__WEBPACK_IMPORTED_MODULE_2___default().statSync(filePath).isFile()) {\n                return event.returnValue = \"ERROR: File not found\";\n            }\n            let code = \"\";\n            try {\n                const filecontent = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, \"utf8\");\n                ({ code  } = sucrase.transform(filecontent, {\n                    transforms: [\n                        \"typescript\",\n                        \"imports\",\n                        \"jsx\"\n                    ],\n                    production: false\n                }));\n            } catch (error) {\n                log(\"Failed to compile TS:\", error);\n            }\n            event.returnValue = code;\n        });\n        electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on(_common_ipcevents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].COMPILE_SCSS, (event, filePath)=>{\n            if (!fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(filePath) || !fs__WEBPACK_IMPORTED_MODULE_2___default().statSync(filePath).isFile()) {\n                return event.returnValue = \"ERROR: File not found\";\n            }\n            let css = \"\";\n            try {\n                const filecontent = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, \"utf8\");\n                ({ css  } = sass.compile(filecontent, {\n                }));\n            } catch (error) {\n                log(\"Failed to compile SCSS:\", error);\n            }\n            event.returnValue = css.toString();\n        });\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLElBQUksQ0FBQztnQkFDOUQsTUFBTSxDQUFDVixLQUFLLENBQUNDLFdBQVcsR0FBRyxDQUF1QjtZQUN0RCxDQUFDO1lBQ0QsR0FBRyxDQUFDbUIsR0FBRyxHQUFHLENBQUU7WUFFWixHQUFHLENBQUMsQ0FBQztnQkFDRCxLQUFLLENBQUNSLFdBQVcsR0FBR3JCLHNEQUFlLENBQUNnQixRQUFRLEVBQUUsQ0FBTTtpQkFDbkQsQ0FBQ2EsQ0FBQUEsR0FBRyxHQUFDLEdBQUdmLElBQUksQ0FBQ2dCLE9BQU8sQ0FBQ1QsV0FBVyxFQUFFLENBQUM7Z0JBQUEsQ0FBQztZQUN6QyxDQUFDLENBQUMsS0FBSyxFQUFFSyxLQUFLLEVBQUUsQ0FBQztnQkFDYnpCLEdBQUcsQ0FBQyxDQUF5QiwwQkFBRXlCLEtBQUs7WUFDeEMsQ0FBQztZQUVEakIsS0FBSyxDQUFDQyxXQUFXLEdBQUdtQixHQUFHLENBQUNFLFFBQVE7UUFDcEMsQ0FBQztJQUNMLENBQUM7O0FBbkVzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbHltb2QvLi9zcmMvbWFpbi9ldmVudHMudHM/ZDViMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lwY01haW4gYXMgSVBDLCBhcHB9IGZyb20gXCJlbGVjdHJvblwiO1xyXG5pbXBvcnQgSVBDRXZlbnRzIGZyb20gXCIuLi9jb21tb24vaXBjZXZlbnRzXCI7XHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuXHJcbmNvbnN0IGxvZyA9IGNvbnNvbGUubG9nLmJpbmQobnVsbCwgXCJbSG9seW1vZF1cIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudHMge1xyXG4gICAgc3RhdGljIHJlZ2lzdGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDb21waWxlcnMoKTtcclxuXHJcbiAgICAgICAgSVBDLm9uKElQQ0V2ZW50cy5HRVRfQVBQX1BBVEgsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGFwcC5nZXRBcHBQYXRoKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIHJlZ2lzdGVyQ29tcGlsZXJzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGxvZyhcIltDb21waWxlcnNdIGxvYWRpbmcuXCIpO1xyXG4gICAgICAgIGNvbnN0IHN1Y3Jhc2UgPSBhd2FpdCBpbXBvcnQoXCJzdWNyYXNlXCIpO1xyXG4gICAgICAgIGNvbnN0IHNhc3MgPSBhd2FpdCBpbXBvcnQoXCJzYXNzXCIpO1xyXG5cclxuICAgICAgICBJUEMub24oSVBDRXZlbnRzLkNPTVBJTEVfSkFWQVNDUklQVCwgKGV2ZW50LCBmaWxlUGF0aDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkgfHwgIWZzLnN0YXRTeW5jKGZpbGVQYXRoKS5pc0ZpbGUoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnJldHVyblZhbHVlID0gXCJFUlJPUjogRmlsZSBub3QgZm91bmRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgY29kZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZWNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsIFwidXRmOFwiKTtcclxuICAgICAgICAgICAgICAgICh7Y29kZX0gPSBzdWNyYXNlLnRyYW5zZm9ybShmaWxlY29udGVudCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybXM6IFtcImltcG9ydHNcIiwgXCJqc3hcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdGlvbjogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGxvZyhcIkZhaWxlZCB0byBjb21waWxlIEpTOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gY29kZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgSVBDLm9uKElQQ0V2ZW50cy5DT01QSUxFX1RZUEVTQ1JJUFQsIChldmVudCwgZmlsZVBhdGg6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpIHx8ICFmcy5zdGF0U3luYyhmaWxlUGF0aCkuaXNGaWxlKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5yZXR1cm5WYWx1ZSA9IFwiRVJST1I6IEZpbGUgbm90IGZvdW5kXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGNvZGUgPSBcIlwiO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgXCJ1dGY4XCIpO1xyXG4gICAgICAgICAgICAgICAgKHtjb2RlfSA9IHN1Y3Jhc2UudHJhbnNmb3JtKGZpbGVjb250ZW50LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtczogW1widHlwZXNjcmlwdFwiLCBcImltcG9ydHNcIiwgXCJqc3hcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdGlvbjogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGxvZyhcIkZhaWxlZCB0byBjb21waWxlIFRTOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gY29kZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgSVBDLm9uKElQQ0V2ZW50cy5DT01QSUxFX1NDU1MsIChldmVudCwgZmlsZVBhdGg6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpIHx8ICFmcy5zdGF0U3luYyhmaWxlUGF0aCkuaXNGaWxlKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5yZXR1cm5WYWx1ZSA9IFwiRVJST1I6IEZpbGUgbm90IGZvdW5kXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGNzcyA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZWNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsIFwidXRmOFwiKTtcclxuICAgICAgICAgICAgICAgICh7Y3NzfSA9IHNhc3MuY29tcGlsZShmaWxlY29udGVudCwge30pKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGxvZyhcIkZhaWxlZCB0byBjb21waWxlIFNDU1M6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBjc3MudG9TdHJpbmcoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJpcGNNYWluIiwiSVBDIiwiYXBwIiwiSVBDRXZlbnRzIiwiZnMiLCJsb2ciLCJjb25zb2xlIiwiYmluZCIsIkV2ZW50cyIsInJlZ2lzdGVyIiwicmVnaXN0ZXJDb21waWxlcnMiLCJvbiIsIkdFVF9BUFBfUEFUSCIsImV2ZW50IiwicmV0dXJuVmFsdWUiLCJnZXRBcHBQYXRoIiwic3VjcmFzZSIsImltcG9ydCIsInNhc3MiLCJDT01QSUxFX0pBVkFTQ1JJUFQiLCJmaWxlUGF0aCIsImV4aXN0c1N5bmMiLCJzdGF0U3luYyIsImlzRmlsZSIsImNvZGUiLCJmaWxlY29udGVudCIsInJlYWRGaWxlU3luYyIsInRyYW5zZm9ybSIsInRyYW5zZm9ybXMiLCJwcm9kdWN0aW9uIiwiZXJyb3IiLCJDT01QSUxFX1RZUEVTQ1JJUFQiLCJDT01QSUxFX1NDU1MiLCJjc3MiLCJjb21waWxlIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/events.ts\n");

/***/ }),

/***/ "./src/main/index.ts":
/*!***************************!*\
  !*** ./src/main/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! module */ \"module\");\n/* harmony import */ var module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(module__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ \"./src/main/events.ts\");\n\n\n\nconst Module = (module__WEBPACK_IMPORTED_MODULE_0___default());\nconst modulesPath = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(\".\", \"..\", \"node_modules\");\nif (!~Module.globalPaths.indexOf(modulesPath)) {\n    Module.globalPaths.push(modulesPath);\n}\n_events__WEBPACK_IMPORTED_MODULE_2__[\"default\"].register();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFDUjtBQUNNO0FBRTdCLEtBQUssQ0FBQ0csTUFBTSxHQUFnREgsK0NBQVU7QUFDdEUsS0FBSyxDQUFDSSxXQUFXLEdBQUdILG1EQUFZLENBQUMsQ0FBRyxJQUFFLENBQUksS0FBRSxDQUFjO0FBRTFELEVBQUUsSUFBSUUsTUFBTSxDQUFDRyxXQUFXLENBQUNDLE9BQU8sQ0FBQ0gsV0FBVyxHQUFHLENBQUM7SUFDNUNELE1BQU0sQ0FBQ0csV0FBVyxDQUFDRSxJQUFJLENBQUNKLFdBQVc7QUFDdkMsQ0FBQztBQUVERix3REFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbHltb2QvLi9zcmMvbWFpbi9pbmRleC50cz8wNWI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlTW9kdWxlIGZyb20gXCJtb2R1bGVcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcclxuXHJcbmNvbnN0IE1vZHVsZTogdHlwZW9mIE5vZGVNb2R1bGUgJiB7Z2xvYmFsUGF0aHM6IHN0cmluZ1tdfSA9IE5vZGVNb2R1bGUgYXMgdW5rbm93biBhcyBhbnk7XHJcbmNvbnN0IG1vZHVsZXNQYXRoID0gcGF0aC5yZXNvbHZlKFwiLlwiLCBcIi4uXCIsIFwibm9kZV9tb2R1bGVzXCIpO1xyXG5cclxuaWYgKCF+TW9kdWxlLmdsb2JhbFBhdGhzLmluZGV4T2YobW9kdWxlc1BhdGgpKSB7XHJcbiAgICBNb2R1bGUuZ2xvYmFsUGF0aHMucHVzaChtb2R1bGVzUGF0aCk7XHJcbn1cclxuXHJcbkV2ZW50cy5yZWdpc3RlcigpOyJdLCJuYW1lcyI6WyJOb2RlTW9kdWxlIiwicGF0aCIsIkV2ZW50cyIsIk1vZHVsZSIsIm1vZHVsZXNQYXRoIiwicmVzb2x2ZSIsImdsb2JhbFBhdGhzIiwiaW5kZXhPZiIsInB1c2giLCJyZWdpc3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/index.ts\n");

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

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("module");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "sass":
/*!***********************!*\
  !*** external "sass" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("sass");

/***/ }),

/***/ "sucrase":
/*!**************************!*\
  !*** external "sucrase" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("sucrase");

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
/******/ /* webpack/runtime/create fake namespace object */
/******/ (() => {
/******/ 	var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 	var leafPrototypes;
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 16: return value when it's Promise-like
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = this(value);
/******/ 		if(mode & 8) return value;
/******/ 		if(typeof value === 'object' && value) {
/******/ 			if((mode & 4) && value.__esModule) return value;
/******/ 			if((mode & 16) && typeof value.then === 'function') return value;
/******/ 		}
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		var def = {};
/******/ 		leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 		for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 			Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 		}
/******/ 		def['default'] = () => (value);
/******/ 		__webpack_require__.d(ns, def);
/******/ 		return ns;
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
/******/ var __webpack_exports__ = __webpack_require__("./src/main/index.ts");
/******/ var __webpack_export_target__ = exports;
/******/ for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 
