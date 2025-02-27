<script lang="ts">
	import { ScrollArea, type WithoutChild } from 'bits-ui';

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
		class={[
			'flex touch-none select-none transition-colors z-10',
			orientation === 'vertical' && 'h-full w-2 border-l border-l-transparent p-px',
			orientation === 'horizontal' && 'h-2 w-full border-t border-t-transparent p-px',
			className
		]}
		{...restProps}
	>
		<ScrollArea.Thumb
			class={[
				'relative hover:bg-base-400 dark:hover:bg-base-600 transition-colors rounded-full bg-base-300 dark:bg-base-700',
				orientation === 'vertical' && 'flex-1'
			]}
		/>
	</ScrollArea.Scrollbar>
{/snippet}

<ScrollArea.Root bind:ref {...restProps} class={['relative overflow-hidden', className]}>
	<ScrollArea.Viewport class={['h-full w-full rounded-[inherit]', viewportClasses]}>
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
