import Store from "@classes/store";
import LoggerModule from "@common/logger";
import {promise} from "@modules/discord";
import Injector from "@modules/injector";
import ReactTools from "@modules/reacttools";
import Webpack from "@modules/webpack";

export type BaseMenu = {
    label: string;
    id: string;
    predicate?(props: any, returnValue: any): boolean;
};

export type MenuFactory = BaseMenu & {
    getItems(props: any): MenuItem[] | MenuItem;
    children?: any;
    action?: Function;
    disabled?: boolean;
};

export type MenuItem = BaseMenu & {
    action?: Function;
    children: MenuItem[] | MenuItem;
    getItems?(props: any): MenuItem[] | MenuItem; 
} | BaseMenu & {
    action: Function;
    children?: MenuItem[] | MenuItem;
    getItems?(props: any): MenuItem[] | MenuItem;
} | MenuFactory;

export type ContextMenu = {
    predicate?(props: any, returnValue: any): boolean;
    getIndex?(props: any, returnValue: any): number;
    items: MenuItem[];
};

export namespace ContextMenu {
    export const Logger = new LoggerModule("ContextMenu");
    export enum Types {
        USER = "USER",
        MESSAGE = "MESSAGE",
        GUILD = "GUILD",
        TEXT_CHANNEL = "TEXT_CHANNEL",
        VOICE_CHANNEL = "VOICE_CHANNEL",
        CATEGORY = "CATEGORY",
        THREAD = "THREAD",
        UNKNOWN = "UNKNOWN"
    };
    export enum Events {ADD = "ADD", REMOVE = "REMOVE", LAZY_MENU_RENDER = "LAZY_MENU_RENDER"};
    type MenuTypes = keyof typeof Types; 
    type Menu = {[type in Types]: Map<string, ContextMenu>};
    export const emitter = new Store<keyof typeof Events>();
    export const patches: Menu = Object.fromEntries(Object.keys(Types).map(e => [e, new Map<string, ContextMenu>()])) as Menu;
    export const updateRefs = new Set();

    export function useForceUpdate() {
        const [, forceUpdate] = React.useReducer(e => !e, true);

        React.useEffect(() => {
            const listener = () => forceUpdate();
            ContextMenu.updateRefs.add(listener);

            return () => void ContextMenu.updateRefs.delete(listener);
        });
    }

    export function forceUpdateAll() {
        // Kill the reference to avoid loops
        const listeners = [...ContextMenu.updateRefs] as Function[];

        for (let i = 0; i < listeners.length; i++) {
            listeners[i]();
        }
    }

    export function HolyContextMenu({holy_original, ...props}) {
        ContextMenu.useForceUpdate(); // Allow force re-rendering the entire context menu.
        const rendered = holy_original.call(this, props);

        try {
            // Run our "injections" which append the items into the menu. This might throw an error, so we catch it, otherwise react cries.
            runInjections(holy_original, rendered, props);
        } catch (error) {
            Logger.error("Failed to run ContextMenu injections:", error);
        }

        return rendered;
    } 

    export function resolveType(displayName: string, props: any): keyof typeof ContextMenu.Types {
        const {Constants: {ChannelTypes}} = HolyAPI.DiscordModules;

        switch (displayName) {
            case "GuildContextMenu": return "GUILD";
            case "MessageContextMenu": return "MESSAGE";
            case "ChannelListThreadContextMenu": return "THREAD";
            case "ChannelListVoiceChannelContextMenu": return "VOICE_CHANNEL";
            case (/user.*contextmenu/i.test(displayName) && displayName): return "USER";
            // Discord doesn't have different name for category / channel context menus, so I have to do this shit. Works.
            case (props?.channel?.type === ChannelTypes.GUILD_CATEGORY && "ChannelListTextChannelContextMenu"): return "CATEGORY";
            case (props?.channel?.type === ChannelTypes.GUILD_TEXT && "ChannelListTextChannelContextMenu"): return "TEXT_CHANNEL";

            // Couldn't resolve it, so return an unknown type.
            default: return "UNKNOWN";
        }
    }

    // Automatically force re-render all opened context menus.
    ContextMenu.emitter.on("ADD", (type: keyof typeof Types) => {
        ContextMenu.forceUpdateAll();
    });

