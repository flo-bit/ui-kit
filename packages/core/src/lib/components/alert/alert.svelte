<script lang="ts" module>
	import { type VariantProps, tv } from 'tailwind-variants';

	export const alertVariants = tv({
		base: 'text-xs relative w-full rounded-2xl border p-4 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:size-4 [&>svg~*]:pl-7 ',
		variants: {
			variant: {
				default:
					'backdrop-blur-lg bg-accent-100/70 shadow-lg transform-all inset-shadow-sm inset-shadow-accent-700/5 dark:inset-shadow-accent-500/2 shadow-accent-500/5 dark:shadow-accent-500/2 dark:bg-accent-950/20 [&>div:first-of-type]:text-accent-800 [&>svg]:text-accent-700 dark:[&>svg]:text-accent-400 dark:[&>div:first-of-type]:text-accent-300 text-accent-800 dark:text-accent-300 border-accent-500/20 dark:border-accent-500/10',
				secondary:
					'backdrop-blur-lg bg-base-200/70 shadow-lg transform-all inset-shadow-sm inset-shadow-base-700/5 dark:inset-shadow-base-500/2 shadow-base-500/5 dark:shadow-base-950/10 dark:bg-base-900/40 [&>div:first-of-type]:text-base-800 [&>svg]:text-base-700 dark:[&>svg]:text-base-400 dark:[&>div:first-of-type]:text-base-200 text-base-800 dark:text-base-300 border-base-500/20 dark:border-base-500/10',
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
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
			<path
				fill-rule="evenodd"
				d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
				clip-rule="evenodd"
			/>
		</svg>
	{:else if type === 'success'}
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
			<path
				fill-rule="evenodd"
				d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
				clip-rule="evenodd"
			/>
		</svg>
	{:else if type === 'info'}
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
			<path
				fill-rule="evenodd"
				d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
				clip-rule="evenodd"
			/>
		</svg>
	{:else if type === 'error'}
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
			<path
				fill-rule="evenodd"
				d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
				clip-rule="evenodd"
			/>
		</svg>
	{/if}
	{#if title}
		<AlertTitle>{title}</AlertTitle>
	{/if}
	{@render children?.()}
</div>
