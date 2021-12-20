import {waitForDebugger} from "inspector";
import {log} from "./util";

if (~process.argv.indexOf("--debugger-wait")) {
    log("[Debug] waiting for debugger...");

    waitForDebugger();
}