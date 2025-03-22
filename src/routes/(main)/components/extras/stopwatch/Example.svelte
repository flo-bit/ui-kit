<script lang="ts">
	import { Box, Button, Stopwatch, StopwatchState } from '$lib';
	import { onMount } from 'svelte';

	let stopwatch: StopwatchState | undefined = $state(undefined);

	onMount(() => {
		stopwatch?.start();
	});
</script>

<Box class="min-h-0">
	<Stopwatch bind:stopwatch class="sm:text-7xl" />
</Box>

<div class="flex w-full justify-center gap-2 mt-2">
	<Button
		onclick={() => {
			if (stopwatch?.isRunning) {
				stopwatch?.pause();
			} else {
				stopwatch?.resume();
			}
		}}>{stopwatch?.isRunning ? 'Pause' : 'Start'}</Button
	>
	<Button onclick={() => stopwatch?.reset()}>Reset</Button>
</div>
