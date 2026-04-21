<script lang="ts" module>
	import { isEmojiSupported } from 'is-emoji-supported';

	import Database from 'emoji-picker-element/database';

	export let emojiDatabase: {
		db: Database | undefined;
	} = $state({
		db: undefined
	});

	export function loadEmojis() {
		if (emojiDatabase.db) return;

		import('emoji-picker-element').then(({ Database }) => {
			emojiDatabase.db = new Database();

			// only pre-cache the first group, others get cached on demand when selected
			emojiDatabase.db.getEmojiByGroup(allGroups[0].id).then((emojis) => {
				for (const emoji of emojis) {
					isEmojiSupported(emoji.unicode);
				}
			});
		});
	}
</script>

<script lang="ts">
	import { cn, Input, ScrollArea } from '@foxui/core';
	import {
		allGroups,
		FAVORITES_GROUP_ID,
		favoritesGroup,
		SEARCH_GROUP_ID,
		searchGroup
	} from './emoji';
	import type { Emoji, NativeEmoji } from 'emoji-picker-element/shared';
	import { fade } from 'svelte/transition';
	import { onMount, tick } from 'svelte';

	let currentGroup = $state(allGroups[0].id);
	let query = $state('');
	let searchInputRef = $state<HTMLInputElement | null>(null);
	let favoritesVersion = $state(0);

	let {
		onpicked,
		height = 300,
		width = 366,
		columns = 9,
		search = false,
		favorites = false,
		class: className
	}: {
		onpicked?: (emoji: NativeEmoji) => void;
		height?: number;
		width?: number;
		columns?: number;
		search?: boolean;
		favorites?: boolean;
		class?: string;
	} = $props();

	const SEARCH_INPUT_HEIGHT = 48;
	const FAVORITES_LIMIT = 40;

	let tabs = $derived([
		...(search ? [searchGroup] : []),
		...(favorites ? [favoritesGroup] : []),
		...allGroups
	]);
	let isSearching = $derived(currentGroup === SEARCH_GROUP_ID);
	let scrollHeight = $derived(isSearching ? height - SEARCH_INPUT_HEIGHT : height);
	let trimmedQuery = $derived(query.trim());

	let emojisPromise = $derived.by(() => {
		if (!emojiDatabase.db) return Promise.resolve<Emoji[] | undefined>(undefined);
		if (isSearching) {
			if (trimmedQuery.length < 2) return Promise.resolve<Emoji[] | undefined>([]);
			return emojiDatabase.db.getEmojiBySearchQuery(trimmedQuery);
		}
		if (currentGroup === FAVORITES_GROUP_ID) {
			favoritesVersion;
			return emojiDatabase.db.getTopFavoriteEmoji(FAVORITES_LIMIT);
		}
		return emojiDatabase.db.getEmojiByGroup(currentGroup);
	});

	async function selectTab(id: number) {
		if (id !== SEARCH_GROUP_ID) query = '';
		if (id === FAVORITES_GROUP_ID) favoritesVersion++;
		currentGroup = id;
		if (id === SEARCH_GROUP_ID) {
			await tick();
			searchInputRef?.focus();
		}
	}

	function isNative(emoji: Emoji): emoji is NativeEmoji {
		return 'unicode' in emoji;
	}

	function pickEmoji(emoji: NativeEmoji) {
		onpicked?.(emoji);
		emojiDatabase.db?.incrementFavoriteEmojiCount(emoji.unicode);
	}

	onMount(() => {
		loadEmojis();
	});
</script>

<div class={cn('flex flex-col', className)} style="height: {height}px; width: {width}px;">
	{#if isSearching}
		<div class="px-2 pt-2 pb-1" style="height: {SEARCH_INPUT_HEIGHT}px;">
			<Input
				bind:ref={searchInputRef}
				bind:value={query}
				sizeVariant="sm"
				type="search"
				placeholder="Search emoji…"
				class="w-full"
			/>
		</div>
	{/if}
	<ScrollArea class="w-full" style="height: {scrollHeight}px;">
		<div
			class="grid w-full select-none auto-rows-min px-2"
			style="grid-template-columns: repeat({columns}, minmax(0, 1fr));"
		>
			{#await emojisPromise then emojis}
				{#if emojis}
					{@const visible = emojis.filter(
						(e): e is NativeEmoji => isNative(e) && isEmojiSupported(e.unicode)
					)}
					{#each visible as emoji, i (i)}
						<button
							onclick={() => pickEmoji(emoji)}
							class="hover:bg-accent-300/20 dark:hover:bg-accent-700/20 size-10 cursor-pointer rounded-full text-center text-xl transition-transform duration-150 hover:scale-110"
							>{emoji.unicode}</button
						>
					{/each}
				{/if}
			{/await}
		</div>
	</ScrollArea>
	<div
		class="border-base-300/50 dark:border-base-700/50 flex justify-between gap-2 border-t px-3"
		style="width: {width}px;"
	>
		{#each tabs as group (group.id)}
			{@const Icon = group.icon}
			<button
				onclick={() => selectTab(group.id)}
				class={cn(
					'[&>svg]:size-4.5 relative cursor-pointer py-2 [&>svg]:transition-all [&>svg]:duration-100 [&>svg]:hover:scale-105',
					group.id === currentGroup
						? 'text-accent-600 dark:text-accent-400'
						: 'hover:text-accent-700 dark:hover:text-accent-300'
				)}
			>
				<Icon strokeWidth={1.5} />
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
