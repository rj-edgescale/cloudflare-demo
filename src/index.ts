import { handleRequest } from "./handler";

export default {
	async fetch(request: Request) {
		return handleRequest(request);
		// return new Response(`request method: ${request.method}`);
	},
};
