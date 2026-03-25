<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { PostData } from '../post';
	import type { ActionButtonsProps } from '../action-buttons';
	import type { CommentSortFn } from '.';
	import { commentSort } from '.';
	import Comment from './Comment.svelte';

	let {
		comments,
		actions,
		showSensitive = true,
		extraEmbeds,
		onclickhandle,
		target = '_blank',
		maxDepth = 4,
		logo,
		sort = commentSort.oldestFirst
	}: {
		comments: PostData[];
		actions?: ActionButtonsProps | ((comment: PostData) => ActionButtonsProps);
		showSensitive?: boolean;
		extraEmbeds?: Snippet<[PostData]>;
		onclickhandle?: (handle: string, href?: string) => void;
		target?: string;
		maxDepth?: number;
		logo?: Snippet;
		sort?: CommentSortFn;
	} = $props();

	let sorted = $derived(comments.toSorted(sort));
</script>

{#if comments.length > 0}
	<div class="overflow-hidden pt-4 mt-4 border-t border-base-200 dark:border-base-800 ">
		{#each sorted as comment (comment.id ?? comment.href ?? comment.createdAt + comment.author.handle)}
			<Comment {comment} depth={0} {actions} {showSensitive} {extraEmbeds} {onclickhandle} {target} {maxDepth} {logo} {sort} />
		{/each}
	</div>
{/if}
