<script lang="ts">
	import type { Embed } from './types';
	import External from './External.svelte';
	import Images from './Images.svelte';
	import Video from './Video.svelte';
	import QuotedPost from './QuotedPost.svelte';

	const {
		embed,
		showSensitive = true
	}: {
		embed: Embed;
		showSensitive?: boolean;
	} = $props();
</script>

<div class="flex flex-col gap-2 pt-3 text-sm">
	{#if embed.type === 'images'}
		<Images data={embed} {showSensitive} />
	{:else if embed.type === 'external' && embed.external}
		<External data={embed} />
	{:else if embed.type === 'video' && embed.video}
		<Video data={embed} {showSensitive} />
	{:else if embed.type === 'record' && embed.record}
		<QuotedPost record={embed.record} />
	{:else if embed.type === 'unknown'}
		<div
			class="text-base-700 dark:text-base-300 bg-base-200/50 dark:bg-base-900/50 border-base-300 dark:border-base-600/30 rounded-2xl border p-4 text-sm"
		>
			Unsupported embed type
		</div>
	{/if}
</div>
