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
    };
}