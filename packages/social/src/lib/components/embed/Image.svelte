<script lang="ts">
	import type { ImageData } from './types';

	const {
		image,
		onclick,
		class: className
	}: {
		image: ImageData;
		onclick?: (image: ImageData) => void;
		class?: string;
	} = $props();
</script>

{#if onclick}
	<button class="cursor-pointer" onclick={() => onclick(image)}>
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
				'border-base-500/20 dark:border-base-400/20 accent:border-accent-900 max-h-160 w-full max-w-full rounded-ui border object-cover',
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
			'border-base-500/20 dark:border-base-400/20 accent:border-accent-900 max-h-160 w-full max-w-full rounded-ui border object-cover',
			className
		]}
	/>
{/if}
