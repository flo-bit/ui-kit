<script lang="ts">
	import { ColorPicker } from '@fuxui/colors';
	import {
		oklch_string_to_oklch,
		oklch_to_rgb
	} from '@fuxui/colors';
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

		theme.subscribe(() => {
			const color = theme.getCSSVar('--color-accent-500');
			rgb = oklch_to_rgb(oklch_string_to_oklch(color));
		});
	});
</script>

<div class="flex h-full w-full items-center justify-center">
	<!-- inline version -->
	<ColorPicker bind:rgb class="-ml-2 scale-[0.6]" />
</div>
