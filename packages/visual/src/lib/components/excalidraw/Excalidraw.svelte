<script lang="ts">
	import type { WithElementRef, WithoutChildrenOrChild } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '@foxui/core';

	import { load } from 'cheerio';

	let {
		ref = $bindable(null),
		svg,
		alt,
		caption,
		class: className,
		captionClass,
		...restProps
	}: WithElementRef<WithoutChildrenOrChild<HTMLAttributes<HTMLElement>>> & {
		svg: string;
		alt: string;
		caption?: string;
		captionClass?: string;
	} = $props();

	function modifySvg(svgString: string): string {
		const loadedSvg = load(svgString, { xmlMode: true });

		const svg = loadedSvg('svg');
		svg.attr('width', '100%');
		svg.attr('height', '100%');
		svg.addClass('w-full h-auto');
		svg.removeAttr('filter');

		loadedSvg('text').each((_, el) => {
			loadedSvg(el).removeAttr('fill');
			loadedSvg(el).addClass('fill-base-800 dark:fill-base-100');
		});

		loadedSvg('rect').each((_, el) => {
			loadedSvg(el).removeAttr('fill');
			loadedSvg(el).addClass('fill-accent-600 dark:fill-accent-500');
		});

		loadedSvg('path').each((_, el) => {
			loadedSvg(el).removeAttr('stroke');
			loadedSvg(el).addClass('stroke-accent-600 dark:stroke-accent-500');
			if (loadedSvg(el).attr('fill') !== 'none') {
				loadedSvg(el).addClass('fill-accent-600 dark:fill-accent-500');
				loadedSvg(el).removeAttr('fill');
			}
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
