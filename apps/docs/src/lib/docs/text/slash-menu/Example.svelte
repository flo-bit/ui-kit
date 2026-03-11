<script lang="ts">
	import { CoreRichTextEditor, SlashMenu, Box, type SvelteTiptap } from '@foxui/all';
	import type { Readable } from 'svelte/store';

	let editor = $state<Readable<SvelteTiptap.Editor>>();
</script>

<Box>
	<CoreRichTextEditor bind:editor placeholder="Type / to open the command menu..." class="min-h-24">
		<SlashMenu editor={$editor} />
	</CoreRichTextEditor>
</Box>
