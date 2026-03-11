<script lang="ts">
	import {
		CoreRichTextEditor,
		EmbedExtension,
		EmbedModal,
		youtubeEmbed,
		Box,
		Button,
		openEmbedModal,
		type SvelteTiptap
	} from '@foxui/all';
	import type { Readable } from 'svelte/store';

	let editor = $state<Readable<SvelteTiptap.Editor>>();
</script>

<Box class="not-prose">
	<CoreRichTextEditor
		bind:editor
		placeholder="Paste a YouTube URL to see it embed..."
		extraExtensions={[
			EmbedExtension.configure({
				embeds: [youtubeEmbed]
			})
		]}
		class="min-h-24"
	>
		{#if $editor}
			<EmbedModal editor={$editor} />
		{/if}
	</CoreRichTextEditor>
	<div class="mt-2">
		<Button
			onclick={() => {
				if ($editor) openEmbedModal($editor);
			}}
		>
			Add Embed
		</Button>
	</div>
</Box>
