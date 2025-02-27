<script lang="ts" module>
	import type { WithElementRef, WithoutChildren } from 'bits-ui';
	import { type VariantProps, tv } from 'tailwind-variants';

	import type { HTMLTextareaAttributes } from 'svelte/elements';

	export const inputVariants = tv({
		base: 'focus:ring-2 ring-1 resize-none ring-inset border-0 focus:transition-transform rounded-2xl text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed duration-300 active:duration-100',
		variants: {
			variant: {
				primary:
					'focus:ring-accent-500 dark:focus:ring-accent-500 ring-accent-500/30 dark:ring-accent-500/20 bg-accent-400/5 dark:bg-accent-600/5 text-accent-700 dark:text-accent-400 placeholder:text-accent-700/70 dark:placeholder:text-accent-400/70',
				secondary:
					'focus:ring-base-800 dark:focus:ring-base-200 bg-base-100/50 dark:bg-base-900/50 text-base-900 dark:text-base-50 ring-base-200 dark:ring-base-800'
			},
			sizeVariant: {
				default: 'px-3 py-1.5 min-h-[80px]',
				sm: 'px-3 text-xs py-1.5 font-base min-h-[60px]',
				lg: 'px-4 text-lg py-2 font-semibold min-h-[100px]'
			}
		},
		defaultVariants: {
			variant: 'primary',
			sizeVariant: 'default'
		}
	});

	export type InputVariant = VariantProps<typeof inputVariants>['variant'];
	export type InputSize = VariantProps<typeof inputVariants>['sizeVariant'];

	export type InputProps = WithElementRef<HTMLTextareaAttributes> & {
		variant?: InputVariant;
		sizeVariant?: InputSize;
	};
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		variant = 'primary',
		sizeVariant = 'default',
		...restProps
	}: WithoutChildren<WithElementRef<HTMLTextareaAttributes>> & {
		variant?: InputVariant;
		sizeVariant?: InputSize;
	} = $props();
</script>

<textarea
	bind:this={ref}
	class={[inputVariants({ variant, sizeVariant }), className]}
	bind:value
	{...restProps}
></textarea>
