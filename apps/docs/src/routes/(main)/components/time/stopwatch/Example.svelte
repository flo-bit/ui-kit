<script lang="ts">
	import { Box, Button } from '@fuxui/base';
	import { Stopwatch, StopwatchState } from '@fuxui/time';
	import { onMount } from 'svelte';

	let stopwatch: StopwatchState | undefined = $state(undefined);

	onMount(() => {
		stopwatch?.start();
	});
</script>

<Box class="min-h-0">
	<Stopwatch bind:stopwatch class="sm:text-7xl" />
</Box>

<div class="mt-2 flex w-full justify-center gap-2">
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
