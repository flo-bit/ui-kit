<script lang="ts">
	import { Box } from '@foxui/core';
	import { RelativeTime, TimerState } from '@foxui/time';
	import { onMount } from 'svelte';

	let timer: TimerState | undefined = $state();

	onMount(() => {
		timer?.start();
	});
</script>

<div class="text-base-900 dark:text-base-50 flex flex-col items-center justify-center">
	<RelativeTime date={new Date(Date.now() - 10000)} locale="en-US" />
	<RelativeTime date={new Date(Date.now() - 1000 * 60 * 10.0)} locale="en-US" />
	<RelativeTime date={new Date(Date.now() - 1000 * 60 * 60 * 24)} locale="en-US" />
	<RelativeTime date={new Date(Date.now() - 1000 * 60 * 60 * 24 * 30)} locale="en-US" />
</div>
