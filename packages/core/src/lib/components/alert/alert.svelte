<script lang="ts" module>
	import { type VariantProps, tv } from 'tailwind-variants';

	export const alertVariants = tv({
		base: 'text-xs relative w-full rounded-ui border p-4 [&>[role=img]]:absolute [&>[role=img]]:left-4 [&>[role=img]]:top-4 [&>[role=img]~*]:pl-7 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:size-4 [&>svg~*]:pl-7',
		variants: {
			variant: {
				default:
					'bg-accent-100/70 shadow-lg transform-all inset-shadow-sm inset-shadow-accent-700/5 dark:inset-shadow-accent-500/2 shadow-accent-500/5 dark:shadow-accent-500/2 dark:bg-accent-950/20 [&>div:first-of-type]:text-accent-800 [&>[role=img]]:text-accent-700 dark:[&>[role=img]]:text-accent-400 [&>svg]:text-accent-700 dark:[&>svg]:text-accent-400 dark:[&>div:first-of-type]:text-accent-300 text-accent-800 dark:text-accent-300 border-accent-500/20 dark:border-accent-500/10',
				secondary:
					'bg-base-200/70 shadow-lg transform-all inset-shadow-sm inset-shadow-base-700/5 dark:inset-shadow-base-500/2 shadow-base-500/5 dark:shadow-base-950/10 dark:bg-base-900/40 [&>div:first-of-type]:text-base-800 [&>[role=img]]:text-base-700 dark:[&>[role=img]]:text-base-400 [&>svg]:text-base-700 dark:[&>svg]:text-base-400 dark:[&>div:first-of-type]:text-base-200 text-base-800 dark:text-base-300 border-base-500/20 dark:border-base-500/10',
			},
			type: {
				default: '',
				info: 'sky',
				warning: 'amber',
				error: 'red',
				success: 'green'
			}
		},
		defaultVariants: {
			variant: 'default',
			type: 'default'
		}
	});

	export type AlertVariant = VariantProps<typeof alertVariants>['variant'];
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { WithElementRef } from 'bits-ui';
	import { AlertTitle } from '.';
	import { cn } from '../../utils';
	import { TriangleAlert, CircleCheck, CircleX } from '@jis3r/icons';
	import { Info } from '@lucide/svelte';

	let {
		ref = $bindable(null),
		class: className,
		variant = undefined,
		title,
		type,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		variant?: AlertVariant;
		title?: string;
		type?: 'info' | 'warning' | 'success' | 'error';
	} = $props();
</script>

<div
	bind:this={ref}
	class={cn(alertVariants({ variant: variant ?? 'default', type: type ?? 'default' }), className)}
	{...restProps}
	role="alert"
>
	{#if type === 'warning'}
		<TriangleAlert size={16} strokeWidth={2} animate />
	{:else if type === 'success'}
		<CircleCheck size={16} strokeWidth={2} animate />
	{:else if type === 'info'}
		<Info size={16} strokeWidth={2} />
	{:else if type === 'error'}
		<CircleX size={16} strokeWidth={2} animate />
	{/if}
	{#if title}
		<AlertTitle>{title}</AlertTitle>
	{/if}
	{@render children?.()}
</div>
