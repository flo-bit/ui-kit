<script>
	import Subheading from '$lib/components/base/heading/Subheading.svelte';
	import NumberInput from '$lib/components/base/number-input/NumberInput.svelte';
</script>

# Number Input

## Examples

<NumberInput />

## Usage

```svelte
<script>
	import { NumberInput } from 'fuchs';

	let value = $state(0);
</script>

<NumberInput min={0} max={100} bind:value />
```

## Credits

- Adapted from an example of [number-flow](https://number-flow.barvian.me/)
