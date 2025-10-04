<script lang="ts">
	import { Box } from '@foxui/all';
	import { BlueskyPost, blueskyPostToPostData, Post } from '@foxui/all';
	import { BskyAgent } from '@atproto/api';
	import { onMount } from 'svelte';
	import type { FeedViewPost } from '@atproto/api/dist/client/types/app/bsky/feed/defs';

	async function fetchLatestPosts(handle: string) {
		const agent = new BskyAgent({
			service: 'https://public.api.bsky.app'
		});

		try {
			const did = await agent.resolveHandle({ handle });
			console.log(did);
			const feed = await agent.getAuthorFeed({
				actor: did.data.did,
				limit: 10
			});

			console.log(feed);
			return feed.data.feed;
		} catch (error) {
			console.error('Error fetching posts:', error);
		}
	}

	let posts = $state<FeedViewPost[]>([]);
	onMount(async () => {
		let loadedPosts = await fetchLatestPosts('flo-bit.dev');
		if (loadedPosts) {
			posts = loadedPosts;
		}
	});
</script>

<Box class="not-prose relative flex min-h-24 w-full flex-col gap-8">
	{#each posts as post}
		<BlueskyPost feedViewPost={post} showLogo></BlueskyPost>
	{/each}
</Box>
