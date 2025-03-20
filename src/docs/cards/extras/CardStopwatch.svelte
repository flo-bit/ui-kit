<script lang="ts">
	import Box from '$lib/components/base/box/Box.svelte';
	import Stopwatch from '$lib/components/extra/stopwatch/Stopwatch.svelte';
	import { StopwatchState } from '$lib/components/extra/stopwatch/StopwatchState.svelte';
	import { onMount } from 'svelte';

	let stopwatch: StopwatchState | undefined = $state(undefined);

	onMount(() => {
		stopwatch?.start();
	});
</script>

<Box class="min-h-0">
	<Stopwatch bind:stopwatch class="text-4xl lg:text-5xl" />
</Box>
