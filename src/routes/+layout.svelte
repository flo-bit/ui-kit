<script lang="ts">
	import { base } from '$app/paths';
	import Head from '$lib/components/head/Head.svelte';
	import { Toaster } from '$lib/components/sonner';
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}

<Toaster />

<Head
	title="my ui kit"
	description="my ui kit - work in progress"
	image={base + "/opengraph.png"}
	url="https://flo-bit.dev/ui-kit"
	emojiFavicon="🙃"
/>