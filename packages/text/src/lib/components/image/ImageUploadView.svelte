<script lang="ts">
	import type { NodeViewProps } from '@tiptap/core';
	import { onMount } from 'svelte';
	import { NodeViewWrapper } from 'svelte-tiptap';
	import type { ImageExtensionOptions, UploadState } from './helpers';

	let props: NodeViewProps = $props();

	let progress = $state(0);
	let error = $state<string | null>(null);
	let uploading = $state(true);

	onMount(() => {
		const { uploadId } = props.node.attrs;
		const storage = props.editor.storage.imageExtension as {
			uploads: Map<string, UploadState>;
		};
		const uploadState = storage.uploads.get(uploadId);
		if (!uploadState) {
			error = 'Upload state not found';
			uploading = false;
			return;
		}

		const { file, abortController } = uploadState;

		const options = props.editor.extensionManager.extensions.find(
			(ext) => ext.name === 'imageExtension'
		)?.options as ImageExtensionOptions | undefined;

		const uploadFn = options?.upload;
		if (!uploadFn) {
			error = 'No upload function configured';
			uploading = false;
			return;
		}

		let cancelled = false;

		uploadFn(
			file,
			(p) => {
				if (!cancelled) progress = p;
			},
			abortController.signal
		)
			.then((returnedUrl) => {
				if (cancelled) return;
				uploading = false;

				const pos = props.getPos();
				props.deleteNode();
				props.editor
					.chain()
					.focus()
					.insertContentAt(pos, {
						type: 'image',
						attrs: { src: returnedUrl }
					})
					.run();
			})
			.catch((err) => {
				if (cancelled) return;
				uploading = false;
				const message = err instanceof Error ? err.message : 'Upload failed';
				error = message;
				options?.onError?.(err instanceof Error ? err : new Error(message));
			});

		return () => {
			cancelled = true;
			if (uploading) {
				abortController.abort();
			}
			const state = storage.uploads.get(uploadId);
			if (state) {
				URL.revokeObjectURL(state.previewUrl);
				storage.uploads.delete(uploadId);
			}
		};
	});
</script>

<NodeViewWrapper class="relative">
	<img src={props.node.attrs.preview} alt="Upload preview" class="max-w-full rounded" />

	{#if uploading}
		<div class="absolute bottom-0 left-0 right-0 h-1 bg-accent-500/30">
			<div
				class="h-full bg-accent-500 transition-all duration-300"
				style="width: {progress * 100}%"
			></div>
		</div>
	{/if}

	{#if error}
		<div
			class="absolute inset-0 flex items-center justify-center rounded bg-red-500/20 text-sm text-red-600"
		>
			{error}
		</div>
	{/if}
</NodeViewWrapper>
