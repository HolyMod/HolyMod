declare namespace HolyAPI {
    export const FS: typeof import("@Holy/FS");
    
    export const Compilers: typeof import("@Holy/Compilers");

    export const Path: typeof import("@Holy/Path");

    export const Webpack: typeof import("@Holy/Webpack");

    export const DOM: typeof import("@Holy/DOM");

    export const DiscordModules: typeof import("@Holy/DiscordModules");

    export const Injector: typeof import("@Holy/Injector");

    export const unsafeExecuteJS: typeof import("@Holy").unsafeExecuteJS;
}

declare namespace HolyIPC {
    export function on(event: string, listener: Function): () => void;
    export function off(event: string, listener: Function): boolean;
    export function emit(event: string, listener: Function): void;
}

declare namespace HolyNative {
    export function requireModule<T = any>(module: string): T;
}

// React global fix
declare const React: typeof import("react");
declare const ReactDOM: typeof import("react-dom");

declare module "*.scss";

// Plugin API
declare module "@Holy" {
    export {default as Webpack} from "@Holy/Webpack";
    export const FS: typeof import("@Holy/FS");
    export const Compilers: typeof import("@Holy/Compilers");
    export const Path: typeof import("@Holy/Path");
    export const Injector: typeof import("@Holy/Injector");

    export function unsafeExecuteJS(code: string): any;
}

declare module "@Holy/Compilers" {
    export function compileJS(path: string): string;
    export function compileTS(path: string): string;
    export function compileSCSS(path: string): string;
}

declare module "@Holy/FS" {
    export function readFile(path: string, options: any): string;
    export function createFile(path: string, content: string): string;
    export function deleteFile(path: string): void;
    export function exists(path: string): boolean;
    export function readDirectory(path: string): string[];
    export function createDirectory(path: string, options?: any): string | boolean | void;
    export function deleteDirectory(path: string): void;
    export function getStats(path: string): {
        isFile(): boolean;
        isDirectory(): boolean;
    };
}

declare module "@Holy/Path" {
    export function getBasePath(): string;
    export function getAppPath(): string;
    export function resolve(...pathSegments: string[]): string;
    export function dirname(filePath: string): string;
    export function extname(file: string): string;
    export function basename(filePath: string): string;
    export function isAbsolute(filePath: string): boolean;
}

declare module "@Holy/DOM" {
    export const elements: {[id: string]: Element};

    export const head: HTMLElement;

    export function clearCSS(id: string): void;
    
    export function createElement<K extends keyof HTMLElementTagNameMap>(type: K, options: HTMLElement, ...children: HTMLElement[]): HTMLElementTagNameMap[K];

    export function getElement(id: string): HTMLElement | void;

    export function injectCSS(id: string, cssOrURL: string, options?: {type: "PLAIN" | "URL", documentHead?: boolean}): HTMLElement;

    export function injectJS(id: string, url: string, options?: {documentHead: boolean}): Promise<any>;
}

declare module "@Holy/DiscordModules" {
    const DiscordModules: typeof import("@modules/discord").DiscordModules;

    export default DiscordModules;
}

declare module "@Holy/Injector" {
    type UnpatchFunction = (types: "all" | "before" | "after") => void;

    type ChildInjection<M> = {
        caller: string;
        module: M;
        method: string;
        after?(): any;
        before?(): any;
        uninject: UnpatchFunction;
    };

    type Injection<M = any> = {
        children: ChildInjection<M>[];
        module: M;
        originalMethod: Function;
        revert(): void;
    };

    type InjectorOptions<D> = {
        caller: string,
        module: any;
        method: string;
        before?(thisObject: any, params: IArguments, res: any): any;
        after?(thisObject: any, params: IArguments, res: any): any;
    } & D;

    export const injections: Injection[];

    export function inject(options: InjectorOptions<{}>): UnpatchFunction;

    export function uninject(caller: string, types?: ("all" | "before" | "after")[]): void;

    export function getInjectionsByCaller(caller: string): ChildInjection<any>[];

    export function create(caller: string): {
        inject: (options: InjectorOptions<{caller?: string}>) => UnpatchFunction;
        uninject: (caller: string, types?: ("all" | "before" | "after")[]) => void;
        getInjectionsByCaller(): ChildInjection<any>[];
    };
}

declare module "@Holy/Webpack" {
    type ModuleFilter = (module: any, index?: number) => boolean;

    type FindModuleOptions = {all: boolean, cache: boolean, force: boolean, default: boolean};

    export default class Webpack {
        whenReady: Promise<void>
        get Filters(): {
            byProps(...props: string[]): ModuleFilter;
            byDisplayName(name: string, def?: boolean): ModuleFilter;
            byTypeString(...strings: []): ModuleFilter
        }

        /**
         * As of 12.2021 the value is "webpackChunkdiscord_app"
         */
        get chunkName(): string;
        get id(): string;

        waitFor(filter: ModuleFilter, options?: {retries: number, all: boolean, forever: boolean, delay: 50}): Promise<any>;

        parseOptions(args: any[], filter: (thing: any) => boolean): any[];

        request(cache: boolean): any;

        findModule(filter: ModuleFilter, options?: FindModuleOptions): any;

        findModules(filter: ModuleFilter, options?: FindModuleOptions): any[];

        /**
         * Grabs multiple modules by multiple filters with one webpack iteration.
         * The wait=true option is optional, it makes the webpack module wait for the result. See {@link Webpack.waitFor} for the options.
         * @example
         * ```ts
         * import Webpack from "@Holy/Webpack";
         * 
         * const [
         *   module1, 
         *   module2
         * ] = await Webpack.bulk(
         *   ["someProp", "otherProp"], 
         *   m => m.type.displayName === "something", 
         *   {wait: true}
         * );
         * ```
         */
        bulk(...filters: any[]): any[];

        /**
         * Searches a module inside webpack by it's properties.
         * 
         * @example
         * ```ts
         * import Webpack from "@Holy/Webpack";
         * 
         * const MyModule = Webpack.findByProps("someProp", "anotherProp");
         * const [OneModule, SecondModule] = Webpack.findByProps(["someProp", "anotherProp"], ["anotherProp2"], {bulk: true});
         * ```
         */
        findByProps(...options: any[]): any | any[];

        findByDisplayName(...options: any[]): any | any[];

        findIndex(filter: ModuleFilter): number;

        atIndex(index: number): any;

        /**
         * Waits for the webpack global namespace.
         */
        get waitForGlobal(): Promise<void>;
    }
}