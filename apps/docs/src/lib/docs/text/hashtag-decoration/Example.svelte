<script lang="ts">
	import { CoreRichTextEditor, HashtagDecoration, Box, type SvelteTiptap } from '@foxui/all';
	import type { Readable } from 'svelte/store';

	let editor = $state<Readable<SvelteTiptap.Editor>>();
</script>

<Box class="not-prose">
	<CoreRichTextEditor
		bind:editor
		extraExtensions={[HashtagDecoration]}
		placeholder="Try typing #hello or #svelte..."
		class="min-h-24"
		content={{
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'Check out #svelte and #tiptap for building rich text editors!'
						}
					]
				}
			]
		}}
	/>
</Box>

<style>
	:global(.hashtag) {
		color: var(--color-accent-600);
		font-weight: 500;
	}
	:global(.dark .hashtag) {
		color: var(--color-accent-400);
	}
</style>
