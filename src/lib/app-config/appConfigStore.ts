import {writable} from "svelte/store";

import appConfig from "./appConfig";

const appConfigStore = writable(appConfig);

export default appConfigStore;
