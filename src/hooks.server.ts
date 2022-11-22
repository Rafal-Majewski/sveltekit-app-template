import {Handle} from "@sveltejs/kit";
import "$lib/app-config/appConfig";

const handle: Handle = async ({event, resolve}) => {
	const response = await resolve(event, {
		transformPageChunk: ({html}) => html.replace(/%sveltekit\.lang%/g, "en"),
	});
	return response;
};

export {handle};
