import Store from "@classes/store";
import LoggerModule from "@common/logger";
import DiscordModules from "./discord";
import Utilities from "./util";

const Logger = new LoggerModule("Storage");
const {Path, FS} = HolyAPI;

const Storage = new class Storage extends Store {
    cache = new Map();

    folder = Path.resolve(Path.getBasePath(), "config");

    initialize() {
        if (!FS.exists(this.folder)) {
            Logger.log("config folder was not found, creating one...");

            try {
                FS.createDirectory(this.folder);
            } catch (error) {
                Logger.error("Failed to create config folder:", error);
            }
        }
    }

    get(name: string, def?: any) {
        const {Lodash} = DiscordModules;

        if (this.cache.has(name)) return Lodash.merge({}, name, def);
        
        const filepath = Path.resolve(this.folder, name + ".json");
        if (!FS.exists(filepath)) return def;

        const data = Utilities.loadJSON(filepath);
        if (data instanceof Error) {
            Logger.error(`Data for ${name} is corrupt!`, data);
            FS.createFile(filepath, "{}");
            return def;
        }

        const final = Lodash.merge({}, data, def);
        this.cache.set(name, final);
        return final;
    }

    set(name: string, value: any, emit = true) {
        this.cache.set(name, value);

        const filepath = Path.resolve(this.folder, name + ".json");
        try {
            FS.createFile(filepath, JSON.stringify(value, null, "\t"));
        } catch (error) {
            Logger.error(`Could not save data for ${name}:`, error);
        }

        if (emit) this.emit("data-changed", name, value);
    }

    getMisc(misc: string = "", def: any): any {
        const {Lodash} = DiscordModules;

        return Lodash.get(this.get("misc", def), misc) ?? def;
    }

    setMisc(misc: any = this.getMisc("", {}), prop: string, value: any) {
        const {Lodash} = DiscordModules;

        this.set("misc", Lodash.set(misc, prop.split("."), value));
    }
}

export default Storage;