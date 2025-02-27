<script lang="ts" module>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { type VariantProps, tv } from 'tailwind-variants';

	export const buttonVariants = tv({
		base: 'focus-visible:outline focus-visible:transition-transform focus-visible:outline-2 outline-offset-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl active:scale-95 text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 duration-300 active:duration-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
		variants: {
			variant: {
				primary:
					'focus-visible:outline-accent-500 border border-accent-500/20 dark:border-accent-500/20 hover:bg-accent-500/20 dark:hover:bg-accent-500/20 bg-accent-500/10 dark:bg-accent-500/10 text-accent-700 dark:text-accent-400',
				secondary:
					'focus-visible:outline-base-800 dark:focus-visible:outline-base-200 bg-base-100 dark:bg-base-900 text-base-900 dark:text-base-50 hover:bg-base-200 dark:hover:bg-base-800 border border-base-200 dark:border-base-800',
				link: 'focus-visible:outline-base-900 dark:focus-visible:outline-base-50 text-base-800 dark:text-base-200 font-semibold hover:text-accent-600 dark:hover:text-accent-400',

				red: 'focus-visible:outline-red-500 border border-red-500/20 dark:border-red-500/20 hover:bg-red-500/20 dark:hover:bg-red-500/20 bg-red-500/10 dark:bg-red-500/10 text-red-700 dark:text-red-400',
				yellow:
					'focus-visible:outline-yellow-500 border border-yellow-500/20 dark:border-yellow-500/20 hover:bg-yellow-500/20 dark:hover:bg-yellow-500/20 bg-yellow-500/10 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400',
				green:
					'focus-visible:outline-green-500 border border-green-500/20 dark:border-green-500/20 hover:bg-green-500/20 dark:hover:bg-green-500/20 bg-green-500/10 dark:bg-green-500/10 text-green-700 dark:text-green-400',
				blue: 'focus-visible:outline-blue-500 border border-blue-500/20 dark:border-blue-500/20 hover:bg-blue-500/20 dark:hover:bg-blue-500/20 bg-blue-500/10 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400',
				indigo:
					'focus-visible:outline-indigo-500 border border-indigo-500/20 dark:border-indigo-500/20 hover:bg-indigo-500/20 dark:hover:bg-indigo-500/20 bg-indigo-500/10 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400',
				violet:
					'focus-visible:outline-violet-500 border border-violet-500/20 dark:border-violet-500/20 hover:bg-violet-500/20 dark:hover:bg-violet-500/20 bg-violet-500/10 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400',
				purple:
					'focus-visible:outline-purple-500 border border-purple-500/20 dark:border-purple-500/20 hover:bg-purple-500/20 dark:hover:bg-purple-500/20 bg-purple-500/10 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400',
				fuchsia:
					'focus-visible:outline-fuchsia-500 border border-fuchsia-500/20 dark:border-fuchsia-500/20 hover:bg-fuchsia-500/20 dark:hover:bg-fuchsia-500/20 bg-fuchsia-500/10 dark:bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-400',
				pink: 'focus-visible:outline-pink-500 border border-pink-500/20 dark:border-pink-500/20 hover:bg-pink-500/20 dark:hover:bg-pink-500/20 bg-pink-500/10 dark:bg-pink-500/10 text-pink-700 dark:text-pink-400',
				rose: 'focus-visible:outline-rose-500 border border-rose-500/20 dark:border-rose-500/20 hover:bg-rose-500/20 dark:hover:bg-rose-500/20 bg-rose-500/10 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400',
				orange:
					'focus-visible:outline-orange-500 border border-orange-500/20 dark:border-orange-500/20 hover:bg-orange-500/20 dark:hover:bg-orange-500/20 bg-orange-500/10 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400',
				amber:
					'focus-visible:outline-amber-500 border border-amber-500/20 dark:border-amber-500/20 hover:bg-amber-500/20 dark:hover:bg-amber-500/20 bg-amber-500/10 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400',
				lime: 'focus-visible:outline-lime-500 border border-lime-500/20 dark:border-lime-500/20 hover:bg-lime-500/20 dark:hover:bg-lime-500/20 bg-lime-500/10 dark:bg-lime-500/10 text-lime-700 dark:text-lime-400',
				emerald:
					'focus-visible:outline-emerald-500 border border-emerald-500/20 dark:border-emerald-500/20 hover:bg-emerald-500/20 dark:hover:bg-emerald-500/20 bg-emerald-500/10 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
				teal: 'focus-visible:outline-teal-500 border border-teal-500/20 dark:border-teal-500/20 hover:bg-teal-500/20 dark:hover:bg-teal-500/20 bg-teal-500/10 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400',
				cyan: 'focus-visible:outline-cyan-500 border border-cyan-500/20 dark:border-cyan-500/20 hover:bg-cyan-500/20 dark:hover:bg-cyan-500/20 bg-cyan-500/10 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400',
				sky: 'focus-visible:outline-sky-500 border border-sky-500/20 dark:border-sky-500/20 hover:bg-sky-500/20 dark:hover:bg-sky-500/20 bg-sky-500/10 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400'
			},
			size: {
				default: 'px-3 py-1.5',
				sm: 'px-2 text-xs py-1 font-base [&_svg]:size-3 gap-1.5',
				lg: 'px-4 gap-2.5 text-lg py-2 font-semibold [&_svg]:size-5 gap-2.5',
				icon: 'p-2',
				iconSm: 'p-1.5 [&_svg]:size-3',
				iconLg: 'p-3 [&_svg]:size-5'
			}
		},
		defaultVariants: {
			variant: 'primary',
			size: 'default'
		}
	});

	export type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];
	export type ButtonSize = VariantProps<typeof buttonVariants>['size'];

	export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
		WithElementRef<HTMLAnchorAttributes> & {
			variant?: ButtonVariant;
			size?: ButtonSize;
		};
</script>

<script lang="ts">
	let {
		class: className,
		variant = 'primary',
		size = 'default',
		ref = $bindable(null),
		href = undefined,
		type = 'button',
		children,
		...restProps
	}: ButtonProps = $props();
</script>

{#if href}
	<a bind:this={ref} class={[buttonVariants({ variant, size }), className]} {href} {...restProps}>
		{@render children?.()}
	</a>
{:else}
	<button
		bind:this={ref}
		class={[buttonVariants({ variant, size }), className]}
		{type}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}
