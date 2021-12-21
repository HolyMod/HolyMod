export default class Utilities {
    static loadJSON(file: string) {
        try {
            return JSON.parse(HolyAPI.FS.readFile(file, "utf8"));
        } catch (error) {
            return error;
        }
    }

    static assign(object: any, ...properties: any[]) {
        for (let i = 0; i < properties.length; i++) {
            const keys = Object.keys(properties[i]);

            Object.defineProperties(object, Object.fromEntries(
                keys.map(key => [key, {value: properties[i][key], writeable: false, configurable: false}])
            ));
        }

        return object;
    }

    static memoize<T = any>(target: any, key: string, value: T): T {
        Object.defineProperty(target, key, {
            value: value,
            configurable: true
        });
    
        return value;
    }

    static findInTree(tree = {}, filter = _ => _, {ignore = [], walkable = [], maxProperties = 100} = {}): any {
        let stack = [tree];
        const wrapFilter = function (...args) {
            try { return Reflect.apply(filter, this, args); }
            catch { return false; }
        };
    
        while (stack.length && maxProperties) {
            const node = stack.shift();
            if (wrapFilter(node)) return node;
            if (Array.isArray(node)) stack.push(...node);
            else if (typeof node === "object" && node !== null) {
                if (walkable.length) {
                    for (const key in node) {
                        const value = node[key];
                        if (~walkable.indexOf(key) && !~ignore.indexOf(key)) {
                            stack.push(value);
                        }
                    }
                } else {
                    for (const key in node) {
                        const value = node[key];
                        if (node && ~ignore.indexOf(key)) continue;
    
                        stack.push(value);
                    }
                }
            }
            maxProperties--;
        }
    }

    static joinClassNames(...classNames: (string | [boolean, string])[]) {
        let className = [];
    
        for (const item of classNames) {
            if (typeof (item) === "string") {
                className.push(item);
                continue;
            }
    
            if (Array.isArray(item)) {
                const [should, name] = item;
                if (!should) continue;
                className.push(name);
            }
        }
    
        return className.join(" ");
    }
}