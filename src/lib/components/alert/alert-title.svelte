<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { WithElementRef } from 'bits-ui';
	import { cn } from '$lib/utils';
	
	let {
		ref = $bindable(null),
		class: className,
		level = 5,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		level?: 1 | 2 | 3 | 4 | 5 | 6;
	} = $props();
</script>

<div
	role="heading"
	aria-level={level}
	bind:this={ref}
	class={cn('mb-2 text-sm font-medium leading-none last:mb-0', className)}
	{...restProps}
>
	{@render children?.()}
</div>
