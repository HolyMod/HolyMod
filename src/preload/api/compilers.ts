import {ipcRenderer as IPC} from "electron";
import IPCEvents from "../../common/ipcevents";

export function compileJS(path: string): string {
    return IPC.sendSync(IPCEvents.COMPILE_JAVASCRIPT, path);
};

export function compileTS(path: string): string {
    return IPC.sendSync(IPCEvents.COMPILE_TYPESCRIPT, path);
};

export function compileSCSS(path: string): string {
    return IPC.sendSync(IPCEvents.COMPILE_SCSS, path);
};

export function compileCOFFEE(path: string): string {
    return IPC.sendSync(IPCEvents.COMPILE_COFFEESCRIPT, path);
};