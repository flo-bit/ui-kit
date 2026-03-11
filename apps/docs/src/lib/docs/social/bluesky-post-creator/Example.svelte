<script lang="ts">
	import { BlueskyPostCreator, type BlueskyPostContent } from '@foxui/all';

	let content: BlueskyPostContent = $state({ text: '', facets: [] });
</script>

<div class="not-prose flex w-full flex-col gap-4">
	<BlueskyPostCreator
		bind:content
		class="border-base-300 dark:border-base-700 rounded-2xl border p-4"
	/>

	{#if content.text}
		<details class="text-base-500 text-xs">
			<summary class="cursor-pointer">Output</summary>
			<pre class="bg-base-100 dark:bg-base-800 mt-2 overflow-x-auto rounded-xl p-3">{JSON.stringify(content, null, 2)}</pre>
		</details>
	{/if}
</div>
