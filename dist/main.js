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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst IPCEvents = {\n    COMPILE_SCSS: \"HOLYMOD_COMPILE_SCSS\",\n    COMPILE_TYPESCRIPT: \"HOLYMOD_COMPILE_TYPESCRIPT\",\n    COMPILE_JAVASCRIPT: \"HOLYMOD_COMPILE_JAVASCRIPT\",\n    COMPILE_COFFEESCRIPT: \"HOLYMOD_COMPILE_COFFEESCRIPT\",\n    GET_APP_PATH: \"HOLYMOD_GET_APP_PATH\",\n    TOGGLE_DEV_TOOLS: \"HOLYMOD_TOGGLE_DEV_TOOLS\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IPCEvents);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2lwY2V2ZW50cy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsS0FBSyxDQUFDQSxTQUFTLEdBQUcsQ0FBQztJQUNmQyxZQUFZLEVBQUUsQ0FBc0I7SUFDcENDLGtCQUFrQixFQUFFLENBQTRCO0lBQ2hEQyxrQkFBa0IsRUFBRSxDQUE0QjtJQUNoREMsb0JBQW9CLEVBQUUsQ0FBOEI7SUFDcERDLFlBQVksRUFBRSxDQUFzQjtJQUNwQ0MsZ0JBQWdCLEVBQUUsQ0FBMEI7QUFDaEQsQ0FBQztBQUVELGlFQUFlTixTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob2x5bW9kLy4vc3JjL2NvbW1vbi9pcGNldmVudHMudHM/ZTI3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJUENFdmVudHMgPSB7XHJcbiAgICBDT01QSUxFX1NDU1M6IFwiSE9MWU1PRF9DT01QSUxFX1NDU1NcIixcclxuICAgIENPTVBJTEVfVFlQRVNDUklQVDogXCJIT0xZTU9EX0NPTVBJTEVfVFlQRVNDUklQVFwiLFxyXG4gICAgQ09NUElMRV9KQVZBU0NSSVBUOiBcIkhPTFlNT0RfQ09NUElMRV9KQVZBU0NSSVBUXCIsXHJcbiAgICBDT01QSUxFX0NPRkZFRVNDUklQVDogXCJIT0xZTU9EX0NPTVBJTEVfQ09GRkVFU0NSSVBUXCIsXHJcbiAgICBHRVRfQVBQX1BBVEg6IFwiSE9MWU1PRF9HRVRfQVBQX1BBVEhcIixcclxuICAgIFRPR0dMRV9ERVZfVE9PTFM6IFwiSE9MWU1PRF9UT0dHTEVfREVWX1RPT0xTXCJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElQQ0V2ZW50czsiXSwibmFtZXMiOlsiSVBDRXZlbnRzIiwiQ09NUElMRV9TQ1NTIiwiQ09NUElMRV9UWVBFU0NSSVBUIiwiQ09NUElMRV9KQVZBU0NSSVBUIiwiQ09NUElMRV9DT0ZGRUVTQ1JJUFQiLCJHRVRfQVBQX1BBVEgiLCJUT0dHTEVfREVWX1RPT0xTIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/common/ipcevents.ts\n");

/***/ }),

