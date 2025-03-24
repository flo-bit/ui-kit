<script lang="ts">
	// todo convert to radio group
	import { cn } from '$lib';
	import type { WithElementRef, WithoutChildrenOrChild } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		rating = $bindable(),
		size = 'size-8',
		changeable = true,
		class: className,
		ref = $bindable(null),
		strokeWidth = 0.8,
		buttonClasses,
		svgClasses,
		...restProps
	}: WithElementRef<WithoutChildrenOrChild<HTMLAttributes<HTMLDivElement>>> & {
		rating: number;
		size?: string;
		changeable?: boolean;

		strokeWidth?: number;

		buttonClasses?: string;
		svgClasses?: string;
	} = $props();

	let hoverRating = $state(rating);

	$effect(() => {
		hoverRating = rating;
	});
</script>

<div class={cn('flex items-center', className)} {...restProps} bind:this={ref}>
	{#if changeable}
		{#each Array.from({ length: 5 }).map((_, i) => i + 1) as i}
			<button
				class={cn(
					'group focus-visible:outline-base-900 dark:focus-visible:outline-base-100 cursor-pointer rounded-xl focus-visible:outline-2',
					buttonClasses
				)}
				onclick={() => (rating = i)}
				onfocus={() => (hoverRating = i)}
				onblur={() => (hoverRating = rating)}
				onmouseenter={() => (hoverRating = i)}
				onmouseleave={() => (hoverRating = rating)}
			>
				<svg
					class={cn(
						size,
						'shrink-0',
						i > rating &&
							i > hoverRating &&
							'stroke-base-400 text-base-100 dark:stroke-base-700/70 dark:text-base-900',
						i <= rating &&
							i <= hoverRating &&
							'stroke-accent-600 text-accent-400 dark:stroke-accent-500/80 dark:text-accent-500/40',

						((i > rating && i <= hoverRating) || (i > hoverRating && i <= rating)) &&
							'stroke-accent-600/50 text-accent-400/50 dark:stroke-accent-500/40 dark:text-accent-500/20',
						svgClasses
					)}
					viewBox="0 0 24 24"
					fill="currentColor"
					aria-hidden="true"
					stroke-width={strokeWidth}
					data-slot="icon"
				>
					<path
						fill-rule="evenodd"
						d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
						clip-rule="evenodd"
					/>
				</svg>

				<span class="sr-only">rate {i} stars</span>
			</button>
		{/each}
	{:else}
		{#each Array.from({ length: 5 }).map((_, i) => i + 1) as i}
			<svg
				class={cn(
					size,
					'stroke-base-400 text-base-100 dark:stroke-base-700 dark:text-base-800 shrink-0',
					i <= rating &&
						'stroke-accent-600 text-accent-400 dark:stroke-accent-500/80 dark:text-accent-500/50',
					svgClasses
				)}
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
				stroke-width={strokeWidth}
				data-slot="icon"
			>
				<path
					fill-rule="evenodd"
					d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
					clip-rule="evenodd"
				/>
			</svg>
		{/each}
	{/if}
</div>
