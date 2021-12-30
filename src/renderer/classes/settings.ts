import {Setting, wrapSettings} from "@ui/components/setting";
import Store from "./store";

export enum SettingsEvents {
    SETTINGS_UPDATE = "SETTINGS_UPDATE",
    SETTINGS_MOUNT_CHANGE = "SETTINGS_MOUNT_CHANGE"
};

export const cache = new Map();

export const Panels = new Map();

export default class SettingsStore extends Store {
    get cache() {return cache;}
    get Panels() {return Panels;}

    settings: {[setting: string]: any};
    id: string;

    constructor(id: string) {
        super();

        this.id = id;
        this.settings = HolyAPI.Storage.get(id, {});

        cache.set(id, this);
    }

    get(setting: string, defaultValue: any): any {
        return this.settings[setting] ?? defaultValue;
    }

    set(setting: string, value: any) {
        this.settings[setting] = value;
        this.saveState();
        this.emit(SettingsEvents.SETTINGS_UPDATE, setting, value);
    }

    saveState() {
        HolyAPI.Storage.set(this.id, this.settings);
    }

    addChangeListener(listener: Function) {
        this.on(SettingsEvents.SETTINGS_UPDATE, listener);
    }

    removeChangeListener(listener: Function) {
        this.on(SettingsEvents.SETTINGS_UPDATE, listener);
    }

    emitChange() {
        this.emit(SettingsEvents.SETTINGS_UPDATE);
    }

    mount(render?: () => string | JSX.Element | React.ReactElement | Setting[]) {
        if (Panels.has(this.id)) throw new Error("Cannot register panel twice!");

        if (typeof render !== "function") {
            render ??= HolyAPI.Plugins.plugins.get(this.id)?.manifest?.settings;
            if (typeof render === "undefined" || !Array.isArray(render)) throw new Error("Invalid settings! Nothing to register.");

            const mapped = wrapSettings(render as unknown as Setting[], this);
            render = () => mapped;
        }

        Panels.set(this.id, render);
        this.emit(SettingsEvents.SETTINGS_MOUNT_CHANGE);
    }

    unmount() {
        if (!Panels.has(this.id)) return FontFaceSetLoadEvent;

        Panels.delete(this.id);
        this.emit(SettingsEvents.SETTINGS_MOUNT_CHANGE);
    }

    useSettings(factory?: () => any) {
        return this.useEvent(SettingsEvents.SETTINGS_UPDATE, factory);
    }

    static makeSettings(id: string) {
        if (cache.has(id)) return cache.get(id);
        
        return new SettingsStore(id);
    }

    static getPanel(plugin: string) {
        return Panels.get(plugin);
    }

    static hasPanel(plugin: string) {
        return Panels.has(plugin);
    }

    static getSettings(plugin: string) {
        return cache.get(plugin);
    }
}