<script lang="ts">
	import { cn } from '@foxui/core';
	import type { HTMLAttributes } from 'svelte/elements';
	import { recolorLottie } from './recolor';

	let {
		src,
		data,
		loop = true,
		autoplay = true,
		renderer = 'svg',
		colorMap,
		class: className,
		...rest
	}: HTMLAttributes<HTMLDivElement> & {
		src?: string;
		data?: unknown;
		loop?: boolean;
		autoplay?: boolean;
		renderer?: 'svg' | 'canvas' | 'html';
		colorMap?: Record<string, string>;
	} = $props();

	let container: HTMLDivElement | null = $state(null);
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

	let loaded = $state.raw<{ lottie: typeof import('lottie-web').default; data: unknown } | null>(
		null
	);

	$effect(() => {
		let cancelled = false;
		(async () => {
			const { default: lottie } = await import('lottie-web');
			let animationData = data;
			if (!animationData && src) {
				const res = await fetch(src);
				animationData = await res.json();
			}
			if (cancelled || !animationData) return;
			loaded = { lottie, data: animationData };
		})();
		return () => {
			cancelled = true;
		};
	});

	$effect(() => {
		if (!loaded || !container) return;
		// track theme + colorMap so recoloring re-runs
		themeTick;
		const final = colorMap ? recolorLottie(loaded.data, colorMap) : loaded.data;
		const animation = loaded.lottie.loadAnimation({
			container,
			renderer,
			loop,
			autoplay,
			animationData: final
		});
		return () => animation.destroy();
	});
</script>

<div bind:this={container} class={cn('w-full', className)} aria-hidden="true" {...rest}></div>
