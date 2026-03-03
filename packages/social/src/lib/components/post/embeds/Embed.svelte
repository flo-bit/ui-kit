<script lang="ts">
	import type { PostEmbed, PostImageData, PostData, QuotedPostData } from '../';
	import External from './External.svelte';
	import Images from './Images.svelte';
	import Video from './Video.svelte';
	import QuotedPost from './QuotedPost.svelte';

	const {
		embed,
		showImages = true,
		showExternal = true,
		showVideo = true,
		showQuotes = true,
		onclickimage,
		onclickpost,
		onclickhandle
	}: {
		embed: PostEmbed;
		showImages?: boolean;
		showExternal?: boolean;
		showVideo?: boolean;
		showQuotes?: boolean;
		onclickimage?: (image: PostImageData) => void;
		onclickpost?: (data: PostData | QuotedPostData, href?: string) => void;
		onclickhandle?: (handle: string, href?: string) => void;
	} = $props();
</script>

<div class="flex flex-col gap-2 pt-3 text-sm">
	{#if embed.type === 'images' && showImages}
		<Images data={embed} {onclickimage} />
	{:else if embed.type === 'external' && embed.external && showExternal}
		<External data={embed} />
	{:else if embed.type === 'video' && embed.video && showVideo}
		<Video data={embed} />
	{:else if embed.type === 'record' && embed.record && showQuotes}
		<QuotedPost record={embed.record} {onclickpost} {onclickhandle} {onclickimage} />
	{:else if embed.type === 'recordWithMedia' && embed.record}
		{#if embed.media}
			{#if embed.media.type === 'images' && showImages}
				<Images data={embed.media} {onclickimage} />
			{:else if embed.media.type === 'external' && embed.media.external && showExternal}
				<External data={embed.media} />
			{:else if embed.media.type === 'video' && embed.media.video && showVideo}
				<Video data={embed.media} />
			{/if}
		{/if}
		{#if showQuotes}
			<QuotedPost record={embed.record} {onclickpost} {onclickhandle} {onclickimage} />
		{/if}
	{:else if embed.type === 'unknown'}
		<div
			class="text-base-700 dark:text-base-300 bg-base-200/50 dark:bg-base-900/50 border-base-300 dark:border-base-600/30 rounded-2xl border p-4 text-sm"
		>
			Unsupported embed type
		</div>
	{/if}
</div>
