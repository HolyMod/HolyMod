import Utilities from "./util";
import DiscordModules from "./discord";

export default class ReactTools {
    static findInReactTree(tree, filter, options = {}) {
        return Utilities.findInTree(tree, filter, {...options, walkable: ["props", "children"]});
    }

    static getReactInstance(node: any) {
        return node["__reactFiber$"];
    }

    static getOwnerInstance(node, filter = _ => true) {
        if (!node) return null;
        
        const fiber = this.getReactInstance(node);
        let current = fiber;
    
        const matches = function () {
            const isInstanceOf = current?.stateNode instanceof DiscordModules.React?.Component;
            return isInstanceOf && filter(current?.stateNode);
        };
    
        while (!matches()) {
            current = current?.return;
        }
    
        return current?.stateNode ?? null;
    }
}