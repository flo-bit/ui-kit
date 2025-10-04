<script lang="ts">
	import '../app.css';
	
	import { Head, Toaster } from '@foxui/all';
	import { base } from '$app/paths';
	import { dev } from '$app/environment';

	let { children } = $props();

	let showImage = $state(false);

	let images = ['test.jpg', 'gradient.jpg', 'mountains.jpg', 'dark_mountains.jpg'];
	let currentImage = $state(0);
</script>

<svelte:body
	onkeydown={(e) => {
		if(!dev) return;

		if (e.key === 'i') {
			showImage = !showImage;
		} else if (e.key === 'ArrowRight') {
			currentImage = (currentImage + 1) % images.length;
		} else if (e.key === 'ArrowLeft') {
			currentImage = (currentImage - 1 + images.length) % images.length;
		}
	}}
/>

{@render children()}

<Head
	title="fox ui"
	description="🦊 fox ui, svelte 5 & tailwind 4"
	image={base + '/opengraph.png'}
	url="https://flo-bit.dev/ui-kit"
	emojiFavicon="🦊"
/>

<Toaster />


{#if showImage}
	<img
		src={base + '/' + images[currentImage]}
		alt="fox ui"
		class="pointer-events-none fixed inset-0 -z-50 h-full w-full object-cover brightness-100 filter"
	/>
{/if}