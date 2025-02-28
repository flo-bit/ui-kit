<script lang="ts">
	import type { WithElementRef, WithoutChildrenOrChild } from 'bits-ui';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';
	
	const {
		class: className,
		target = '_blank',
		svgClasses,
		...restProps
	}: WithoutChildrenOrChild<WithElementRef<HTMLAnchorAttributes>> & {
		svgClasses?: string;
	} = $props();
</script>

<a
	{target}
	class={cn(
		'text-base-600 hover:text-base-800 dark:text-base-400 dark:hover:text-base-200',
		className
	)}
	{...restProps}
>
	<span class="sr-only">YouTube</span>
	<svg class={['size-7', svgClasses]} fill="currentColor" viewBox="1 2 21 22" aria-hidden="true">
		<path
			fill-rule="evenodd"
			d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
			clip-rule="evenodd"
		/>
	</svg>
</a>
