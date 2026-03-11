<script lang="ts">
	import type { MentionItem } from './MentionMenu.svelte';
	import type { Snippet } from 'svelte';
	import { cn } from '@foxui/core';

	let {
		items,
		command,
		class: className,
		item: itemSnippet
	}: {
		items: MentionItem[];
		command: (props: MentionItem) => void;
		class?: string;
		item?: Snippet<[{ item: MentionItem; isActive: boolean; select: () => void }]>;
	} = $props();

	let activeIndex = $state(0);

	export function setItems(value: MentionItem[]) {
		items = value;
		activeIndex = 0;
	}

	export function setCommand(value: (props: MentionItem) => void) {
		command = value;
	}

	export function onKeyDown(event: KeyboardEvent): boolean {
		if (items.length === 0) return false;

		switch (event.key) {
			case 'ArrowUp': {
				activeIndex = (activeIndex - 1 + items.length) % items.length;
				return true;
			}
			case 'ArrowDown': {
				activeIndex = (activeIndex + 1) % items.length;
				return true;
			}
			case 'Enter': {
				const selected = items[activeIndex];
				if (selected) {
					command(selected);
					return true;
				}
			}
		}

		return false;
	}
</script>

{#if items.length > 0}
	<div
		class={cn(
			'bg-base-100 dark:bg-base-800 border-base-200 dark:border-base-700 text-base-900 dark:text-base-200 z-50 w-fit rounded-2xl border p-1 shadow-md outline-none',
			className
		)}
	>
		{#each items as mentionItem, index (mentionItem.id)}
			{#if itemSnippet}
				{@render itemSnippet({
					item: mentionItem,
					isActive: activeIndex === index,
					select: () => command(mentionItem)
				})}
			{:else}
				<button
					onclick={() => command(mentionItem)}
					class={cn(
						'flex w-full cursor-pointer items-center gap-2 rounded-xl px-3 py-1.5 text-sm',
						activeIndex === index
							? 'bg-accent-500/10 text-accent-700 dark:text-accent-400'
							: 'hover:bg-accent-500/10'
					)}
				>
					{#if mentionItem.avatar}
						<img
							src={mentionItem.avatar}
							alt=""
							class="size-6 rounded-full"
						/>
					{/if}
					<span>{mentionItem.label}</span>
				</button>
			{/if}
		{/each}
	</div>
{/if}
