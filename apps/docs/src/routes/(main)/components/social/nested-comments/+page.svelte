<script lang="ts">
	import type {
		FeedViewPost,
		ThreadViewPost
	} from '@atproto/api/dist/client/types/app/bsky/feed/defs';
	import { blueskyPostToPostData, NestedComments, Post, type PostData } from '@foxui/social';
	import { onMount } from 'svelte';

	let mainPost = $state<PostData>();

	export async function getComments(uri: string) {
		const getCommentsURL = `https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread?uri=${uri}&depth=10`;
		const comments = await fetch(getCommentsURL);
		const commentsData = await comments.json();

		console.log(commentsData);
		mainPost = blueskyPostToPostData(commentsData.thread.post);
		const replies = commentsData.thread.replies;

		return replies.sort(
			(a: any, b: any) =>
				new Date(b.post.record.createdAt).getTime() - new Date(a.post.record.createdAt).getTime()
		);
	}

	function convertComments(comments: ThreadViewPost[]) {
		return comments.map((comment) => ({
			...blueskyPostToPostData(comment.post),
			replies: convertComments(comment.replies)
		}));
	}

	let posts = $state<PostData[]>([]);

	onMount(async () => {
		const comments = await getComments(
			'at://did:plc:cbkjy5n7bk3ax2wplmtjofq2/app.bsky.feed.post/3lusiidbhs22o'
		);

		//https://bsky.app/profile/ngerakines.me/post/3lusiidbhs22o
		console.log(comments[0]);

		posts = convertComments(comments);
		console.log(posts);
	});
</script>

<div>
	{#if mainPost}
		<Post data={mainPost} />
	{/if}

	{#if posts}
		<NestedComments comments={posts} />
	{/if}
</div>
