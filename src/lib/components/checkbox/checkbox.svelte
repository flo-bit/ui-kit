<script lang="ts" module>
	import { Checkbox as CheckboxPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import { type VariantProps, tv } from 'tailwind-variants';
	import { cn } from '$lib/utils';

	export const checkboxVariants = tv({
		base: 'peer box-content size-4 shrink-0 inline-flex items-center justify-center rounded-2xl border outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-500 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50',
		variants: {
			variant: {
				primary:
					'border-accent-200 bg-accent-100 focus-visible:outline-accent-500 data-[state=checked]:border-accent-300 data-[state=checked]:bg-accent-200 data-[state=checked]:text-accent-600 dark:border-accent-500/20 dark:bg-accent-500/5 dark:text-accent-500 dark:data-[state=checked]:border-accent-500/30 dark:data-[state=checked]:bg-accent-500/20 dark:data-[state=checked]:text-accent-500',
				secondary:
					'border-base-300 bg-base-100 focus-visible:outline-base-900 dark:focus-visible:outline-base-100 data-[state=checked]:border-base-400 data-[state=checked]:bg-base-200 data-[state=checked]:text-base-900 dark:border-base-700 dark:bg-base-900 dark:text-base-50 dark:data-[state=checked]:border-base-500/80 dark:data-[state=checked]:bg-base-500/30 dark:data-[state=checked]:text-base-100'
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
		<div class="flex size-4 items-center justify-center text-current">
			{#if indeterminate}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2.5"
					stroke="currentColor"
					class={[
						sizeVariant === 'sm' && 'size-3.5',
						sizeVariant === 'default' && 'size-4',
						sizeVariant === 'lg' && 'size-4.5'
					]}
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2.5"
					stroke="currentColor"
					class={[
						sizeVariant === 'sm' && 'size-3.5',
						sizeVariant === 'default' && 'size-4',
						sizeVariant === 'lg' && 'size-4.5',
						!checked && 'text-transparent'
					]}
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
				</svg>
			{/if}
		</div>
	{/snippet}
</CheckboxPrimitive.Root>
