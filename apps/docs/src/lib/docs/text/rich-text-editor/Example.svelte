<script lang="ts">
	import { Box, RichTextEditor } from '@foxui/all';

	let content = $state('');

	async function uploadImage(file: File, onProgress: (progress: number) => void) {
		for (let i = 0; i <= 10; i++) {
			await new Promise((r) => setTimeout(r, 150));
			onProgress(i / 10);
		}
		return URL.createObjectURL(file);
	}
</script>

<Box>
	<RichTextEditor
		bind:content
		placeholder="Write something or press / for commands..."
		image={uploadImage}
		embeds={true}
	/>
</Box>
