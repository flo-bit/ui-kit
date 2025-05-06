<script lang="ts">
	import Example from './Example.svelte';
</script>

# Timer

## Example

<Example />

## Usage

```svelte
<script lang="ts">
	import { Button } from '@fuxui/base';
	import { Timer, TimerState } from '@fuxui/time';

	let timer = $state(new TimerState(1000 * 60 * 60));
</script>

<Timer bind:timer />

<Button onclick={() => timer.start()}>Start</Button>
```

## Credits

- Timer state based on [svelte-reactive-timer](https://github.com/joshnuss/svelte-reactive-timer)
- Moving numbers component from [number-flow](https://number-flow.barvian.me/)
