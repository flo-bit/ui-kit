<script lang="ts">
	import type { EmbedImageData, ImageData } from './types';

	const {
		data,
		showSensitive = true
	}: {
		data: EmbedImageData;
		showSensitive?: boolean;
	} = $props();

	let revealed = $state(false);
</script>

{#snippet imageSnippet(image: ImageData, className?: string)}
	{#if data.onclick}
		<button class="cursor-pointer" onclick={() => data.onclick!(image)}>
			<img
				loading="lazy"
				src={image.thumb}
				alt={image.alt}
				width={image.aspectRatio?.width}
				height={image.aspectRatio?.height}
				style={image.aspectRatio
					? `aspect-ratio: ${image.aspectRatio.width} / ${image.aspectRatio.height}`
					: 'aspect-ratio: 1 / 1'}
				class={[
					'border-base-500/20 dark:border-base-400/20 accent:border-accent-900 max-h-160 w-full max-w-full rounded-2xl border object-cover',
					className
				]}
			/>
		</button>
	{:else}
		<img
			loading="lazy"
			src={image.thumb}
			alt={image.alt}
			width={image.aspectRatio?.width}
			height={image.aspectRatio?.height}
			style={image.aspectRatio
				? `aspect-ratio: ${image.aspectRatio.width} / ${image.aspectRatio.height}`
				: 'aspect-ratio: 1 / 1'}
			class={[
				'border-base-500/20 dark:border-base-400/20 accent:border-accent-900 max-h-160 w-full max-w-full rounded-2xl border object-cover',
				className
			]}
		/>
	{/if}
{/snippet}

{#if data.sensitive && showSensitive && !revealed}
	{@const firstImage = data.images[0]}
	<button
		onclick={() => (revealed = true)}
		style={firstImage?.aspectRatio
			? `aspect-ratio: ${firstImage.aspectRatio.width} / ${firstImage.aspectRatio.height}`
			: 'aspect-ratio: 1 / 1'}
		class="border-base-500/20 bg-base-200/50 text-base-600 dark:border-base-400/20 dark:bg-base-800/50 dark:text-base-400 accent:border-accent-900 flex max-h-160 w-full cursor-pointer items-center justify-center rounded-2xl border text-center text-sm"
	>
		Sensitive content, click to show.
	</button>
{:else if data.images.length === 1}
	{@render imageSnippet(data.images[0])}
{:else}
	<div class="columns-2 gap-4">
		{#each data.images as image (image.thumb)}
			{@render imageSnippet(image, 'mb-4')}
		{/each}
	</div>
{/if}
