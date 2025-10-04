<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../../utils';
	import { ScrollArea } from '../scroll-area';

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
		'mobileMenuPopover border-base-200 bg-white/70 dark:border-base-300/10 dark:bg-base-950/50 my-2 ml-2 overflow-y-hidden rounded-2xl',
		'inset-auto left-0 top-0 block h-[calc(100dvh-1rem)] w-72 border shadow-lg lg:hidden backdrop-blur-xl',
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
			'border-base-200 bg-base-50/50 dark:border-base-300/10 dark:bg-base-950/50 backdrop-blur-xl fixed my-1 ml-0.5 overflow-y-hidden rounded-2xl',
			'inset-auto left-1 top-0 z-50 block h-[calc(100dvh-0.5rem)] w-72 border shadow-lg lg:hidden',
			'hidden -translate-x-72 border lg:block lg:w-72 lg:translate-x-0',
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
