<script lang="ts">
	import ColorGradientPickerExample from './Example.svelte';
</script>

# Color Gradient Picker

## Example

<ColorGradientPickerExample />

## Usage

```svelte
<script lang="ts">
	import { ColorGradientPicker } from '@foxui/colors';

	let colors = $state([
		{ rgb: { r: 0, g: 0, b: 1 }, position: 0 }, // blue
		{ rgb: { r: 1, g: 0, b: 0 }, position: 0.5 }, // red
		{ rgb: { r: 1, g: 1, b: 0 }, position: 1 } // yellow
	]);
</script>

<ColorGradientPicker bind:colors />
```
