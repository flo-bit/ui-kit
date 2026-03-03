<script lang="ts">
	import type { QuotedPostData, PostData, PostImageData } from '..';
	import Post from '../Post.svelte';

	const {
		record,
		showEmbed = false,
		onclickpost,
		onclickhandle,
		onclickimage
	}: {
		record: QuotedPostData;
		showEmbed?: boolean;
		onclickpost?: (data: PostData | QuotedPostData, href?: string) => void;
		onclickhandle?: (handle: string, href?: string) => void;
		onclickimage?: (image: PostImageData) => void;
	} = $props();

	const postData: PostData = $derived({
		author: record.author,
		href: record.href,
		htmlContent: record.htmlContent,
		embed: record.embed,
		createdAt: record.createdAt ?? '',
		replyCount: 0,
		repostCount: 0,
		likeCount: 0
	});
</script>

{#if onclickpost}
	<button
		class="border-base-300 dark:border-base-600/30 accent:border-accent-300/20 accent:bg-accent-100/10 bg-base-500/10 dark:bg-black/30 hover:bg-base-500/15 dark:hover:bg-black/40 w-full cursor-pointer overflow-hidden rounded-2xl border p-3 text-left text-sm transition-colors"
		onclick={() => onclickpost(record, record.href)}
	>
		<Post
			data={postData}
			compact
			showAvatar={false}
			showReply={false}
			showRepost={false}
			showLike={false}
			showBookmark={false}
			showImages={showEmbed}
			showExternal={showEmbed}
			showVideo={showEmbed}
			showQuotes={false}
			{onclickhandle}
			{onclickimage}
		/>
	</button>
{:else}
	<div
		class="border-base-300 dark:border-base-600/30 accent:border-accent-300/20 accent:bg-accent-100/10 bg-base-500/10 dark:bg-black/30 overflow-hidden rounded-2xl border p-3 text-sm"
	>
		<Post
			data={postData}
			compact
			showAvatar={false}
			showReply={false}
			showRepost={false}
			showLike={false}
			showBookmark={false}
			showImages={showEmbed}
			showExternal={showEmbed}
			showVideo={showEmbed}
			showQuotes={false}
			{onclickhandle}
			{onclickimage}
		/>
	</div>
{/if}
