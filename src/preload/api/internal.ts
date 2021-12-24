import {ipcRenderer as IPC} from "electron";
import IPCEvents from "@common/ipcevents";

export function unsafeExecuteJS(code: string): any {
    return eval(code);
};

export function toggleDevTools(): void {
    IPC.invoke(IPCEvents.TOGGLE_DEV_TOOLS);
};