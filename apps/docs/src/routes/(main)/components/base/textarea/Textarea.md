<script>
	import Example from './Example.svelte';
</script>

# Textarea

## Example

<Example />

## Usage

```svelte
<script>
	import { Textarea } from '@fuxui/base';

	let value = $state('');
</script>

<Textarea placeholder="Enter text here" bind:value />
```
