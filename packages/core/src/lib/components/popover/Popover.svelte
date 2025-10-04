<script lang="ts" module>
	const Root = PopoverPrimitive.Root;
	const Trigger = PopoverPrimitive.Trigger;

	export type PopoverProps = PopoverPrimitive.RootProps & {
		triggerProps?: PopoverPrimitive.TriggerProps;
		text?: string;

		triggerText?: string;
		triggerClasses?: string;
		triggerVariant?: ButtonVariant;
		triggerSize?: ButtonSize;

		triggerRef?: HTMLButtonElement | null;
	} & PopoverPrimitive.ContentProps &
		PopoverPrimitive.TriggerProps;
</script>

<script lang="ts">
	import { buttonVariants, type ButtonSize, type ButtonVariant } from '../button';
	import { Popover as PopoverPrimitive } from 'bits-ui';
	import { PopoverContent } from '.';
	import { cn } from '../../utils';

	let {
		open = $bindable(false),
		onOpenChange,
		children,

		triggerText,
		triggerClasses = '',
		triggerVariant = 'primary',
		triggerSize = 'default',
		triggerRef = $bindable(null),

		side = 'top',
		sideOffset = 10,

		child: myChild,
		class: className,
		...restProps
	}: PopoverProps = $props();
</script>

<Root bind:open {onOpenChange}>
	{#if myChild}
		<Trigger class={triggerClasses} bind:ref={triggerRef}>
			{#snippet child({ props })}
				{@render myChild?.({ props })}
			{/snippet}
		</Trigger>
	{:else}
		<Trigger
			class={cn(buttonVariants({ variant: triggerVariant, size: triggerSize }), triggerClasses)}
			bind:ref={triggerRef}
		>
			{triggerText}
		</Trigger>
	{/if}
	<PopoverContent {side} {sideOffset} class={className} {...restProps}>
		{@render children?.()}
	</PopoverContent>
</Root>
