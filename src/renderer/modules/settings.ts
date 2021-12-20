import Settings from "@ui/components/settings";
import Injector from "./injector";
import Webpack from "./webpack";

export default class SettingsRenderer {
    static defaultPanels = [
        {section: "DIVIDER"},
        {
            section: "HEADER",
            label: "Holymod",
        },
    ]

    static panels: any[] = [];

    static registerPanel(id: string, options: {label: string, render: () => import("react").ReactElement, header?: import("react").ReactElement, order: number}) {
        const {label, render, order} = options;
        const tab = this.panels.find(e => e.id === id)

        if (tab) throw new Error(`Settings tab ${id} is already registered!`);
        
        const panel = {
            section: `holy-${id}`,
            label: label,
            order: order,
            className: `holy-settings-${id}-item`,
            element: () => React.createElement(Settings, {
                name: label,
                children: render
            })
        };

        this.panels = this.panels.concat(panel).sort(this.sortPanels);

        return () => {
            const index = this.panels.indexOf(panel);
            if (index < 0) return false;
            this.panels.splice(index, 1);
            return true;
        };
    }

    static unregisterPanel(id: string) {
        const panel = this.panels.findIndex(e => e.id === id);
        if (panel < 0) return;

        this.panels.splice(panel, 1);
    }

    static sortPanels(a, b) {
        return a.order - b.order;
    }

    static patchSettingsView() {
        const SettingsView = Webpack.findByDisplayName("SettingsView");

        Injector.inject({
            caller: "HolySettings",
            module: SettingsView.prototype,
            method: "getPredicateSections",
            after: (_, __, res) => {
                if (!Array.isArray(res) || !res.some(e => e?.section?.toLowerCase() === "changelog") || res.some(s => s?.id === "holy-settings")) return;

                const index = res.findIndex(s => s?.section?.toLowerCase() === "changelog") - 1;
                if (index < 0) return;

                res.splice(index, 0, ...SettingsRenderer.defaultPanels.concat(SettingsRenderer.panels));
            }
        });
    }
}

Webpack.whenReady.then(() => SettingsRenderer.patchSettingsView());