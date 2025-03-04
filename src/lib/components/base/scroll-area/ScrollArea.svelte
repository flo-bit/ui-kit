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
			'z-10 flex touch-none transition-colors select-none',
			orientation === 'vertical' && 'h-full w-2 border-l border-l-transparent p-px',
			orientation === 'horizontal' && 'h-2 w-full border-t border-t-transparent p-px',
			className
		)}
		{...restProps}
	>
		<ScrollArea.Thumb
			class={[
				'bg-base-300 hover:bg-base-400 dark:bg-base-700 dark:hover:bg-base-600 relative rounded-full transition-colors',
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
