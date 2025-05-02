<script>
	import Example from './Example.svelte';
</script>

# Switch

## Example

<Example />

## Usage

```svelte
<script>
	import { Switch } from '@fuxui/base';

	let checked = $state(false);
</script>

<Switch bind:checked />
```
