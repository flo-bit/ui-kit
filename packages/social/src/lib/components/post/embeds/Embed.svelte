<script lang="ts">
	import type { PostEmbed } from '../';
	import External from './External.svelte';
	import Images from './Images.svelte';
	import Video from './Video.svelte';

	const { embed }: { embed: PostEmbed } = $props();
</script>

<div class="flex flex-col gap-2 pt-3 text-sm">
	{#if embed.type === 'images'}
		<Images data={embed} />
	{:else if embed.type === 'external' && embed.external}
		<External data={embed} />
	{:else if embed.type === 'video' && embed.video}
		<Video data={embed} />
	{:else if embed.type === 'unknown'}
		<div
			class="text-base-700 dark:text-base-300 bg-base-200/50 dark:bg-base-900/50 border-base-300 dark:border-base-600/30 rounded-2xl border p-4 text-sm"
		>
			Unknown embed type
		</div>
	{/if}
</div>
