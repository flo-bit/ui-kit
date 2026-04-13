<script lang="ts" module>
	import { type VariantProps, tv } from 'tailwind-variants';
	import { cn } from '../../utils';

	export const badgeVariants = tv({
		base: 'inline-flex items-center justify-center whitespace-nowrap rounded-ui text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 duration-300 active:duration-100 [&_svg]:pointer-events-none [&_svg]:shrink-0',
		variants: {
			variant: {
				primary:
					'shadow-lg shadow-accent-500/5 dark:shadow-accent-500/2 inset-shadow-sm inset-shadow-accent-700/5 dark:inset-shadow-accent-500/2 border border-accent-500/15 dark:border-accent-500/15 bg-accent-200/50 dark:bg-accent-950/20 text-accent-900 dark:text-accent-400',
				primary_shift:
					'shadow-lg shadow-[oklch(from_var(--color-accent-500)_l_c_calc(h+35)_/_0.05)] dark:shadow-[oklch(from_var(--color-accent-500)_l_c_calc(h+35)_/_0.02)] inset-shadow-sm inset-shadow-[oklch(from_var(--color-accent-700)_l_c_calc(h+35)_/_0.05)] dark:inset-shadow-[oklch(from_var(--color-accent-500)_l_c_calc(h+35)_/_0.02)] border border-[oklch(from_var(--color-accent-500)_l_c_calc(h+35)_/_0.15)] dark:border-[oklch(from_var(--color-accent-500)_l_c_calc(h+35)_/_0.15)] bg-[oklch(from_var(--color-accent-200)_l_c_calc(h+35)_/_0.5)] dark:bg-[oklch(from_var(--color-accent-950)_l_c_calc(h+35)_/_0.2)] text-[oklch(from_var(--color-accent-900)_l_c_calc(h+35))] dark:text-[oklch(from_var(--color-accent-400)_l_c_calc(h+35))]',
				primary_shift_2:
					'shadow-lg shadow-[oklch(from_var(--color-accent-500)_l_c_calc(h+70)_/_0.05)] dark:shadow-[oklch(from_var(--color-accent-500)_l_c_calc(h+70)_/_0.02)] inset-shadow-sm inset-shadow-[oklch(from_var(--color-accent-700)_l_c_calc(h+70)_/_0.05)] dark:inset-shadow-[oklch(from_var(--color-accent-500)_l_c_calc(h+70)_/_0.02)] border border-[oklch(from_var(--color-accent-500)_l_c_calc(h+70)_/_0.15)] dark:border-[oklch(from_var(--color-accent-500)_l_c_calc(h+70)_/_0.15)] bg-[oklch(from_var(--color-accent-200)_l_c_calc(h+70)_/_0.5)] dark:bg-[oklch(from_var(--color-accent-950)_l_c_calc(h+70)_/_0.2)] text-[oklch(from_var(--color-accent-900)_l_c_calc(h+70))] dark:text-[oklch(from_var(--color-accent-400)_l_c_calc(h+70))]',
				secondary:
					'shadow-lg shadow-base-500/5 dark:shadow-base-500/2 inset-shadow-sm inset-shadow-base-700/2 dark:inset-shadow-base-500/2 bg-base-300/40 dark:bg-base-800/30 text-base-900 dark:text-base-50 border border-base-300/50 dark:border-base-700/30'
			},
			size: {
				sm: 'px-2 text-xs py-0.5 [&_svg]:size-3 gap-1.5',
				md: 'px-3 py-1 [&_svg]:size-4 gap-2',
				lg: 'px-4 text-lg py-1.5 [&_svg]:size-5 gap-2.5'
			}
		},
		defaultVariants: {
			variant: 'primary',
			size: 'sm'
		}
	});

	export type BadgeVariant = VariantProps<typeof badgeVariants>['variant'];
	export type BadgeSize = VariantProps<typeof badgeVariants>['size'];
</script>

<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		variant = 'primary',
		size = 'sm',
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLSpanElement>> & {
		variant?: BadgeVariant;
		size?: BadgeSize;
	} = $props();
</script>

<span bind:this={ref} class={cn(badgeVariants({ variant, size }), className)} {...restProps}>
	{@render children?.()}
</span>
