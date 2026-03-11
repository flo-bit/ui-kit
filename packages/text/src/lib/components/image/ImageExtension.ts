import { Extension, Node, mergeAttributes } from '@tiptap/core';
import { Plugin } from '@tiptap/pm/state';
import Image from '@tiptap/extension-image';
import { SvelteNodeViewRenderer } from 'svelte-tiptap';
import type { ImageExtensionOptions, UploadState } from './helpers';
import { insertImage } from './helpers';
import ImageUploadView from './ImageUploadView.svelte';

declare module '@tiptap/core' {
	interface Commands<ReturnType> {
		imageExtension: {
			insertImageUpload: (file: File) => ReturnType;
		};
	}
}

const ImageUploadNode = Node.create({
	name: 'imageUpload',
	group: 'block',
	atom: true,
	draggable: false,
	selectable: true,
	inline: false,

	addAttributes() {
		return {
			uploadId: { default: null },
			preview: { default: null }
		};
	},

	parseHTML() {
		return [{ tag: 'div[data-type="image-upload"]' }];
	},

	renderHTML({ HTMLAttributes }) {
		return ['div', mergeAttributes({ 'data-type': 'image-upload' }, HTMLAttributes)];
	},

	addNodeView() {
		return SvelteNodeViewRenderer(ImageUploadView);
	}
});

export const ImageExtension = Extension.create<ImageExtensionOptions>({
	name: 'imageExtension',

	addOptions() {
		return {
			upload: () => Promise.reject(new Error('No upload function configured')),
			accept: 'image/*',
			maxFileSize: 0,
			onError: undefined,
			HTMLAttributes: {},
			imageComponent: undefined
		};
	},

	addStorage() {
		return {
			uploads: new Map<string, UploadState>()
		};
	},

	addExtensions() {
		const imageComponent = this.options.imageComponent;
		const imageExtension = imageComponent
			? Image.extend({
					addNodeView() {
						return SvelteNodeViewRenderer(imageComponent);
					}
				}).configure({
					HTMLAttributes: this.options.HTMLAttributes ?? {}
				})
			: Image.configure({
					HTMLAttributes: this.options.HTMLAttributes ?? {}
				});

		return [imageExtension, ImageUploadNode];
	},

	addCommands() {
		return {
			insertImageUpload:
				(file: File) =>
				({ editor }) => {
					insertImage(editor, file);
					return true;
				}
		};
	},

	addProseMirrorPlugins() {
		const editor = this.editor;
		const extensionOptions = this.options;

		return [
			new Plugin({
				props: {
					handlePaste(view, event) {
						const items = event.clipboardData?.items;
						if (!items) return false;

						for (const item of Array.from(items)) {
							if (!item.type.startsWith('image/')) continue;
							const file = item.getAsFile();
							if (!file) continue;

							event.preventDefault();
							insertImage(editor, file);
							return true;
						}

						return false;
					},

					handleDrop(view, event, _slice, moved) {
						if (moved) return false;

						const files = event.dataTransfer?.files;
						if (!files?.length) return false;

						const file = files[0];
						if (!file?.type.startsWith('image/')) return false;

						event.preventDefault();

						const coords = view.posAtCoords({
							left: event.clientX,
							top: event.clientY
						});

						if (!coords) return false;

						const storage = editor.storage.imageExtension as
							| { uploads: Map<string, UploadState> }
							| undefined;
						if (!storage) return false;

						// Validate file type
						if (
							extensionOptions.accept &&
							extensionOptions.accept !== 'image/*'
						) {
							const accepted = extensionOptions.accept
								.split(',')
								.map((s) => s.trim());
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
								extensionOptions.onError?.(
									new Error(`File type "${file.type}" is not accepted`)
								);
								return true;
							}
						}

						// Validate file size
						if (
							extensionOptions.maxFileSize &&
							extensionOptions.maxFileSize > 0 &&
							file.size > extensionOptions.maxFileSize
						) {
							extensionOptions.onError?.(
								new Error(
									`File size ${file.size} exceeds maximum ${extensionOptions.maxFileSize} bytes`
								)
							);
							return true;
						}

						const uploadId = crypto.randomUUID();
						const previewUrl = URL.createObjectURL(file);
						const abortController = new AbortController();

						storage.uploads.set(uploadId, { file, previewUrl, abortController });

						const { tr } = view.state;
						const node = view.state.schema.nodes.imageUpload.create({
							uploadId,
							preview: previewUrl
						});

						view.dispatch(tr.insert(coords.pos, node));

						return true;
					}
				}
			})
		];
	}
});
