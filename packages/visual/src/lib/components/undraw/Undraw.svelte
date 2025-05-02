<script lang="ts">
	import type { WithElementRef, WithoutChildrenOrChild } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '@fuxui/base';

	import { load, type CheerioAPI } from 'cheerio';

	let {
		ref = $bindable(null),
		svg,
		alt,
		caption,
		class: className,
		captionClass,
		autoInvert = false,
		colorMap = {},
		...restProps
	}: WithElementRef<WithoutChildrenOrChild<HTMLAttributes<HTMLElement>>> & {
		svg: string;
		alt: string;
		caption?: string;
		captionClass?: string;
		autoInvert?: boolean;
		colorMap?: Record<string, string>;
	} = $props();

	function applyClasses(loadedSvg: CheerioAPI, el: any) {
		let fill = loadedSvg(el).attr('fill');
		if (!fill) return;

		if (fill === '#6c63ff') {
			loadedSvg(el).removeAttr('fill');
			loadedSvg(el).addClass('fill-accent-600 dark:fill-accent-500');
		} else if (fill.startsWith('#') && !fill.includes('url') && autoInvert) {
			loadedSvg(el).addClass('dark:invert dark:hue-rotate-180');
		} else if (colorMap[fill]) {
			loadedSvg(el).removeAttr('fill');
			loadedSvg(el).addClass(colorMap[fill]);
		}
	}

	function modifySvg(svgString: string): string {
		const loadedSvg = load(svgString, { xmlMode: true });

		const svg = loadedSvg('svg');
		svg.attr('width', '100%');
		svg.attr('height', '100%');
		svg.addClass('w-full h-auto');
		svg.removeAttr('filter');

		loadedSvg('path').each((_, el) => {
			applyClasses(loadedSvg, el);
		});
		loadedSvg('text').each((_, el) => {
			applyClasses(loadedSvg, el);
		});
		loadedSvg('rect').each((_, el) => {
			applyClasses(loadedSvg, el);
		});
		loadedSvg('circle').each((_, el) => {
			applyClasses(loadedSvg, el);
		});
		loadedSvg('ellipse').each((_, el) => {
			applyClasses(loadedSvg, el);
		});
		loadedSvg('polygon').each((_, el) => {
			applyClasses(loadedSvg, el);
		});
		loadedSvg('line').each((_, el) => {
			applyClasses(loadedSvg, el);
		});

		return loadedSvg.html();
	}
</script>

<figure
	bind:this={ref}
	class={cn('excalidraw-container mx-auto w-full max-w-full overflow-hidden', className)}
	{...restProps}
>
	<div class="excalidraw-svg w-full" aria-label={alt}>
		{@html modifySvg(svg)}
	</div>
	{#if caption}
		<figcaption
			class={cn('text-base-700 dark:text-base-300 mt-4 text-center text-xs', captionClass)}
		>
			{caption}
		</figcaption>
	{/if}
</figure>
