<script>
	import { NumberInput } from '@fuxui/base';
</script>

# Number Input

## Example

<NumberInput />

## Usage

```svelte
<script>
	import { NumberInput } from '@fuxui/base';

	let value = $state(0);
</script>

<NumberInput min={0} max={100} bind:value />
```

## Credits

- Adapted from an example of [number-flow](https://number-flow.barvian.me/)
