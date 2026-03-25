<script lang="ts">
	import { onMount } from 'svelte';
	import type { EmbedVideoData } from './types';

	const {
		data,
		showSensitive = true
	}: {
		data: EmbedVideoData;
		showSensitive?: boolean;
	} = $props();

	let revealed = $state(false);
	let element: HTMLMediaElement = $state()!

	onMount(async () => {
		if (data.sensitive && showSensitive && !revealed) return;
		initPlayer();
	});

	async function initPlayer() {
		const [{ default: Plyr }, { default: Hls }] = await Promise.all([
			import('plyr'),
			import('hls.js')
		]);

		if (Hls.isSupported()) {
			const hls = new Hls();
			hls.loadSource(data.video.playlist);
			hls.attachMedia(element);
		}

		new Plyr(element, {
			controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
			ratio: data.video.aspectRatio
				? `${data.video.aspectRatio.width}:${data.video.aspectRatio.height}`
				: '16:9'
		});
	}

	function reveal() {
		revealed = true;
		// Wait for the video element to render, then init
		requestAnimationFrame(() => initPlayer());
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
</svelte:head>

{#if data.sensitive && showSensitive && !revealed}
	<button
		onclick={reveal}
		style={data.video.aspectRatio
			? `aspect-ratio: ${data.video.aspectRatio.width} / ${data.video.aspectRatio.height}`
			: 'aspect-ratio: 16 / 9'}
		class="border-base-500/20 bg-base-200/50 text-base-600 dark:border-base-400/20 dark:bg-base-800/50 dark:text-base-400 accent:border-accent-900 flex w-full cursor-pointer items-center justify-center rounded-2xl border text-center text-sm"
	>
		Sensitive content, click to show.
	</button>
{:else}
	<div
		style={data.video.aspectRatio
			? `aspect-ratio: ${data.video.aspectRatio.width} / ${data.video.aspectRatio.height}`
			: 'aspect-ratio: 16 / 9'}
		class="border-base-300 dark:border-base-400/40 w-full max-w-full overflow-hidden rounded-2xl border"
	>
		<!-- svelte-ignore a11y_media_has_caption -->
		<video bind:this={element} class="h-full w-full" aria-label={data.video.alt}></video>
	</div>
{/if}

<style>
	* {
		--plyr-color-main: var(--color-accent-500);
	}
</style>
