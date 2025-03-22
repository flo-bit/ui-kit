<script lang="ts">
	import { ColorGradientPicker } from '$lib';
	import type { OKlch } from '$lib/components/colors/color-picker/base/color';
	import {
		oklch_string_to_oklch,
		oklch_to_rgb
	} from '$lib/components/colors/color-picker/base/color';
	import { ThemeWatcher } from '$lib/helper/ThemeWatcher.svelte';
	import { onMount } from 'svelte';

	let colors = $state([
		{ rgb: { r: 0, g: 0, b: 0 }, position: 0 },
		{ rgb: { r: 0, g: 0, b: 0 }, position: 0.5 },
		{ rgb: { r: 0, g: 0, b: 0 }, position: 1 }
	]);

	onMount(() => {
		const theme = new ThemeWatcher();
		const accentColor = theme.getCSSVar('--color-accent-500');
		let oklch = oklch_string_to_oklch(accentColor);
		updateColors(oklch);

		theme.subscribe(() => {
			const accentColor = theme.getCSSVar('--color-accent-500');
			let oklch = oklch_string_to_oklch(accentColor);
			updateColors(oklch);
		});
	});

	function updateColors(theme: OKlch) {
		colors = [
			{ rgb: { r: 0, g: 0, b: 0 }, position: 0 },
			{ rgb: { r: 0, g: 0, b: 0 }, position: 0.5 },
			{ rgb: { r: 0, g: 0, b: 0 }, position: 1 }
		];
		colors.forEach((color, index) => {
			colors[index].rgb = oklch_to_rgb({ ...theme, h: theme.h + index * 30 });
		});
	}
</script>

<ColorGradientPicker class="mt-8" bind:colors />
