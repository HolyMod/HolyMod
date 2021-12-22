import LoggerModule from "@common/logger";
import SettingsRenderer from "@modules/settings";
import Storage from "@modules/storage";
import AddonPanel from "@ui/addons/panel";
import Utilities from "@modules/util";
import Module from "@node/module";
import Require from "@node/require";
import DOM from "@modules/dom";
import Store from "@classes/store";

const Logger = new LoggerModule("ThemesManager");
const {Path, FS} = HolyAPI;

const ThemesManager = new class ThemesManager extends Store {
    folder = Path.resolve(Path.getBasePath(), "themes");
    
    extensions = [".css", ".scss"];

    themes = new Map();

    enabledThemes: Set<string>;

    initialize(): void {
        this.enabledThemes = new Set(Object.keys(Storage.get("themes", {})));
        
        SettingsRenderer.registerPanel("themes", {
            label: "Themes",
            order: 2,
            render: () => React.createElement(AddonPanel, {
                type: "themes",
                manager: this,
                addons: this.themes,
                toggle: this.toggle.bind(this),
                isEnabled: (theme) => {
                    theme = this.resolve(theme);

                    if (!theme) return false;

                    return this.enabledThemes.has(theme.id);
                }
            })
        });

        this.loadAllThemes();
        this.watchFolder();
    }

    watchFolder(): void {
        const watcher = FS.watch(this.folder);

        watcher.on("change", (filename) => {
            const [, addon] = filename.replace(this.folder, "").split(/\\|\//);

            if (!this.themes.has(addon)) this.loadTheme(Path.resolve(this.folder, addon));
            else this.reloadTheme(addon);
        });
    }

    resolve(themeOrId: any): any {
        if (typeof themeOrId === "string") return this.themes.get(themeOrId);

        return themeOrId;
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

    loadAllThemes(): void {
        if (!FS.exists(this.folder)) {
            Logger.log("Themes folder doesn't exists, creating it...");

            try {
                FS.createDirectory(this.folder);
            } catch (error) {
                Logger.error("Failed to create themes directory:", error);
                return;
            }
        }

        Logger.log("Loading themes...");
        const filenames = FS.readDirectory(this.folder);
        for (let i = 0; i < filenames.length; i++) {
            const filename = Path.resolve(this.folder, filenames[i]);
            const manifestPath = Path.resolve(filename, "manifest.json");
            if (!FS.exists(manifestPath)) continue;

            this.loadTheme(filename, true);
        }
    }

    clearCache(location: string): void {
        if (!Path.isAbsolute(location)) location = Path.resolve(this.folder, location);

        let current;
        while (current = Require.resolve(location)) {
            delete Module.cache[current];
        }
    }

    loadTheme(filename: string, log = true): void {
        const manifestPath = Path.resolve(filename, "manifest.json");
        const manifest = this.getManifest(manifestPath, Path.basename(filename));
        if (!manifest) return;
        const entryFile = this.getEntryFile(filename, manifest, Path.basename(filename));
        const id = Path.basename(filename);
        if (!entryFile) return;

        let css = "";
        try {
            this.clearCache(filename);
            css = Require(entryFile); 
            Object.freeze(Object.assign(manifest, {
                css,
                id,
                path: filename,
                displayName: manifest.name ?? id,
                manifest
            }));
        } catch (error) {
            return Logger.error(`Failed to compile ${manifest.displayName}:`, error);
        }

        if (log) {
            Logger.log(`${manifest.displayName} was loaded!`);
        }

        this.themes.set(id, manifest);

        if (this.enabledThemes.has(id)) {
            this.startTheme(id, true);
        }
    }

    unloadTheme(addon: any, log = true): boolean {
        const theme = this.resolve(addon);
        if (!theme) return;

        const success = this.stopTheme(theme);
        this.themes.delete(theme.id);
        this.clearCache(addon.path);

        if (log) {
            Logger.log(`${theme.displayName} was unloaded!`);
        }

        return success;
    }

    startTheme(addon: any, log = true) {
        const theme = this.resolve(addon);
        if (!theme) return;

        try {
            DOM.injectCSS(theme.id, theme.css);
        } catch (error) {
            Logger.error(`Could not start ${theme.displayName}:`, error);
            return false;
        } finally {
            if (log) {
                Logger.log(`${theme.displayName} was started!`);
            }

            return true;
        }
    }

    stopTheme(addon: any, log = true) {
        const theme = this.resolve(addon);
        if (!theme) return false;

        try {
            DOM.clearCSS(theme.id);
        } catch (error) {
            Logger.error(`Failed to stop ${theme.displayName}:`, error);
            return false;
        } finally {
            if (log) {
                Logger.log(`${theme.displayName} was stopped!`);
            }

            return true;
        }
    }

    reloadTheme(addon: any) {
        const theme = this.resolve(addon);
        if (!addon) return;

        const success = this.unloadTheme(theme, false);
        if (!success) {
            return Logger.error(`Failed to reload theme ${theme.displayName}`);
        }

        this.loadTheme(theme.path, false);
        Logger.log(`Reloaded ${theme.displayName}`);
    }

    enableTheme(addon: any, log = true) {
        const theme = this.resolve(addon);
        if (!addon) return;
        this.enabledThemes.add(theme.id);
        this.saveState();
        this.startTheme(theme, false);

        if (log) {
            Logger.log(`${theme.displayName} was enabled!`);
            this.emit("toggle", theme.id, true);
        }
    }

    disableTheme(addon: any, log = true) {
        const theme = this.resolve(addon);
        if (!addon) return;
        this.enabledThemes.delete(theme.id);
        this.saveState();
        this.stopTheme(theme, false);

        if (log) {
            Logger.log(`${theme.displayName} was disabled!`);
            this.emit("toggle", theme.id, false);
        }
    }

    toggle(addon: any) {
        const theme = this.resolve(addon);
        if (!theme) return;

        if (this.enabledThemes.has(theme.id)) {
            this.disableTheme(theme, true);
        } else {
            this.enableTheme(theme, true);
        }
    }
    
    saveState() {
        Storage.set("themes", Object.fromEntries([...this.enabledThemes.values()].map((key) => [key, true])));
    }
}

export default ThemesManager;