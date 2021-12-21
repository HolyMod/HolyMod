import DiscordModules from "@modules/discord";
import Storage from "@modules/storage";
import DiscordIcon from "@ui/components/discordicon";
import AddonCard from "./card";
import "./panel.scss";

const {Path} = HolyAPI;

export type SearchOptions = {
    description: boolean;
    author: boolean;
    name: boolean;
};

export type SortOption = "name" | "author" | "description" | "added";

const sortLabels = ["name", "author", "version", "description", "added"];
const searchLabels = ["name", "author", "description"];
const orderLabels = ["ascending", "descending"];

export async function sortAddons(addons: any[], order: "ascending" | "descending", query: string, searchOptions: SearchOptions, sortBy: SortOption) {
    return addons
        .filter(addon => {
            if (!query) return true;
            const {manifest} = addon;
            // Use String() wrapper for clever escaping
            return ["name", "author", "description"].some(type => searchOptions[type] && String(manifest[type] ?? "").toLowerCase().includes(query.toLowerCase()));
        })
        .sort((a, b) => {
            const first = a.manifest[sortBy] ?? "";
            const second = b.manifest[sortBy] ?? "";
            if (typeof (first) === "string") return String(first).toLowerCase().localeCompare(String(second).toLowerCase());
            if (first > second) return 1;
            if (second > first) return -1;

            return 0;
        })
        [order === "ascending" ? "reverse" : "slice"](0);
};

export function getSettings() {

}

export function OverflowContextMenu({type: addonType}) {
    const {ContextMenu} = DiscordModules;

    const [sortBy, searchOptions, order] = Storage.useEvent("data-changed", () => [
        Storage.getMisc(`${addonType}.sortBy`, "name"),
        Storage.getMisc(`${addonType}.searchOption`, {author: true, name: true, description: true}),
        Storage.getMisc(`${addonType}.order`, "descending")
    ]);

    return (
        <ContextMenu.Menu navId="OverflowContextMenu">
            <ContextMenu.ControlItem
                id="order-header"
                control={() => (
                    <h5 className="holy-settings-overflow-header">Order</h5>
                )}
            />
            <ContextMenu.Separator key="separator" />
            <ContextMenu.Group>
                {orderLabels.map(type => (
                    <ContextMenu.RadioItem
                        key={"order-" + type}
                        label={type[0].toUpperCase() + type.slice(1)}
                        checked={order === type}
                        id={"sortBy-" + type}
                        action={() => {
                            Storage.setMisc(void 0, `${addonType}.order`, type);
                        }}
                    />
                ))}
            </ContextMenu.Group>
            <ContextMenu.Separator key="separator" />
            <ContextMenu.ControlItem
                id="sort-header"
                control={() => (
                    <h5 className="holy-settings-overflow-header">Sort Options</h5>
                )}
            />
            <ContextMenu.Separator key="separator" />
            <ContextMenu.Group>
                {sortLabels.map(type => (
                    <ContextMenu.RadioItem
                        key={"sortBy-" + type}
                        label={type[0].toUpperCase() + type.slice(1)}
                        checked={sortBy === type}
                        id={"sortBy-" + type}
                        action={() => {
                            Storage.setMisc(void 0, `${addonType}.sortBy`, type);
                        }}
                    />
                ))}
            </ContextMenu.Group>
            <ContextMenu.Separator key="separator" />
            <ContextMenu.ControlItem
                id="search-header"
                control={() => (
                    <h5 className="holy-settings-overflow-header">Search Options</h5>
                )}
            />
            <ContextMenu.Separator key="separator" />
            <ContextMenu.Group>
                {searchLabels.map(type => (
                    <ContextMenu.CheckboxItem
                        key={"search-" + type}
                        id={"search-" + type}
                        label={type[0].toUpperCase() + type.slice(1)}
                        checked={searchOptions[type]}
                        action={() => {
                            Storage.setMisc(void 0, `${addonType}.searchOption.${type}`, !(searchOptions[type]));
                        }}
                    />
                ))}
            </ContextMenu.Group>
        </ContextMenu.Menu>
    );
};

export default function AddonPanel({addons: ManagerAddons, isEnabled, toggle, type, manager}) {
    const {React, Button, ContextMenu, Tooltips, SearchBar, PlaceholderClasses, LocaleManager, Popout} = DiscordModules;

    const [query, setQuery] = React.useState("");
    const [addons, setAddons] = React.useState(null);
    const [sortBy, searchOptions, order] = Storage.useEvent("data-updated", () => [
        Storage.getMisc(`${type}.sortBy`, "name"),
        Storage.getMisc(`${type}.searchOption`, {author: true, name: true, description: true}),
        Storage.getMisc(`${type}.order`, "descending")
    ]);

    React.useEffect(() => {
        manager.on("delete", () => {
            setAddons(manager.addons)
        });
    }, [manager]);

    React.useEffect(() => {
        sortAddons(
            Array.from(ManagerAddons.values()),
            order,
            query,
            searchOptions,
            sortBy
        ).then(addons => setAddons(addons));
    }, [query, manager, type, order, searchOptions, sortBy]);

    return (
        <div className="holy-settings-addons">
            <div className="holy-settings-addons-controls">
                <SearchBar
                    // @ts-ignore
                    onQueryChange={(value) => setQuery(value)}
                    onClear={() => setQuery("")}
                    placeholder={`Search ${type}...`}
                    size={SearchBar.Sizes.MEDIUM}
                    query={query}
                    className="holy-settings-addons-search"
                />
                <div className="holy-panel-search-controls">
                    <Tooltips.Tooltip text="Open folder" position="bottom" spacing={14}>
                        {props => (
                            <Button
                                {...props}
                                size={Button.Sizes.NONE}
                                look={Button.Looks.BLANK}
                                className="holy-settings-open-folder holy-settings-search-button"
                                onClick={() => Path.showInExplorer(manager.folder)}
                            >
                                <DiscordIcon name="Folder" width="20" height="20" />
                            </Button>
                        )}
                    </Tooltips.Tooltip>
                    <Tooltips.Tooltip text="Options" position="bottom" spacing={14}>
                        {props => (
                            <Popout
                                position={Popout.Positions.TOP}
                                animation={Popout.Animation.SCALE}
                                align={Popout.Align.RIGHT}
                                spacing={12}
                                renderPopout={() => (
                                    <OverflowContextMenu type={type} />
                                )}
                            >
                                {popoutProps => (
                                    <Button
                                        {...props}
                                        {...popoutProps}
                                        size={Button.Sizes.NONE}
                                        look={Button.Looks.BLANK}
                                        className="holy-settings-overflow-menu holy-settings-search-button"
                                    >
                                        <DiscordIcon name="OverflowMenu" width="20" height="20" />
                                    </Button>
                                )}
                            </Popout>
                        )}
                    </Tooltips.Tooltip>
                </div>
            </div>
            <div className="holy-settings-card-scroller">
                {addons?.length
                    ? addons.map(addon => <AddonCard
                        addon={addon}
                        // hasSettings={false}
                        manager={manager}
                        type={type}
                        key={addon.manifest.name}
                        openSettings={() => {}}
                        isEnabled={isEnabled}
                        toggle={toggle}
                    />)
                    : <div className="holy-settings-empty">
                        <div className={PlaceholderClasses.emptyStateImage} />
                        <p>{LocaleManager.Messages.GIFT_CONFIRMATION_HEADER_FAIL}</p>
                        <p>{LocaleManager.Messages.SEARCH_NO_RESULTS}</p>
                    </div>
                }
            </div>
        </div>
    );
}