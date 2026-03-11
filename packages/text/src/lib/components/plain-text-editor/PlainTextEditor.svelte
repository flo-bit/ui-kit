<script lang="ts">
	import { Node, mergeAttributes } from '@tiptap/core';
	import Text from '@tiptap/extension-text';
	import History from '@tiptap/extension-history';
	import { cn } from '@foxui/core';
	import { CoreRichTextEditor } from '..';
	import type { BaseEditorProps } from '../core-rich-text-editor/types';

	let {
		content = $bindable(),
		editor = $bindable(),
		ref = $bindable(null),
		class: className,
		allowMultiline = true,
		extensions,
		...restProps
	}: BaseEditorProps & {
		/** Allow multiple lines/blocks. When false, only a single block is allowed. @default true */
		allowMultiline?: boolean;
	} = $props();

	const Paragraph = Node.create({
		name: 'paragraph',
		group: 'block',
		content: 'inline*',
		parseHTML() {
			return [{ tag: 'p' }];
		},
		renderHTML({ HTMLAttributes }) {
			return ['p', mergeAttributes(HTMLAttributes), 0];
		}
	});

	let simpleExtensions = $derived([
		Node.create({
			name: 'doc',
			topNode: true,
			content: allowMultiline ? 'block+' : 'block'
		}),
		Paragraph,
		Text,
		History
	]);
</script>

<CoreRichTextEditor
	bind:content
	bind:editor
	bind:ref
	class={cn('min-h-[1em]', className)}
	extensions={extensions ?? simpleExtensions}
	{...restProps}
/>
