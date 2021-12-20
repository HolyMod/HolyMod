import fs from "fs";

export function readFile(path: string, options: string = "utf8"): string {
    return fs.readFileSync(path, options as "utf8");
};

export function createFile(path: string, content: string | NodeJS.ArrayBufferView, options: any): void {
    fs.writeFileSync(path, content, options);
}

export function deleteFile(path: string): void {
    return fs.unlinkSync(path);
};

export function exists(path: string): boolean {
    return fs.existsSync(path);
};

export function readDirectory(path: string): string[] {
    return fs.readdirSync(path);
};

export function createDirectory(path: string, options: any): void | boolean | string {
    return fs.mkdirSync(path, options);
};

export function deleteDirectory(path: string, options: any): void {
    return fs.rmdirSync(path, options);
};

export function getStats(path: string): {
    isFile(): boolean;
    isDirectory(): boolean;
} {
    const stats = fs.statSync(path);

    return {
        isFile: () => stats.isFile(),
        isDirectory: () => stats.isDirectory()
    };
};