<script lang="ts">
	import type { TimerState } from '$lib';
	import Countdown from '$lib/components/extra/countdown/Countdown.svelte';
	import { onMount } from 'svelte';

	let timer: TimerState | undefined = $state();

	onMount(() => {
		timer?.start();
	});
</script>

<Countdown bind:timer />
