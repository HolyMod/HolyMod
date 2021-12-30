import LoggerModule from "../../common/logger";

const Logger = new LoggerModule("Injector");
const patchTypes = ["after", "before"];
enum argMap {
    caller,
    module,
    method,
    patch,
    extraOptions
};

type CallbackMap = Map<string, Function>;

type Injection = {
    module: any;
    method: string;
    originalMethod(): any;
    isEmpty(): boolean;
    afterCallbacks: CallbackMap;
    beforeCallbacks: CallbackMap;
    revert(): void;
};

/**@module Injector */

/**
 * @typedef InjectorOptions
 * @property {string} caller Caller for the injection, can be used multiple times.
 * @property {object|Function} module Module to inject into.
 * @property {string} method Method name to inject into, must be a property of {@property Module}
 */

/**
 * @typedef Injection
 * @property {object|function} module
 * @property {() => void} revert
 * @property {string} method
 * @property {function} originalMethod
 * @property {Array<InjectionChild>} children;
 */

/**
 * @typedef InjectionChild
 * @property {string} caller;
 * @property {(thisObject, params: any[], res) => any=} after;
 * @property {(thisObject, params: any[]) => any=} before;
 * @property {(types = ["all"]) => void} uninject;
 */

/**
 * All injections
 * @type {Array<Injection>}

 */
export const injections: Injection[] = [];

/**
 * Checks the arguments for the **inject** function.
 * @param {InjectorOptions} options 
 * @returns {void}
 
 * @private Should only be used by the injector itself.
 */
export function validateOptions(...options: any) {
    if (arguments.length > 2) {
        if (typeof options[0] === "object" || options[0] != null || !Array.isArray(options[0])) options = Object.assign({}, options[0]);
        else options = {};

        let extraOptions = {type: "after"};

        for (let i = 0; i < arguments.length; i++) {
            const key = argMap[i];

            if (key === "extraOptions") extraOptions = arguments[i];
            else if (key && options[key] == null) options[key] = arguments[i];
        }

        switch (extraOptions.type) {
            case "before": {
                options.before = options.patch;
            } break;
            case "after": {
                options.after = options.patch;
            } break;

            default: {
                throw new Error("Could not identify patch type!");
            }
        }
    } else {
        options = Object.assign({}, ...[...arguments].flat());
    }

    if (typeof options.caller !== "string") throw new Error("No caller for injection specified!");
    if (typeof options.module === "undefined") throw new Error("No module to injection specified!");
    if (typeof options.method === "undefined") throw new Error("No injection method specified!");
    if (typeof options.module[options.method] !== "function") throw new Error(`Method '${options.method}' appears to be '${typeof options.module[options.method]}' instead of 'function'!`);
    if (Object.isFrozen(options.module)) throw new Error("Module appears to be readonly! Cannot inject into it.");
    if (!patchTypes.some(opt => typeof options[opt] === "function")) throw new Error("No inject type specified!");

    return options;
};

/**
 * Injects into a module, pushes another inject into **{injections}**
 * @param {object|function} module The module to be injected
 * @param {string} method The name of any property in **{module}**
 * @returns {Injection}
 
 */
export function createInjection(module: any, method: any) {
    const originalMethod: Function = module[method];
    const injection: Injection = {
        module,
        method,
        originalMethod: module[method],
        afterCallbacks: new Map,
        beforeCallbacks: new Map,
        isEmpty() {return this.afterCallbacks.size === 0 && this.beforeCallbacks.size === 0;},
        revert: () => {
            const index = injections.indexOf(injection);
            if (index < 0) return false;
            module[method] = originalMethod;
            injections.splice(index, 1);
        }
    }

    module[method] = function (...params) {
        if (injection.isEmpty()) {
            injection.revert();
            return originalMethod.apply(this, arguments);
        }

        const before = [...injection.beforeCallbacks];
        const after = [...injection.afterCallbacks];
        let returnValue = params;

        for (let i = 0; i < before.length; i++) {
            const [caller, patch] = before[i];

            try {
                const tempReturn = patch.call(this, this, returnValue);
                if (Array.isArray(tempReturn)) returnValue = tempReturn;
            } catch (error) {
                Logger.error(`Failed to run before injection for ${caller}:\n`, error);
            }
        }

        if (Array.isArray(returnValue)) params = returnValue;

        returnValue = originalMethod.apply(this, params);

        for (let i = 0; i < after.length; i++) {
            const [caller, patch] = after[i];

            try {
                const tempReturn = patch.call(this, this, params, returnValue);
                if (typeof tempReturn !== "undefined") returnValue = tempReturn;
            } catch (error) {
                Logger.error(`Failed to run after injection for ${caller}:\n`, error);
            }
        }

        return returnValue;
    };

    Object.assign(module[method], originalMethod, {
        injection: {
            uninject: injection.revert,
            originalMethod
        },
        toString: () => originalMethod.toString(),
    });
    injections.push(injection);

    return injection;
};

