<script lang="ts">
	import { Box } from '@fuxui/base';
	import { Timer, TimerState } from '@fuxui/time';
	import { onMount } from 'svelte';

	let timer: TimerState | undefined = $state();

	onMount(() => {
		timer?.start();
	});
</script>

<Box class="min-h-0">
	<Timer bind:timer class="text-4xl" />
</Box>
