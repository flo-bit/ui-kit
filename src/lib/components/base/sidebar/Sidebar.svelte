<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn, ScrollArea } from '$lib';

	const {
		class: className,
		mobileClasses,
		children,
		mobileOnly = false,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		mobileClasses?: string;
		mobileOnly?: boolean;
	} = $props();
</script>

<div
	popover="auto"
	id="mobile-menu"
	class={cn(
		'mobileMenuPopover border-base-200 bg-base-50 dark:border-base-300/10 dark:bg-base-950 my-2 ml-2 overflow-y-hidden rounded-2xl',
		'inset-auto top-0 left-0 block h-[calc(100dvh-1rem)] w-72 border shadow-lg lg:hidden',
		className,
		mobileClasses
	)}
	{...restProps}
>
	<ScrollArea orientation="vertical" class="h-screen">
		{@render children?.()}
	</ScrollArea>
</div>

{#if !mobileOnly}
	<div
		class={cn(
			'border-base-200 bg-base-50 dark:border-base-300/10 dark:bg-base-950 fixed top-0 bottom-0 left-0 z-40',
			'hidden -translate-x-72 border-r lg:block lg:w-72 lg:translate-x-0 xl:w-80',
			className
		)}
		{...restProps}
	>
		<ScrollArea orientation="vertical" class="h-screen overflow-y-scroll">
			{@render children?.()}
		</ScrollArea>
	</div>
{/if}

<style>
	.mobileMenuPopover {
		/* Closed state transformed off the screen */
		transform: translateX(-110%);
		transition:
			transform 0.1s,
			overlay 0.1s ease-out;

		/* Styles while the menu is open */
		&:popover-open {
			transform: translateX(0);
		}

		/* Backdrop that overlays other content */
		&::backdrop {
			background-color: rgba(0, 0, 0, 0.5);
		}
	}
</style>
