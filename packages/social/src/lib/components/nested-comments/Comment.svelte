<script lang="ts">
	import { numberToHumanReadable } from '../';
	import Comment from './Comment.svelte';
	import { Avatar, Prose } from '@foxui/core';
	import { RelativeTime } from '@foxui/time';
	import type { PostData } from '../post';
	import Embed from '../post/embeds/Embed.svelte';

	const { comment, depth = 0 }: { comment: PostData; depth: number } = $props();

	let expanded = $state(true);
</script>

{#snippet top(expand: boolean)}
	<div class="text-base-600 dark:text-base-500 -ml-6 flex items-center text-sm">
		<div class="relative size-6">
			<Avatar src={comment.author.avatar} class="size-6" />
			{#if expand}
				<button
					class="absolute inset-0 flex size-6 cursor-pointer items-center justify-center rounded-full bg-black/50 text-white"
					onclick={() => (expanded = !expanded)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						class="size-3"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
					</svg>

					<span class="sr-only">expand comment</span>
				</button>
			{:else}
				<button
					class="absolute inset-0 flex size-6 cursor-pointer items-center justify-center rounded-full"
					onclick={() => (expanded = !expanded)}
				>
					<span class="sr-only">collapse comment</span>
				</button>
			{/if}
		</div>
		<a
			target="_blank"
			rel="noopener noreferrer nofollow"
			class="dark:text-base-400 hover:text-base-500 hover:dark:text-base-300 ml-2"
			href={comment.author.href}
		>
			{comment.author.displayName || comment.author.handle}
		</a>

		<div class="text-base-500 ml-2 text-xs">
			<RelativeTime date={new Date(comment.createdAt)} locale="en" />
		</div>
	</div>
{/snippet}

<div class="relative pl-3">
	<button
		class="group absolute -left-1.5 top-0 flex h-full w-3 cursor-pointer items-center"
		onclick={() => (expanded = !expanded)}
	>
		<div
			class="bg-base-200 dark:bg-base-800 group-hover:bg-base-300 dark:group-hover:bg-base-700 mx-auto h-full w-0.5"
		></div>
		<span class="sr-only">collapse comment</span>
	</button>

	<div class="mt-2 pb-2">
		{#if expanded}
			{@render top(false)}
			<Prose>{@html comment.htmlContent}</Prose>

			{#if comment.embed}
				<Embed embed={comment.embed} />
			{/if}

			<div class="text-base-500 dark:text-base-400 mt-2 flex gap-8">
				<a
					href={comment.href}
					target="_blank"
					rel="noopener noreferrer nofollow"
					class="group inline-flex items-center gap-2 text-sm"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="group-hover:bg-accent-500/10 group-hover:text-accent-700 dark:group-hover:text-accent-400 -m-1.5 size-7 rounded-full p-1.5 transition-all duration-100"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
						/>
					</svg>
					<span class="sr-only">Replies</span>
					{numberToHumanReadable(comment.replyCount)}
				</a>

				<a
					href={comment.href}
					target="_blank"
					rel="noopener noreferrer nofollow"
					class="group inline-flex items-center gap-2 text-sm"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="group-hover:bg-accent-500/10 group-hover:text-accent-700 dark:group-hover:text-accent-400 -m-1.5 size-7 rounded-full p-1.5 transition-all duration-100"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
						/>
					</svg>
					<span class="sr-only">Likes</span>
					{numberToHumanReadable(comment.likeCount)}
				</a>
			</div>

			<!-- {#if comment.replies?.length && depth > 4}
				<a
					href={atUriToPostUri(comment.uri)}
					target="_blank"
					rel="noopener noreferrer nofollow"
					class="text-base-500 dark:text-base-400 hover:dark:text-base-300 hover:text-base-600 text-sm font-medium"
					>View more replies on bluesky</a
				>
			{/if} -->
		{:else}
			<button onclick={() => (expanded = true)}>
				{@render top(true)}
			</button>
		{/if}
	</div>

	{#if comment.replies?.length && depth <= 4 && expanded}
		{#each comment.replies.toSorted((a: any, b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()) as reply}
			<Comment comment={reply} depth={depth + 1} />
		{/each}
	{/if}
</div>
