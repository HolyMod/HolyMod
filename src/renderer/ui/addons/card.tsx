import SettingsStore, {SettingsEvents} from "@classes/settings";
import DiscordModules from "@modules/discord";
import DiscordIcon from "@ui/components/discordicon";
import {SettingsContext} from "../components/settings";
import "./card.scss";

const {Path} = HolyAPI;

export function ToolButton({label, icon, onClick, danger = false, disabled = false}) {
    const {Button, Tooltips: {Tooltip}} = DiscordModules;

    return (
        <Tooltip text={label} position="top" tooltipClassName="holy-card-tooltip">
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
                    <DiscordIcon name={icon} color={danger ? "#ed4245" : void 0} width="20" height="20" />
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
    const Settings = SettingsStore.getSettings(addon.id);

    React.useEffect(() => {
        if (!Settings) return;

        const handler = () => forceUpdate();
        Settings.on(SettingsEvents.SETTINGS_MOUNT_CHANGE, handler);

        return () => {
            Settings.off(SettingsEvents.SETTINGS_MOUNT_CHANGE, handler);
        };
    }, [Settings]);

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
            <div className="holy-card-footer">
                <div className="holy-card-controls">
                    {SettingsStore.hasPanel(addon.id) && <ToolButton
                        label="Settings"
                        icon="Gear"
                        onClick={() => {
                            const Render = SettingsStore.getPanel(addon.id);

                            SettingsApi.setPage({
                                label: addon.manifest.name,
                                render: typeof(Render) === "function"
                                    ? (() => DiscordModules.React.createElement(Render, SettingsStore.getSettings(addon.id)))
                                    : Render
                            });
                        }}
                    />}
                    <ToolButton label="Reload" icon="Replay" disabled={!isEnabled(addon) ?? true} onClick={() => manager.reload(addon)} />
                    <ToolButton label="Open Path" icon="Folder" onClick={() => Path.showInExplorer(addon.path)} />
                    {/* <ToolButton label="Delete" icon="Trash" onClick={() => {
                        // Modals.showConfirmationModal("Are you sure?", `Are you sure that you want to delete the ${type} "${addon.manifest.name}"?`, {
                        //     danger: true,
                        //     onConfirm: () => {
                        //         manager.delete(addon.entityID)
                        //     }
                        // });
                    }} /> */}
                </div>
            </div>
        </div>
    );
}