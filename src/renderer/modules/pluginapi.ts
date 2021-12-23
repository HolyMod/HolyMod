import SettingsStore from "../classes/settings";

export const cache = new Map();

export default function makePluginAPI(plugin: string) {
    if (cache.has(plugin)) return cache.get(plugin);

    const API = {
        Settings: new SettingsStore(plugin)
    };

    cache.set(plugin, API);

    return API;
};