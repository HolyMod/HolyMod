export function unsafeExecuteJS(code: string): any {
    return eval(code);
};