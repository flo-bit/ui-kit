<script>
	import Example from './Example.svelte';
</script>

# Switch

## Example

<Example />

## Usage

```svelte
<script>
	import { Switch } from 'fuchs';

	let checked = $state(false);
</script>

<Switch bind:checked />
```
