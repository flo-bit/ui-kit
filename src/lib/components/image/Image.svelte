<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	import type { WithElementRef, WithoutChildrenOrChild } from 'bits-ui';

	import { onMount } from 'svelte';
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	let loaded = $state(false);

	onMount(() => {
		if (ref?.complete) loaded = true;
	});
	let {
		ref = $bindable(null),
		src,
		alt,
		class: className,
		imageClasses,
		useThemeColor = false,
		blur = true
	}: WithoutChildrenOrChild<WithElementRef<HTMLImgAttributes, HTMLImageElement>> & {
		useThemeColor?: boolean;
		imageClasses?: string;
		blur?: boolean;
	} = $props();
</script>

<div
	class={cn(
		'border-base-300 dark:border-base-700 relative overflow-hidden rounded-2xl border',
		className
	)}
>
	{#if useThemeColor}
		<div class="bg-accent-500/30 pointer-events-none absolute inset-0 z-20 size-full"></div>
	{/if}

	<Img
		{src}
		bind:ref
		{alt}
		onload={() => (loaded = true)}
		style={useThemeColor ? 'filter: grayscale(100%) brightness(1.2)' : ''}
		class={imageClasses}
	/>
	{#if blur}
		<div
			class="image-blur rounded-2xl pointer-events-none absolute inset-0 backdrop-blur-md data-[loaded=true]:hidden"
			data-loaded={loaded}
		></div>
	{/if}
</div>

<noscript>
	<style>
		.image-blur {
			display: none;
		}
	</style>
</noscript>
