<script lang="ts">
	import { CoreRichTextEditor, Box, type SvelteTiptap } from '@foxui/all';
	import type { Readable } from 'svelte/store';

	let editor = $state<Readable<SvelteTiptap.Editor>>();
</script>

<Box>
	<CoreRichTextEditor
		bind:editor
		placeholder="Try typing ``` to create a code block..."
		class="min-h-46"
		content={{
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'This is an example of a code block. You can create one by typing three backticks (```) followed by the language name.'
						}
					]
				},
				{
					type: 'codeBlock',
					attrs: { language: 'javascript' },
					content: [
						{
							type: 'text',
							text: 'function greet(name) {\n  return `Hello, ${name}!`;\n}'
						}
					]
				}
			]
		}}
	/>
</Box>
