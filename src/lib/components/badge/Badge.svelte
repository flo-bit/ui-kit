<script lang="ts" module>
	import { type VariantProps, tv } from 'tailwind-variants';
	import { cn } from '$lib/utils';

	export const badgeVariants = tv({
		base: 'inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 duration-300 active:duration-100 [&_svg]:pointer-events-none [&_svg]:shrink-0',
		variants: {
			variant: {
				primary:
					'border border-accent-500/20 dark:border-accent-500/20 bg-accent-500/10 dark:bg-accent-500/10 text-accent-700 dark:text-accent-400',
				secondary:
					'bg-base-100 dark:bg-base-900 text-base-900 dark:text-base-50 border border-base-200 dark:border-base-800',

				red: 'border border-red-500/20 dark:border-red-500/20 bg-red-500/10 dark:bg-red-500/10 text-red-700 dark:text-red-400',
				yellow:
					'border border-yellow-500/20 dark:border-yellow-500/20 bg-yellow-500/10 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400',
				green:
					'border border-green-500/20 dark:border-green-500/20 bg-green-500/10 dark:bg-green-500/10 text-green-700 dark:text-green-400',
				blue: 'border border-blue-500/20 dark:border-blue-500/20 bg-blue-500/10 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400',
				indigo:
					'border border-indigo-500/20 dark:border-indigo-500/20 bg-indigo-500/10 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400',
				violet:
					'border border-violet-500/20 dark:border-violet-500/20 bg-violet-500/10 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400',
				purple:
					'border border-purple-500/20 dark:border-purple-500/20 bg-purple-500/10 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400',
				fuchsia:
					'border border-fuchsia-500/20 dark:border-fuchsia-500/20 bg-fuchsia-500/10 dark:bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-400',
				pink: 'border border-pink-500/20 dark:border-pink-500/20 bg-pink-500/10 dark:bg-pink-500/10 text-pink-700 dark:text-pink-400',
				rose: 'border border-rose-500/20 dark:border-rose-500/20 bg-rose-500/10 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400',
				orange:
					'border border-orange-500/20 dark:border-orange-500/20 bg-orange-500/10 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400',
				amber:
					'border border-amber-500/20 dark:border-amber-500/20 bg-amber-500/10 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400',
				lime: 'border border-lime-500/20 dark:border-lime-500/20 bg-lime-500/10 dark:bg-lime-500/10 text-lime-700 dark:text-lime-400',
				emerald:
					'border border-emerald-500/20 dark:border-emerald-500/20 bg-emerald-500/10 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
				teal: 'border border-teal-500/20 dark:border-teal-500/20 bg-teal-500/10 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400',
				cyan: 'border border-cyan-500/20 dark:border-cyan-500/20 bg-cyan-500/10 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400',
				sky: 'border border-sky-500/20 dark:border-sky-500/20 bg-sky-500/10 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400'
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
