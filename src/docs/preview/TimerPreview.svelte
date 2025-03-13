<script lang="ts" module>
	let timer = new TimerState(1000 * 60 * 60);
</script>

<script>
	import Box from '$lib/components/base/box/Box.svelte';
	import Button from '$lib/components/base/button/Button.svelte';
	import Subheading from '$lib/components/base/heading/Subheading.svelte';
	import Timer from '$lib/components/extra/timer/Timer.svelte';
	import { TimerState } from '$lib/components/extra/timer/TimerState.svelte';
</script>

<Subheading class="mb-4">Timer</Subheading>

<Box class="min-h-0">
	<Timer bind:timer />
</Box>

<div class="flex w-full justify-center gap-2">
	<Button onclick={() => timer.start()}>Start</Button>
	<Button onclick={() => timer.stop()}>Stop</Button>
	<Button onclick={() => timer.reset()}>Reset</Button>
</div>
