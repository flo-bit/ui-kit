<script lang="ts">
	import NumberFlow, { NumberFlowGroup } from '@number-flow/svelte';
	import { onMount } from 'svelte';
	import WaveSurfer from 'wavesurfer.js';

	import { ThemeWatcher } from '$lib/helper/ThemeWatcher.svelte';

	let wavesurfer: WaveSurfer | null = $state(null);

	let {
		url,
		darkMode = 'class'
	}: {
		url: string;
		darkMode?: 'class' | 'mediaQuery';
	} = $props();

	let audioContainer: HTMLElement | null = $state(null);

	let audioDuration = $state(0);
	let currentTime = $state(0);
	let remainingTime = $derived(Math.round(audioDuration - currentTime));
	let remainingSeconds = $derived(remainingTime % 60);
	let remainingMinutes = $derived(Math.floor(remainingTime / 60));

	let isPlaying = $state(false);
	let isLoaded = $state(false);

	let themeWatcher: ThemeWatcher | null = $state(null);

	function isDarkMode() {
		return themeWatcher?.isDarkMode() ?? false;
	}

	function getCSSVar(variable: string) {
		return themeWatcher?.getCSSVar(variable) ?? '';
	}

	onMount(() => {
		if (!audioContainer) return;

		themeWatcher = new ThemeWatcher(updateWaveformColors, darkMode);

		wavesurfer = WaveSurfer.create({
			container: audioContainer,
			cursorWidth: 2,
			height: 16,
			barWidth: 2,
			barGap: 1,
			barRadius: 2,
			dragToSeek: {
				debounceTime: 100
			},
			fillParent: true,
			normalize: true,
			hideScrollbar: true
		});

		updateWaveformColors();

		wavesurfer?.load(url);

		wavesurfer?.on('ready', (duration: number) => {
			audioDuration = duration;
			isLoaded = true;
		});

		wavesurfer?.on('timeupdate', (time: number) => {
			currentTime = time;
		});

		wavesurfer?.on('play', () => {
			isPlaying = true;
		});

		wavesurfer?.on('pause', () => {
			isPlaying = false;
		});

		return () => {
			wavesurfer?.pause();
			wavesurfer?.destroy();

			themeWatcher?.destroy();
		};
	});

	function updateWaveformColors() {
		wavesurfer?.setOptions({
			waveColor: isDarkMode() ? getCSSVar('--color-accent-950') : getCSSVar('--color-accent-200'),
			progressColor: isDarkMode()
				? getCSSVar('--color-accent-500')
				: getCSSVar('--color-accent-500')
		});
	}

	function playAudio() {
		wavesurfer?.play();
	}

	function pauseAudio() {
		wavesurfer?.pause();
	}
</script>

<div class="relative flex h-24 w-full items-center justify-center gap-4 overflow-hidden">
	<button
		onclick={() => {
			isPlaying ? pauseAudio() : playAudio();
		}}
		class="bg-accent-600 hover:bg-accent-500 inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-30 md:size-14"
	>
		{#if isPlaying}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="text-base-50 dark:text-base-950 size-6 md:size-9"
			>
				<path
					fill-rule="evenodd"
					d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
					clip-rule="evenodd"
				/>
			</svg>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="text-base-50 dark:text-base-950 ml-1 size-6 md:ml-1.5 md:size-9"
			>
				<path
					fill-rule="evenodd"
					d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
					clip-rule="evenodd"
				/>
			</svg>
		{/if}
		<span class="sr-only">{isPlaying ? 'Pause' : 'Play'}</span>
	</button>
	<div bind:this={audioContainer} class="h-4 w-full grow">
		{#if !isLoaded}
			<div class="dark:bg-accent-950 bg-accent-100 m-1.5 h-1 w-full rounded-full"></div>
		{/if}
	</div>
	{#if isLoaded}
		<NumberFlowGroup>
			<div
				class="text-accent-500 flex items-end justify-end font-semibold"
				style="font-variant-numeric: tabular-nums;"
			>
				-<NumberFlow
					value={remainingMinutes}
					trend={-1}
					format={{ minimumIntegerDigits: 2 }}
					digits={{ 1: { max: 5 } }}
				/>
				<NumberFlow
					value={remainingSeconds}
					trend={-1}
					format={{ minimumIntegerDigits: 2 }}
					digits={{ 1: { max: 5 } }}
					prefix=":"
				/>
			</div>
		</NumberFlowGroup>
	{:else}
		<div class="text-accent-500 flex items-end justify-end text-sm font-medium">loading</div>
	{/if}
</div>
