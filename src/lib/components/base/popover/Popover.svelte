<script lang="ts">
	import { cn } from '$lib';
	import { buttonVariants, type ButtonSize, type ButtonVariant } from '$lib/components/base/button';
	import * as Popover from '$lib/components/base/popover';
	import { Popover as PopoverPrimitive } from 'bits-ui';

	type Props = PopoverPrimitive.RootProps & {
		triggerProps?: PopoverPrimitive.TriggerProps;
		text?: string;

		triggerText?: string;
		triggerClasses?: string;
		triggerVariant?: ButtonVariant;
		triggerSize?: ButtonSize;

		triggerRef?: HTMLButtonElement | null;
	} & PopoverPrimitive.ContentProps &
		PopoverPrimitive.TriggerProps;

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
		...restProps
	}: Props = $props();
</script>

<Popover.Root bind:open {onOpenChange}>
	{#if myChild}
		<Popover.Trigger class={triggerClasses} bind:ref={triggerRef}>
			{#snippet child({ props })}
				{@render myChild?.({ props })}
			{/snippet}
		</Popover.Trigger>
	{:else}
		<Popover.Trigger
			class={cn(buttonVariants({ variant: triggerVariant, size: triggerSize }), triggerClasses)}
			bind:ref={triggerRef}
		>
			{triggerText}
		</Popover.Trigger>
	{/if}
	<Popover.Content {side} {sideOffset} {...restProps}>
		{@render children?.()}
	</Popover.Content>
</Popover.Root>
