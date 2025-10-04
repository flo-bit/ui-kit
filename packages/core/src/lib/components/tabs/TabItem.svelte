<script lang="ts">
	import { cn } from '../../utils';
	import { fade } from 'svelte/transition';

	let {
		href,
		isActive,
		onclick,
		name
	}: {
		name: string;
		href?: string;
		isActive?: boolean;
		onclick?: () => void;
	} = $props();
</script>

{#snippet content()}
	<div
		class={cn(
			'relative block cursor-pointer px-3 py-2.5 transition duration-200',
			isActive
				? 'text-accent-500 dark:text-accent-400'
				: 'hover:text-accent-500 dark:hover:text-accent-400'
		)}
	>
		{name}
		{#if isActive}
			<span
				transition:fade
				class="from-accent-500/0 via-accent-500/40 to-accent-500/0 dark:from-accent-400/0 dark:via-accent-400/40 dark:to-accent-400/0 absolute inset-x-1 bottom-px h-px bg-gradient-to-r"
			></span>
		{/if}
	</div>
{/snippet}

<li>
	{#if href}
		<a {href}>
			{@render content()}
		</a>
	{:else if onclick}
		<button
			type="button"
			onclick={() => {
				onclick?.();
			}}
		>
			{@render content()}
		</button>
	{:else}
		<div>
			{@render content()}
		</div>
	{/if}
</li>
