<script lang="ts">
	import { Box } from '@foxui/all';
	import { Timer, TimerState } from '@foxui/all';
	import { onMount } from 'svelte';

	let timer: TimerState | undefined = $state();

	onMount(() => {
		timer?.start();
	});
</script>

<Box class="min-h-0">
	<Timer bind:timer class="text-4xl" />
</Box>
