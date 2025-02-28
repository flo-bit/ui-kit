<script lang="ts">
	import { ScrollArea, type WithoutChild } from 'bits-ui';
	import { cn } from '$lib/utils';

	type Props = WithoutChild<ScrollArea.RootProps> & {
		orientation?: 'vertical' | 'horizontal' | 'both';
		viewportClasses?: string;
		scrollbarYClasses?: string;
		scrollbarXClasses?: string;
	};

	let {
		ref = $bindable(null),
		orientation = 'vertical',
		viewportClasses,
		class: className,
		scrollbarYClasses = '',
		scrollbarXClasses = '',
		children,
		...restProps
	}: Props = $props();
</script>

{#snippet Scrollbar({
	orientation,
	class: className,
	...restProps
}: {
	orientation: 'vertical' | 'horizontal';
	class: string;
	[key: string]: any;
})}
	<ScrollArea.Scrollbar
		{orientation}
		class={cn(
			'z-10 flex touch-none select-none transition-colors',
			orientation === 'vertical' && 'h-full w-2 border-l border-l-transparent p-px',
			orientation === 'horizontal' && 'h-2 w-full border-t border-t-transparent p-px',
			className
		)}
		{...restProps}
	>
		<ScrollArea.Thumb
			class={[
				'relative rounded-full bg-base-300 transition-colors hover:bg-base-400 dark:bg-base-700 dark:hover:bg-base-600',
				orientation === 'vertical' && 'flex-1'
			]}
		/>
	</ScrollArea.Scrollbar>
{/snippet}

<ScrollArea.Root bind:ref {...restProps} class={cn('relative overflow-hidden', className)}>
	<ScrollArea.Viewport class={cn('h-full w-full rounded-[inherit]', viewportClasses)}>
		{@render children?.()}
	</ScrollArea.Viewport>
	{#if orientation === 'vertical' || orientation === 'both'}
		{@render Scrollbar({ orientation: 'vertical', class: scrollbarYClasses })}
	{/if}
	{#if orientation === 'horizontal' || orientation === 'both'}
		{@render Scrollbar({ orientation: 'horizontal', class: scrollbarXClasses })}
	{/if}
	<ScrollArea.Corner />
</ScrollArea.Root>
