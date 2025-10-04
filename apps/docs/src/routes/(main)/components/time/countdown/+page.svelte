<script lang="ts">
	import { Countdown, TimerState } from '@foxui/time';
	import { onMount } from 'svelte';

	let timer: TimerState | undefined = $state();

	onMount(() => {
		timer?.start();
	});
</script>

<Countdown bind:timer />
