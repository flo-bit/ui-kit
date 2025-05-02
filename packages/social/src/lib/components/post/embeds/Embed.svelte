<script lang="ts">
	import type { PostData } from '../';
	import External from './External.svelte';
	import Images from './Images.svelte';
	import Video from './Video.svelte';

	const { data }: { data: PostData } = $props();
</script>

{#if data.embed}
	<div class="flex flex-col gap-2 pt-3 text-sm">
		{#if data.embed.type === 'images'}
			<Images data={data.embed} />
		{:else if data.embed.type === 'external' && data.embed.external}
			<External data={data.embed} />
		{:else if data.embed.type === 'video' && data.embed.video}
			<Video data={data.embed} />
		{:else if data.embed.type === 'unknown'}
			<div
				class="text-base-700 dark:text-base-300 bg-base-200/50 dark:bg-base-900/50 border-base-300 dark:border-base-600/30 rounded-2xl border p-4 text-sm"
			>
				Unknown embed type
			</div>
		{/if}
	</div>
{/if}
