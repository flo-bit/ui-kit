<script lang="ts">
	import type { WithElementRef, WithoutChildrenOrChild } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib';

	let {
		ref = $bindable(null),

		class: className,
		...restProps
	}: WithElementRef<WithoutChildrenOrChild<HTMLAttributes<HTMLDivElement>>> = $props();
</script>

<div class={cn('relative inline-flex size-3', className)} {...restProps} bind:this={ref}>
	<div class="border-accent-600/40 bg-accent-600/40 -z-10 h-full w-full rounded-full border"></div>
	<div class="bg-accent-500/50 absolute inset-0 h-full w-full animate-ping rounded-full"></div>
	<div
		class="border-accent-500/50 bg-accent-500/50 absolute inset-0 z-10 h-full w-full animate-pulse rounded-full border"
	></div>
</div>
