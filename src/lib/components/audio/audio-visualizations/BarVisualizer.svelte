<script lang="ts">
	import { ThemeWatcher } from '$lib/helper/ThemeWatcher.svelte';
	import { cn } from '$lib';
	import { onMount } from 'svelte';

	let {
		values,
		barWidth = 0,
		barSpacing = 4,
		center = true,
		class: className
	}: {
		values: Float32Array;
		barWidth?: number;
		barSpacing?: number;
		center?: boolean;
		class?: string;
	} = $props();

	let canvas: HTMLCanvasElement | undefined = $state();
	let contentRect: DOMRectReadOnly | undefined = $state();

	onMount(() => {});

	$effect(() => {
		if (!canvas || !contentRect) return;

		const ctx = canvas.getContext('2d');

		if (!ctx) return;

		// Update canvas size
		canvas.width = Math.round(contentRect.width) * 2;
		canvas.height = Math.round(contentRect.height) * 2;

		// Clear canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		let width = barWidth;
		let dets = values.length;

		if (!dets) {
			dets = Math.floor((canvas.width - barSpacing) / (Math.max(barWidth, 1) + barSpacing));
		}
		if (!barWidth) {
			width = (canvas.width - barSpacing) / dets - barSpacing;
		}

		let theme = new ThemeWatcher();

		const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

		gradient.addColorStop(0, theme.getCSSVar('--color-accent-400'));
		gradient.addColorStop(0.5, theme.getCSSVar('--color-accent-600'));
		gradient.addColorStop(1, theme.getCSSVar('--color-accent-700'));

		ctx.save();

		ctx.beginPath();
		// Loop over each value/bar
		for (let i = 0; i < values.length; i++) {
			const amplitude = Math.abs(values[i]);
			const height = Math.max(1, amplitude * canvas.height);
			const x = barSpacing + i * (width + barSpacing);
			const y = center ? (canvas.height - height) / 2 : canvas.height - height;

			ctx.roundRect(x, y, width, height, width);
		}
		ctx.clip();
		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		console.log('redraw');
	});
</script>

<canvas bind:this={canvas} bind:contentRect class={cn('h-full w-full', className)}></canvas>
