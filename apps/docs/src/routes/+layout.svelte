<script lang="ts">
	import { asset } from '$app/paths';
	import '../app.css';
	
	import { Head, Toaster } from '@foxui/all';

	let { children } = $props();
</script>

{@render children()}

<Head
	title="fox ui"
	description="🦊 fox ui, svelte 5 & tailwind 4"
	image={asset('/opengraph.png')}
	url="https://flo-bit.dev/ui-kit"
	emojiFavicon="🦊"
/>

<Toaster />
