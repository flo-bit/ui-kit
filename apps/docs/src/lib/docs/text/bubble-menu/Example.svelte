<script lang="ts">
	import { CoreRichTextEditor, FormattingBubbleMenu, Box, type SvelteTiptap } from '@foxui/all';
	import type { Readable } from 'svelte/store';

	let editor = $state<Readable<SvelteTiptap.Editor>>();
</script>

<Box class="not-prose">
	<CoreRichTextEditor
		bind:editor
		placeholder="Select some text to see the bubble menu..."
		class="min-h-24"
		content={{
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [{ type: 'text', text: 'Select this text to see the formatting toolbar.' }]
				}
			]
		}}
	>
		<FormattingBubbleMenu {editor} />
	</CoreRichTextEditor>
</Box>
