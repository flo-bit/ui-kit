<script lang="ts">
	import type { EmbedRecordData } from './types';
	import type { PostData } from '../post';
	import Post from '../post/Post.svelte';

	const {
		record,
		showEmbed = false
	}: {
		record: EmbedRecordData;
		showEmbed?: boolean;
	} = $props();

	const postData: PostData = $derived({
		author: record.author,
		href: record.href,
		htmlContent: record.htmlContent,
		createdAt: record.createdAt ?? ''
	});

	const embeds = $derived(
		showEmbed && record.embed ? [record.embed] : []
	);
</script>

{#if record.onclick}
	<button
		class="border-base-300 dark:border-base-600/30 accent:border-accent-300/20 accent:bg-accent-100/10 bg-base-500/10 dark:bg-black/30 hover:bg-base-500/15 dark:hover:bg-black/40 w-full cursor-pointer overflow-hidden rounded-2xl border p-3 text-left text-sm transition-colors"
		onclick={() => record.onclick!(record, record.href)}
	>
		<Post
			data={postData}
			compact
			showAvatar={false}
			{embeds}
			onclickhandle={record.onclickhandle}
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
			{embeds}
			onclickhandle={record.onclickhandle}
		/>
	</div>
{/if}
