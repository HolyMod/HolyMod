import DiscordModules, {promise} from "@modules/discord";
import {fromPromise} from "./asynccomponent";
import ErrorBoundary from "./errorboundary";
import "./settings.scss";

export let SettingsContext = null;

promise.then(() => {
    SettingsContext = DiscordModules.React.createContext();
});

const Settings = fromPromise(promise.then(() => {
    return function HolySettings({name, header, children}) {
        const {Caret} = DiscordModules;
        const [subPage, setSubPage] = DiscordModules.React.useState({label: "", render: null});
        const hasSubPage = DiscordModules.React.useMemo(() => {
            return typeof (subPage.render) === "function" && subPage.label;
        }, [subPage]);

        const API = {
            setPage(options: {label: string, render: () => React.ReactElement}) {
                setSubPage(options);
            },
            reset() {
                setSubPage({render: null, label: ""});
            }
        };
        
        return (
            <ErrorBoundary>
                <SettingsContext.Provider value={API}>
                    <div className="holy-settings-panel">
                        <div className="holy-settings-title">
                            {hasSubPage ? (
                                <div className="holy-settings-title-name" onClick={() => API.reset()}>
                                    {name}
                                </div>
                            ) : name}
                            {hasSubPage ? (
                                <React.Fragment>
                                    <Caret
                                        direction={Caret.Directions.RIGHT}
                                        className="holy-settings-title-caret"
                                    />
                                    <div className="holy-settings-title-sub">{subPage.label}</div>
                                </React.Fragment>
                            ): null}
                            {header}
                        </div>
                        {hasSubPage ? subPage.render() : children()}
                    </div>
                </SettingsContext.Provider>
            </ErrorBoundary>
        );
    } 
}), void 0, {displayName: "Holy(Settings)"});

export default Settings;