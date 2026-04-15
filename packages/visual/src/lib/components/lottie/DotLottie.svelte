<script lang="ts">
	import { cn } from '@foxui/core';
	import type { HTMLAttributes } from 'svelte/elements';
	import { resolveColorFloats } from './recolor';

	type Instance = {
		destroy: () => void;
		setColorSlot: (id: string, c: number[]) => boolean;
		addEventListener: (type: string, cb: () => void) => void;
	};

	let {
		src,
		data,
		loop = true,
		autoplay = true,
		slots,
		class: className,
		...rest
	}: HTMLAttributes<HTMLCanvasElement> & {
		/** URL to a .lottie or .json animation. */
		src?: string;
		/** Animation data: parsed JSON, ArrayBuffer, or JSON string. */
		data?: string | ArrayBuffer | Record<string, unknown>;
		loop?: boolean;
		autoplay?: boolean;
		/**
		 * Map of slot id → color. Applied via the dotLottie Slots API.
		 * Requires the animation JSON to mark properties with `sid` values.
		 * Accepts hex, rgb(), or `var(--token)`.
		 */
		slots?: Record<string, string>;
	} = $props();

	let canvas: HTMLCanvasElement | null = $state(null);
	let instance = $state.raw<Instance | null>(null);
	let loaded = $state(false);
	let themeTick = $state(0);

	$effect(() => {
		if (typeof document === 'undefined') return;
		const observer = new MutationObserver(() => themeTick++);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class', 'style', 'data-theme']
		});
		return () => observer.disconnect();
	});

	$effect(() => {
		if (!canvas) return;
		let cancelled = false;
		let dl: Instance | null = null;

		(async () => {
			const { DotLottie } = await import('@lottiefiles/dotlottie-web');
			if (cancelled || !canvas) return;
			dl = new DotLottie({
				canvas,
				src,
				data,
				loop,
				autoplay,
				renderConfig: { autoResize: true }
			}) as unknown as Instance;
			dl.addEventListener('load', () => {
				loaded = true;
			});
			instance = dl;
		})();

		return () => {
			cancelled = true;
			dl?.destroy();
			instance = null;
			loaded = false;
		};
	});

	$effect(() => {
		// re-run on any of these changes
		void themeTick;
		if (!instance || !loaded || !slots) return;
		for (const [id, value] of Object.entries(slots)) {
			const rgb = resolveColorFloats(value);
			if (rgb) instance.setColorSlot(id, [rgb[0], rgb[1], rgb[2], 1]);
		}
	});
</script>

<canvas bind:this={canvas} class={cn('w-full', className)} aria-hidden="true" {...rest}></canvas>
