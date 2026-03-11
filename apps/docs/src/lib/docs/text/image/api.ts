import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'ImageExtension',
		description:
			'A tiptap Extension that bundles image display, upload placeholders, and paste/drop handling. Add via extraExtensions.',
		props: {
			upload: {
				type: {
					type: 'function',
					definition: '(file: File, onProgress: (p: number) => void, signal: AbortSignal) => Promise<string>'
				},
				description: 'Upload function. Receives the file, a progress callback (0–1), and an AbortSignal. Must return the final image URL.',
				required: true
			},
			accept: {
				type: 'string',
				description: 'Accepted file types for the file picker and validation.',
				default: "'image/*'"
			},
			maxFileSize: {
				type: 'number',
				description: 'Maximum file size in bytes. 0 means unlimited.',
				default: '0'
			},
			onError: {
				type: {
					type: 'function',
					definition: '(error: Error) => void'
				},
				description: 'Called when an upload fails or a file is rejected.'
			},
			HTMLAttributes: {
				type: { type: 'object', definition: 'Record<string, string>' },
				description: 'HTML attributes applied to final <img> elements.',
				default: '{}'
			},
			imageComponent: {
				type: { type: 'object', definition: 'Component' },
				description:
					'Custom Svelte component for rendering final images. Receives NodeViewProps from tiptap (node.attrs.src, node.attrs.alt, etc.).'
			}
		}
	},
	{
		title: 'EditableImage',
		description:
			'A pre-built image component with alt text editing. Shows a pencil button on hover that opens a modal with a textarea. Use as imageComponent option.',
		props: {}
	},
	{
		title: 'pickAndInsertImage',
		description:
			'Helper function that opens a native file picker and inserts the selected image into the editor.',
		props: {
			editor: {
				type: { type: 'object', definition: 'Editor' },
				description: 'The tiptap editor instance.',
				required: true
			}
		}
	},
	{
		title: 'insertImage',
		description:
			'Helper function that inserts a file directly as an uploading image into the editor.',
		props: {
			editor: {
				type: { type: 'object', definition: 'Editor' },
				description: 'The tiptap editor instance.',
				required: true
			},
			file: {
				type: { type: 'object', definition: 'File' },
				description: 'The image file to upload.',
				required: true
			}
		}
	},
	{
		title: 'ImageUploadFn',
		description: 'Type signature for the upload function.',
		props: {
			file: {
				type: { type: 'object', definition: 'File' },
				description: 'The image file to upload.',
				required: true
			},
			onProgress: {
				type: {
					type: 'function',
					definition: '(progress: number) => void'
				},
				description: 'Progress callback. Values range from 0 to 1.',
				required: true
			},
			abortSignal: {
				type: { type: 'object', definition: 'AbortSignal' },
				description: 'Signal to abort the upload when the placeholder is deleted.',
				required: true
			}
		}
	}
] satisfies APISchema[];
