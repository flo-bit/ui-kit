<script lang="ts">
	import { Badge, cn } from '@foxui/core';

	type Props = {
		images: {
			src: string;

			name: string;
			href?: string;
			width?: number;
			height?: number;
			onclick?: () => void;
			alt?: string;
		}[];
		interactive?: boolean;
		maxColumns?: number;
		showNames?: boolean;
		class?: string;
	};

	const { images, interactive = true, maxColumns = 4, showNames = true, class: className }: Props = $props();
</script>

{#snippet backgroundTitle(name?: string)}
	{#if showNames}
		<div
			class={cn(
				'from-base-950/80 absolute inset-0 z-10 h-full w-full bg-gradient-to-t via-transparent opacity-80',
				interactive
					? 'transition-opacity duration-200 group-hover:opacity-90 group-focus:opacity-100 [@media(pointer:fine)]:opacity-0'
					: ''
			)}
		></div>

		<div
			class={cn(
				'pointer-events-none absolute inset-0 z-20 flex h-full w-full items-end overflow-hidden px-3 py-2 text-xl font-semibold leading-6 tracking-tight text-white md:px-4 md:py-3',
				interactive
					? 'transition-translation duration-200 group-hover:translate-y-0 [@media(pointer:fine)]:translate-y-20'
					: ''
			)}
		>
			<div class="mt-1 text-sm sm:text-lg">{name}</div>
		</div>
	{:else}
		<div class="absolute inset-0 z-10 h-full w-full"></div>
		<span class="sr-only">{name}</span>
	{/if}
{/snippet}

<div
	class={cn(
		'not-prose gap-x-4',
		maxColumns === 2 ? 'columns-2' : '',
		maxColumns === 3 ? 'columns-2 sm:columns-3' : '',
		maxColumns === 4 ? 'columns-2 sm:columns-3 md:columns-4' : '',
		className
	)}
>
	{#each images as image}
		<div
			class="group relative mb-4 w-full break-inside-avoid-column overflow-hidden rounded-2xl border border-white/15"
			style={`aspect-ratio: ${image.width ?? 1} / ${image.height ?? 1}`}
		>
			<img
				src={image.src}
				alt={image.alt}
				class={cn(
					'absolute inset-0 h-full w-full rounded-2xl object-cover',
					image.onclick || image.href ? 'transition-all duration-300 group-hover:scale-105' : ''
				)}
				loading="lazy"
				width="270"
			/>

			{#if image.href}
				<a href={image.href} class="z-20">
					{@render backgroundTitle(image.name)}
				</a>
			{:else if image.onclick}
				<button
					class="z-20 cursor-pointer"
					onclick={() => {
						image.onclick?.();
					}}
				>
					{@render backgroundTitle(image.name)}
				</button>
			{:else}
				{@render backgroundTitle(image.name)}
			{/if}
		</div>
	{/each}
</div>
