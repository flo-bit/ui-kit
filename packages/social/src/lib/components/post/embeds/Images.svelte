<script lang="ts">
	import type { PostEmbedImage, PostImageData } from '..';

	const {
		data,
		onclickimage
	}: { data: PostEmbedImage; onclickimage?: (image: PostImageData) => void } = $props();
</script>

{#snippet imageSnippet(image: PostImageData, className?: string)}
	{#if onclickimage}
		<button class="cursor-pointer" onclick={() => onclickimage(image)}>
			<img
				loading="lazy"
				src={image.thumb}
				alt={image.alt}
				style={image.aspectRatio
					? `aspect-ratio: ${image.aspectRatio.width} / ${image.aspectRatio.height}`
					: 'aspect-ratio: 1 / 1'}
				class={[
					'border-base-500/20 dark:border-base-400/20 accent:border-accent-900 max-h-[40rem] w-fit max-w-full rounded-2xl border object-contain',
					className
				]}
			/>
		</button>
	{:else}
		<img
			loading="lazy"
			src={image.thumb}
			alt={image.alt}
			style={image.aspectRatio
				? `aspect-ratio: ${image.aspectRatio.width} / ${image.aspectRatio.height}`
				: 'aspect-ratio: 1 / 1'}
			class={[
				'border-base-500/20 dark:border-base-400/20 accent:border-accent-900 max-h-[40rem] w-fit max-w-full rounded-2xl border object-contain',
				className
			]}
		/>
	{/if}
{/snippet}

{#if data.images.length === 1}
	{@render imageSnippet(data.images[0])}
{:else}
	<div class="columns-2 gap-4">
		{#each data.images as image (image.thumb)}
			{@render imageSnippet(image, 'mb-4')}
		{/each}
	</div>
{/if}
