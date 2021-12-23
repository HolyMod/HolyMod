const {Path, FS, Compilers} = HolyAPI;

export const cache = {};
export const nodeGlobals = ["require", "module", "exports", "__filename", "__dirname", "global"].join(", ");
export const globalPaths = [
    Path.resolve(Path.getBasePath(), "node_modules")
];

export const createBindings = function (extensions: string[], handler: Function) {
    return Object.fromEntries(extensions.map(ext => [ext, handler]));
};
export const extensions = {
    ...createBindings([".js", ".jsx", ".mjs"], (module: Module, filename: string) => {
        const fileContent = Compilers.compileJS(filename);
        module._compile(fileContent);
        return module.exports;
    }),
    ...createBindings([".ts", ".tsx"], (module: Module, filename: string) => {
        const filecontent = Compilers.compileTS(filename);
        module._compile(filecontent);
        return module.exports;
    }),
    ...createBindings([".mcoffee", ".coffee", ".litcoffee"], (module: Module, filename: string) => {
        const filecontent = Compilers.compileCOFFEE(filename);
        module._compile(filecontent);
        return module.exports;
    }),
    ".json": (module: Module, filename: string) => {
        const filecontent = FS.readFile(filename, "utf8");
        module.exports = JSON.parse(filecontent);

        return module.exports;
    },
    ".scss": (module: Module, filename: string) => {
        const content = Compilers.compileSCSS(filename);
        module.exports = content;

        return content;
    },
    ".css": (module: Module, filename: string) => {
        const content = FS.readFile(filename, "utf8");
        module.exports = content;

        return module.exports;
    },
    // I haven't tested this - I assume it works.
    // TODO: Make this not shitty
    ".node": (module: Module, filename: string) => {
        const thing = HolyAPI.unsafeExecuteJS(`require(${JSON.stringify(filename)})`);
        module.exports = thing;

        return thing;
    }
};

export class Module {
    public id: string;
    public path: string;
    public exports: any;
    public parent: Module | null;
    public filename: string;
    public loaded: boolean;
    public children: Module[];
    public require: any;
    public filecontent?: string;

    constructor(id: string, parent: Module) {
        this.id = id;
        this.path = Path.dirname(id);
        this.exports = {};
        this.parent = parent;
        this.filename = id;
        this.loaded = false;
        this.children = [];

        if (parent) parent.children.push(this);
    }

    _compile(code: string) {
        const wrapped = window.eval(`(function (${nodeGlobals}) {
            ${code}
            //# sourceURL=${JSON.stringify(this.filename).slice(1, -1)}
        })`);
        wrapped(this.require, this, this.exports, this.filename, this.path, window);
    }
};

export function resolve(path: string) {
    for (const key in cache) {
        if (key.startsWith(path)) return key;
    }
};

export type Require = CallableFunction & {
    resolve(path: string): string;
    cache: object;
};

