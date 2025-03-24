<script lang="ts">
	import type { WithElementRef, WithoutChildrenOrChild } from 'bits-ui';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { cn } from '$lib';

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
		'text-base-800 hover:text-accent-600 dark:text-base-300 dark:hover:text-accent-400 transition-colors',
		className
	)}
	{...restProps}
>
	<span class="sr-only">X</span>

	<svg
		role="img"
		viewBox="0 0 24 24"
		class={['size-6', svgClasses]}
		fill="currentColor"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		><title>X</title><path
			d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
		/></svg
	>
</a>
