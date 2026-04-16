<script lang="ts" module>
	import { RadioGroup as RadioGroupPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import { type VariantProps, tv } from 'tailwind-variants';
	import { cn } from '../../utils';

	export const radioGroupItemVariants = tv({
		base: 'peer cursor-pointer box-content relative shrink-0 inline-flex items-center justify-center rounded-full border transition-colors duration-100 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-disabled:cursor-not-allowed data-disabled:opacity-40 data-disabled:grayscale',
		variants: {
			variant: {
				primary:
					'border-accent-500/40 bg-accent-100/60 focus-visible:outline-accent-500 data-[state=checked]:border-accent-500/60 data-[state=checked]:bg-accent-200/60 dark:border-accent-500/20 dark:bg-accent-950/20 dark:data-[state=checked]:border-accent-500/30 dark:data-[state=checked]:bg-accent-900/40',
				secondary:
					'border-base-300 bg-base-100/80 focus-visible:outline-base-900 dark:focus-visible:outline-base-100 data-[state=checked]:border-base-400 data-[state=checked]:bg-base-200/80 dark:border-base-600/40 dark:bg-base-950/40 dark:data-[state=checked]:border-base-500/80 dark:data-[state=checked]:bg-base-500/30'
			},
			sizeVariant: {
				default: 'size-5',
				sm: 'size-4',
				lg: 'size-6'
			}
		},
		defaultVariants: {
			variant: 'primary',
			sizeVariant: 'default'
		}
	});

	export type RadioGroupItemVariant = VariantProps<typeof radioGroupItemVariants>['variant'];
	export type RadioGroupItemSize = VariantProps<typeof radioGroupItemVariants>['sizeVariant'];

	export type RadioGroupItemProps = WithoutChildrenOrChild<RadioGroupPrimitive.ItemProps> & {
		variant?: RadioGroupItemVariant;
		sizeVariant?: RadioGroupItemSize;
	};
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		class: className,
		variant = 'primary',
		sizeVariant = 'default',
		...restProps
	}: RadioGroupItemProps = $props();
</script>

<RadioGroupPrimitive.Item
	bind:ref
	class={cn(radioGroupItemVariants({ variant, sizeVariant }), className)}
	{...restProps}
>
	{#snippet children({ checked })}
		{#if checked}
			{@const dotSize = sizeVariant === 'sm' ? 'size-1.5' : sizeVariant === 'lg' ? 'size-2.5' : 'size-2'}
			<div
				class={cn(
					'rounded-full',
					dotSize,
					variant === 'primary'
						? 'bg-accent-600 dark:bg-accent-400'
						: 'bg-base-900 dark:bg-base-100'
				)}
			></div>
		{/if}
	{/snippet}
</RadioGroupPrimitive.Item>