export function createRequire(_path: string, parent: Module): Require {
    let API, isPlugin = false;

    if (_path.startsWith(HolyAPI.Plugins?.folder)) {
        const [, addon] = _path.replace(HolyAPI.Plugins.folder, "").split(/\\|\//);

        API = HolyAPI.makePluginAPI(addon);
        isPlugin = true;
    }

    const require = (mod: string) => {
        if (typeof (mod) !== "string") return;

        switch (mod) {
            case "@Holy": {
                if (isPlugin) return Object.assign({}, HolyAPI, API);

                return HolyAPI;
            };
            case "react": return HolyAPI.DiscordModules.React;
            case "react-dom": return HolyAPI.DiscordModules.ReactDOM;

            default: {
                if (mod.startsWith("@Holy/")) {
                    if (mod === "@Holy/Settings" && isPlugin) return API;

                    const value = mod.split("/").slice(1).reduce((value, key) => value[key], (window as any).HolyAPI);
                    if (value) return value;
                }

                return load(_path, mod, parent);
            }
        }
    };

    Object.assign(require, {cache, resolve});

    // @ts-ignore
    return require;
};

function hasExtension(mod: string) {
    return Boolean(extensions[Path.extname(mod)]);
};

export function getExtension(mod: string) {
    return Path.extname(mod) || Object.keys(extensions).find(ext => FS.exists(mod + ext)) || "";
};

function collectPNPMStores(node_modules: string) {
    const store = Path.resolve(node_modules, ".pnpm");
    if (!FS.exists(store) || !FS.getStats(store).isDirectory()) return [];
    
    const result = [];

    for (const file of FS.readDirectory(store)) {
        const fullPath = Path.resolve(store, file, "node_modules");

        if (FS.exists(fullPath)) result.push(fullPath);
    }

    return result;
}

function resolveGlobalPath(mod: string, globalPaths: string[]) {
    const directMatch = globalPaths.find(globalPath => FS.exists(Path.resolve(globalPath, mod)));
    if (directMatch) return directMatch;

    const withExtension = globalPaths.find(globalPath => getExtension(Path.resolve(globalPath, mod)));
    if (withExtension) return withExtension;

    return "";
}

function getGlobalPath(mod: string) {
    const fromGlobals = resolveGlobalPath(mod, globalPaths);
    if (fromGlobals) return fromGlobals;

    const allPaths = globalPaths.flatMap(globalPath => collectPNPMStores(globalPath));
    const fromPNPM = resolveGlobalPath(mod, allPaths);
    if (fromPNPM) return fromPNPM;

    return "";
}

function getParent(_path: string, mod: string) {
    const concatPath = Path.resolve(_path, mod);
    const globalPath = Path.resolve(getGlobalPath(mod), mod);

    if (FS.exists(concatPath)) return concatPath;
    if (FS.exists(globalPath)) return globalPath;

    return "";
}

export function resolveMain(_path: string, mod: string): string {
    const parent = hasExtension(_path) ? Path.dirname(_path) : getParent(_path, mod);

    if (!FS.exists(parent)) throw new Error(`Cannot find module ${mod}\ntree:\n\r-${_path}`);
    const files = FS.readDirectory(parent);

    for (const file of files) {
        const ext = Path.extname(file);

        if (file === "package.json") {
            const pkg = JSON.parse(FS.readFile(Path.resolve(parent, file), "utf8"));
            if (!Reflect.has(pkg, "main")) continue;

            return Path.resolve(parent, hasExtension(pkg.main) ? pkg.main : pkg.main + getExtension(Path.resolve(parent, pkg.main)));
        }

        if (file.slice(0, -ext.length) === "index" && extensions[ext]) return Path.resolve(parent, file);
    }

    if (mod.startsWith("./")) return null;
    const globalMod = globalPaths.find(pth => FS.exists(Path.resolve(pth, mod)));

    if (globalMod) return resolveMain(globalMod, mod);

    return globalPaths.find(pth => getExtension(Path.resolve(pth, mod)));
};

export function getFilePath(_path: string, mod: string): string {
    const combined = Path.resolve(_path, mod);
    const pth = hasExtension(combined) ? combined : combined + getExtension(combined);

    if (FS.exists(pth) && FS.getStats(pth).isFile()) return pth;
    if (!hasExtension(mod)) return resolveMain(_path, mod);

    return mod;
};

export function load(_path: string, mod: string, req = null) {
    const file = getFilePath(_path, mod);
    if (!FS.exists(file)) throw new Error(`Cannot find module ${mod}\ntree:\n\r-${_path}`);
    if (cache[file]) return cache[file].exports;
    const stats = FS.getStats(file);
    if (stats.isDirectory()) mod = resolveMain(_path, mod);
    const ext = getExtension(file);
    const loader = extensions[ext];

    if (!loader) throw new Error(`Cannot find module ${file}`);
    const module = cache[file] = new Module(file, req);
    const require = createRequire(Path.dirname(file), module);
    module.require = require;

    loader(module, file);

    return module.exports;
};

// TODO: Add globalPaths support
const NodeModule = {_extensions: extensions, cache, _load: load, globalPaths: globalPaths};

export default NodeModule;