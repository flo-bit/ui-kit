<script>
	import Example from './Example.svelte';
</script>

# Tooltip

## Example

<Example />

## Usage

```svelte
<script>
	import { Tooltip, Button } from 'fuchs';

	function handleClick() {
		console.log('clicked');
	}
</script>

<Tooltip text="Hello there!" withContext>
	{#snippet child({ props })}
		<Button {...props} onclick={handleClick}>Hover me</Button>
	{/snippet}
</Tooltip>
```
