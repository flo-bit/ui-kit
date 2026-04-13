<script lang="ts">
	import type { SlashMenuItem } from './SlashMenu.svelte';
	import type { Snippet } from 'svelte';
	import type { Editor, Range } from '@tiptap/core';
	import { cn } from '@foxui/core';

	let {
		items,
		editor,
		range,
		class: className,
		item: itemSnippet
	}: {
		items: SlashMenuItem[];
		editor: Editor;
		range: Range;
		class?: string;
		item?: Snippet<[{ item: SlashMenuItem; isActive: boolean; select: () => void }]>;
	} = $props();

	let activeIndex = $state(0);

	export function setItems(value: SlashMenuItem[]) {
		items = value;
		activeIndex = 0;
	}

	export function setRange(value: Range) {
		range = value;
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
					selected.command({ editor, range });
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
			'bg-base-100 dark:bg-base-800 border-base-200 dark:border-base-700 text-base-900 dark:text-base-200 z-50 flex w-fit flex-col rounded-ui border p-1 shadow-md outline-none',
			className
		)}
	>
		{#each items as slashItem, index (slashItem.id)}
			{#if itemSnippet}
				{@render itemSnippet({
					item: slashItem,
					isActive: activeIndex === index,
					select: () => slashItem.command({ editor, range })
				})}
			{:else}
				<button
					onclick={() => slashItem.command({ editor, range })}
					class={cn(
						'flex w-full cursor-pointer items-center gap-2 rounded-ui-sm px-3 py-1.5 text-sm',
						activeIndex === index
							? 'bg-accent-500/10 text-accent-700 dark:text-accent-400'
							: 'hover:bg-accent-500/10'
					)}
				>
					<span>{slashItem.label}</span>
				</button>
			{/if}
		{/each}
	</div>
{/if}
