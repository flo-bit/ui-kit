<script lang="ts">
	import { Box, Button, Timer, TimerState } from '$lib';
	import { onMount } from 'svelte';

	let timer: TimerState | undefined = $state(undefined);

	onMount(() => {
		timer?.start();
	});
</script>

<Box class="min-h-0">
	<Timer bind:timer class="sm:text-7xl" />
</Box>

<div class="flex w-full justify-center gap-2 mt-2">
	<Button
		onclick={() => {
			if (timer?.isRunning) {
				timer?.pause();
			} else {
				timer?.resume();
			}
		}}>{timer?.isRunning ? 'Pause' : 'Start'}</Button
	>
	<Button onclick={() => timer?.reset()}>Reset</Button>
</div>
