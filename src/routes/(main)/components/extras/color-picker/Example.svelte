<script lang="ts">
	import { ColorPicker } from '$lib/components/extra/color-picker/base';
	import * as Popover from '$lib/components/base/popover';
	import { cn } from '$lib/utils';
	import Subheading from '$lib/components/base/heading/Subheading.svelte';
	import Button from '$lib/components/base/button/Button.svelte';
	import PopoverColorPicker from '$lib/components/extra/color-picker/popover/PopoverColorPicker.svelte';
	import { ThemeWatcher } from '$lib/helper/ThemeWatcher.svelte';
	import { hex_to_rgb, oklch_string_to_oklch, oklch_to_rgb } from '$lib/components/extra/color-picker/base/color';
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
<!-- 
<Button
	onclick={() => {
		// themewatcher
		const theme = new ThemeWatcher();
		const color = theme.getCSSVar('--color-accent-500');
		rgb = oklch_to_rgb(oklch_string_to_oklch(color));
	}}>Reset Color</Button
> -->