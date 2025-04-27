<script lang="ts">
	import { blueskyPostToPostData, type PostData, Post } from '$lib/components/extra/post';

	import { AtpBaseClient } from '@atproto/api';
	import { onMount } from 'svelte';
	import type { ProfileViewDetailed } from '@atproto/api/dist/client/types/app/bsky/actor/defs';
	import UserProfile from '$lib/components/social/user-profile/UserProfile.svelte';
	import type { FeedViewPost } from '@atproto/api/dist/client/types/app/bsky/feed/defs';
	import ThemeToggle from '$lib/components/base/theme-toggle/ThemeToggle.svelte';
	import Heading from '$lib/components/base/heading/Heading.svelte';

	let blueskyPosts: PostData[] | null = $state(
		null
	);

	let agent: AtpBaseClient | undefined;


	let profile: ProfileViewDetailed | undefined = $state(undefined);
	
	export async function resolveHandle({
	handle,
}: {
	handle: string;
}) {
	if (!agent) {
		agent = new AtpBaseClient({ service: 'https://api.bsky.app' });
	}
	

	const data = await agent.com.atproto.identity.resolveHandle({ handle });
	return data.data.did;
}

export async function getProfile({ did }: { did: string }) {
	if (!agent) {
		agent = new AtpBaseClient({ service: 'https://api.bsky.app' });
	}

	const { data } = await agent.app.bsky.actor.getProfile({ actor: did });
	return data;
}


export async function getPostsOfUser({
  actor,
  cursor,
  limit = 10
}: {
  actor: string;
  cursor?: string;
  limit?: number;
}) {
  if (!agent) {
    agent = new AtpBaseClient({ service: 'https://api.bsky.app' });
  }

  const perLimit = limit > 100 ? 100 : limit;
  const posts: FeedViewPost[] = [];
  do {
      const { data } = await agent.app.bsky.feed.getAuthorFeed({ actor, cursor, limit: perLimit, filter: 'posts_no_replies' });
      posts.push(...data.feed);
      cursor = data.cursor;
    
  } while (cursor && posts.length < limit);
  return { feed: posts, cursor };
}

onMount(async () => {
	const did = await resolveHandle({ handle: 'flo-bit.dev' });
	profile = await getProfile({ did });

	console.log(profile);
	const posts = await getPostsOfUser({ actor: did });

	blueskyPosts = posts.feed.map((post) => {
		console.log(post);
		return blueskyPostToPostData(post.post);
	});
});
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

{#if profile}
	<UserProfile profile={profile} />
{/if}


<div class="divide-base-500/20 mx-auto flex w-full flex-col divide-y max-w-2xl px-2">
	<Heading class="pb-4">Feed</Heading>
	{#if blueskyPosts}
		{#each blueskyPosts as post}
			<Post data={post} class="py-4">hello</Post>
		{/each}
	{/if}
</div>
