<script lang="ts">
	import { cn } from '$lib/utils';
	import ImageContainer from '../image-container/ImageContainer.svelte';

	const {
		src,
		alt,
		title,
		description,
		href,
		onclick
	}: {
		src: string;
		alt: string;
		title: string;
		description?: string;
		href?: string;
		onclick?: () => void;
	} = $props();
</script>

{#snippet titleSnippet()}
	<h3 class="text-base-900 dark:text-base-50 line-clamp-2 text-sm font-semibold">{title}</h3>
{/snippet}

<div
	class={cn(
		'group relative flex w-full flex-col gap-5 transition-opacity duration-300 ease-in-out',
		href || onclick ? 'hover:opacity-80' : ''
	)}
>
	<ImageContainer
		{src}
		{alt}
		containerClasses="w-full rounded-2xl overflow-hidden"
		class={[
			'aspect-video w-full object-cover transition-all duration-500 ease-in-out',
			href || onclick ? 'group-hover:scale-105' : ''
		]}
	></ImageContainer>
	<div class="flex max-w-xl flex-col gap-2">
		{#if href}
			<a {href}>
				{@render titleSnippet()}
				<span aria-hidden="true" class="absolute inset-0"></span>
			</a>
		{:else if onclick}
			<button {onclick} class="inline-flex w-full cursor-pointer items-start">
				{@render titleSnippet()}
				<span aria-hidden="true" class="absolute inset-0"></span>
			</button>
		{:else}
			{@render titleSnippet()}
		{/if}
		{#if description}
			<p class="text-base-500 line-clamp-2 text-xs leading-4.5">{description}</p>
		{/if}
	</div>
</div>
