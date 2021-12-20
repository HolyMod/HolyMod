export type LogType = keyof typeof console;

export class LoggerModule {
    module: string;

    constructor(name: string) {
        this.module = name;
    }

    #parseType(type: LogType) {
        switch (type) {
            case "info":
            case "warn":
            case "error":
            case "debug":
                return type;
            default:
                return "log";
        }
    }

    #log(type: LogType,  ...message: any[]) {
        console[this.#parseType(type)](`%c[HolyMod]%c %c[${this.module}]%c`, "color: #fff133; font-weight: 700;", "", "color: #fff133;", "", ...message);
    }

    log(...message: any[]) {this.#log("log", ...message);}
    info(...message: any[]) {this.#log("info", ...message);}
    warn(...message: any[]) {this.#log("warn", ...message);}
    error(...message: any[]) {this.#log("error", ...message);}
    debug(...message: any[]) {this.#log("debug", ...message);}

    static create(name: string) {
        return new LoggerModule(name);
    }
}

export default LoggerModule;