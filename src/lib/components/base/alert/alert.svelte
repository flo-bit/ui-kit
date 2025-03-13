<script lang="ts" module>
	import { type VariantProps, tv } from 'tailwind-variants';

	export const alertVariants = tv({
		base: 'text-xs relative w-full rounded-2xl border p-4 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:size-4 [&>svg~*]:pl-7 ',
		variants: {
			variant: {
				default:
					'bg-accent-500/10 [&>div:first-of-type]:text-accent-700 [&>svg]:text-accent-600 dark:[&>svg]:text-accent-500 dark:[&>div:first-of-type]:text-accent-400 dark:bg-accent-500/5 text-accent-600 dark:text-accent-400 border-accent-500/20 dark:border-accent-500/10',
				secondary:
					'bg-base-500/10 [&>div:first-of-type]:text-base-700 [&>svg]:text-base-600 dark:[&>svg]:text-base-400 dark:[&>div:first-of-type]:text-base-300 dark:bg-base-500/5 text-base-600 dark:text-base-400 border-base-500/20 dark:border-base-500/10',
				red: 'bg-red-500/10 [&>div:first-of-type]:text-red-700 [&>svg]:text-red-600 dark:[&>svg]:text-red-500 dark:[&>div:first-of-type]:text-red-400 dark:bg-red-500/5 text-red-600 dark:text-red-400 border-red-500/20 dark:border-red-500/10',
				orange:
					'bg-orange-500/10 [&>div:first-of-type]:text-orange-700 [&>svg]:text-orange-600 dark:[&>svg]:text-orange-500 dark:[&>div:first-of-type]:text-orange-400 dark:bg-orange-500/5 text-orange-600 dark:text-orange-400 border-orange-500/20 dark:border-orange-500/10',
				amber:
					'bg-amber-500/10 [&>div:first-of-type]:text-amber-700 [&>svg]:text-amber-600 dark:[&>svg]:text-amber-500 dark:[&>div:first-of-type]:text-amber-400 dark:bg-amber-500/5 text-amber-600 dark:text-amber-400 border-amber-500/20 dark:border-amber-500/10',
				yellow:
					'bg-yellow-500/10 [&>div:first-of-type]:text-yellow-700 [&>svg]:text-yellow-600 dark:[&>svg]:text-yellow-500 dark:[&>div:first-of-type]:text-yellow-400 dark:bg-yellow-500/5 text-yellow-600 dark:text-yellow-400 border-yellow-500/20 dark:border-yellow-500/10',
				lime: 'bg-lime-500/10 [&>div:first-of-type]:text-lime-700 [&>svg]:text-lime-600 dark:[&>svg]:text-lime-500 dark:[&>div:first-of-type]:text-lime-400 dark:bg-lime-500/5 text-lime-600 dark:text-lime-400 border-lime-500/20 dark:border-lime-500/10',
				green:
					'bg-green-500/10 [&>div:first-of-type]:text-green-700 [&>svg]:text-green-600 dark:[&>svg]:text-green-500 dark:[&>div:first-of-type]:text-green-400 dark:bg-green-500/5 text-green-600 dark:text-green-400 border-green-500/20 dark:border-green-500/10',
				emerald:
					'bg-emerald-500/10 [&>div:first-of-type]:text-emerald-700 [&>svg]:text-emerald-600 dark:[&>svg]:text-emerald-500 dark:[&>div:first-of-type]:text-emerald-400 dark:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 dark:border-emerald-500/10',
				teal: 'bg-teal-500/10 [&>div:first-of-type]:text-teal-700 [&>svg]:text-teal-600 dark:[&>svg]:text-teal-500 dark:[&>div:first-of-type]:text-teal-400 dark:bg-teal-500/5 text-teal-600 dark:text-teal-400 border-teal-500/20 dark:border-teal-500/10',
				cyan: 'bg-cyan-500/10 [&>div:first-of-type]:text-cyan-700 [&>svg]:text-cyan-600 dark:[&>svg]:text-cyan-500 dark:[&>div:first-of-type]:text-cyan-400 dark:bg-cyan-500/5 text-cyan-600 dark:text-cyan-400 border-cyan-500/20 dark:border-cyan-500/10',
				sky: 'bg-sky-500/10 [&>div:first-of-type]:text-sky-700 [&>svg]:text-sky-600 dark:[&>svg]:text-sky-500 dark:[&>div:first-of-type]:text-sky-400 dark:bg-sky-500/5 text-sky-600 dark:text-sky-400 border-sky-500/20 dark:border-sky-500/10',
				blue: 'bg-blue-500/10 [&>div:first-of-type]:text-blue-700 [&>svg]:text-blue-600 dark:[&>svg]:text-blue-500 dark:[&>div:first-of-type]:text-blue-400 dark:bg-blue-500/5 text-blue-600 dark:text-blue-400 border-blue-500/20 dark:border-blue-500/10',
				indigo:
					'bg-indigo-500/10 [&>div:first-of-type]:text-indigo-700 [&>svg]:text-indigo-600 dark:[&>svg]:text-indigo-500 dark:[&>div:first-of-type]:text-indigo-400 dark:bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 border-indigo-500/20 dark:border-indigo-500/10',
				violet:
					'bg-violet-500/10 [&>div:first-of-type]:text-violet-700 [&>svg]:text-violet-600 dark:[&>svg]:text-violet-500 dark:[&>div:first-of-type]:text-violet-400 dark:bg-violet-500/5 text-violet-600 dark:text-violet-400 border-violet-500/20 dark:border-violet-500/10',
				purple:
					'bg-purple-500/10 [&>div:first-of-type]:text-purple-700 [&>svg]:text-purple-600 dark:[&>svg]:text-purple-500 dark:[&>div:first-of-type]:text-purple-400 dark:bg-purple-500/5 text-purple-600 dark:text-purple-400 border-purple-500/20 dark:border-purple-500/10',
				fuchsia:
					'bg-fuchsia-500/10 [&>div:first-of-type]:text-fuchsia-700 [&>svg]:text-fuchsia-600 dark:[&>svg]:text-fuchsia-500 dark:[&>div:first-of-type]:text-fuchsia-400 dark:bg-fuchsia-500/5 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-500/20 dark:border-fuchsia-500/10',
				pink: 'bg-pink-500/10 [&>div:first-of-type]:text-pink-700 [&>svg]:text-pink-600 dark:[&>svg]:text-pink-500 dark:[&>div:first-of-type]:text-pink-400 dark:bg-pink-500/5 text-pink-600 dark:text-pink-400 border-pink-500/20 dark:border-pink-500/10',
				rose: 'bg-rose-500/10 [&>div:first-of-type]:text-rose-700 [&>svg]:text-rose-600 dark:[&>svg]:text-rose-500 dark:[&>div:first-of-type]:text-rose-400 dark:bg-rose-500/5 text-rose-600 dark:text-rose-400 border-rose-500/20 dark:border-rose-500/10'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	});

	export type AlertVariant = VariantProps<typeof alertVariants>['variant'];
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { WithElementRef } from 'bits-ui';
	import { AlertTitle } from '.';
	import { cn } from '$lib/utils';

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

	if (type === 'warning' && variant === undefined) {
		variant = 'amber';
	} else if (type === 'error' && variant === undefined) {
		variant = 'red';
	} else if (type === 'success' && variant === undefined) {
		variant = 'green';
	} else if (type === 'info' && variant === undefined) {
		variant = 'sky';
	}
</script>

<div
	bind:this={ref}
	class={cn(alertVariants({ variant: variant ?? 'default' }), className)}
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
