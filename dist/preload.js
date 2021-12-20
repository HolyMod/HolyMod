'use strict';

var electron = require('electron');
var fs = require('fs');
var path$1 = require('path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path$1);

function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
var _parseType = new WeakSet(), _log = new WeakSet();
class LoggerModule {
    log(...message) {
        _classPrivateMethodGet(this, _log, log).call(this, "log", ...message);
    }
    info(...message) {
        _classPrivateMethodGet(this, _log, log).call(this, "info", ...message);
    }
    warn(...message) {
        _classPrivateMethodGet(this, _log, log).call(this, "warn", ...message);
    }
    error(...message) {
        _classPrivateMethodGet(this, _log, log).call(this, "error", ...message);
    }
    debug(...message) {
        _classPrivateMethodGet(this, _log, log).call(this, "debug", ...message);
    }
    static create(name) {
        return new LoggerModule(name);
    }
    constructor(name){
        _parseType.add(this);
        _log.add(this);
        this.module = name;
    }
}
function parseType(type) {
    switch(type){
        case "info":
        case "warn":
        case "error":
        case "debug":
            return type;
        default:
            return "log";
    }
}
function log(type, ...message) {
    console[_classPrivateMethodGet(this, _parseType, parseType).call(this, type)](`%c[HolyMod]%c %c[${this.module}]%c`, "color: #fff133; font-weight: 700;", "", "color: #fff133;", "", ...message);
}

function readFile(path, options = "utf8") {
    return fs__default["default"].readFileSync(path, options);
}
function createFile(path, content, options) {
    fs__default["default"].writeFileSync(path, content, options);
}
function deleteFile(path) {
    return fs__default["default"].unlinkSync(path);
}
function exists(path) {
    return fs__default["default"].existsSync(path);
}
function readDirectory(path) {
    return fs__default["default"].readdirSync(path);
}
function createDirectory(path, options) {
    return fs__default["default"].mkdirSync(path, options);
}
function deleteDirectory(path, options) {
    return fs__default["default"].rmdirSync(path, options);
}
function getStats(path) {
    const stats = fs__default["default"].statSync(path);
    return {
        isFile: ()=>stats.isFile()
        ,
        isDirectory: ()=>stats.isDirectory()
    };
}

var file = /*#__PURE__*/Object.freeze({
    __proto__: null,
    readFile: readFile,
    createFile: createFile,
    deleteFile: deleteFile,
    exists: exists,
    readDirectory: readDirectory,
    createDirectory: createDirectory,
    deleteDirectory: deleteDirectory,
    getStats: getStats
});

const IPCEvents = {
    COMPILE_SCSS: "HOLYMOD_COMPILE_SCSS",
    COMPILE_TYPESCRIPT: "HOLYMOD_COMPILE_TYPESCRIPT",
    COMPILE_JAVASCRIPT: "HOLYMOD_COMPILE_JAVASCRIPT",
    GET_APP_PATH: "HOLYMOD_GET_APP_PATH"
};

function compileJS(path) {
    return electron.ipcRenderer.sendSync(IPCEvents.COMPILE_JAVASCRIPT, path);
}
function compileTS(path) {
    return electron.ipcRenderer.sendSync(IPCEvents.COMPILE_TYPESCRIPT, path);
}
function compileSCSS(path) {
    return electron.ipcRenderer.sendSync(IPCEvents.COMPILE_SCSS, path);
}

var compilers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    compileJS: compileJS,
    compileTS: compileTS,
    compileSCSS: compileSCSS
});

function getBasePath() {
    return path__default["default"].resolve(__dirname, "..");
}
function getAppPath() {
    return electron.ipcRenderer.sendSync(IPCEvents.GET_APP_PATH);
}
function resolve(...pathSegments) {
    return path__default["default"].resolve(...pathSegments);
}
function dirname(filePath) {
    return path__default["default"].dirname(filePath);
}
function extname(file) {
    return path__default["default"].extname(file);
}
function basename(filePath) {
    return path__default["default"].basename(filePath);
}
function isAbsolute(filePath) {
    return path__default["default"].isAbsolute(filePath);
}

var path = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getBasePath: getBasePath,
    getAppPath: getAppPath,
    resolve: resolve,
    dirname: dirname,
    extname: extname,
    basename: basename,
    isAbsolute: isAbsolute
});

function unsafeExecuteJS(code) {
    return eval(code);
}

var NativeAPI = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FS: file,
    Compilers: compilers,
    Path: path,
    unsafeExecuteJS: unsafeExecuteJS
});

const Logger = new LoggerModule("Preload");
const listeners = {
};
const NativeIPC = {
    on (event, listener) {
        if (!listeners[event]) listeners[event] = new Set();
        listeners[event].add(listener);
        return ()=>NativeIPC.off(event, listener)
        ;
    },
    off (event, listener) {
        if (!listeners[event]) return false;
        return listeners[event].delete(listener);
    },
    emit (event, ...args) {
        if (!listeners[event]) return null;
        const callbacks = [
            ...listeners[event]
        ];
        for(let i = 0; i < callbacks.length; i++){
            try {
                callbacks[i](...args);
            } catch (error) {
                console.error(error);
            }
        }
    }
};
const HolyNative = {
    requireModule (module) {
        switch(module){
            case "API":
                return NativeAPI;
            case "IPC":
                return NativeIPC;
        }
    }
};
// Expose native apis to renderer and respect context isolation.
Logger.log("Exposing API's");
if (process.contextIsolated) {
    electron.contextBridge.exposeInMainWorld("HolyNative", HolyNative);
} else {
    Object.defineProperty(window, "HolyNative", {
        value: HolyNative,
        writable: false,
        configurable: false
    });
}
//# sourceMappingURL=preload.js.map
