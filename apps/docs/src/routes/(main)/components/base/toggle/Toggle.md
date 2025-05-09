<script>
	import Example from './Example.svelte';
</script>

# Toggle

## Example

<Example />

## Usage

```svelte
<script>
	import { Toggle } from '@fuxui/base';

	let pressed = $state(false);
</script>

<Toggle bind:pressed>Toggle</Toggle>
```
