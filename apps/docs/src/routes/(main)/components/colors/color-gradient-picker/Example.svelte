<script lang="ts">
	import { ColorGradientPicker, ColorPicker, convert, listColorSpaces, sRGB } from '@foxui/colors';
	import { ThemeWatcher } from '$lib/helper/ThemeWatcher.svelte';
	import { onMount } from 'svelte';
	import { deserialize } from '@foxui/colors';
	import { Button, cn, Popover } from '@foxui/core';
	import PopoverColorPicker from '../../../../../../../../packages/colors/src/lib/components/color-picker/popover/PopoverColorPicker.svelte';

	let colors = $state([
		{ rgb: { r: 0, g: 0, b: 0 }, position: 0 },
		{ rgb: { r: 0, g: 0, b: 0 }, position: 0.5 },
		{ rgb: { r: 0, g: 0, b: 0 }, position: 1 }
	]);

	let colors2 = $state([
		{ rgb: { r: 0, g: 0, b: 0 }, position: 0 },
		{ rgb: { r: 0, g: 0, b: 0 }, position: 0.5 },
		{ rgb: { r: 0, g: 0, b: 0 }, position: 1 }
	]);

	onMount(() => {
		const theme = new ThemeWatcher();
		const accentColor = theme.getCSSVar('--color-accent-500');
		const color = deserialize(accentColor);
		updateColors(color);

		theme.subscribe(() => {
			const accentColor = theme.getCSSVar('--color-accent-500');
			let color = deserialize(accentColor);
			updateColors(color);
		});
	});

	function updateColors(theme: ReturnType<typeof deserialize>) {
		const { id, coords } = theme;

		const space = listColorSpaces().find((f) => id === f.id);
		if (!space) {
			throw new Error('Invalid color space');
		}

		colors = [
			{ rgb: { r: 0, g: 0, b: 0 }, position: 0 },
			{ rgb: { r: 0, g: 0, b: 0 }, position: 0.5 },
			{ rgb: { r: 0, g: 0, b: 0 }, position: 1 }
		];

		colors2 = [
			{ rgb: { r: 0, g: 0, b: 0 }, position: 0 },
			{ rgb: { r: 0, g: 0, b: 0 }, position: 0.5 },
			{ rgb: { r: 0, g: 0, b: 0 }, position: 1 }
		];

		for (let i = 0; i < 3; i++) {
			const rgb = convert([coords[0], coords[1], coords[2] + 30 * i], space, sRGB);

			colors[i].rgb = { r: rgb[0], g: rgb[1], b: rgb[2] };
			colors2[i].rgb = { r: rgb[0], g: rgb[1], b: rgb[2] };
		}
	}
</script>

<ColorGradientPicker class="not-prose mt-8" bind:colors />

<h3>Small</h3>

<ColorGradientPicker class="not-prose mt-8" bind:colors={colors2} size="sm" />

