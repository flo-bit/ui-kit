// Main component (all-in-one convenience)
export { default as RichTextEditor } from './RichTextEditor.svelte';

// Standalone composable components
export { FormattingBubbleMenu } from './formatting-bubble-menu';

// Re-export svelte-tiptap primitives for convenience
export {
	createEditor,
	EditorContent,
	BubbleMenu,
	FloatingMenu,
	SvelteNodeViewRenderer,
	NodeViewWrapper,
	NodeViewContent
} from 'svelte-tiptap';

// Extensions
export { RichTextLink } from './RichTextLink';
export { ImageUploadNode } from './image-upload/ImageUploadNode';
export { default as Slash, suggestion } from './slash-menu';

// Types
export type RichTextTypes =
	| 'paragraph'
	| 'heading-1'
	| 'heading-2'
	| 'heading-3'
	| 'blockquote'
	| 'code'
	| 'bullet-list'
	| 'ordered-list';

export type { RichTextLinkOptions } from './RichTextLink';
export type { UploadFunction, ImageUploadNodeOptions } from './image-upload/ImageUploadNode';

// Code theme CSS (side-effect import for consumers who want it)
import './code.css';
