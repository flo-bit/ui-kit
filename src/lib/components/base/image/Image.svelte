<script lang="ts" module>
	import { cn } from '$lib/utils';
	import type { HTMLImgAttributes } from 'svelte/elements';
	import type { WithElementRef, WithoutChildrenOrChild } from 'bits-ui';

	export type ImageProps = WithoutChildrenOrChild<
		WithElementRef<HTMLImgAttributes, HTMLImageElement>
	> & {
		useThemeColor?: boolean;
		containerClasses?: string;
		blur?: boolean;
		showNormalOnHover?: boolean;
		alt: string;
	};
</script>

<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	import { onMount } from 'svelte';

	let loaded = $state(false);

	onMount(() => {
		if (ref?.complete) loaded = true;
	});
	let {
		ref = $bindable(null),
		src,
		alt,
		class: className,
		containerClasses,
		useThemeColor = false,
		showNormalOnHover = false,
		blur = true,
		...restProps
	}: ImageProps = $props();
</script>

<div class={cn('group relative h-fit w-fit', containerClasses)}>
	{#if useThemeColor}
		<div
			class={[
				'bg-accent-500/30 pointer-events-none absolute inset-0 z-20 size-full',
				showNormalOnHover ? 'transition-all duration-300 ease-in-out group-hover:opacity-0' : ''
			]}
		></div>
	{/if}

	{#if typeof src === 'string'}
		<img
			{src}
			bind:this={ref}
			{alt}
			class={cn(
				useThemeColor ? 'brightness-125 grayscale' : '',
				showNormalOnHover ? 'transition-all duration-300 ease-in-out group-hover:filter-none' : '',
				className
			)}
			{...restProps}
			onload={(evt) => {
				loaded = true
				if(restProps.onload) {
					restProps.onload(evt)
				}
			}}
		/>
	{:else}
		<Img
			{src}
			bind:ref
			{alt}
			class={cn(
				useThemeColor ? 'brightness-125 grayscale' : '',
				showNormalOnHover ? 'transition-all duration-300 ease-in-out group-hover:filter-none' : '',
				className
			)}
			width={restProps.width ? Number(restProps.width) : undefined}
			height={restProps.height ? Number(restProps.height) : undefined}

			loading={restProps.loading ?? 'lazy'}
			decoding={restProps.decoding ?? 'async'}
			
			sizes={restProps.sizes ?? undefined}

			onload={(evt) => {
				loaded = true
				if(restProps.onload) {
					restProps.onload(evt)
				}
			}}
		/>
	{/if}
	{#if !(typeof src === 'string') && blur}
		<div
			class="image-blur pointer-events-none absolute inset-0 rounded-2xl backdrop-blur-md data-[loaded=true]:hidden"
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
