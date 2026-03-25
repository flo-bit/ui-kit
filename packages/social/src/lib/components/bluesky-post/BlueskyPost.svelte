<script lang="ts">
	import { Post } from '../post';
	import type { PostProps } from '../post/types';
	import { blueskyPostToPostData } from '.';
	import type { BlueskyHrefs } from '.';
	import type { PostView } from '@atcute/bluesky/types/app/feed/defs';

	type BlueskyPostProps = Omit<PostProps, 'data'> & {
		data?: PostView;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		reason?: any;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		reply?: any;
		baseUrl?: string;
		hrefs?: BlueskyHrefs;
		showLogo?: boolean;
	};

	let {
		data,
		reason,
		reply,
		baseUrl = 'https://bsky.app',
		hrefs,
		showLogo = false,
		logo,
		showAvatar = true,
		compact = false,
		target = '_blank',
		...restProps
	}: BlueskyPostProps = $props();

	const result = $derived(
		data ? blueskyPostToPostData(data, baseUrl, reason, reply, hrefs, target) : undefined
	);
</script>

{#snippet defaultLogo()}
	<a
		class="text-accent-700 dark:text-accent-400 hover:text-accent-600 dark:hover:text-accent-500 accent:text-accent-900 accent:hover:text-accent-800"
		href={result?.postData.href}
		{target}
	>
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="size-4" viewBox="0 0 600 530">
			<path
				d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"
				fill="currentColor"
			/>
		</svg>
		<span class="sr-only">Bluesky</span>
	</a>
{/snippet}

{#if result}
	<Post
		data={result.postData}
		embeds={result.embeds}
		actions={{
			reply: { count: result.postData.replyCount, href: result.postData.href },
			repost: { count: result.postData.repostCount, href: result.postData.href },
			like: { count: result.postData.likeCount, href: result.postData.href }
		}}
		timestamp={{ href: result.postData.href }}
		logo={logo ?? (showLogo ? defaultLogo : undefined)}
		{showAvatar}
		{compact}
		{target}
		{...restProps}
	/>
{/if}
