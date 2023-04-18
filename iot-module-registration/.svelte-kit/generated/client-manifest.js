export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/endpoints.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/registrar-modulo.svelte")
];

export const dictionary = {
	"": [[0, 3], [1]],
	"endpoints": [[0, 2], [1]],
	"registrar-modulo": [[0, 4], [1]]
};