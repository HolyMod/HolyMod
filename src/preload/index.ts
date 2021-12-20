import {contextBridge} from "electron";
import LoggerModule from "../common/logger";
import * as NativeAPI from "./api";

const Logger = new LoggerModule("Preload");

const listeners = {};
const NativeIPC = {
    on(event: string, listener: Function) {
        if (!listeners[event]) listeners[event] = new Set();

        listeners[event].add(listener);

        return () => NativeIPC.off(event, listener);
    },
    off(event: string, listener: Function): boolean {
        if (!listeners[event]) return false;

        return listeners[event].delete(listener);
    },
    emit(event: string, ...args: any[]) {
        if (!listeners[event]) return null;
        const callbacks = [...listeners[event]];

        for (let i = 0; i < callbacks.length; i++) {
            try {callbacks[i](...args);}
            catch (error) {console.error(error);}
        }
    }
};

const HolyNative = {
    requireModule(module: string) {
        switch (module) {
            case "API": return NativeAPI;
            case "IPC": return NativeIPC;
        }
    }
};

// Expose native apis to renderer and respect context isolation.
Logger.log("Exposing API's");
if (process.contextIsolated) {
    contextBridge.exposeInMainWorld("HolyNative", HolyNative);
} else {
    Object.defineProperty(window, "HolyNative", {
        value: HolyNative,
        writable: false,
        configurable: false
    });
}