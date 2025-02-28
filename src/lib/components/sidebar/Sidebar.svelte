<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import ScrollArea from '../scroll-area/ScrollArea.svelte';
	import { cn } from '$lib/utils';

	const {
		class: className,
		mobileClasses,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		mobileClasses?: string;
	} = $props();
</script>

<div
	popover="auto"
	id="mobile-menu"
	class={cn(
		'mobileMenuPopover inset-auto left-0 top-0 block h-[100dvh] w-72 border-r border-base-200 bg-base-50 shadow-lg dark:border-base-300/10 dark:bg-base-950',
		className,
		mobileClasses
	)}
>
	<ScrollArea type="hover" class="h-full">
		{@render children?.()}
	</ScrollArea>
</div>

<div
	class={cn(
		'fixed bottom-0 left-0 top-0 z-40 h-full -translate-x-72 overflow-y-auto border-r border-base-200 bg-base-50 dark:border-base-300/10 dark:bg-base-950 lg:w-72 lg:translate-x-0 xl:w-80',
		className
	)}
>
	<ScrollArea type="hover" class="h-full">
		{@render children?.()}
	</ScrollArea>
</div>

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
