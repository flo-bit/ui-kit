<script lang="ts" module>
	import { Checkbox as CheckboxPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import { type VariantProps, tv } from 'tailwind-variants';
	import { cn } from '../../utils';
	import { Check, Minus } from '@jis3r/icons';

	export const checkboxVariants = tv({
		base: 'peer cursor-pointer box-content shrink-0 inline-flex items-center justify-center rounded-ui-sm border transition-colors duration-100 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-500 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50',
		variants: {
			variant: {
				primary:
					'border-accent-500/40 bg-accent-100/60 focus-visible:outline-accent-500 data-[state=checked]:border-accent-500/60 data-[state=checked]:bg-accent-200/60 data-[state=checked]:text-accent-900 dark:border-accent-500/20 dark:bg-accent-950/20 dark:text-accent-500 dark:data-[state=checked]:border-accent-500/30 dark:data-[state=checked]:bg-accent-900/40 dark:data-[state=checked]:text-accent-200',
				secondary:
					'border-base-300 bg-base-100/80 focus-visible:outline-base-900 dark:focus-visible:outline-base-100 data-[state=checked]:border-base-400 data-[state=checked]:bg-base-200/80 data-[state=checked]:text-base-900 dark:border-base-600/40 dark:bg-base-950/40 dark:text-base-50 dark:data-[state=checked]:border-base-500/80 dark:data-[state=checked]:bg-base-500/30 dark:data-[state=checked]:text-base-100'
			},
			sizeVariant: {
				default: 'size-5',
				sm: 'size-4 rounded-ui-sm',
				lg: 'size-6'
			}
		},
		defaultVariants: {
			variant: 'primary',
			sizeVariant: 'default'
		}
	});

	export type CheckboxVariant = VariantProps<typeof checkboxVariants>['variant'];
	export type CheckboxSize = VariantProps<typeof checkboxVariants>['sizeVariant'];

	export type CheckboxProps = WithoutChildrenOrChild<CheckboxPrimitive.RootProps> & {
		variant?: CheckboxVariant;
		sizeVariant?: CheckboxSize;
	};
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		checked = $bindable(false),
		indeterminate = $bindable(false),
		variant = $bindable('primary'),
		sizeVariant = $bindable('default'),
		class: className,
		...restProps
	}: CheckboxProps = $props();
</script>

<CheckboxPrimitive.Root
	bind:ref
	class={cn(checkboxVariants({ variant, sizeVariant }), className)}
	bind:checked
	bind:indeterminate
	{...restProps}
>
	{#snippet children({ checked, indeterminate })}
		{@const iconSize = sizeVariant === 'sm' ? 14 : sizeVariant === 'lg' ? 18 : 16}
		<div class="flex size-4 items-center justify-center text-current">
			{#if indeterminate}
				<Minus size={iconSize} strokeWidth={2.5} />
			{:else if checked}
				<Check size={iconSize} strokeWidth={3} animate />
			{/if}
		</div>
	{/snippet}
</CheckboxPrimitive.Root>