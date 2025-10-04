<script lang="ts">
	import ColorSelectExample from './Example.svelte';
</script>

# Color Select

## Example

<ColorSelectExample />

## Usage

```svelte
<script>
	import { ColorSelect } from '@foxui/colors';
</script>

<ColorSelect
	colors={[
		{ class: 'text-red-700', label: 'red' },
		{ class: 'text-green-700', label: 'green' },
		{ class: 'text-blue-700', label: 'blue' },
		{ class: 'text-yellow-700', label: 'yellow' }
	]}
/>

<!-- with custom colors -->
<ColorSelect
	colors={[
		{ value: '#ff0000', label: 'red' },
		{ value: '#00ff00', label: 'green' },
		{ value: '#0000ff', label: 'blue' },
		{ value: '#ffff00', label: 'yellow' }
	]}
/>
```
