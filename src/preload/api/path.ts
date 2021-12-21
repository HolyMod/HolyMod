import {ipcRenderer as IPC, shell} from "electron";
import IPCEvents from "../../common/ipcevents";
import path from "path";
import fs from "fs";

export function getBasePath(): string {
    return path.resolve(eval("__dirname"), "..");
};

export function getAppPath(): string {
    return IPC.sendSync(IPCEvents.GET_APP_PATH);
};

export function resolve(...pathSegments: string[]): string {
    return path.resolve(...pathSegments);
};

export function dirname(filePath: string): string {
    return path.dirname(filePath);
};

export function extname(file: string): string {
    return path.extname(file);
};

export function basename(filePath: string): string {
    return path.basename(filePath);
};

export function isAbsolute(filePath: string): boolean {
    return path.isAbsolute(filePath);
};

export function showInExplorer(path: string) {
    if (!fs.existsSync(path)) return false;

    shell.showItemInFolder(path);
};