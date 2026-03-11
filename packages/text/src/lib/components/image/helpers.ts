import type { Editor } from '@tiptap/core';
import type { Component } from 'svelte';

declare module '@tiptap/core' {
	interface Storage {
		imageExtension: {
			uploads: Map<string, UploadState>;
		};
	}
}

/**
 * Upload function signature for image uploads.
 * @param file - The image file to upload
 * @param onProgress - Progress callback (0..1)
 * @param abortSignal - Signal to abort the upload
 * @returns The final URL of the uploaded image
 */
export type ImageUploadFn = (
	file: File,
	onProgress: (progress: number) => void,
	abortSignal: AbortSignal
) => Promise<string>;

export interface ImageExtensionOptions {
	upload: ImageUploadFn;
	/** Accepted file types. @default 'image/*' */
	accept?: string;
	/** Maximum file size in bytes. 0 = unlimited. @default 0 */
	maxFileSize?: number;
	/** Error handler for upload failures */
	onError?: (error: Error) => void;
	/** HTML attributes applied to final <img> elements */
	HTMLAttributes?: Record<string, string>;
	/** Custom Svelte component for rendering final images. Receives NodeViewProps from tiptap. */
	imageComponent?: Component;
}

export interface UploadState {
	file: File;
	previewUrl: string;
	abortController: AbortController;
}

/**
 * Insert a file as an uploading image into the editor.
 */
export function insertImage(editor: Editor, file: File): void {
	const storage = editor.storage.imageExtension as
		| { uploads: Map<string, UploadState> }
		| undefined;
	if (!storage) return;

	const options = editor.extensionManager.extensions.find(
		(ext) => ext.name === 'imageExtension'
	)?.options as ImageExtensionOptions | undefined;

	if (options?.accept && options.accept !== 'image/*') {
		const accepted = options.accept.split(',').map((s) => s.trim());
		const matches = accepted.some((pattern) => {
			if (pattern.startsWith('.')) {
				return file.name.toLowerCase().endsWith(pattern.toLowerCase());
			}
			if (pattern.endsWith('/*')) {
				return file.type.startsWith(pattern.replace('/*', '/'));
			}
			return file.type === pattern;
		});
		if (!matches) {
			options.onError?.(new Error(`File type "${file.type}" is not accepted`));
			return;
		}
	}

	if (options?.maxFileSize && options.maxFileSize > 0 && file.size > options.maxFileSize) {
		options.onError?.(
			new Error(
				`File size ${file.size} exceeds maximum ${options.maxFileSize} bytes`
			)
		);
		return;
	}

	const uploadId = crypto.randomUUID();
	const previewUrl = URL.createObjectURL(file);
	const abortController = new AbortController();

	storage.uploads.set(uploadId, { file, previewUrl, abortController });

	editor
		.chain()
		.focus()
		.insertContent({
			type: 'imageUpload',
			attrs: { uploadId, preview: previewUrl }
		})
		.run();
}

/**
 * Open a native file picker and insert the selected image into the editor.
 */
export function pickAndInsertImage(editor: Editor): void {
	const options = editor.extensionManager.extensions.find(
		(ext) => ext.name === 'imageExtension'
	)?.options as ImageExtensionOptions | undefined;

	const input = document.createElement('input');
	input.type = 'file';
	input.accept = options?.accept ?? 'image/*';

	input.addEventListener('change', () => {
		const file = input.files?.[0];
		if (file) {
			insertImage(editor, file);
		}
	});

	input.click();
}
