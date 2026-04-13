<script lang="ts">
	import { cn } from '@foxui/all';
	import { Copy, Check } from '@foxui/all/moving-icons';

	let { url, class: className }: { url: string; class?: string } = $props();
	let copied = $state(false);
	let hovered = $state(false);

	async function copy() {
		try {
			await navigator.clipboard.writeText(url);
			copied = true;
			setTimeout(() => (copied = false), 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	}
</script>

<div
	class={cn(
		'bg-base-100 dark:bg-base-950/40 border-base-300 dark:border-base-800 flex items-center gap-2 rounded-ui border p-2 pl-4',
		className
	)}
>
	<code class="text-accent-700 dark:text-accent-300 grow overflow-x-auto font-mono text-sm whitespace-nowrap">{url}</code>
	<button
		type="button"
		onclick={copy}
		onmouseenter={() => (hovered = true)}
		onmouseleave={() => (hovered = false)}
		class={cn(
			'shrink-0 cursor-pointer inline-flex size-8 items-center justify-center rounded-ui-sm border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500',
			copied
				? 'bg-accent-500/10 border-accent-500/30 text-accent-600 dark:text-accent-400'
				: 'bg-base-200 dark:bg-base-800 border-base-300 dark:border-base-700 hover:bg-base-300 dark:hover:bg-base-700 text-base-700 dark:text-base-300'
		)}
		aria-label="Copy URL"
	>
		{#if copied}
			<Check size={16} strokeWidth={2} animate />
		{:else}
			<Copy size={16} strokeWidth={1.5} animate={hovered} />
		{/if}
	</button>
</div>
