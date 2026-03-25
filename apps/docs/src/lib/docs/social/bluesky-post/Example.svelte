<script lang="ts">
	import { Box } from '@foxui/all';
	import { BlueskyPost } from '@foxui/all';
	import { onMount } from 'svelte';

	let feed: any[] = $state([]);

	onMount(async () => {
		const res = await fetch(
			'https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=did:plc:257wekqxg4hyapkq6k47igmp&limit=20'
		);
		const data = await res.json();
		feed = data.feed ?? [];
	});
</script>

<Box
	class="not-prose divide-base-200/50 dark:divide-base-800/70 relative flex h-96 w-full flex-col divide-y overflow-y-scroll"
>
	{#each feed as item (item.post.uri)}
		<div class="py-4 first:pt-0 last:pb-0">
			<BlueskyPost data={item.post} reason={item.reason} reply={item.reply} showLogo />
		</div>
	{/each}

	{#if feed.length === 0}
		<div class="text-base-500 text-sm">Loading posts...</div>
	{/if}
</Box>
