<script>
	import Example from './Example.svelte';
</script>

# Input

## Examples

<Example />

## Usage

```svelte
<script>
	import { Input } from '@fuxui/base';

	let value = $state('');
</script>

<Input sizeVariant="sm" placeholder="Enter text here" bind:value />
```
