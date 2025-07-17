<script lang="ts">
	import { Head, Toaster } from '@fuxui/base';
	import '../app.css';
	import '../prism.css';
	import { base } from '$app/paths';

	let { children } = $props();

	let showImage = $state(false);

	let images = ['test.jpg', 'gradient.jpg', 'mountains.jpg', 'dark_mountains.jpg'];
	let currentImage = $state(0);
</script>

<svelte:body
	onkeydown={(e) => {
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

<!-- <div class="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
	<div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-accent-700 to-accent-900 opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div> -->