<script lang="ts">
	import { ColorPicker } from '$lib';
	import { oklch_string_to_oklch, oklch_to_rgb } from '$lib/components/extra/color-picker/base/color';
	import { ThemeWatcher } from '$lib/helper/ThemeWatcher.svelte';
	import { onMount } from 'svelte';

	let rgb = $state({
		r: 1,
		g: 0,
		b: 0
	});

	onMount(() => {
		const theme = new ThemeWatcher();
		const color = theme.getCSSVar('--color-accent-500');
		rgb = oklch_to_rgb(oklch_string_to_oklch(color));
	});
</script>

<div class="h-full w-full flex items-center justify-center">
<!-- inline version -->
<ColorPicker bind:rgb class="scale-[0.6] -ml-2" /></div>