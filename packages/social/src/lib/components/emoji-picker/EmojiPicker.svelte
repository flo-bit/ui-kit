<script lang="ts">
	import { cn, ScrollArea } from '@fuxui/base';
    import { onMount } from 'svelte';
    import { isEmojiSupported } from 'is-emoji-supported';
    import { allGroups, type Emoji } from './emoji';

	onMount(async () => {
		initEmojiPicker();
	});

	let emojiGroups: { [key: number]: any[] } = $state({});

	let currentGroup = $state(allGroups[0].id);

	let { onpicked }: { onpicked?: (emoji: Emoji) => void } = $props();

	async function initEmojiPicker() {
		const { Database } = await import('emoji-picker-element');

		const db = new Database();

		let allEmojis: { [key: number]: any[] } = {};
		for (let group of allGroups) {
			const emojis = await db.getEmojiByGroup(group.id);
			let validEmojis = [];
			for (let emoji of emojis) {
				if (isEmojiSupported(emoji.unicode)) {
					validEmojis.push(emoji);
				}
			}
			allEmojis[group.id] = validEmojis;
		}

		emojiGroups = allEmojis;
	}
</script>

<div class="flex w-[344px] flex-col">
	<ScrollArea class="grid h-[250px] w-full select-none grid-cols-8 space-y-3 px-2">
		{#if !emojiGroups[currentGroup] || emojiGroups[currentGroup].length === 0}
			<div class="col-span-8 flex h-full w-full">
				<p class="text-base-500 dark:text-base-400 text-sm">Loading emojis...</p>
			</div>
		{/if}
		{#each emojiGroups[currentGroup] as emoji}
			<button
				onclick={() => {
					onpicked?.(emoji);
				}}
				class="hover:bg-accent-300/20 dark:hover:bg-accent-700/20 hover:scale-110 transition-transform duration-100 cursor-pointer rounded-full text-center text-xl size-10"
				>{emoji.unicode}</button
			>
		{/each}
	</ScrollArea>
	<div class="border-base-300/50 dark:border-base-700/50 flex justify-between gap-2 border-t px-3 py-2">
		{#each allGroups as group}
			<button
				onclick={() => (currentGroup = group.id)}
				class={cn(
					'[&>svg]:size-4.5 cursor-pointer hover:scale-105 transition-all duration-100',
					group.id === currentGroup ? 'text-accent-600 dark:text-accent-400' : 'hover:text-accent-700 dark:hover:text-accent-300'
				)}
				>{@html group.svg}
				<span class="sr-only">{group.name}</span>
			</button>
		{/each}
	</div>
</div>
