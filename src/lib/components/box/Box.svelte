<script lang="ts">
	import type { Snippet } from 'svelte';

	import { cn } from '$lib/utils';

	const { children, class: className }: { children: Snippet; class?: string } = $props();
</script>

<div
	class={cn(
		'relative border-base-300/50 bg-base-300/20 dark:border-base-800/50 dark:bg-base-900/30 rounded-2xl border min-h-96 w-full isolate overflow-hidden p-4 text-base-900 dark:text-base-100',
		className
	)}
>
	{@render children?.()}
</div>
