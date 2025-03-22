<script lang="ts">
	import { ColorPicker, PopoverColorPicker } from '$lib';
	import { ThemeWatcher } from '$lib/helper/ThemeWatcher.svelte';
	import { oklch_string_to_oklch, oklch_to_rgb } from '$lib/components/colors/color-picker/base/color';
	import { onMount } from 'svelte';

	let rgb = $state({
		r: 0,
		g: 0,
		b: 0
	});

	onMount(() => {
		const theme = new ThemeWatcher();
		const color = theme.getCSSVar('--color-accent-500');
		rgb = oklch_to_rgb(oklch_string_to_oklch(color));

		theme.subscribe(() => {
			const color = theme.getCSSVar('--color-accent-500');
			rgb = oklch_to_rgb(oklch_string_to_oklch(color));
		});
	});
</script>

<h3>Inline Color Picker</h3>

<ColorPicker bind:rgb />

<h3>Popover Color Picker</h3>

<PopoverColorPicker bind:rgb />