/***/ "./src/main/events.ts":
/*!****************************!*\
  !*** ./src/main/events.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Events)\n/* harmony export */ });\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_ipcevents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/ipcevents */ \"./src/common/ipcevents.ts\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst log = console.log.bind(null, \"[Holymod]\");\nclass Events {\n    static register() {\n        this.registerCompilers();\n        this.registerAPI();\n        electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on(_common_ipcevents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GET_APP_PATH, (event)=>{\n            event.returnValue = electron__WEBPACK_IMPORTED_MODULE_0__.app.getAppPath();\n        });\n    }\n    static registerAPI() {\n        electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.handle(_common_ipcevents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].TOGGLE_DEV_TOOLS, (event)=>{\n            event.sender.toggleDevTools();\n        });\n    }\n    static async registerCompilers() {\n        log(\"[Compilers] loading.\");\n        const sucrase = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! sucrase */ \"sucrase\", 23));\n        const sass = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! sass */ \"sass\", 23));\n        const CoffeeScript = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! coffeescript */ \"coffeescript\", 23));\n        electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on(_common_ipcevents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].COMPILE_JAVASCRIPT, (event, filePath)=>{\n            if (!fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(filePath) || !fs__WEBPACK_IMPORTED_MODULE_2___default().statSync(filePath).isFile()) {\n                return event.returnValue = \"ERROR: File not found\";\n            }\n            let code = \"\";\n            try {\n                const filecontent = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, \"utf8\");\n                ({ code  } = sucrase.transform(filecontent, {\n                    transforms: [\n                        \"imports\",\n                        \"jsx\"\n                    ],\n                    production: false\n                }));\n            } catch (error) {\n                log(\"Failed to compile JS:\", error);\n            }\n            event.returnValue = code;\n        });\n        electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on(_common_ipcevents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].COMPILE_TYPESCRIPT, (event, filePath)=>{\n            if (!fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(filePath) || !fs__WEBPACK_IMPORTED_MODULE_2___default().statSync(filePath).isFile()) {\n                return event.returnValue = \"ERROR: File not found\";\n            }\n            let code = \"\";\n            try {\n                const filecontent = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, \"utf8\");\n                ({ code  } = sucrase.transform(filecontent, {\n                    transforms: [\n                        \"typescript\",\n                        \"imports\",\n                        \"jsx\"\n                    ],\n                    production: false\n                }));\n            } catch (error) {\n                log(\"Failed to compile TS:\", error);\n            }\n            event.returnValue = code;\n        });\n        electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on(_common_ipcevents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].COMPILE_SCSS, (event, filePath)=>{\n            if (!fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(filePath) || !fs__WEBPACK_IMPORTED_MODULE_2___default().statSync(filePath).isFile()) {\n                return event.returnValue = \"ERROR: File not found\";\n            }\n            let css = \"\";\n            try {\n                ({ css  } = sass.compile(filePath, {\n                }));\n            } catch (error) {\n                log(\"Failed to compile SCSS:\", error);\n            }\n            event.returnValue = css.toString();\n        });\n        electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on(_common_ipcevents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].COMPILE_COFFEESCRIPT, (event, filePath)=>{\n            if (!fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(filePath) || !fs__WEBPACK_IMPORTED_MODULE_2___default().statSync(filePath).isFile()) {\n                return event.returnValue = \"ERROR: File not found\";\n            }\n            let code = \"\";\n            try {\n                const filecontent = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, \"utf8\");\n                ({ code  } = sucrase.transform(CoffeeScript.compile(filecontent), {\n                    transforms: [\n                        \"jsx\",\n                        \"imports\"\n                    ]\n                }));\n            } catch (error) {\n                log(\"Failed to compile CoffeeScript:\", error);\n            }\n            event.returnValue = code;\n        });\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ1QsWUFBWSxDQUFDZ0IsT0FBTyxDQUFDVCxXQUFXLEdBQUcsQ0FBQztvQkFDNURHLFVBQVUsRUFBRSxDQUFDO3dCQUFBLENBQUs7d0JBQUUsQ0FBUztvQkFBQSxDQUFDO2dCQUNsQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLEtBQUssRUFBRUUsS0FBSyxFQUFFLENBQUM7Z0JBQ2IvQixHQUFHLENBQUMsQ0FBaUMsa0NBQUUrQixLQUFLO1lBQ2hELENBQUM7WUFFRHRCLEtBQUssQ0FBQ0MsV0FBVyxHQUFHZSxJQUFJO1FBQzVCLENBQUM7SUFDTCxDQUFDOztBQTVGc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob2x5bW9kLy4vc3JjL21haW4vZXZlbnRzLnRzP2Q1YjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpcGNNYWluIGFzIElQQywgYXBwfSBmcm9tIFwiZWxlY3Ryb25cIjtcclxuaW1wb3J0IElQQ0V2ZW50cyBmcm9tIFwiLi4vY29tbW9uL2lwY2V2ZW50c1wiO1xyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcblxyXG5jb25zdCBsb2cgPSBjb25zb2xlLmxvZy5iaW5kKG51bGwsIFwiW0hvbHltb2RdXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRzIHtcclxuICAgIHN0YXRpYyByZWdpc3RlcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ29tcGlsZXJzKCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckFQSSgpO1xyXG5cclxuICAgICAgICBJUEMub24oSVBDRXZlbnRzLkdFVF9BUFBfUEFUSCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gYXBwLmdldEFwcFBhdGgoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVnaXN0ZXJBUEkoKTogdm9pZCB7XHJcbiAgICAgICAgSVBDLmhhbmRsZShJUENFdmVudHMuVE9HR0xFX0RFVl9UT09MUywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnNlbmRlci50b2dnbGVEZXZUb29scygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyByZWdpc3RlckNvbXBpbGVycygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBsb2coXCJbQ29tcGlsZXJzXSBsb2FkaW5nLlwiKTtcclxuICAgICAgICBjb25zdCBzdWNyYXNlID0gYXdhaXQgaW1wb3J0KFwic3VjcmFzZVwiKTtcclxuICAgICAgICBjb25zdCBzYXNzID0gYXdhaXQgaW1wb3J0KFwic2Fzc1wiKTtcclxuICAgICAgICBjb25zdCBDb2ZmZWVTY3JpcHQgPSBhd2FpdCBpbXBvcnQoXCJjb2ZmZWVzY3JpcHRcIik7XHJcblxyXG4gICAgICAgIElQQy5vbihJUENFdmVudHMuQ09NUElMRV9KQVZBU0NSSVBULCAoZXZlbnQsIGZpbGVQYXRoOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSB8fCAhZnMuc3RhdFN5bmMoZmlsZVBhdGgpLmlzRmlsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQucmV0dXJuVmFsdWUgPSBcIkVSUk9SOiBGaWxlIG5vdCBmb3VuZFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjb2RlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgXCJ1dGY4XCIpO1xyXG4gICAgICAgICAgICAgICAgKHtjb2RlfSA9IHN1Y3Jhc2UudHJhbnNmb3JtKGZpbGVjb250ZW50LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtczogW1wiaW1wb3J0c1wiLCBcImpzeFwiXSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0aW9uOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgbG9nKFwiRmFpbGVkIHRvIGNvbXBpbGUgSlM6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBjb2RlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBJUEMub24oSVBDRXZlbnRzLkNPTVBJTEVfVFlQRVNDUklQVCwgKGV2ZW50LCBmaWxlUGF0aDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkgfHwgIWZzLnN0YXRTeW5jKGZpbGVQYXRoKS5pc0ZpbGUoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnJldHVyblZhbHVlID0gXCJFUlJPUjogRmlsZSBub3QgZm91bmRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgY29kZSA9IFwiXCI7XHJcbiAgICBcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCBcInV0ZjhcIik7XHJcbiAgICAgICAgICAgICAgICAoe2NvZGV9ID0gc3VjcmFzZS50cmFuc2Zvcm0oZmlsZWNvbnRlbnQsIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1zOiBbXCJ0eXBlc2NyaXB0XCIsIFwiaW1wb3J0c1wiLCBcImpzeFwiXSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0aW9uOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgbG9nKFwiRmFpbGVkIHRvIGNvbXBpbGUgVFM6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBjb2RlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBJUEMub24oSVBDRXZlbnRzLkNPTVBJTEVfU0NTUywgKGV2ZW50LCBmaWxlUGF0aDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkgfHwgIWZzLnN0YXRTeW5jKGZpbGVQYXRoKS5pc0ZpbGUoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnJldHVyblZhbHVlID0gXCJFUlJPUjogRmlsZSBub3QgZm91bmRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgY3NzID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAoe2Nzc30gPSBzYXNzLmNvbXBpbGUoZmlsZVBhdGgsIHt9KSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBsb2coXCJGYWlsZWQgdG8gY29tcGlsZSBTQ1NTOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gY3NzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIElQQy5vbihJUENFdmVudHMuQ09NUElMRV9DT0ZGRUVTQ1JJUFQsIChldmVudCwgZmlsZVBhdGg6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpIHx8ICFmcy5zdGF0U3luYyhmaWxlUGF0aCkuaXNGaWxlKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5yZXR1cm5WYWx1ZSA9IFwiRVJST1I6IEZpbGUgbm90IGZvdW5kXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGNvZGUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCBcInV0ZjhcIik7XHJcbiAgICAgICAgICAgICAgICAoe2NvZGV9ID0gc3VjcmFzZS50cmFuc2Zvcm0oQ29mZmVlU2NyaXB0LmNvbXBpbGUoZmlsZWNvbnRlbnQpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtczogW1wianN4XCIsIFwiaW1wb3J0c1wiXVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgbG9nKFwiRmFpbGVkIHRvIGNvbXBpbGUgQ29mZmVlU2NyaXB0OlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gY29kZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJpcGNNYWluIiwiSVBDIiwiYXBwIiwiSVBDRXZlbnRzIiwiZnMiLCJsb2ciLCJjb25zb2xlIiwiYmluZCIsIkV2ZW50cyIsInJlZ2lzdGVyIiwicmVnaXN0ZXJDb21waWxlcnMiLCJyZWdpc3RlckFQSSIsIm9uIiwiR0VUX0FQUF9QQVRIIiwiZXZlbnQiLCJyZXR1cm5WYWx1ZSIsImdldEFwcFBhdGgiLCJoYW5kbGUiLCJUT0dHTEVfREVWX1RPT0xTIiwic2VuZGVyIiwidG9nZ2xlRGV2VG9vbHMiLCJzdWNyYXNlIiwiaW1wb3J0Iiwic2FzcyIsIkNvZmZlZVNjcmlwdCIsIkNPTVBJTEVfSkFWQVNDUklQVCIsImZpbGVQYXRoIiwiZXhpc3RzU3luYyIsInN0YXRTeW5jIiwiaXNGaWxlIiwiY29kZSIsImZpbGVjb250ZW50IiwicmVhZEZpbGVTeW5jIiwidHJhbnNmb3JtIiwidHJhbnNmb3JtcyIsInByb2R1Y3Rpb24iLCJlcnJvciIsIkNPTVBJTEVfVFlQRVNDUklQVCIsIkNPTVBJTEVfU0NTUyIsImNzcyIsImNvbXBpbGUiLCJ0b1N0cmluZyIsIkNPTVBJTEVfQ09GRkVFU0NSSVBUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/events.ts\n");

