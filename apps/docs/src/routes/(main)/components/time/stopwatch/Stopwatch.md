<script lang="ts">
	import Example from './Example.svelte';
</script>

# Stopwatch

## Example

<Example />

## Usage

```svelte
<script lang="ts">
	import { Button } from '@foxui/core';
	import { Stopwatch, StopwatchState } from '@foxui/time';

	let stopwatch: StopwatchState | undefined = $state();
</script>

<Stopwatch bind:stopwatch />

<Button onclick={() => stopwatch?.start()}>Start</Button>
```

## Credits

- Stopwatch state based on [svelte-reactive-timer](https://github.com/joshnuss/svelte-reactive-timer)
- Moving numbers component from [number-flow](https://number-flow.barvian.me/)
