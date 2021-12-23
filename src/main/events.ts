import {ipcMain as IPC, app} from "electron";
import IPCEvents from "../common/ipcevents";
import fs from "fs";

const log = console.log.bind(null, "[Holymod]");

export default class Events {
    static register(): void {
        this.registerCompilers();

        IPC.on(IPCEvents.GET_APP_PATH, (event) => {
            event.returnValue = app.getAppPath();
        });
    }

    static async registerCompilers(): Promise<void> {
        log("[Compilers] loading.");
        const sucrase = await import("sucrase");
        const sass = await import("sass");
        const CoffeeScript = await import("coffeescript");

        IPC.on(IPCEvents.COMPILE_JAVASCRIPT, (event, filePath: string) => {
            if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
                return event.returnValue = "ERROR: File not found";
            }
            let code = "";

            try {
                const filecontent = fs.readFileSync(filePath, "utf8");
                ({code} = sucrase.transform(filecontent, {
                    transforms: ["imports", "jsx"],
                    production: false
                }));
            } catch (error) {
                log("Failed to compile JS:", error);
            }

            event.returnValue = code;
        });

        IPC.on(IPCEvents.COMPILE_TYPESCRIPT, (event, filePath: string) => {
            if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
                return event.returnValue = "ERROR: File not found";
            }
            let code = "";
    
            try {
                const filecontent = fs.readFileSync(filePath, "utf8");
                ({code} = sucrase.transform(filecontent, {
                    transforms: ["typescript", "imports", "jsx"],
                    production: false
                }));
            } catch (error) {
                log("Failed to compile TS:", error);
            }

            event.returnValue = code;
        });

        IPC.on(IPCEvents.COMPILE_SCSS, (event, filePath: string) => {
            if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
                return event.returnValue = "ERROR: File not found";
            }
            let css = "";

            try {
                ({css} = sass.compile(filePath, {}));
            } catch (error) {
                log("Failed to compile SCSS:", error);
            }

            event.returnValue = css.toString();
        });

        IPC.on(IPCEvents.COMPILE_COFFEESCRIPT, (event, filePath: string) => {
            if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
                return event.returnValue = "ERROR: File not found";
            }
            let code = "";

            try {
                const filecontent = fs.readFileSync(filePath, "utf8");
                ({code} = sucrase.transform(CoffeeScript.compile(filecontent), {
                    transforms: ["jsx", "imports"]
                }));
            } catch (error) {
                log("Failed to compile CoffeeScript:", error);
            }

            event.returnValue = code;
        });
    }
}