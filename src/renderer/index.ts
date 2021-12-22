/// <reference path="../../types.d.ts" />

import DiscordModules, {promise as DiscordPromise} from "@modules/discord";
import LoggerModule from "@common/logger";
import Storage from "@modules/storage";
import {Plugins, Themes} from "./managers";
import Require from "./node/require";
import * as Modules from "./modules";

const Logger = new LoggerModule("Core");

export default new class HolyMod {
    async start() {
        await DiscordPromise;
        Logger.log("Initialize");
        
        this.injectStyles();

        Object.assign(window, {
            holy_require: Require,
            React: DiscordModules.React,
            ReactDOM: DiscordModules.ReactDOM
        });

        Object.assign(window.HolyAPI, Modules, {Plugins, Themes});

        Storage.initialize();
        Plugins.initialize();
        Themes.initialize();
    }

    injectStyles(): void {
        const {Path, FS} = HolyAPI;

        const path = Path.resolve(Path.getBasePath(), "dist", "main.css");

        Modules.DOM.injectCSS("CoreStyles", FS.readFile(path, "utf8"));
    }

    stop() {}
}