    export class Builder {
        static buildItem(item: MenuItem, options: {props: any, handlePredicate: (predicate: Function) => boolean, handleAction: (action: Function, id: string) => void}) {
            const {ContextMenu} = HolyAPI.DiscordModules;
            let children: JSX.Element[] = [];

            if (item.predicate && !options.handlePredicate(item.predicate)) return null;
            const itemChildren = item.children ?? (item as MenuFactory).getItems?.(options.props);
            if (itemChildren) {
                if (Array.isArray(itemChildren)) children.push(...this.buildItems(itemChildren, options));
                else children.push(this.buildItem(itemChildren, options));
            }

            return (
                <ContextMenu.Item
                    {...item}
                    children={children.length ? children : void 0}
                    action={() => options.handleAction(item.action, item.id)}
                />
            );
        }

        static buildItems(items: MenuItem[], options: {props: any, handlePredicate: (predicate: Function) => boolean, handleAction: (action: Function, id: string) => void}) {
            return items.map(item => this.buildItem(item, options)).filter(Boolean);
        }
    }

    function runInjections(component: Function & {displayName: string}, returnValue: any, props: any, path = "props.children") {
        const type = resolveType(component.displayName, props);
        if (type === "UNKNOWN") return; // If we can't resolve the type, fuck it.
        const childs: any[] = ReactTools.findInReactTree(returnValue, e => Array.isArray(e));
        if (!Array.isArray(childs) || !ContextMenu.patches[type].size) return;

        // Destructure and kill reference to avoid looping.
        const menus = [...ContextMenu.patches[type]];
        
        for (let i = 0; i < menus.length; i++) {
            const [caller, {items, predicate, getIndex}] = menus[i] as unknown as [string, ContextMenu];
            if (typeof predicate === "function" && !predicate(props, returnValue)) continue;
            const index = typeof getIndex === "function" ? getIndex(props, returnValue) : -1;

            const finish = Builder.buildItems(items, {
                handlePredicate: (func) => {
                    try {
                        return func(props, returnValue);
                    } catch (error) {
                        ContextMenu.Logger.error(`Could not fire predicate for ${caller}:`, error);
                    }
                },
                handleAction: (func, id) => {
                    try {
                        return func?.(props);
                    } catch (error) {
                        ContextMenu.Logger.error(`Could not fire action from ${caller} for ${id}:`, error);
                    }
                },
                props
            });

            if (!finish.length) continue;

            if (index === -1) childs.push(...finish);
            else childs.splice(index, 0, ...finish);
        }
    };

    // Patching the ContextMenu opener.
    promise.then(() => {
        const ContextMenuActions = Webpack.findByProps("openContextMenu");

        Injector.inject({
            caller: "ContextMenuAutopatcher",
            module: ContextMenuActions,
            method: "openContextMenuLazy",
            before(_, args: [React.MouseEvent, Function]) {
                args[1] = (original => args => original(args).then(render => props => {
                    const returnValue = render(props);
                    
                    try {
                        // Assign to props so we can render it on our own. This might can throw an error so we just catch it.
                        Object.assign(returnValue.props, {holy_original: returnValue.type});
                        // Set the displayName as key so it can be seen through ReactDevTools
                        returnValue.key = returnValue.type.displayName;
                        returnValue.type = HolyContextMenu;
                    } catch (error) {
                        Logger.error("Could not patch ContextMenu:", error);
                    }

                    return returnValue;
                }))(args[1]);
            }
        });
    });

    export function attach(caller: string, type: MenuTypes, menu: ContextMenu) {
        if (!ContextMenu.patches[type]) throw new Error(`Invalid menu type: ${type}`);
        
        (ContextMenu.patches[type] as ValueOf<typeof ContextMenu.patches>).set(caller, menu);
        ContextMenu.emitter.emit("ADD", type);
    };

    export function detach(caller: string, type: MenuTypes) {
        if (!ContextMenu.patches[type]) throw new Error(`Invalid menu type: ${type}`);

        (ContextMenu.patches[type] as ValueOf<typeof ContextMenu.patches>).delete(caller);
        ContextMenu.emitter.emit("REMOVE", type);
    };
};