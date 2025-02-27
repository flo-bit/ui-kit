<script lang="ts">
	import { onMount } from 'svelte';
	const { class: className, id }: { class?: string; id?: string } = $props();

	let Plyr: typeof import('plyr') | undefined = $state();
	onMount(async () => {
		Plyr = (await import('plyr')).default;
	});

	$effect(() => {
		if (!Plyr) return;

		const player = new Plyr('.js-player', {
			settings: ['captions', 'quality', 'loop', 'speed'],
			controls: [
				'play-large',
				'play',
				'progress',
				'current-time',
				'volume',
				'download',
				'fullscreen'
			]
		});

		// set the video player to the id
		if (id) {
			player.source = {
				type: 'video',
				sources: [
					{
						src: id,
						type: 'video/youtube'
					}
				]
			};
		}

		return () => {
			player.destroy();
		};
	});

	let glow = 15;
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
</svelte:head>

{#key id}
	{#if id}
		<div
			class={[
				'relative aspect-video w-full overflow-hidden rounded-2xl border border-base-400 bg-white object-cover dark:border-white/10 dark:bg-white/5',
				className
			]}
			style="filter: url(#blur-fullscreen); width: 100%;"
		>
			<div
				id="player"
				class="h-full w-full overflow-hidden rounded-xl object-cover font-semibold text-black dark:text-white"
			>
				<div
					class="js-player plyr__video-embed"
					id="player"
					data-plyr-provider="youtube"
					data-plyr-embed-id={id}
				></div>
			</div>
		</div>
	{/if}
{/key}

<svg width="0" height="0">
	<filter id="blur-fullscreen" y="-50%" x="-50%" width="200%" height="200%">
		<feGaussianBlur in="SourceGraphic" stdDeviation={glow} result="blurred" />
		<feColorMatrix type="saturate" in="blurred" values="2" />
		<feComposite in="SourceGraphic" operator="over" />
	</filter>
</svg>

<style>
	* {
		--plyr-color-main: hsl(var(--accent-500));
	}
</style>
