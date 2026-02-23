<script lang="ts">
	import { cn } from '../../utils';
	import type { WithChildren, WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref,
		children,
		class: className,
		...restProps
	}: WithElementRef<WithChildren<HTMLAttributes<HTMLDivElement>>> = $props();
</script>

<div
	bind:this={ref}
	class={cn(
		'border-base-300/50 bg-base-50/70 backdrop-blur-2xl dark:border-base-800/70 dark:bg-base-950/60 text-base-900 dark:text-base-100 relative isolate w-full overflow-hidden rounded-2xl border p-4',
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
