<script lang="ts">
	import { Box } from '@foxui/core';
	import { Stopwatch, StopwatchState } from '@foxui/time';
	import { onMount } from 'svelte';

	let stopwatch: StopwatchState | undefined = $state(undefined);

	onMount(() => {
		stopwatch?.start();
	});
</script>

<Box class="min-h-0">
	<Stopwatch bind:stopwatch class="text-4xl" />
</Box>
