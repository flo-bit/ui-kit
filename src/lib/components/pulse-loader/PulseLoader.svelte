<script lang="ts">
	import type { WithElementRef, WithoutChildrenOrChild } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),

		class: className,
		...restProps
	}: WithElementRef<WithoutChildrenOrChild<HTMLAttributes<HTMLDivElement>>> = $props();
</script>

<div class={['relative inline-flex size-3', className]} {...restProps} bind:this={ref}>
	<div class="-z-10 h-full w-full rounded-full border border-accent-600/40 bg-accent-600/40"></div>
	<div class="absolute inset-0 h-full w-full animate-ping rounded-full bg-accent-500/50"></div>
	<div
		class="absolute inset-0 z-10 h-full w-full animate-pulse rounded-full border border-accent-500/50 bg-accent-500/50"
	></div>
</div>
