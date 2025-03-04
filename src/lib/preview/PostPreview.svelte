<script lang="ts">
	import { blueskyPostToPostData, type PostData, Post} from '$lib/components/extra/post';

	import data from '$lib/assets/bluesky-posts.json';
	import Subheading from '$lib/components/base/heading/Subheading.svelte';

	let blueskyPosts: PostData[] | null = $derived(
		data.posts.map((post: unknown) => {
			return blueskyPostToPostData(post);
		}).reverse()
	);

	// onMount(async () => {
	// 	let uris = [
	// 		'at://did:plc:257wekqxg4hyapkq6k47igmp/app.bsky.feed.post/3lj3hqgiynk2v',
	// 		'at://did:plc:257wekqxg4hyapkq6k47igmp/app.bsky.feed.post/3lj6idw2ibc22',
	// 		'at://did:plc:257wekqxg4hyapkq6k47igmp/app.bsky.feed.post/3lj6hwahre222',
	// 		'at://did:plc:257wekqxg4hyapkq6k47igmp/app.bsky.feed.post/3liu4v5sa7s2a',
	// 		'at://did:plc:257wekqxg4hyapkq6k47igmp/app.bsky.feed.post/3ljgfoyheyc2b'
	// 	];
	// 	const params = new URLSearchParams();
	// 	uris.forEach((uri) => params.append('uris', uri));

	// 	const response = await fetch(
	// 		`https://public.api.bsky.app/xrpc/app.bsky.feed.getPosts?${params.toString()}`
	// 	);

	// 	const data = await response.json();

	// 	// download data as json
	// 	const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
	// 	const url = URL.createObjectURL(blob);
	// 	const a = document.createElement('a');
	// 	a.href = url;
	// 	a.download = 'data.json';
	// 	a.click();

	// });
</script>

<Subheading class="mb-4">Posts from Bluesky</Subheading>

<div class="divide-base-500/20 mx-auto flex w-full flex-col divide-y">
	{#if blueskyPosts}
		{#each blueskyPosts as post}
			<Post data={post} class="py-4">
				hello
			</Post>
		{/each}
	{/if}
</div>
