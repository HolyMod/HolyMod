import Store from "@classes/store";
import LoggerModule from "@common/logger";
import SettingsRenderer from "@modules/settings";
import Storage from "@modules/storage";
import Utilities from "@modules/util";
import Module from "@node/module";
import Require from "@node/require";
import AddonPanel from "@ui/addons/panel";

const {FS, Path} = HolyAPI;
const Logger = new LoggerModule("PluginsManager");

const PluginsManager = new class PluginsManager extends Store {
    folder = Path.resolve(Path.getBasePath(), "plugins");
    extensions = [".js", ".jsx", ".ts", ".tsx", ".mjs"];

    plugins = new Map();

    enabledPlugins: Set<string>;

    initialize(): void {
        this.enabledPlugins = new Set(Object.keys(Storage.get("plugins", {})));
        
        SettingsRenderer.registerPanel("plugins", {
            label: "Plugins",
            order: 1,
            render: () => React.createElement(AddonPanel, {
                type: "plugins",
                manager: this,
                toggle: this.toggle.bind(this),
                addons: this.plugins,
                isEnabled: (plugin) => {
                    plugin = this.resolve(plugin);
                    if (!plugin) return false;

                    return this.enabledPlugins.has(plugin.id);
                }
            })
        });

        this.watchFolder();
        this.loadAllPlugins();
    }

    watchFolder(): void {
        const watcher = FS.watch(this.folder);

        watcher.on("change", (filename) => {
            const [, addon] = filename.replace(this.folder, "").split(/\\|\//);

            if (!this.plugins.has(addon)) this.loadPlugin(Path.resolve(this.folder, addon));
            else this.reloadPlugin(addon);
        });
    }

    resolve(pluginOrId: any): any {
        if (typeof pluginOrId === "string") return this.plugins.get(pluginOrId);

        return pluginOrId;
    }

    getManifest(filepath: string, filename: string): any {
        try {
            return JSON.parse(FS.readFile(filepath, "utf8"));
        } catch (error) {
            Logger.error(`Failed to load manifest for ${filename}:`, error);
            return null;
        }
    }

    getEntryFile(filepath: string, manifest: any, filename: string): string | null {
        if (typeof manifest.entry === "string") {
            const path = Path.resolve(filepath, manifest.entry);
            if (FS.exists(path)) return path;
        }

        const found = this.extensions.find(ext => FS.exists(Path.resolve(filepath, "index" + ext)));
        if (found) return Path.resolve(filepath, "index" + found);

        Logger.error(`Failed to get entry file for ${filename}:`, new Error("Could not resolve entry file."));
        return null;
    }

    loadAllPlugins(): void {
        if (!FS.exists(this.folder)) {
            Logger.log("Plugins folder doesn't exists, creating it...");

            try {
                FS.createDirectory(this.folder);
            } catch (error) {
                Logger.error("Failed to create plugins directory:", error);
                return;
            }
        }

        Logger.log("Loading plugins...");
        const filenames = FS.readDirectory(this.folder);
        for (let i = 0; i < filenames.length; i++) {
            const filename = Path.resolve(this.folder, filenames[i]);
            const manifestPath = Path.resolve(filename, "manifest.json");
            if (!FS.exists(manifestPath)) continue;

            this.loadPlugin(filename, true);
        }
    }

    clearCache(location: string): void {
        if (!Path.isAbsolute(location)) location = Path.resolve(this.folder, location);

        let current;
        while (current = Require.resolve(location)) {
            delete Module.cache[current];
        }
    }

    loadPlugin(filename: string, log = true): void {
        const manifestPath = Path.resolve(filename, "manifest.json");
        const manifest = this.getManifest(manifestPath, Path.basename(filename));
        if (!manifest) return;
        const entryFile = this.getEntryFile(filename, manifest, Path.basename(filename));
        const id = Path.basename(filename);
        if (!entryFile) return;

        let exports: any = {};
        try {
            this.clearCache(filename);
            const partialExports = Require(entryFile); 
            exports = partialExports.__esModule ? partialExports.default : partialExports;

            Utilities.assign(exports.prototype, {
                manifest: Object.freeze(manifest),
                id: id,
                displayName: manifest.name ?? id,
                path: filename
            });

            exports = new exports();
        } catch (error) {
            return Logger.error(`Failed to compile ${manifest.name ?? id}:`, error);
        }

        if (log) {
            Logger.log(`${exports.displayName} was loaded!`);
        }

        this.plugins.set(id, exports);

        if (this.enabledPlugins.has(id)) {
            this.startPlugin(id, true);
        }
    }

    unloadPlugin(addon: any, log = true): boolean {
        const plugin = this.resolve(addon);
        if (!plugin) return;

        const success = this.stopPlugin(plugin);
        this.plugins.delete(plugin.id);
        this.clearCache(addon.path);

        if (log) {
            Logger.log(`${plugin.displayName} was unloaded!`);
        }

        return success;
    }

    startPlugin(addon: any, log = true) {
        const plugin = this.resolve(addon);
        if (!plugin) return;

        try {
            if (typeof plugin.onStart === "function") plugin.onStart();
        } catch (error) {
            Logger.error(`Could not start ${plugin.displayName}:`, error);
            return false;
        } finally {
            if (log) {
                Logger.log(`${plugin.displayName} was started!`);
            }

            return true;
        }
    }

    stopPlugin(addon: any, log = true) {
        const plugin = this.resolve(addon);
        if (!plugin) return false;

        try {
            if (typeof plugin.onStop === "function") plugin.onStop();
        } catch (error) {
            Logger.error(`Failed to stop ${plugin.manifest.name}:`, error);
            return false;
        } finally {
            if (log) {
                Logger.log(`${plugin.manifest.name} was stopped!`);
            }

            return true;
        }
    }

    reloadPlugin(addon: any) {
        const plugin = this.resolve(addon);
        if (!addon) return;

        const success = this.unloadPlugin(plugin, false);
        if (!success) {
            return Logger.error(`Failed to reload plugin ${plugin.displayName}`);
        }

        this.loadPlugin(plugin.path, false);
        Logger.log(`Reloaded ${plugin.displayName}`);
    }

    enablePlugin(addon: any, log = true) {
        const plugin = this.resolve(addon);
        if (!addon) return;
        this.enabledPlugins.add(plugin.id);
        this.saveState();
        this.startPlugin(plugin, false);

        if (log) {
            Logger.log(`${plugin.displayName} was enabled!`);
            this.emit("toggle", plugin.id, true);
        }
    }

    disablePlugin(addon: any, log = true) {
        const plugin = this.resolve(addon);
        if (!addon) return;
        this.enabledPlugins.delete(plugin.id);
        this.saveState();
        this.stopPlugin(plugin, false);

        if (log) {
            Logger.log(`${plugin.displayName} was disabled!`);
            this.emit("toggle", plugin.id, false);
        }
    }

    toggle(addon: any) {
        const plugin = this.resolve(addon);
        if (!plugin) return;

        if (this.enabledPlugins.has(plugin.id)) {
            this.disablePlugin(plugin, true);
        } else {
            this.enablePlugin(plugin, true);
        }
    }
    
    saveState() {
        Storage.set("plugins", Object.fromEntries([...this.enabledPlugins.values()].map((key) => [key, true])));
    }
}

export default PluginsManager;