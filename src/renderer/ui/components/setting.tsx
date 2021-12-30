import DiscordModules from "@modules/discord";

export enum SettingsTypes {
    switch = "switch"
}

export type Setting = {
    type: keyof typeof SettingsTypes;
    name: string;
    note: string;
    id?: string;
    value?: boolean | string;
};

export function wrapSettings(settings: Setting[], manager: import("@classes/settings").default) {
    return (
        <SettingsPanel settings={settings} manager={manager} />
    );
};

export function SettingsPanel({settings, manager}: {settings: Setting[], manager: import("@classes/settings").default}) {
    const [, forceUpdate] = DiscordModules.React.useReducer(n => !n, true);

    DiscordModules.React.useEffect(() => {
        manager.addChangeListener(forceUpdate);

        return () => {
            manager.removeChangeListener(forceUpdate);
        };
    });

    return (
        <React.Fragment>
            {settings.map(setting => (
                <Setting {...setting} key={setting.id ?? setting.name} manager={manager} />
            ))}
        </React.Fragment>
    );
};

export default function Setting(props: Setting & {manager: import("@classes/settings").default}) {
    const {SwitchItem} = DiscordModules;

    switch (props.type) {
        case SettingsTypes.switch: return (
            <SwitchItem
                note={props.note}
                value={props.manager.useSettings(() => props.manager.get(props.id, props.value))}
                onChange={(value: boolean) => {
                    props.manager.set(props.id, value);
                }}
            >{props.name}</SwitchItem>
        );

        default: return null;
    }
};