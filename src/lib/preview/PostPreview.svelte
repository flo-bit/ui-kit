<script lang="ts">
	import { blueskyPostToPostData, type PostData } from '$lib/components/post';
	import Post from '$lib/components/post/Post.svelte';
	import { onMount } from 'svelte';

	import data from '$lib/assets/bluesky-posts.json';
	import Subheading from '$lib/components/heading/Subheading.svelte';

	let blueskyPosts: PostData[] | null = $derived(
		data.posts.map((post: unknown) => {
			return blueskyPostToPostData(post);
		})
	);

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
