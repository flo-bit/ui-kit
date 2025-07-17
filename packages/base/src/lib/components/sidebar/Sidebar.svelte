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

	const borderClasses = 'border shadow-lg border-base-200 dark:border-base-300/10 backdrop-blur-xl';

	const backgroundClasses = 'bg-gradient-to-b inset-shadow-sm inset-shadow-base-800/5 dark:inset-shadow-base-100/5 from-base-50/50 to-base-200/50 dark:from-base-900/50 dark:to-base-900/30';
</script>

<div
	popover="auto"
	id="mobile-menu"
	class={cn(
		'mobileMenuPopover bg-transparent',
		borderClasses,
		'inset-auto left-0 top-0 my-2 ml-2 block h-[calc(100dvh-1rem)] w-72 overflow-y-hidden rounded-3xl lg:hidden',
		className,
		mobileClasses
	)}
	{...restProps}
>
	<div class={cn(borderClasses, 'h-full overflow-y-hidden w-full')}>
		<ScrollArea orientation="vertical" class="h-full">
			{@render children?.()}
		</ScrollArea>
	</div>
</div>

{#if !mobileOnly}
	<div
		class={cn(
			borderClasses,
			'fixed my-2 ml-0.5 overflow-y-hidden rounded-r-3xl',
			'inset-auto -left-1 top-0 z-50 block h-[calc(100dvh-1rem)] w-64 lg:hidden',
			'hidden -translate-x-72 border lg:block lg:translate-x-0',
			className
		)}
		{...restProps}
	>
		<div class={cn(backgroundClasses, 'h-full overflow-y-hidden')}>
			<ScrollArea orientation="vertical" class="h-full overflow-y-scroll">
				{@render children?.()}
			</ScrollArea>
		</div>
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
			backdrop-filter: blur(4px);
		}
	}
</style>
