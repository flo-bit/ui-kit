<script lang="ts">
	import { cn } from '@foxui/all';
	import { Copy, Check } from '@foxui/all/moving-icons';
	import type { Snippet } from 'svelte';

	let { code, children }: { code: string; children: Snippet } = $props();

	let copied = $state(false);
	let hovered = $state(false);

	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(code);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	}
</script>

<div class="not-prose group relative isolate">
	<div class="absolute right-2 top-8 z-10">
		{#if !copied}
			<button
				class={cn(
					'not-prose focus-visible:outline-base-600 dark:focus-visible:outline-base-400 cursor-pointer focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2',
					'bg-base-200 inline-flex size-8 items-center justify-center p-1 transition-opacity duration-150 group-hover:opacity-100 pointer-fine:opacity-0',
					'dark:bg-base-800 border-base-400 dark:border-base-700 dark:hover:bg-base-700 hover:bg-base-300 rounded-ui border'
				)}
				onclick={copyToClipboard}
				onmouseenter={() => (hovered = true)}
				onmouseleave={() => (hovered = false)}
			>
				<Copy size={18} strokeWidth={1.5} animate={hovered} />
				<span class="sr-only">copy code</span>
			</button>
		{:else}
			<div
				class={cn(
					'bg-accent-500/10 border-accent-500/20 text-accent-600 dark:text-accent-400',
					'inline-flex size-8 items-center justify-center rounded-ui border p-1 transition-opacity duration-500'
				)}
			>
				<Check size={18} strokeWidth={1.5} animate />
			</div>
		{/if}
	</div>
	{@render children?.()}
</div>
