<script lang="ts">
	import { cn } from '@foxui/core';
	import type { Snippet } from 'svelte';

	let {
		onclick,
		children,
		class: className
	}: {
		onclick?: () => void;
		children: Snippet;
		class?: string;
	} = $props();
</script>

{#if onclick}
	<button
		class={cn('group/post-action inline-flex cursor-pointer items-center gap-2 text-sm', className)}
		{onclick}
	>
		{@render children?.()}
	</button>
{:else}
	<div class={cn('inline-flex items-center gap-2 text-sm', className)}>
		{@render children?.()}
	</div>
{/if}
