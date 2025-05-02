<script>
	import Example from './Example.svelte';
</script>

# Checkbox

## Examples

<Example />

## Usage

```svelte
<script>
	import { Checkbox } from '@fuxui/base';

	let checked = $state(false);
</script>

<Checkbox sizeVariant="sm" variant="primary" bind:checked />
```
