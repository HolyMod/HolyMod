import DiscordModules from "@modules/discord";
// import ChangeLog, {ChangeLogItems} from "./changelog";

export default class Modals {
    static showConfirmationModal(title: string, content: any, options = {}) {
        const {confirmText = "Okay", cancelText = "Cancel", onConfirm = () => {}, onCancel = () => {}, danger = false} = options as any;
        const {ModalsApi, ConfirmationModal, React, Markdown, Button} = DiscordModules;

        return ModalsApi.openModal(props => {
            return React.createElement(ConfirmationModal, Object.assign({
                header: title,
                confirmText: confirmText,
                cancelText: cancelText,
                onConfirm,
                onCancel,
                confirmButtonColor: danger ? Button.Colors.RED : Button.Colors.BRAND
            }, props),
                typeof (content) === "string" ? React.createElement(Markdown, null, content) : content
            )
        });
    }

    static alert(title: string, content: any) {
        return this.showConfirmationModal(title, content, {cancelText: null});
    }

    // static showChangeLog(title: string, items: ChangeLogItems) {
    //     const {ModalsApi} = DiscordModules;

    //     return ModalsApi.openModal(props => {
    //         return React.createElement(ChangeLog, Object.assign({title, items}, props))
    //     });
    // }
}