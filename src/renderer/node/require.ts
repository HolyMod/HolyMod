import {createRequire} from "./module";

const Require = createRequire(HolyAPI.Path.resolve(HolyAPI.Path.getBasePath(), "plugins"), null);

export default Require;