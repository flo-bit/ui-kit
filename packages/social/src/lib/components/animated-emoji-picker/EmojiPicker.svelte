<script lang="ts">
	import { cn, ScrollArea } from '@foxui/core';
	import { allGroups } from './emoji';
	import type { NativeEmoji } from 'emoji-picker-element/shared';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import icons from './icons.json';

	const categories = [...new Set(icons.icons.flatMap((i) => i.categories ?? []))].sort();

	console.log(categories);
	let currentGroup = $state(allGroups[0]);

	let {
		onpicked,
		height = 300,
		width = 344,
		columns = 5,
		class: className
	}: {
		onpicked?: (emoji: NativeEmoji) => void;
		height?: number;
		width?: number;
		columns?: number;
		class?: string;
	} = $props();

	onMount(() => {});

	let currentEmojis = $derived(
		icons.icons.filter((value) => value.categories.includes(currentGroup.name))
	);

	function switchEmoji(event: Event, emoji, back: boolean) {
		if (!back)
			event.target.src = `https://fonts.gstatic.com/s/e/notoemoji/latest/${emoji.codepoint}/512.webp`;
		else
			event.target.src = `https://fonts.gstatic.com/s/e/notoemoji/latest/${emoji.codepoint}/emoji.svg`;

		console.log('hello', back);
	}
</script>

<div class={cn('flex flex-col', className)} style="height: {height}px; width: {width}px;">
	<ScrollArea
		class="grid w-full select-none space-y-4 px-2"
		style="height: {height}px; grid-template-columns: repeat({columns}, minmax(0, 1fr));"
	>
		<!-- {#await emojiDatabase.db?.getEmojiByGroup(currentGroup) then emojis}
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
		{/await} -->

		{#key currentGroup}
			{#each currentEmojis as emoji}
				<button
					onclick={() => {
						onpicked?.(emoji);
					}}
					class="group/emoji hover:bg-accent-300/20 dark:hover:bg-accent-700/20 inline-flex size-10 cursor-pointer items-center justify-center rounded-full text-center text-xl transition-transform duration-150 hover:scale-110"
				>
					<img
						class="size-8"
						src="https://fonts.gstatic.com/s/e/notoemoji/latest/{emoji.codepoint}/emoji.svg"
						alt=""
						onpointerenter={(event) => {
							switchEmoji(event, emoji, false);
						}}
						onpointerleave={(event) => {
							switchEmoji(event, emoji, true);
						}}
					/>
					<!-- <img
						class="hidden size-8 group-hover/emoji:block"
						src="https://fonts.gstatic.com/s/e/notoemoji/latest/{emoji.codepoint}/512.webp"
						loading="lazy"
						alt=""
					/> -->
				</button>
			{/each}
		{/key}
	</ScrollArea>
	<div
		class="border-base-300/50 dark:border-base-700/50 flex justify-between gap-2 border-t px-3"
		style="width: {width}px;"
	>
		{#each allGroups as group}
			<button
				onclick={() => (currentGroup = group)}
				class={cn(
					'[&>svg]:size-4.5 relative cursor-pointer py-2 [&>svg]:transition-all [&>svg]:duration-100 [&>svg]:hover:scale-105',
					group.id == currentGroup.id
						? 'text-accent-600 dark:text-accent-400'
						: 'hover:text-accent-700 dark:hover:text-accent-300'
				)}
			>
				{@html group.svg}
				<span class="sr-only">{group.name}</span>

				{#if group.id == currentGroup.id}
					<span
						transition:fade
						class="from-accent-500/0 via-accent-500/60 to-accent-500/0 dark:from-accent-400/0 dark:via-accent-400/60 dark:to-accent-400/0 absolute -inset-x-1 -top-px h-px bg-gradient-to-r"
					></span>
				{/if}
			</button>
		{/each}
	</div>
</div>
