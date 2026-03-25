<script lang="ts">
	import Comment from './Comment.svelte';
	import Post from '../post/Post.svelte';
	import PostHeader from '../post/PostHeader.svelte';
	import type { PostData } from '../post/types';
	import type { ActionButtonsProps } from '../action-buttons';
	import type { Snippet } from 'svelte';
	import type { CommentSortFn } from '.';
	import { commentSort } from '.';

	const {
		comment,
		depth = 0,
		actions,
		showSensitive = true,
		extraEmbeds: extraEmbedsSnippet,
		onclickhandle,
		target = '_blank',
		maxDepth = 4,
		logo,
		sort = commentSort.oldestFirst
	}: {
		comment: PostData;
		depth: number;
		actions?: ActionButtonsProps | ((comment: PostData) => ActionButtonsProps);
		showSensitive?: boolean;
		extraEmbeds?: Snippet<[PostData]>;
		onclickhandle?: (handle: string, href?: string) => void;
		target?: string;
		maxDepth?: number;
		logo?: Snippet;
		sort?: CommentSortFn;
	} = $props();

	let expanded = $state(true);

	let commentActions = $derived(typeof actions === 'function' ? actions(comment) : actions);
</script>

<div class="relative isolate min-w-0">
	<button
		class="group absolute top-0 left-0 flex h-full w-7 cursor-pointer items-center"
		onclick={() => (expanded = !expanded)}
	>
		<div
			class="bg-base-200 dark:bg-base-800 mt-6 group-hover:bg-base-300 dark:group-hover:bg-base-700 mx-auto h-[calc(100%-2rem)] w-0.5"
		></div>
		<span class="sr-only">{expanded ? 'collapse' : 'expand'} comment</span>
	</button>

	<div class="mt-2 pb-2">
		{#if expanded}
			<Post
				data={comment}
				embeds={comment.embeds}
				actions={commentActions}
				{showSensitive}
				{onclickhandle}
				{target}
				{logo}
				compact
				showAvatar={true}
				onclickavatar={() => (expanded = false)}
			/>
		{:else}
			<PostHeader
				author={comment.author}
				createdAt={comment.createdAt}
				{onclickhandle}
				onclickavatar={() => (expanded = true)}
				showAvatar={true}
				compact
				{logo}
				{target}
				class="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-200"
			/>
		{/if}
	</div>

	{#if comment.replies?.length && depth <= maxDepth && expanded}
	<div class="pl-5">
		{#each comment.replies.toSorted(sort) as reply (reply.id ?? reply.href ?? reply.createdAt + reply.author.handle)}
			<Comment
				comment={reply}
				depth={depth + 1}
				{actions}
				{showSensitive}
				extraEmbeds={extraEmbedsSnippet}
				{onclickhandle}
				{target}
				{maxDepth}
				{logo}
				{sort}
			/>
		{/each}
		</div>
	{/if}
</div>
