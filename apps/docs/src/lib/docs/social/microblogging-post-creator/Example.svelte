<script lang="ts">
	import {
		MicrobloggingPostCreator,
		createBlueskyMentionSearch,
		type MicrobloggingPostContent
	} from '@foxui/all';

	let content: MicrobloggingPostContent = $state({ text: '', json: { type: 'doc' } });
	let embed: { type: string; url: string; text: string } | undefined = $state(undefined);

	const searchMentions = createBlueskyMentionSearch();
</script>

<div class="not-prose flex w-full flex-col gap-4">
	<MicrobloggingPostCreator
		bind:content
		{searchMentions}
		bind:embed
		class="border-base-300 dark:border-base-700 rounded-2xl border p-4"
	>
		{#snippet embedPreview({ embed: e, removeEmbed })}
			<div
				class="border-base-300 dark:border-base-700 flex items-center gap-2 rounded-xl border p-3"
			>
				<span class="text-base-500 min-w-0 flex-1 truncate text-sm">{e.url}</span>
				<button
					onclick={removeEmbed}
					class="text-base-400 hover:text-base-600 dark:hover:text-base-300 text-xs"
					>Remove</button
				>
			</div>
		{/snippet}
	</MicrobloggingPostCreator>

	{#if content.text}
		<details class="text-sm">
			<summary class="cursor-pointer">Output</summary>
			<pre class="mt-2 overflow-auto rounded-lg bg-black/5 p-3 dark:bg-white/5">{JSON.stringify(content, null, 2)}</pre>
		</details>
	{/if}
</div>
