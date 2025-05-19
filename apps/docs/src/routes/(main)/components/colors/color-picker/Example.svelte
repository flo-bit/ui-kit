<script lang="ts">
	import {
		ColorPicker,
		PopoverColorPicker,
		oklch_string_to_oklch,
		oklch_to_rgb
	} from '@fuxui/colors';
	import { ThemeWatcher } from '$lib/helper/ThemeWatcher.svelte';
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

<ColorPicker
	bind:rgb
/>

<h3>Popover Color Picker</h3>

<PopoverColorPicker
	bind:rgb
	quickSelects={[
		{
			label: 'Red',
			rgb: {
				r: 1,
				g: 0,
				b: 0
			}
		},
		{
			label: 'Green',
			rgb: {
				r: 0,
				g: 1,
				b: 0
			}
		},
		{
			label: 'Blue',
			rgb: {
				r: 0,
				g: 0,
				b: 1
			}
		},
		{
			label: 'Yellow',
			rgb: {
				r: 1,
				g: 1,
				b: 0
			}
		},
		{
			label: 'Magenta',
			rgb: {
				r: 1,
				g: 0,
				b: 1
			}
		},
		{
			label: 'Cyan',
			rgb: {
				r: 0,
				g: 1,
				b: 1
			}
		},
		{
			label: 'White',
			rgb: {
				r: 1,
				g: 1,
				b: 1
			}
		}
	]}
/>
