<script lang="ts">
	import { cn, ScrollArea } from '@fuxui/base';
	import { isEmojiSupported } from 'is-emoji-supported';
	import { allGroups } from './emoji';
	import Database from 'emoji-picker-element/database';
	import type { NativeEmoji } from 'emoji-picker-element/shared';

	let currentGroup = $state(allGroups[0].id);
	let db: Database | undefined = $state();

	let { onpicked }: { onpicked?: (emoji: NativeEmoji) => void } = $props();

	$effect(() => {
		if (db) return;
		import('emoji-picker-element').then(({ Database }) => {
			db = new Database();
		});
	});
</script>

<div class="flex w-[344px] flex-col">
	<ScrollArea class="grid h-[250px] w-full select-none grid-cols-8 space-y-3 px-2">
		{#await db?.getEmojiByGroup(currentGroup) then emojis}
			{#if emojis}
				{#each emojis as emoji}
					{#if isEmojiSupported(emoji.unicode)}
						<button
							onclick={() => {
								onpicked?.(emoji);
							}}
							class="hover:bg-accent-300/20 dark:hover:bg-accent-700/20 size-10 cursor-pointer rounded-full text-center text-xl transition-transform duration-100 hover:scale-110"
							>{emoji.unicode}</button
						>
					{/if}
				{/each}
			{/if}
		{/await}
	</ScrollArea>
	<div
		class="border-base-300/50 dark:border-base-700/50 flex justify-between gap-2 border-t px-3 py-2"
	>
		{#each allGroups as group}
			<button
				onclick={() => (currentGroup = group.id)}
				class={cn(
					'[&>svg]:size-4.5 cursor-pointer transition-all duration-100 hover:scale-105',
					group.id === currentGroup
						? 'text-accent-600 dark:text-accent-400'
						: 'hover:text-accent-700 dark:hover:text-accent-300'
				)}
				>{@html group.svg}
				<span class="sr-only">{group.name}</span>
			</button>
		{/each}
	</div>
</div>
