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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst IPCEvents = {\n    COMPILE_SCSS: \"HOLYMOD_COMPILE_SCSS\",\n    COMPILE_TYPESCRIPT: \"HOLYMOD_COMPILE_TYPESCRIPT\",\n    COMPILE_JAVASCRIPT: \"HOLYMOD_COMPILE_JAVASCRIPT\",\n    COMPILE_COFFEESCRIPT: \"HOLYMOD_COMPILE_COFFEESCRIPT\",\n    GET_APP_PATH: \"HOLYMOD_GET_APP_PATH\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IPCEvents);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2lwY2V2ZW50cy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsS0FBSyxDQUFDQSxTQUFTLEdBQUcsQ0FBQztJQUNmQyxZQUFZLEVBQUUsQ0FBc0I7SUFDcENDLGtCQUFrQixFQUFFLENBQTRCO0lBQ2hEQyxrQkFBa0IsRUFBRSxDQUE0QjtJQUNoREMsb0JBQW9CLEVBQUUsQ0FBOEI7SUFDcERDLFlBQVksRUFBRSxDQUFzQjtBQUN4QyxDQUFDO0FBRUQsaUVBQWVMLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbHltb2QvLi9zcmMvY29tbW9uL2lwY2V2ZW50cy50cz9lMjc5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IElQQ0V2ZW50cyA9IHtcclxuICAgIENPTVBJTEVfU0NTUzogXCJIT0xZTU9EX0NPTVBJTEVfU0NTU1wiLFxyXG4gICAgQ09NUElMRV9UWVBFU0NSSVBUOiBcIkhPTFlNT0RfQ09NUElMRV9UWVBFU0NSSVBUXCIsXHJcbiAgICBDT01QSUxFX0pBVkFTQ1JJUFQ6IFwiSE9MWU1PRF9DT01QSUxFX0pBVkFTQ1JJUFRcIixcclxuICAgIENPTVBJTEVfQ09GRkVFU0NSSVBUOiBcIkhPTFlNT0RfQ09NUElMRV9DT0ZGRUVTQ1JJUFRcIixcclxuICAgIEdFVF9BUFBfUEFUSDogXCJIT0xZTU9EX0dFVF9BUFBfUEFUSFwiXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJUENFdmVudHM7Il0sIm5hbWVzIjpbIklQQ0V2ZW50cyIsIkNPTVBJTEVfU0NTUyIsIkNPTVBJTEVfVFlQRVNDUklQVCIsIkNPTVBJTEVfSkFWQVNDUklQVCIsIkNPTVBJTEVfQ09GRkVFU0NSSVBUIiwiR0VUX0FQUF9QQVRIIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/common/ipcevents.ts\n");

/***/ }),

