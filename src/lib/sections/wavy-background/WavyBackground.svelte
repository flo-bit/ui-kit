<script lang="ts">
	import { cn } from '$lib';
	import type { WithChildren, WithElementRef } from 'bits-ui';
	import { createNoise3D } from 'simplex-noise';
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	const {
		class: className,
		containerClassName,
		colors,
		waveWidth,
		backgroundFill,
		speed,
		waveOpacity = 0.5,
		blur = 10,
		children,
		...restProps
	}: WithElementRef<WithChildren<HTMLAttributes<HTMLDivElement>>> & {
		containerClassName?: string;
		colors?: string[];
		waveWidth?: number;
		backgroundFill?: string;
		speed?: 'slow' | 'fast';
		blur?: number;
		waveOpacity?: number;
	} = $props();

	const noise = createNoise3D();
	let w: number, h: number, nt: number, i: number, x: number, ctx: any, canvas: any;

	let canvasRef: HTMLCanvasElement;

	const getSpeed = () => {
		switch (speed) {
			case 'slow':
				return 0.001;
			case 'fast':
				return 0.002;
			default:
				return 0.001;
		}
	};

	const init = () => {
		canvas = canvasRef;
		ctx = canvas.getContext('2d');

		w = ctx.canvas.width = window.innerWidth;
		h = ctx.canvas.height = window.innerHeight;
		ctx.filter = `blur(${blur}px)`;

		nt = 0;
		window.onresize = function () {
			w = ctx.canvas.width = window.innerWidth;
			h = ctx.canvas.height = window.innerHeight;
			ctx.filter = `blur(${blur}px)`;
		};
		render();
	};

	const waveColors = colors ?? ['#38bdf8', '#818cf8', '#c084fc', '#e879f9', '#22d3ee'];
	const drawWave = (n: number) => {
		nt += getSpeed();
		for (i = 0; i < n; i++) {
			ctx.beginPath();
			ctx.lineWidth = waveWidth || 50;
			ctx.strokeStyle = waveColors[i % waveColors.length];
			for (x = 0; x < w; x += 5) {
				var y = noise(x / 800, 0.3 * i, nt) * 100;
				ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
			}
			ctx.stroke();
			ctx.closePath();
		}
	};

	let animationId: number;
	const render = () => {
		ctx.globalAlpha = waveOpacity ?? 0.5;
		ctx.clearRect(0, 0, w, h);
		drawWave(5);
		animationId = requestAnimationFrame(render);
	};

	onMount(() => {
		init();
		return () => {
			cancelAnimationFrame(animationId);
		};
	});
</script>

<div class={cn('flex h-screen flex-col items-center justify-center', containerClassName)}>
	<canvas class="absolute inset-0 -z-50" bind:this={canvasRef} id="canvas"></canvas>
	<div class={cn('relative z-10', className)} {...restProps}>
		{@render children?.()}
	</div>
</div>
