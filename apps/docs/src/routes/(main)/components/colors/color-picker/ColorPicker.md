<script lang="ts">
	import ColorPickerExample from './Example.svelte';
</script>

# Color Picker

## Example

<ColorPickerExample />

## Usage

```svelte
<script lang="ts">
	import { ColorPicker, PopoverColorPicker } from '@foxui/colors';

	let rgb = $state({
		r: 0,
		g: 0,
		b: 0
	});
</script>

<!-- inline version -->
<ColorPicker bind:rgb />

<!-- popover version -->
<PopoverColorPicker bind:rgb />
```

### Credits

- Adapted from [svelte-color-select](https://github.com/CaptainCodeman/svelte-color-select).
