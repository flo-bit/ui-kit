<script lang="ts">
	import {
		NestedComments,
		Box,
		blueskyPostToPostData,
		Post,
		commentSort,
		type PostData
	} from '@foxui/all';
	import { onMount } from 'svelte';

	const sortOptions = [
		{ label: 'Oldest first', value: commentSort.oldestFirst },
		{ label: 'Newest first', value: commentSort.newestFirst },
		{ label: 'Most liked', value: commentSort.mostLiked },
		{ label: 'Most replies', value: commentSort.mostReplies }
	];
	let selectedSort = $state(sortOptions[0]);

	let rootPost: PostData | undefined = $state();
	let rootEmbeds: any[] = $state([]);
	let comments: PostData[] = $state([]);
	let loading = $state(true);

	function threadToComments(replies: any[]): PostData[] {
		return replies
			.filter((r: any) => r.$type === 'app.bsky.feed.defs#threadViewPost' && r.post)
			.map((r: any) => {
				const { postData, embeds } = blueskyPostToPostData(r.post);
				postData.embeds = embeds;
				if (r.replies?.length) {
					postData.replies = threadToComments(r.replies);
				}
				return postData;
			});
	}

	onMount(async () => {
		try {
			const res = await fetch(
				'https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread?uri=at://did:plc:t2rj3pygtcareyebacmsghzz/app.bsky.feed.post/3mgroqbvqes2n&depth=6'
			);
			const data = await res.json();
			const thread = data.thread;

			if (thread?.post) {
				const { postData, embeds } = blueskyPostToPostData(thread.post);
				rootPost = postData;
				rootEmbeds = embeds;
			}

			if (thread?.replies?.length) {
				comments = threadToComments(thread.replies);
			}
		} catch (e) {
			console.error('Failed to load thread:', e);
		} finally {
			loading = false;
		}
	});
</script>

<Box class="not-prose max-h-128 overflow-y-auto">
	{#if loading}
		<div class="text-base-500 text-sm">Loading thread...</div>
	{:else}
		{#if rootPost}
			<Post data={rootPost} embeds={rootEmbeds} />
		{/if}

		{#if comments.length > 0}
			<div class="mt-4 flex items-center gap-2 text-sm">
				<span class="text-base-500">Sort by:</span>
				{#each sortOptions as option}
					<button
						class="cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-colors {selectedSort === option ? 'bg-accent-500 text-white' : 'bg-base-200 dark:bg-base-800 text-base-600 dark:text-base-400 hover:bg-base-300 dark:hover:bg-base-700'}"
						onclick={() => (selectedSort = option)}
					>
						{option.label}
					</button>
				{/each}
			</div>
			<NestedComments
				{comments}
				sort={selectedSort.value}
				actions={(comment) => ({
					reply: { count: comment.replyCount, href: comment.href },
					like: { count: comment.likeCount, href: comment.href }
				})}
			/>
		{:else}
			<div class="text-base-500 mt-4 text-sm">No replies yet.</div>
		{/if}
	{/if}
</Box>
