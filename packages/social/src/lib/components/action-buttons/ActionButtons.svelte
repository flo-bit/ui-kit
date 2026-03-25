<script lang="ts">
	import { cn } from '@foxui/core';
	import type { ActionButtonsProps } from './types';
	import ReplyButton from './ReplyButton.svelte';
	import RepostButton from './RepostButton.svelte';
	import LikeButton from './LikeButton.svelte';
	import BookmarkButton from './BookmarkButton.svelte';

	let {
		reply,
		repost,
		like,
		bookmark,
		customActions,
		class: className
	}: ActionButtonsProps = $props();
</script>

{#if reply || repost || like || bookmark || customActions}
	<div
		class={cn(
			'text-base-500 dark:text-base-400 accent:text-base-900 flex flex-wrap justify-start gap-x-12 gap-y-2',
			className
		)}
	>
		{#if reply}
			<ReplyButton {...reply} />
		{/if}
		{#if repost}
			<RepostButton {...repost} />
		{/if}
		{#if like}
			<LikeButton {...like} />
		{/if}
		{#if bookmark}
			<BookmarkButton {...bookmark} />
		{/if}
		{@render customActions?.()}
	</div>
{/if}
