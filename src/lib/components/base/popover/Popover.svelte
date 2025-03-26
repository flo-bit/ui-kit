<script lang="ts">
	import { cn, buttonVariants, type ButtonSize, type ButtonVariant } from '$lib';
	import { Popover as PopoverPrimitive } from 'bits-ui';
	import { Content } from '.';
	const Root = PopoverPrimitive.Root;
	const Trigger = PopoverPrimitive.Trigger;

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
		class: className,
		...restProps
	}: Props = $props();
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
	<Content {side} {sideOffset} class={className} {...restProps}>
		{@render children?.()}
	</Content>
</Root>
