<script lang="ts" module>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';
	import { cn } from '@foxui/core';

	export type LinkCardProps = WithElementRef<HTMLAttributes<HTMLDivElement>> &
		WithElementRef<HTMLAnchorAttributes> & {
			showMedia?: boolean;
			showDescription?: boolean;
			showTitle?: boolean;
			showDomain?: boolean;
			showGradient?: boolean;

			meta: {
				title: string;
				description?: string;

				image?: string;
				imageAlt?: string;

				video?: string;
				videoType?: string;
			};
		};
</script>

<script lang="ts">
	let {
		class: className,
		ref = $bindable(null),
		href,

		target = '_blank',

		showMedia = true,
		showDescription = false,
		showTitle = true,
		showDomain = true,
		showGradient = true,

		meta,

		children,
		...restProps
	}: LinkCardProps = $props();
</script>

<div
	bind:this={ref}
	class={cn(
		'not-prose group border-base-300 dark:border-base-900 bg-base-200/50 dark:bg-base-950/50 group relative isolate my-6 flex aspect-[1200/630] max-w-lg flex-col justify-end overflow-hidden rounded-2xl border p-4',
		'focus-within:outline-accent-500 focus-within:outline-2 focus-within:outline-offset-2',
		className
	)}
	{...restProps}
>
	{#if showMedia}
		{#if meta.video && meta.videoType}
			<video
				autoplay
				loop
				muted
				preload="metadata"
				width="1200"
				height="630"
				class="absolute inset-0 -z-10 h-full w-full rounded-2xl object-cover"
			>
				<source src={meta.video} type={meta.videoType} />
			</video>
		{:else if meta.image}
			<img
				src={meta.image}
				alt={meta.imageAlt || ''}
				width="1200"
				height="630"
				class="absolute inset-0 -z-10 h-full w-full rounded-2xl object-cover group-hover:scale-102 transition-all duration-300 ease-in-out"
			/>
		{/if}
	{/if}

	{#if showGradient}
		<div
			class="from-base-200/90 to-base-200/40 dark:from-base-950 dark:to-base-950/60 absolute inset-0 -z-10 rounded-xl bg-gradient-to-t"
		></div>
	{/if}

	{#if showDomain}
		<div class="dark:text-accent-400 text-accent-600 text-xs font-semibold">
			{href ? new URL(href).hostname.replace('www.', '') : ''}
		</div>
	{/if}

	<div class="text-base-950 dark:text-base-50 mt-2 text-lg font-semibold">
		<a {href} {target} class="focus:outline-none">
			<span class="absolute inset-0"></span>
			<div class={showTitle ? '' : 'sr-only'}>{meta?.title ?? href}</div>
		</a>
	</div>
	{#if showDescription}
		<div class="dark:text-base-400 text-base-700 mt-1 line-clamp-2 text-xs/5">
			{meta?.description ?? ''}
		</div>
	{/if}
</div>
