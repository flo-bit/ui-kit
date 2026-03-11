<script lang="ts">
	import {
		CoreRichTextEditor,
		ImageExtension,
		EditableImage,
		pickAndInsertImage,
		Box,
		Button,
		type SvelteTiptap
	} from '@foxui/all';
	import type { Readable } from 'svelte/store';

	let editor = $state<Readable<SvelteTiptap.Editor>>();
	let errorMessage = $state('');

	async function fakeUpload(
		file: File,
		onProgress: (p: number) => void,
		signal: AbortSignal
	): Promise<string> {
		// Read the actual file as a data URL so the same image is shown after "upload"
		const dataUrl = await new Promise<string>((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result as string);
			reader.onerror = () => reject(new Error('Failed to read file'));
			reader.readAsDataURL(file);
		});

		// Simulate upload progress
		return new Promise((resolve, reject) => {
			let progress = 0;
			const interval = setInterval(() => {
				progress += 0.1;
				onProgress(Math.min(progress, 1));
				if (progress >= 1) {
					clearInterval(interval);
					resolve(dataUrl);
				}
			}, 200);
			signal.addEventListener('abort', () => {
				clearInterval(interval);
				reject(new Error('Upload cancelled'));
			});
		});
	}
</script>

<Box class="not-prose">
	<CoreRichTextEditor
		bind:editor
		placeholder="Paste or drop an image..."
		extraExtensions={[
			ImageExtension.configure({
				upload: fakeUpload,
				imageComponent: EditableImage,
				onError: (err) => {
					errorMessage = err.message;
				}
			})
		]}
		class="min-h-24"
	/>

	<div class="mt-2 flex items-center gap-2">
		<Button
			onclick={() => {
				if ($editor) {
					pickAndInsertImage($editor);
				}
			}}
		>
			Add Image
		</Button>

		{#if errorMessage}
			<span class="text-sm text-red-500">{errorMessage}</span>
		{/if}
	</div>
</Box>
