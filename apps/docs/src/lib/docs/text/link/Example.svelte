<script lang="ts">
	import { CoreRichTextEditor, FormattingBubbleMenu, Box, type SvelteTiptap } from '@foxui/all';
	import type { Readable } from 'svelte/store';

	let editor = $state<Readable<SvelteTiptap.Editor>>();
</script>

<Box class="not-prose">
	<CoreRichTextEditor bind:editor class="min-h-24">
		{#if $editor}
			<FormattingBubbleMenu {editor} />
		{/if}
	</CoreRichTextEditor>
</Box>