/***/ "./src/main/events.ts":
/*!****************************!*\
  !*** ./src/main/events.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Events)\n/* harmony export */ });\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_ipcevents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/ipcevents */ \"./src/common/ipcevents.ts\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst log = console.log.bind(null, \"[Holymod]\");\nclass Events {\n    static register() {\n        this.registerCompilers();\n        electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on(_common_ipcevents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GET_APP_PATH, (event)=>{\n            event.returnValue = electron__WEBPACK_IMPORTED_MODULE_0__.app.getAppPath();\n        });\n    }\n    static async registerCompilers() {\n        log(\"[Compilers] loading.\");\n        const sucrase = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! sucrase */ \"sucrase\", 23));\n        const sass = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! sass */ \"sass\", 23));\n        const CoffeeScript = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! coffeescript */ \"coffeescript\", 23));\n        electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on(_common_ipcevents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].COMPILE_JAVASCRIPT, (event, filePath)=>{\n            if (!fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(filePath) || !fs__WEBPACK_IMPORTED_MODULE_2___default().statSync(filePath).isFile()) {\n                return event.returnValue = \"ERROR: File not found\";\n            }\n            let code = \"\";\n            try {\n                const filecontent = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, \"utf8\");\n                ({ code  } = sucrase.transform(filecontent, {\n                    transforms: [\n                        \"imports\",\n                        \"jsx\"\n                    ],\n                    production: false\n                }));\n            } catch (error) {\n                log(\"Failed to compile JS:\", error);\n            }\n            event.returnValue = code;\n        });\n        electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on(_common_ipcevents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].COMPILE_TYPESCRIPT, (event, filePath)=>{\n            if (!fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(filePath) || !fs__WEBPACK_IMPORTED_MODULE_2___default().statSync(filePath).isFile()) {\n                return event.returnValue = \"ERROR: File not found\";\n            }\n            let code = \"\";\n            try {\n                const filecontent = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, \"utf8\");\n                ({ code  } = sucrase.transform(filecontent, {\n                    transforms: [\n                        \"typescript\",\n                        \"imports\",\n                        \"jsx\"\n                    ],\n                    production: false\n                }));\n            } catch (error) {\n                log(\"Failed to compile TS:\", error);\n            }\n            event.returnValue = code;\n        });\n        electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on(_common_ipcevents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].COMPILE_SCSS, (event, filePath)=>{\n            if (!fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(filePath) || !fs__WEBPACK_IMPORTED_MODULE_2___default().statSync(filePath).isFile()) {\n                return event.returnValue = \"ERROR: File not found\";\n            }\n            let css = \"\";\n            try {\n                ({ css  } = sass.compile(filePath, {\n                }));\n            } catch (error) {\n                log(\"Failed to compile SCSS:\", error);\n            }\n            event.returnValue = css.toString();\n        });\n        electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on(_common_ipcevents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].COMPILE_COFFEESCRIPT, (event, filePath)=>{\n            if (!fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(filePath) || !fs__WEBPACK_IMPORTED_MODULE_2___default().statSync(filePath).isFile()) {\n                return event.returnValue = \"ERROR: File not found\";\n            }\n            let code = \"\";\n            try {\n                const filecontent = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, \"utf8\");\n                ({ code  } = sucrase.transform(CoffeeScript.compile(filecontent), {\n                    transforms: [\n                        \"jsx\",\n                        \"imports\"\n                    ]\n                }));\n            } catch (error) {\n                log(\"Failed to compile CoffeeScript:\", error);\n            }\n            event.returnValue = code;\n        });\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi9ldmVudHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBQ0Q7QUFDeEI7QUFFbkIsS0FBSyxDQUFDSyxHQUFHLEdBQUdDLE9BQU8sQ0FBQ0QsR0FBRyxDQUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQVc7TUFFekJDLE1BQU07V0FDaEJDLFFBQVEsR0FBUyxDQUFDO1FBQ3JCLElBQUksQ0FBQ0MsaUJBQWlCO1FBRXRCVCxnREFBTSxDQUFDRSxzRUFBc0IsR0FBR1UsS0FBSyxHQUFLLENBQUM7WUFDdkNBLEtBQUssQ0FBQ0MsV0FBVyxHQUFHWixvREFBYztRQUN0QyxDQUFDO0lBQ0wsQ0FBQztpQkFFWVEsaUJBQWlCLEdBQWtCLENBQUM7UUFDN0NMLEdBQUcsQ0FBQyxDQUFzQjtRQUMxQixLQUFLLENBQUNXLE9BQU8sR0FBRyxLQUFLLENBQUNDLG9IQUFnQjtRQUN0QyxLQUFLLENBQUNDLElBQUksR0FBRyxLQUFLLENBQUNELDhHQUFhO1FBQ2hDLEtBQUssQ0FBQ0UsWUFBWSxHQUFHLEtBQUssQ0FBQ0YsOEhBQXFCO1FBRWhEaEIsZ0RBQU0sQ0FBQ0UsNEVBQTRCLEdBQUdVLEtBQUssRUFBRVEsUUFBZ0IsR0FBSyxDQUFDO1lBQy9ELEVBQUUsR0FBR2pCLG9EQUFhLENBQUNpQixRQUFRLE1BQU1qQixrREFBVyxDQUFDaUIsUUFBUSxFQUFFRyxNQUFNLElBQUksQ0FBQztnQkFDOUQsTUFBTSxDQUFDWCxLQUFLLENBQUNDLFdBQVcsR0FBRyxDQUF1QjtZQUN0RCxDQUFDO1lBQ0QsR0FBRyxDQUFDVyxJQUFJLEdBQUcsQ0FBRTtZQUViLEdBQUcsQ0FBQyxDQUFDO2dCQUNELEtBQUssQ0FBQ0MsV0FBVyxHQUFHdEIsc0RBQWUsQ0FBQ2lCLFFBQVEsRUFBRSxDQUFNO2lCQUNuRCxDQUFDSSxDQUFBQSxJQUFJLEdBQUMsR0FBR1QsT0FBTyxDQUFDWSxTQUFTLENBQUNGLFdBQVcsRUFBRSxDQUFDO29CQUN0Q0csVUFBVSxFQUFFLENBQUM7d0JBQUEsQ0FBUzt3QkFBRSxDQUFLO29CQUFBLENBQUM7b0JBQzlCQyxVQUFVLEVBQUUsS0FBSztnQkFDckIsQ0FBQztZQUNMLENBQUMsQ0FBQyxLQUFLLEVBQUVDLEtBQUssRUFBRSxDQUFDO2dCQUNiMUIsR0FBRyxDQUFDLENBQXVCLHdCQUFFMEIsS0FBSztZQUN0QyxDQUFDO1lBRURsQixLQUFLLENBQUNDLFdBQVcsR0FBR1csSUFBSTtRQUM1QixDQUFDO1FBRUR4QixnREFBTSxDQUFDRSw0RUFBNEIsR0FBR1UsS0FBSyxFQUFFUSxRQUFnQixHQUFLLENBQUM7WUFDL0QsRUFBRSxHQUFHakIsb0RBQWEsQ0FBQ2lCLFFBQVEsTUFBTWpCLGtEQUFXLENBQUNpQixRQUFRLEVBQUVHLE1BQU0sSUFBSSxDQUFDO2dCQUM5RCxNQUFNLENBQUNYLEtBQUssQ0FBQ0MsV0FBVyxHQUFHLENBQXVCO1lBQ3RELENBQUM7WUFDRCxHQUFHLENBQUNXLElBQUksR0FBRyxDQUFFO1lBRWIsR0FBRyxDQUFDLENBQUM7Z0JBQ0QsS0FBSyxDQUFDQyxXQUFXLEdBQUd0QixzREFBZSxDQUFDaUIsUUFBUSxFQUFFLENBQU07aUJBQ25ELENBQUNJLENBQUFBLElBQUksR0FBQyxHQUFHVCxPQUFPLENBQUNZLFNBQVMsQ0FBQ0YsV0FBVyxFQUFFLENBQUM7b0JBQ3RDRyxVQUFVLEVBQUUsQ0FBQzt3QkFBQSxDQUFZO3dCQUFFLENBQVM7d0JBQUUsQ0FBSztvQkFBQSxDQUFDO29CQUM1Q0MsVUFBVSxFQUFFLEtBQUs7Z0JBQ3JCLENBQUM7WUFDTCxDQUFDLENBQUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsQ0FBQztnQkFDYjFCLEdBQUcsQ0FBQyxDQUF1Qix3QkFBRTBCLEtBQUs7WUFDdEMsQ0FBQztZQUVEbEIsS0FBSyxDQUFDQyxXQUFXLEdBQUdXLElBQUk7UUFDNUIsQ0FBQztRQUVEeEIsZ0RBQU0sQ0FBQ0Usc0VBQXNCLEdBQUdVLEtBQUssRUFBRVEsUUFBZ0IsR0FBSyxDQUFDO1lBQ3pELEVBQUUsR0FBR2pCLG9EQUFhLENBQUNpQixRQUFRLE1BQU1qQixrREFBVyxDQUFDaUIsUUFBUSxFQUFFRyxNQUFNLElBQUksQ0FBQztnQkFDOUQsTUFBTSxDQUFDWCxLQUFLLENBQUNDLFdBQVcsR0FBRyxDQUF1QjtZQUN0RCxDQUFDO1lBQ0QsR0FBRyxDQUFDb0IsR0FBRyxHQUFHLENBQUU7WUFFWixHQUFHLENBQUMsQ0FBQztpQkFDQSxDQUFDQSxDQUFBQSxHQUFHLEdBQUMsR0FBR2hCLElBQUksQ0FBQ2lCLE9BQU8sQ0FBQ2QsUUFBUSxFQUFFLENBQUM7Z0JBQUEsQ0FBQztZQUN0QyxDQUFDLENBQUMsS0FBSyxFQUFFVSxLQUFLLEVBQUUsQ0FBQztnQkFDYjFCLEdBQUcsQ0FBQyxDQUF5QiwwQkFBRTBCLEtBQUs7WUFDeEMsQ0FBQztZQUVEbEIsS0FBSyxDQUFDQyxXQUFXLEdBQUdvQixHQUFHLENBQUNFLFFBQVE7UUFDcEMsQ0FBQztRQUVEbkMsZ0RBQU0sQ0FBQ0UsOEVBQThCLEdBQUdVLEtBQUssRUFBRVEsUUFBZ0IsR0FBSyxDQUFDO1lBQ2pFLEVBQUUsR0FBR2pCLG9EQUFhLENBQUNpQixRQUFRLE1BQU1qQixrREFBVyxDQUFDaUIsUUFBUSxFQUFFRyxNQUFNLElBQUksQ0FBQztnQkFDOUQsTUFBTSxDQUFDWCxLQUFLLENBQUNDLFdBQVcsR0FBRyxDQUF1QjtZQUN0RCxDQUFDO1lBQ0QsR0FBRyxDQUFDVyxJQUFJLEdBQUcsQ0FBRTtZQUViLEdBQUcsQ0FBQyxDQUFDO2dCQUNELEtBQUssQ0FBQ0MsV0FBVyxHQUFHdEIsc0RBQWUsQ0FBQ2lCLFFBQVEsRUFBRSxDQUFNO2lCQUNuRCxDQUFDSSxDQUFBQSxJQUFJLEdBQUMsR0FBR1QsT0FBTyxDQUFDWSxTQUFTLENBQUNULFlBQVksQ0FBQ2dCLE9BQU8sQ0FBQ1QsV0FBVyxHQUFHLENBQUM7b0JBQzVERyxVQUFVLEVBQUUsQ0FBQzt3QkFBQSxDQUFLO3dCQUFFLENBQVM7b0JBQUEsQ0FBQztnQkFDbEMsQ0FBQztZQUNMLENBQUMsQ0FBQyxLQUFLLEVBQUVFLEtBQUssRUFBRSxDQUFDO2dCQUNiMUIsR0FBRyxDQUFDLENBQWlDLGtDQUFFMEIsS0FBSztZQUNoRCxDQUFDO1lBRURsQixLQUFLLENBQUNDLFdBQVcsR0FBR1csSUFBSTtRQUM1QixDQUFDO0lBQ0wsQ0FBQzs7QUFyRnNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9seW1vZC8uL3NyYy9tYWluL2V2ZW50cy50cz9kNWIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXBjTWFpbiBhcyBJUEMsIGFwcH0gZnJvbSBcImVsZWN0cm9uXCI7XHJcbmltcG9ydCBJUENFdmVudHMgZnJvbSBcIi4uL2NvbW1vbi9pcGNldmVudHNcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5cclxuY29uc3QgbG9nID0gY29uc29sZS5sb2cuYmluZChudWxsLCBcIltIb2x5bW9kXVwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50cyB7XHJcbiAgICBzdGF0aWMgcmVnaXN0ZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbXBpbGVycygpO1xyXG5cclxuICAgICAgICBJUEMub24oSVBDRXZlbnRzLkdFVF9BUFBfUEFUSCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gYXBwLmdldEFwcFBhdGgoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgcmVnaXN0ZXJDb21waWxlcnMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgbG9nKFwiW0NvbXBpbGVyc10gbG9hZGluZy5cIik7XHJcbiAgICAgICAgY29uc3Qgc3VjcmFzZSA9IGF3YWl0IGltcG9ydChcInN1Y3Jhc2VcIik7XHJcbiAgICAgICAgY29uc3Qgc2FzcyA9IGF3YWl0IGltcG9ydChcInNhc3NcIik7XHJcbiAgICAgICAgY29uc3QgQ29mZmVlU2NyaXB0ID0gYXdhaXQgaW1wb3J0KFwiY29mZmVlc2NyaXB0XCIpO1xyXG5cclxuICAgICAgICBJUEMub24oSVBDRXZlbnRzLkNPTVBJTEVfSkFWQVNDUklQVCwgKGV2ZW50LCBmaWxlUGF0aDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkgfHwgIWZzLnN0YXRTeW5jKGZpbGVQYXRoKS5pc0ZpbGUoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnJldHVyblZhbHVlID0gXCJFUlJPUjogRmlsZSBub3QgZm91bmRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgY29kZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZWNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsIFwidXRmOFwiKTtcclxuICAgICAgICAgICAgICAgICh7Y29kZX0gPSBzdWNyYXNlLnRyYW5zZm9ybShmaWxlY29udGVudCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybXM6IFtcImltcG9ydHNcIiwgXCJqc3hcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdGlvbjogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGxvZyhcIkZhaWxlZCB0byBjb21waWxlIEpTOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gY29kZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgSVBDLm9uKElQQ0V2ZW50cy5DT01QSUxFX1RZUEVTQ1JJUFQsIChldmVudCwgZmlsZVBhdGg6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpIHx8ICFmcy5zdGF0U3luYyhmaWxlUGF0aCkuaXNGaWxlKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5yZXR1cm5WYWx1ZSA9IFwiRVJST1I6IEZpbGUgbm90IGZvdW5kXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGNvZGUgPSBcIlwiO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgXCJ1dGY4XCIpO1xyXG4gICAgICAgICAgICAgICAgKHtjb2RlfSA9IHN1Y3Jhc2UudHJhbnNmb3JtKGZpbGVjb250ZW50LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtczogW1widHlwZXNjcmlwdFwiLCBcImltcG9ydHNcIiwgXCJqc3hcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdGlvbjogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGxvZyhcIkZhaWxlZCB0byBjb21waWxlIFRTOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gY29kZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgSVBDLm9uKElQQ0V2ZW50cy5DT01QSUxFX1NDU1MsIChldmVudCwgZmlsZVBhdGg6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpIHx8ICFmcy5zdGF0U3luYyhmaWxlUGF0aCkuaXNGaWxlKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5yZXR1cm5WYWx1ZSA9IFwiRVJST1I6IEZpbGUgbm90IGZvdW5kXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGNzcyA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgKHtjc3N9ID0gc2Fzcy5jb21waWxlKGZpbGVQYXRoLCB7fSkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgbG9nKFwiRmFpbGVkIHRvIGNvbXBpbGUgU0NTUzpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGNzcy50b1N0cmluZygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBJUEMub24oSVBDRXZlbnRzLkNPTVBJTEVfQ09GRkVFU0NSSVBULCAoZXZlbnQsIGZpbGVQYXRoOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSB8fCAhZnMuc3RhdFN5bmMoZmlsZVBhdGgpLmlzRmlsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQucmV0dXJuVmFsdWUgPSBcIkVSUk9SOiBGaWxlIG5vdCBmb3VuZFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjb2RlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgXCJ1dGY4XCIpO1xyXG4gICAgICAgICAgICAgICAgKHtjb2RlfSA9IHN1Y3Jhc2UudHJhbnNmb3JtKENvZmZlZVNjcmlwdC5jb21waWxlKGZpbGVjb250ZW50KSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybXM6IFtcImpzeFwiLCBcImltcG9ydHNcIl1cclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGxvZyhcIkZhaWxlZCB0byBjb21waWxlIENvZmZlZVNjcmlwdDpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGNvZGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiaXBjTWFpbiIsIklQQyIsImFwcCIsIklQQ0V2ZW50cyIsImZzIiwibG9nIiwiY29uc29sZSIsImJpbmQiLCJFdmVudHMiLCJyZWdpc3RlciIsInJlZ2lzdGVyQ29tcGlsZXJzIiwib24iLCJHRVRfQVBQX1BBVEgiLCJldmVudCIsInJldHVyblZhbHVlIiwiZ2V0QXBwUGF0aCIsInN1Y3Jhc2UiLCJpbXBvcnQiLCJzYXNzIiwiQ29mZmVlU2NyaXB0IiwiQ09NUElMRV9KQVZBU0NSSVBUIiwiZmlsZVBhdGgiLCJleGlzdHNTeW5jIiwic3RhdFN5bmMiLCJpc0ZpbGUiLCJjb2RlIiwiZmlsZWNvbnRlbnQiLCJyZWFkRmlsZVN5bmMiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2Zvcm1zIiwicHJvZHVjdGlvbiIsImVycm9yIiwiQ09NUElMRV9UWVBFU0NSSVBUIiwiQ09NUElMRV9TQ1NTIiwiY3NzIiwiY29tcGlsZSIsInRvU3RyaW5nIiwiQ09NUElMRV9DT0ZGRUVTQ1JJUFQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/events.ts\n");

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