/**
 * Resolves already existing injections / creates new injections.
 * @param {InjectorOptions} options Options provided for the injection process.
 * @returns {Injection}
 
 */
export function resolveInjection(options): Injection {
    const {module, method} = options;
    let injection = injections.find(e => Object.is(e.module, module) && Object.is(e.method, method));
    if (!injection) {
        injection = createInjection(module, method);
    }

    return injection;
};

/**
 * Inject into any module that is the typeof Function|Object. 
 * @param {InjectorOptions} validatedOptions 
 * @returns {void}
 
 * @example
 
 * ```js
 * import Injector from "kernel/injector";
 * import Logger from "kernel/logger";
 * 
 * Injector.inject({
 *      caller: "kernel-mod",
 *      module: window.console,
 *      method: "warn",
 *      before: (thisObject, params, res) => {
 *          Logger.log("Patched message: ", params);
 *      }
 * });
 * 
 * // or
 * Injector.inject("kernel-mod", console, "warn", (thisObject, params, res) => {
 *      Logger.log("Patched message:", params);
 * });
 * ```
 */
export function inject(...options: any[]) {
    let validatedOptions = validateOptions(...(Array.isArray(options) ? options : [options]));

    const injection = resolveInjection(validatedOptions);

    const child: any = {
        ...validatedOptions,
        injection,
        uninject: (...types: ("before" | "after" | "all")[]) => {
            if (!types.length) types.push("all");

            $loop: for (let i = 0; i < types.length; i++) {
                switch (types[i]) {
                    case "before": {
                        injection.beforeCallbacks.delete(child.caller);
                        continue $loop;
                    }
                        
                    case "after": {
                        injection.afterCallbacks.delete(child.caller);
                        continue $loop;
                    }
                        
                    case "all": {
                        injection.beforeCallbacks.delete(child.caller);
                        injection.afterCallbacks.delete(child.caller);
                        break $loop;
                    }
                }
            }

            if (injection.beforeCallbacks.size === 0 && injection.afterCallbacks.size === 0) injection.revert();
        }
    };

    if (typeof child.after === "function") injection.afterCallbacks.set(child.caller, child.after);
    if (typeof child.before === "function") injection.beforeCallbacks.set(child.caller, child.before);

    return child.uninject;
};

/**
 * Collects all injections by the **{caller}**
 * @param {string} caller Caller for injection to be resolved.
 * @returns {InjectionChild[]}
 
 */
export function getInjectionsByCaller(searchCaller: string) {
    let found = [];

    const findInjections = function (type: "after" | "before", callbacks: CallbackMap) {
        const childInjections = [...callbacks];

        for (let i = 0; i < childInjections.length; i++) {
            const [caller, patch] = childInjections[i];

            if (Object.is(caller, searchCaller)) {
                found.push({
                    type: type,
                    caller,
                    patch,
                    uninject() {
                        callbacks.delete(caller);
                    }
                });
            }
        }
    };

    for (let i = 0; i < injections.length; i++) {
        findInjections("before", injections[i].beforeCallbacks);
        findInjections("after", injections[i].afterCallbacks);
    }

    return found;
}

/**
 * Reverts the injection into a module by caller and method names.
 * @param {string} caller Caller for the injections. 
 * @param {"all" | "before" | "after"} types Injection types.
 * @returns {boolean}
 
 */
export function uninject(caller, types = ["all"]) {
    const injections = getInjectionsByCaller(caller);
    if (!injections.length) return false;

    for (let i = 0; i < injections.length; i++) {
        injections[i].uninject(types);
    }

    return true;
};

/**
 * Creates a injector specific for the choosen caller.
 * @param {string} caller Caller to for injections.
 */
export function create(caller) {
    if (typeof caller !== "string") throw new Error(`Caller must be a string, but got ${typeof caller} instead.`);

    return {
        inject: (...options: any[]) => inject({caller}, options),
        uninject: (...types: ("before" | "after" | "all")[]) => uninject(caller, types),
        getInjectionsByCaller: () => getInjectionsByCaller(caller)
    };
}

const Injector = {
    inject,
    uninject,
    validateOptions,
    injections,
    create,
    getInjectionsByCaller
};

export default Injector;