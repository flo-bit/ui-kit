<script lang="ts">
	import type { WithElementRef, WithoutChildrenOrChild } from 'bits-ui';
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

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

	let modifiedSvg = $state('');

	// Function to modify the SVG using the DOM API
	function modifySvg(svgString: string) {
		// Create a DOM parser
		const parser = new DOMParser();
		const doc = parser.parseFromString(svgString, 'image/svg+xml');
		const svg = doc.documentElement;

		// Modify the SVG element
		svg.setAttribute('width', '100%');
		svg.setAttribute('height', '100%');
		svg.classList.add('w-full', 'h-auto');
		svg.removeAttribute('filter');

		// Modify text elements
		const textElements = svg.querySelectorAll('text');
		textElements.forEach((el) => {
			el.removeAttribute('fill');
			el.classList.add('fill-base-800', 'dark:fill-base-100');
		});

		// Modify rect elements
		const rectElements = svg.querySelectorAll('rect');
		rectElements.forEach((el) => {
			el.removeAttribute('fill');
			el.classList.add('fill-accent-600', 'dark:fill-accent-500');
		});

		// Modify path elements
		const pathElements = svg.querySelectorAll('path');
		pathElements.forEach((el) => {
			el.removeAttribute('stroke');
			el.classList.add('stroke-accent-600', 'dark:stroke-accent-500');
			if (el.getAttribute('fill') !== 'none') {
				el.classList.add('fill-accent-600', 'dark:fill-accent-500');
				el.removeAttribute('fill');
			}
		});

		// Modify group elements
		const groupElements = svg.querySelectorAll('g');
		groupElements.forEach((el) => {
			el.classList.add('excalidraw-element');
		});

		// Convert back to string
		return new XMLSerializer().serializeToString(svg);
	}

	onMount(async () => {
		modifiedSvg = modifySvg(svg);
	});
</script>

<figure
	bind:this={ref}
	class={cn('excalidraw-container mx-auto w-full max-w-full overflow-hidden', className)}
	{...restProps}
>
	<div class="excalidraw-svg w-full" aria-label={alt}>
		{@html modifiedSvg}
	</div>
	{#if caption}
		<figcaption
			class={cn('text-base-700 dark:text-base-300 mt-4 text-center text-xs', captionClass)}
		>
			{caption}
		</figcaption>
	{/if}
</figure>

<noscript>
	<div
		class="border-base-200 bg-base-100 text-base-700 dark:border-base-700 dark:bg-base-900 dark:text-base-300 w-full rounded-2xl border p-4 text-sm"
	>
		JavaScript is required to view this content.
	</div>

	<style>
		.excalidraw-container {
			display: hidden;
		}
	</style>
</noscript>
