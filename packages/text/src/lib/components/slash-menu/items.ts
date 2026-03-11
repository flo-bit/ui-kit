import type { Editor, Range } from '@tiptap/core';
import { pickAndInsertImage } from '../image/helpers';
import { openEmbedModal } from '../embed/helpers';

type SlashMenuItem = {
	id: string;
	label: string;
	description?: string;
	icon?: string;
	command: (props: { editor: Editor; range: Range }) => void;
};

type SlashItemDef = SlashMenuItem & {
	/** Check if the required extension is available in the editor */
	available: (editor: Editor) => boolean;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chain = (editor: Editor, range: Range) => editor.chain().focus().deleteRange(range) as any;

const hasNode = (editor: Editor, name: string) => !!editor.schema.nodes[name];
const hasExtension = (editor: Editor, name: string) =>
	editor.extensionManager.extensions.some((ext) => ext.name === name);

const allItems: SlashItemDef[] = [
	{
		id: 'paragraph',
		label: 'Paragraph',
		description: 'Plain text',
		available: (e) => hasNode(e, 'paragraph'),
		command: ({ editor, range }) => chain(editor, range).setParagraph().run()
	},
	{
		id: 'heading-1',
		label: 'Heading 1',
		description: 'Large heading',
		available: (e) => hasNode(e, 'heading'),
		command: ({ editor, range }) => chain(editor, range).toggleHeading({ level: 1 }).run()
	},
	{
		id: 'heading-2',
		label: 'Heading 2',
		description: 'Medium heading',
		available: (e) => hasNode(e, 'heading'),
		command: ({ editor, range }) => chain(editor, range).toggleHeading({ level: 2 }).run()
	},
	{
		id: 'heading-3',
		label: 'Heading 3',
		description: 'Small heading',
		available: (e) => hasNode(e, 'heading'),
		command: ({ editor, range }) => chain(editor, range).toggleHeading({ level: 3 }).run()
	},
	{
		id: 'blockquote',
		label: 'Blockquote',
		description: 'Quoted text',
		available: (e) => hasNode(e, 'blockquote'),
		command: ({ editor, range }) => chain(editor, range).toggleBlockquote().run()
	},
	{
		id: 'code-block',
		label: 'Code Block',
		description: 'Code with syntax highlighting',
		available: (e) => hasNode(e, 'codeBlock'),
		command: ({ editor, range }) => chain(editor, range).toggleCodeBlock().run()
	},
	{
		id: 'bullet-list',
		label: 'Bullet List',
		description: 'Unordered list',
		available: (e) => hasNode(e, 'bulletList'),
		command: ({ editor, range }) => chain(editor, range).toggleBulletList().run()
	},
	{
		id: 'ordered-list',
		label: 'Ordered List',
		description: 'Numbered list',
		available: (e) => hasNode(e, 'orderedList'),
		command: ({ editor, range }) => chain(editor, range).toggleOrderedList().run()
	},
	{
		id: 'image',
		label: 'Image',
		description: 'Upload an image',
		available: (e) => hasExtension(e, 'imageExtension'),
		command: ({ editor, range }) => {
			editor.chain().focus().deleteRange(range).run();
			pickAndInsertImage(editor);
		}
	},
	{
		id: 'embed',
		label: 'Embed',
		description: 'Embed a URL',
		available: (e) => hasExtension(e, 'embedExtension'),
		command: ({ editor, range }) => {
			editor.chain().focus().deleteRange(range).run();
			openEmbedModal(editor);
		}
	}
];

/**
 * Returns slash menu items filtered to only those whose extensions
 * are actually registered in the editor. Safe to call with any editor config.
 *
 * @example
 * ```svelte
 * <SlashMenu editor={$editor} items={getSlashMenuItems($editor)} />
 * ```
 *
 * @example Filter or extend:
 * ```ts
 * const items = [
 *   ...getSlashMenuItems(editor).filter(i => i.id !== 'code-block'),
 *   { id: 'divider', label: 'Divider', command: ... }
 * ];
 * ```
 */
export function getSlashMenuItems(editor: Editor): SlashMenuItem[] {
	return allItems.filter((item) => item.available(editor));
}

/**
 * All block type items (paragraph, headings, blockquote, code, lists).
 * Filtered at runtime — only items with registered extensions are returned.
 */
export function getBlockTypeItems(editor: Editor): SlashMenuItem[] {
	return allItems
		.filter((item) => item.id !== 'image' && item.available(editor));
}

/**
 * Image slash menu item, or undefined if ImageExtension is not registered.
 */
export function getImageItem(editor: Editor): SlashMenuItem | undefined {
	const item = allItems.find((i) => i.id === 'image');
	return item && item.available(editor) ? item : undefined;
}
