<script lang="ts">
	import { CoreRichTextEditor, BlockTypeMenu, Box, type SvelteTiptap } from '@foxui/all';
	import type { Readable } from 'svelte/store';

	let editor = $state<Readable<SvelteTiptap.Editor>>();
</script>

<Box class="not-prose space-y-2">
	{#if $editor}
		<BlockTypeMenu {editor} />
	{/if}
	<CoreRichTextEditor bind:editor placeholder="Write something, then use the buttons above..." class="min-h-24" />
</Box>
