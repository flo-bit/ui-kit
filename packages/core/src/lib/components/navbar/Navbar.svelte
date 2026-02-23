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
		'border-base-400/30 dark:border-base-300/10 dark:bg-base-950/70 fixed top-1 right-0 left-0 z-50 mx-1 flex h-16 items-center justify-between overflow-hidden rounded-2xl border p-2 shadow-lg inset-shadow-black/50 backdrop-blur-lg dark:shadow-none dark:inset-shadow-sm',
		hasSidebar ? 'lg:left-74' : '',
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
