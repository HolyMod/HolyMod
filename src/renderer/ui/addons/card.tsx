import DiscordModules from "@modules/discord";
import DiscordIcon from "@ui/components/discordicon";
import {SettingsContext} from "../components/settings";
import "./card.scss";

export function ToolButton({label, icon, onClick, danger = false, disabled = false}) {
    const {Button, Tooltips: {Tooltip}} = DiscordModules;

    return (
        <Tooltip text={label} position="top">
            {props => (
                <Button
                    {...props}
                    className="holy-card-toolbutton"
                    innerClassName="holy-card-toolbutton-inner"
                    look={Button.Looks.BLANK}
                    size={Button.Sizes.NONE}
                    onClick={onClick}
                    disabled={disabled}
                >
                    <DiscordIcon name={icon} color={danger ? "#ed4245" : void 0} width="24" height="24" />
                </Button>
            )}
        </Tooltip>
    );
};

export function ButtonWrapper({value, onChange, disabled = false}) {
    const {Switch} = DiscordModules;
    const [isChecked, setChecked] = React.useState(value);

    return (
        <Switch
            className="holy-addons-switch"
            checked={isChecked}
            disabled={disabled}
            onChange={() => {
                onChange(!isChecked);
                setChecked(!isChecked);
            }}
        />
    );
};

// function getPanel(id) {
//     const get = settings.get(id);
//     if (get) return get;

//     for(const [key, options] of settings.entries()) {
//         if (options.category == id) return settings.get(key);
//     }

//     return null;
// }

export default function AddonCard({addon, manager, toggle, isEnabled}) {
    const {Markdown} = DiscordModules;
    const [, forceUpdate] = React.useReducer(n => n + 1, 0);
    const SettingsApi = React.useContext<any>(SettingsContext);

    React.useEffect(() => {
        manager.on("toggle", (name: string) => {
            if (name !== addon.entityID) return;

            forceUpdate();
        });
    }, [addon, manager]);

    return (
        <div style={({"--plugin-color": addon.color} as any)} className={"holy-card-container " + addon.manifest.name?.replace(/ /g, "-")}>
            <div className="holy-card-header">
                <div className="holy-card-field holy-card-name">{addon.manifest.name}</div>
                {"version" in addon.manifest && <div className="holy-card-field">v{addon.manifest.version}</div>}
                {"author" in addon.manifest && <div className="holy-card-field"> by {addon.manifest.author}</div>}
                <div className="holy-card-controls">
                    {/* {getPanel(addon.entityID) && <ToolButton
                        label="Settings"
                        icon="Gear"
                        onClick={() => {
                            const Settings = getPanel(addon.entityID);

                            SettingsApi.setPage({
                                label: addon.manifest.name,
                                render: typeof(Settings.render) === "function"
                                    ? (() => DiscordModules.React.createElement(Settings.render, cache.get(addon.entityID).makeProps()))
                                    : Settings.render
                            });
                        }}
                    />} */}
                    <ToolButton label="Reload" icon="Replay" disabled={!manager.isEnabled?.(addon) ?? true} onClick={() => manager.reload(addon)} />
                    <ToolButton label="Open Path" icon="Folder" onClick={() => {
                        // PCCompatNative.executeJS(`require("electron").shell.showItemInFolder(${JSON.stringify(addon.path)})`);
                    }} />
                    <ToolButton label="Delete" icon="Trash" onClick={() => {
                        // Modals.showConfirmationModal("Are you sure?", `Are you sure that you want to delete the ${type} "${addon.manifest.name}"?`, {
                        //     danger: true,
                        //     onConfirm: () => {
                        //         manager.delete(addon.entityID)
                        //     }
                        // });
                    }} />
                    <ButtonWrapper value={isEnabled?.(addon) ?? false} onChange={() => {
                        toggle(addon);
                    }} />
                </div>
            </div>
            {addon.manifest.description && (
                <div className="holy-card-description">
                    <Markdown>{addon.manifest.description}</Markdown>
                </div>
            )}
        </div>
    );
}