<script lang="ts" module>
	export const videoPlayer: {
		showing: boolean;
		id: string | undefined;

		show: (id: string) => void;
		hide: () => void;
	} = $state({
		showing: false,
		id: undefined,

		show: (id: string) => {
			videoPlayer.id = id;
			videoPlayer.showing = true;
		},

		hide: () => {
			videoPlayer.id = undefined;
			videoPlayer.showing = false;
		}
	});
</script>

<script lang="ts">
	import { Portal } from 'bits-ui';
	import Plyr from 'plyr';

	const { class: className }: { class?: string } = $props();

	$effect(() => {
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
		if (videoPlayer.id) {
			player.source = {
				type: 'video',
				sources: [
					{
						src: videoPlayer.id,
						type: 'video/youtube'
					}
				]
			};
		}

		// when loaded play the video and go fullscreen
		player.on('ready', () => {
			player.play();
			//player.fullscreen.enter();
		});

		return () => {
			player.destroy();
		};
	});

	let glow = 40;
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
</svelte:head>

<svelte:window
	onkeydown={(e) => {
		if (e.key === 'Escape' && videoPlayer.showing) {
			videoPlayer.hide();
		}
	}}
/>

{#key videoPlayer.id}
	{#if videoPlayer.showing && videoPlayer.id}
		<Portal>
			<div class="fixed inset-0 z-[100] flex h-[100dvh] w-screen items-center justify-center">
				<button
					onclick={() => videoPlayer.hide()}
					class="absolute inset-0 cursor-default bg-white/70 backdrop-blur-sm dark:bg-black/70"
				>
					<span class="sr-only">Close</span>
				</button>

				<div
					class={[
						'relative mx-4 aspect-video max-h-screen w-full overflow-hidden rounded-xl border border-base-400 bg-white object-cover dark:border-white/10 dark:bg-white/5 sm:mx-20',
						className
					]}
					style="filter: url(#blur); width: 100%;"
				>
					<div
						id="player"
						class="h-full w-full overflow-hidden rounded-xl object-cover font-semibold text-black dark:text-white"
					>
						<div
							class="js-player plyr__video-embed"
							id="player"
							data-plyr-provider="youtube"
							data-plyr-embed-id={videoPlayer.id}
						></div>
					</div>
				</div>

				<button
					onclick={() => {
						videoPlayer.hide();
					}}
					class="absolute right-2 top-2 z-20 p-2 text-base-900 backdrop-blur-sm dark:text-base-50"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="size-6"
					>
						<path
							fill-rule="evenodd"
							d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
							clip-rule="evenodd"
						/>
					</svg>

					<span class="sr-only">Close</span>
				</button>
			</div>
		</Portal>
	{/if}
{/key}

<svg width="0" height="0">
	<filter id="blur" y="-50%" x="-50%" width="200%" height="200%">
		<feGaussianBlur in="SourceGraphic" stdDeviation={glow} result="blurred" />
		<feColorMatrix type="saturate" in="blurred" values="3" />
		<feComposite in="SourceGraphic" operator="over" />
	</filter>
</svg>

<style>
	* {
		--plyr-color-main: hsl(var(--accent-500));
	}
</style>
