<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../../utils';

	const {
		class: className,
		children,
		hasSidebar = false,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & { hasSidebar?: boolean } = $props();
</script>

<div
	class={cn(
		'border-base-400/40 dark:border-base-300/10 bg-base-200/70 dark:bg-base-950/70 fixed top-1 right-0 left-0 z-50 mx-1 flex h-16 items-center justify-between overflow-hidden rounded-2xl border p-2 dark:inset-shadow-black/50 backdrop-blur-lg inset-shadow-sm inset-shadow-base-800/10',
		hasSidebar ? 'lg:left-74' : '',
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
