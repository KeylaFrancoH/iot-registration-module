<script lang="ts">
	// @ts-nocheck
	//import SvelteTable from 'svelte-table';
	//  let src = "https://www.espol.edu.ec/sites/default/files/Foto%20para%20Rnaking%20by%20subject.jpg";

	// tailwinds
	const apiStandardization = import.meta.env.VITE_API_STANDARDIZATION;
	let src = `${apiStandardization}/docs`;
</script>

<div class="container">
	<iframe class="responsive-iframe" {src} />
</div>

<div>
	<a href="/chart"></a>
</div>
<style>
	.container {
		overflow: hidden;
		width: 100%;
	}

	.responsive-iframe {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		padding-top: 8rem;
	}
</style>
