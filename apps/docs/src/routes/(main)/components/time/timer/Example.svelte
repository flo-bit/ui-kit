<script lang="ts">
	import { Box, Button } from '@fuxui/base';
	import { Timer, TimerState } from '@fuxui/time';
	import { onMount } from 'svelte';

	let timer: TimerState | undefined = $state(undefined);

	onMount(() => {
		timer?.start();
	});
</script>

<Box class="min-h-0">
	<Timer bind:timer class="sm:text-7xl" />
</Box>

<div class="mt-2 flex w-full justify-center gap-2">
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
