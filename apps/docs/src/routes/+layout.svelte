<script lang="ts">
	import '../app.css';
	
	import { Head, Toaster } from '@foxui/core';
	import { base } from '$app/paths';

	let { children } = $props();
</script>

{@render children()}

<Head
	title="fox ui"
	description="🦊 fox ui, svelte 5 & tailwind 4"
	image={base + '/opengraph.png'}
	url="https://flo-bit.dev/ui-kit"
	emojiFavicon="🦊"
/>

<Toaster />
