<script lang="ts">
	import { cn, ScrollArea } from '@foxui/core';
	import { isEmojiSupported } from 'is-emoji-supported';
	import { allGroups } from './emoji';
	import Database from 'emoji-picker-element/database';
	import type { NativeEmoji } from 'emoji-picker-element/shared';
	import { fade } from 'svelte/transition';

	let currentGroup = $state(allGroups[0].id);
	let db: Database | undefined = $state();

	let {
		onpicked,
		height = 300,
		width = 344,
		columns = 8,
		class: className
	}: {
		onpicked?: (emoji: NativeEmoji) => void;
		height?: number;
		width?: number;
		columns?: number;
		class?: string;
	} = $props();

	$effect(() => {
		if (db) return;
		import('emoji-picker-element').then(({ Database }) => {
			db = new Database();

			// go through all groups and check if the emoji is supported (will be cached)
			// so that things appear faster when we select a group
			for (const group of allGroups) {
				db.getEmojiByGroup(group.id).then((emojis) => {
					for (const emoji of emojis) {
						isEmojiSupported(emoji.unicode);
					}
				});
			}
		});
	});
</script>

<div class={cn('flex flex-col', className)} style="height: {height}px; width: {width}px;">
	<ScrollArea
		class="grid w-full select-none space-y-0 px-2"
		style="height: {height}px; grid-template-columns: repeat({columns}, minmax(0, 1fr));"
	>
		{#await db?.getEmojiByGroup(currentGroup) then emojis}
			{#if emojis}
				{#each emojis as emoji}
					{#if isEmojiSupported(emoji.unicode)}
						<button
							onclick={() => {
								onpicked?.(emoji);
							}}
							class="hover:bg-accent-300/20 dark:hover:bg-accent-700/20 size-10 cursor-pointer rounded-full text-center text-xl transition-transform duration-150 hover:scale-110"
							>{emoji.unicode}</button
						>
					{/if}
				{/each}
			{/if}
		{/await}
	</ScrollArea>
	<div
		class="border-base-300/50 dark:border-base-700/50 flex justify-between gap-2 border-t px-3"
		style="width: {width}px;"
	>
		{#each allGroups as group}
			<button
				onclick={() => (currentGroup = group.id)}
				class={cn(
					'[&>svg]:size-4.5 relative cursor-pointer [&>svg]:transition-all [&>svg]:duration-100 [&>svg]:hover:scale-105 py-2',
					group.id === currentGroup
						? 'text-accent-600 dark:text-accent-400'
						: 'hover:text-accent-700 dark:hover:text-accent-300'
				)}
				>
				{@html group.svg}
				<span class="sr-only">{group.name}</span>

				{#if group.id === currentGroup}
					<span
						transition:fade
						class="from-accent-500/0 via-accent-500/60 to-accent-500/0 dark:from-accent-400/0 dark:via-accent-400/60 dark:to-accent-400/0 absolute -inset-x-1 -top-px h-px bg-gradient-to-r"
					></span>
				{/if}
			</button>
		{/each}
	</div>
</div>
