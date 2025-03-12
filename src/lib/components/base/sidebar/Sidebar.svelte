<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import ScrollArea from '../scroll-area/ScrollArea.svelte';
	import { cn } from '$lib/utils';

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
		'mobileMenuPopover border-base-200 rounded-2xl ml-2 my-2 bg-base-50 dark:border-base-300/10 dark:bg-base-950 inset-auto top-0 left-0 block h-[calc(100dvh-1rem)] w-72 border shadow-lg lg:hidden',
		className,
		mobileClasses
	)}
>
	<ScrollArea type="hover" class="h-full">
		{@render children?.()}
	</ScrollArea>
</div>

{#if !mobileOnly}
	<div
		class={cn(
			'border-base-200 bg-base-50 dark:border-base-300/10 dark:bg-base-950 fixed top-0 bottom-0 left-0 z-40 hidden h-full -translate-x-72 overflow-y-auto border-r lg:block lg:w-72 lg:translate-x-0 xl:w-80',
			className
		)}
	>
		<ScrollArea type="hover" class="h-full">
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
