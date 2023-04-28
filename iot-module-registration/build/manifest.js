export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-d6f43a80.js","js":["start-d6f43a80.js","chunks/index-8dacb67d.js","chunks/index-37c3b7e5.js","chunks/preload-helper-60cab3ee.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/2.js'),
			() => import('./server/nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "endpoints",
				pattern: /^\/endpoints\/?$/,
				names: [],
				types: [],
				path: "/endpoints",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "registrar-modulo",
				pattern: /^\/registrar-modulo\/?$/,
				names: [],
				types: [],
				path: "/registrar-modulo",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/queries-fetcher",
				pattern: /^\/api\/queries-fetcher\/?$/,
				names: [],
				types: [],
				load: () => import('./server/entries/endpoints/api/queries-fetcher.ts.js')
			},
			{
				type: 'endpoint',
				id: "api/mutations-fetcher",
				pattern: /^\/api\/mutations-fetcher\/?$/,
				names: [],
				types: [],
				load: () => import('./server/entries/endpoints/api/mutations-fetcher.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
