<script lang="ts">
	import { CoreRichTextEditor, Box, type SvelteTiptap } from '@foxui/all';
	import type { Readable } from 'svelte/store';

	let editor = $state<Readable<SvelteTiptap.Editor>>();
</script>

<Box class="not-prose">
	<CoreRichTextEditor bind:editor placeholder="Write something..." class="min-h-24"
	></CoreRichTextEditor>
</Box>
