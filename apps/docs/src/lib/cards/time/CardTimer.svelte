<script lang="ts">
	import { Box } from '@foxui/core';
	import { Timer, TimerState } from '@foxui/time';
	import { onMount } from 'svelte';

	let timer: TimerState | undefined = $state();

	onMount(() => {
		timer?.start();
	});
</script>

<Box class="min-h-0">
	<Timer bind:timer class="text-4xl" />
</Box>