/***/ }),

/***/ "./src/main/index.ts":
/*!***************************!*\
  !*** ./src/main/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! module */ \"module\");\n/* harmony import */ var module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(module__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ \"./src/main/events.ts\");\n\n\n\nconst Module = (module__WEBPACK_IMPORTED_MODULE_0___default());\nconst modulesPath = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(\".\", \"..\", \"node_modules\");\nif (!~Module.globalPaths.indexOf(modulesPath)) {\n    Module.globalPaths.push(modulesPath);\n}\n_events__WEBPACK_IMPORTED_MODULE_2__[\"default\"].register();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFDUjtBQUNNO0FBRTdCLEtBQUssQ0FBQ0csTUFBTSxHQUFnREgsK0NBQVU7QUFDdEUsS0FBSyxDQUFDSSxXQUFXLEdBQUdILG1EQUFZLENBQUMsQ0FBRyxJQUFFLENBQUksS0FBRSxDQUFjO0FBRTFELEVBQUUsSUFBSUUsTUFBTSxDQUFDRyxXQUFXLENBQUNDLE9BQU8sQ0FBQ0gsV0FBVyxHQUFHLENBQUM7SUFDNUNELE1BQU0sQ0FBQ0csV0FBVyxDQUFDRSxJQUFJLENBQUNKLFdBQVc7QUFDdkMsQ0FBQztBQUVERix3REFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbHltb2QvLi9zcmMvbWFpbi9pbmRleC50cz8wNWI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlTW9kdWxlIGZyb20gXCJtb2R1bGVcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9ldmVudHNcIjtcclxuXHJcbmNvbnN0IE1vZHVsZTogdHlwZW9mIE5vZGVNb2R1bGUgJiB7Z2xvYmFsUGF0aHM6IHN0cmluZ1tdfSA9IE5vZGVNb2R1bGUgYXMgdW5rbm93biBhcyBhbnk7XHJcbmNvbnN0IG1vZHVsZXNQYXRoID0gcGF0aC5yZXNvbHZlKFwiLlwiLCBcIi4uXCIsIFwibm9kZV9tb2R1bGVzXCIpO1xyXG5cclxuaWYgKCF+TW9kdWxlLmdsb2JhbFBhdGhzLmluZGV4T2YobW9kdWxlc1BhdGgpKSB7XHJcbiAgICBNb2R1bGUuZ2xvYmFsUGF0aHMucHVzaChtb2R1bGVzUGF0aCk7XHJcbn1cclxuXHJcbkV2ZW50cy5yZWdpc3RlcigpOyJdLCJuYW1lcyI6WyJOb2RlTW9kdWxlIiwicGF0aCIsIkV2ZW50cyIsIk1vZHVsZSIsIm1vZHVsZXNQYXRoIiwicmVzb2x2ZSIsImdsb2JhbFBhdGhzIiwiaW5kZXhPZiIsInB1c2giLCJyZWdpc3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/index.ts\n");

/***/ }),

/***/ "coffeescript":
/*!*******************************!*\
  !*** external "coffeescript" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("coffeescript");

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
