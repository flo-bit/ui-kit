<script>
	import Example from './Example.svelte';
</script>

# Textarea

## Example

<Example />

## Usage

```svelte
<script>
	import { Textarea } from '@foxui/core';

	let value = $state('');
</script>

<Textarea placeholder="Enter text here" bind:value />
```
