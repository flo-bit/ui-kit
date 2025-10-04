<script lang="ts">
	import SelectExample from './Example.svelte';
</script>

# Select

## Example

<SelectExample />

## Usage

```svelte
<script lang="ts">
	import { Select } from '@foxui/core';

	let selected = $state('Apple');
</script>

<Select
	bind:value={selected}
	type="single"
	items={[
		{ value: 'Apple', label: 'Apple' },
		{ value: 'Orange', label: 'Orange' },
		{ value: 'Banana', label: 'Banana' }
	]}
/>
```
