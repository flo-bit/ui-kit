<script lang="ts">
	import { cn } from '../../utils';
	import TabItem from './TabItem.svelte';

	let {
		items,
		active,
		class: className
	}: {
		items: {
			name: string;
			href?: string;
			onclick?: () => void;
		}[];
		active: string;
		class?: string;
	} = $props();
</script>

<ul class={cn('not-prose text-base-800 dark:text-base-200 flex flex-wrap px-3 text-sm font-medium', className)}>
	{#each items as item}
		<TabItem
			href={item.href}
			isActive={active == item.name}
			name={item.name}
			onclick={item.onclick}
		/>
	{/each}
</ul>
