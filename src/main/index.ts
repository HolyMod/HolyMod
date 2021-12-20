import NodeModule from "module";
import path from "path";
import Events from "./events";

const Module: typeof NodeModule & {globalPaths: string[]} = NodeModule as unknown as any;
const modulesPath = path.resolve(".", "..", "node_modules");

if (!~Module.globalPaths.indexOf(modulesPath)) {
    Module.globalPaths.push(modulesPath);
}

Events.register();