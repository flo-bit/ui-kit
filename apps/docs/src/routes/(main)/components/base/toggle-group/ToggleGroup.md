<script>
	import Example from './Example.svelte';
</script>

# Toggle Group

## Example

<Example />

## Usage

```svelte
<script>
	import { ToggleGroup, ToggleGroupItem } from '@foxui/core';

	let value = $state('1');
</script>

<ToggleGroup type="single" bind:value>
	<ToggleGroupItem value="1">1</ToggleGroupItem>
	<ToggleGroupItem value="2">2</ToggleGroupItem>
	<ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>
```
