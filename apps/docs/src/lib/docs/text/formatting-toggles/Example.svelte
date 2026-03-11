<script lang="ts">
	import {
		CoreRichTextEditor,
		BoldToggle,
		ItalicToggle,
		UnderlineToggle,
		StrikethroughToggle,
		Box,
		type SvelteTiptap
	} from '@foxui/all';
	import type { Readable } from 'svelte/store';

	let editor = $state<Readable<SvelteTiptap.Editor>>();
</script>

<Box class="not-prose space-y-2">
	{#if $editor}
		<div class="flex gap-1">
			<BoldToggle {editor} />
			<ItalicToggle {editor} />
			<UnderlineToggle {editor} />
			<StrikethroughToggle {editor} />
		</div>
	{/if}
	<CoreRichTextEditor
		bind:editor
		placeholder="Select text and use the toggles above..."
		class="min-h-24"
		content={{
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [{ type: 'text', text: 'Try selecting this text and toggling formatting.' }]
				}
			]
		}}
	/>
</Box>
