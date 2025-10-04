<script lang="ts" module>
	import type { WithElementRef } from 'bits-ui';
	import { type VariantProps, tv } from 'tailwind-variants';
	import { cn } from '../../utils';

	import type { HTMLInputAttributes, HTMLInputTypeAttribute } from 'svelte/elements';

	export const inputVariants = tv({
		base: 'focus:ring-2 ring-1 ring-inset border-0 focus:transition-transform rounded-2xl text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed duration-300 active:duration-100',
		variants: {
			variant: {
				primary:
					'focus:ring-accent-500 dark:focus:ring-accent-500 ring-accent-500/30 dark:ring-accent-500/20 bg-accent-400/5 dark:bg-accent-600/5 text-accent-700 dark:text-accent-400 placeholder:text-accent-700/50 dark:placeholder:text-accent-400/50',
				secondary:
					'focus:ring-base-800 dark:focus:ring-base-200 bg-base-100/50 dark:bg-base-900/50 text-base-900 dark:text-base-50 ring-base-200 dark:ring-base-800 placeholder:text-base-900/50 dark:placeholder:text-base-50/50'
			},
			sizeVariant: {
				default: 'px-3 py-1.5 text-base',
				sm: 'px-3 text-xs py-1.5 font-base',
				lg: 'px-4 text-lg py-2 font-semibold'
			}
		},
		defaultVariants: {
			variant: 'primary',
			sizeVariant: 'default'
		}
	});

	export type InputVariant = VariantProps<typeof inputVariants>['variant'];
	export type InputSize = VariantProps<typeof inputVariants>['sizeVariant'];

	type InputType = Exclude<HTMLInputTypeAttribute, 'file'>;

	export type InputProps = WithElementRef<
		Omit<HTMLInputAttributes, 'type'> & { type?: InputType }
	> & {
		variant?: InputVariant;
		sizeVariant?: InputSize;
	};
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		value = $bindable(),
		type,
		class: className,
		variant = 'primary',
		sizeVariant = 'default',
		...restProps
	}: InputProps = $props();
</script>

<input
	bind:this={ref}
	class={cn(inputVariants({ variant, sizeVariant }), className)}
	{type}
	bind:value
	{...restProps}
/>
