<script lang="ts">
	import { Box } from '@foxui/all';
	import { BlueskyPost, blueskyPostToPostData } from '@foxui/all';
	import { onMount } from 'svelte';
	import type { PostView } from '@atcute/bluesky/types/app/feed/defs';

	async function fetchLatestPosts(actor: string) {
		try {
			const url = `https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=${encodeURIComponent(actor)}&limit=10`;
			const res = await fetch(url);
			if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);
			const data = await res.json();
			return data.feed as { post: PostView; reason?: unknown }[];
		} catch (error) {
			console.error('Error fetching posts:', error);
		}
	}

	let posts = $state<{ post: PostView; reason?: unknown }[]>([]);
	onMount(async () => {
		const loadedPosts = await fetchLatestPosts('did:plc:257wekqxg4hyapkq6k47igmp');
		if (loadedPosts) {
			posts = loadedPosts;
		}
	});
</script>

<Box class="not-prose relative flex min-h-24 w-full flex-col gap-8 p-8">
	{#each posts as { post, reason } (post.uri)}
		<BlueskyPost feedViewPost={post} {reason} showLogo showAvatar={false}></BlueskyPost>
	{/each}
</Box>
