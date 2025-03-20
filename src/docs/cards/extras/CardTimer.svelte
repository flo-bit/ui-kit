<script lang="ts">
	import Box from '$lib/components/base/box/Box.svelte';
	import Timer from '$lib/components/extra/timer/Timer.svelte';
	import { TimerState } from '$lib/components/extra/timer/TimerState.svelte';
	import { onMount } from 'svelte';

	let timer: TimerState | undefined = $state();

	onMount(() => {
		timer?.start();
	});
</script>

<Box class="min-h-0">
	<Timer bind:timer class="text-4xl lg:text-5xl" />
</Box>
