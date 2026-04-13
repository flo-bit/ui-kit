<script lang="ts" module>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { type VariantProps, tv } from 'tailwind-variants';
	import { cn } from '../../utils';

	export const buttonVariants = tv({
		base: 'touch-manipulation hover:cursor-pointer hover:scale-101 focus-visible:scale-101 disabled:hover:scale-100 motion-safe:focus-visible:transition-transform focus-visible:outline-2 outline-offset-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-ui active:scale-98 text-sm font-medium motion-safe:transition-all disabled:pointer-events-none disabled:opacity-60 duration-800 active:duration-100 hover:duration-300 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
		variants: {
			variant: {
				primary:
					'shadow-lg transform-all shadow-accent-500/5 dark:shadow-accent-500/2 disabled:shadow-md active:shadow-md  inset-shadow-sm inset-shadow-accent-700/5 dark:inset-shadow-accent-500/2 focus-visible:outline-accent-500 border border-accent-500/15 dark:border-accent-500/15 hover:bg-accent-200/60 dark:hover:bg-accent-950/25 bg-accent-200/50 dark:bg-accent-950/20 text-accent-950 dark:text-accent-400',
				secondary:
					'shadow-lg transform-all shadow-base-500/5 dark:shadow-base-500/2 active:shadow-md inset-shadow-sm inset-shadow-base-700/2 dark:inset-shadow-base-500/2 focus-visible:outline-base-800 dark:focus-visible:outline-base-200 bg-base-400/30 dark:bg-base-700/30 text-base-900 dark:text-base-50 hover:bg-base-400/40 dark:hover:bg-base-700/35 border border-base-400/50 dark:border-base-700/30',
				link: 'focus-visible:outline-base-900 dark:focus-visible:outline-base-50 text-base-800 dark:text-base-200 font-semibold hover:text-accent-600 dark:hover:text-accent-400 data-[current=true]:text-accent-600 dark:data-[current=true]:text-accent-400',
				ghost:
					'focus-visible:outline-base-900 dark:focus-visible:outline-base-50 text-base-800 dark:text-base-200 font-semibold hover:text-accent-600 hover:bg-accent-400/5 data-[current=true]:bg-accent-500/5 dark:hover:text-accent-400 dark:hover:bg-accent-700/5 data-[current=true]:text-accent-600 dark:data-[current=true]:text-accent-400 dark:data-[current=true]:bg-accent-500/5'
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
			haptics?: boolean;
		};
</script>

<script lang="ts">
	import { createWebHaptics } from 'web-haptics/svelte';
	import { onDestroy } from 'svelte';
	import { hapticsConfig } from '../../haptics/config';

	let {
		class: className,
		variant = 'primary',
		size = 'default',
		ref = $bindable(null),
		href = undefined,
		type = 'button',
		haptics,
		onclick,
		children,
		...restProps
	}: ButtonProps = $props();

	const { trigger, destroy } = createWebHaptics();
	onDestroy(destroy);
</script>

{#if href}
	<a
		bind:this={ref}
		class={cn(buttonVariants({ variant, size }), className)}
		{href}
		onclick={(e) => {
			if (onclick && haptics !== false && hapticsConfig.enabled) trigger();
			onclick?.(e);
		}}
		{...restProps}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		bind:this={ref}
		class={cn(buttonVariants({ variant, size }), className)}
		{type}
		onclick={(e) => {
			if (onclick && haptics !== false && hapticsConfig.enabled) trigger();
			onclick?.(e);
		}}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}
