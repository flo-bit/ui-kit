<script lang="ts">
	import { Box } from '@fuxui/base';
	import { Stopwatch, StopwatchState } from '@fuxui/time';
	import { onMount } from 'svelte';

	let stopwatch: StopwatchState | undefined = $state(undefined);

	onMount(() => {
		stopwatch?.start();
	});
</script>

<Box class="min-h-0">
	<Stopwatch bind:stopwatch class="text-4xl" />
</Box>
