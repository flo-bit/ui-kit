<script lang="ts">
	import ColorSelectExample from './Example.svelte';
</script>

# Color Select

## Example

<ColorSelectExample />

## Usage

```svelte
<script>
	import ColorSelect from 'fuchs';
</script>

<ColorSelect
	colors={[
		{ class: 'text-accent-700', label: 'dark' },
		{ class: 'text-accent-500', label: 'medium' },
		{ class: 'text-accent-300', label: 'light' },
		{ class: 'text-accent-100', label: 'lightest' }
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
