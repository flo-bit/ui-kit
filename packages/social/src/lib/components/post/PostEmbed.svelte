<script lang="ts">
	import { hasNSFWLabel, type PostData, type PostImageData, type QuotedPostData } from '.';
	import Embed from './embeds/Embed.svelte';

	let {
		data,
		showImages = true,
		showExternal = true,
		showVideo = true,
		showQuotes = true,
		onclickimage,
		onclickpost,
		onclickhandle
	}: {
		data: PostData;
		showImages?: boolean;
		showExternal?: boolean;
		showVideo?: boolean;
		showQuotes?: boolean;
		onclickimage?: (image: PostImageData) => void;
		onclickpost?: (data: PostData | QuotedPostData, href?: string) => void;
		onclickhandle?: (handle: string, href?: string) => void;
	} = $props();

	let showNSFW = $state(false);
</script>

{#if data.embed}
	{#if hasNSFWLabel(data) && !showNSFW}
		<button
			onclick={() => (showNSFW = true)}
			class="border-base-500/20 bg-base-200/50 text-base-600 dark:border-base-400/20 dark:bg-base-800/50 dark:text-base-400 accent:border-accent-900 mt-4 flex h-18 w-full cursor-pointer items-center justify-center rounded-2xl border text-center text-sm"
		>
			NSFW content, click to show.
		</button>
	{:else}
		<Embed
			embed={data.embed}
			{showImages}
			{showExternal}
			{showVideo}
			{showQuotes}
			{onclickimage}
			{onclickpost}
			{onclickhandle}
		/>
	{/if}
{/if}
