<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { Editor, type Extensions, mergeAttributes, Node } from '@tiptap/core';
	import Placeholder from '@tiptap/extension-placeholder';
	import { type ParagraphOptions } from '@tiptap/extension-paragraph';
	import Text from '@tiptap/extension-text';
	import History from '@tiptap/extension-history';
	import { cn } from '@fuxui/base';

	let {
		class: className,
		placeholder = '',
		value = $bindable(''),
		ref = $bindable(null),
		editor = $bindable(null),
		allowMultiline = false,
		onupdate,
		ontransaction,
		...props
	}: {
		class?: string;
		placeholder?: string;
		value?: string;
		ref?: HTMLElement | null;
		editor?: Editor | null;
		allowMultiline?: boolean;
		onupdate?: (value: string) => void;
		ontransaction?: () => void;
	} = $props();

	onMount(async () => {
		if (!ref || editor) return;

		const Document = Node.create({
			name: 'doc',
			topNode: true,
			content: allowMultiline ? 'block+' : 'block'
		});

		const Paragraph = Node.create<ParagraphOptions>({
			name: 'paragraph',

			priority: 1000,

			addOptions() {
				return {
					HTMLAttributes: {}
				};
			},

			group: 'block',

			content: 'text*',

			parseHTML() {
				return [{ tag: 'p' }];
			},

			renderHTML({ HTMLAttributes }) {
				return ['p', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
			},

			addCommands() {
				return {
					setParagraph:
						() =>
						({ commands }) => {
							return commands.setNode(this.name);
						}
				};
			},

			addKeyboardShortcuts() {
				return {
					'Mod-Alt-0': () => this.editor.commands.setParagraph()
				};
			}
		});

		let extensions: Extensions = [Document.configure(), Paragraph.configure(), Text.configure(), History.configure()];

		if (placeholder) {
			extensions.push(
				Placeholder.configure({
					placeholder: placeholder
				})
			);
		}

		editor = new Editor({
			element: ref,
			extensions: extensions,
			onUpdate: () => {
				onupdate?.(editor?.getText() ?? '');

				value = editor?.getText() ?? '';
			},
			onTransaction: () => {
				ontransaction?.();
			},

			content: value,

			editorProps: {
				attributes: {
					class: 'outline-none pointer-events-auto'
				}
			}
		});
	});

	$effect(() => {
		if (!editor || editor.getText() === value) return;

		editor.commands.setContent(value);
	});

	onDestroy(() => {
		editor?.destroy();
	});
</script>

<div class={cn('min-h-[1em]', className)} bind:this={ref} {...props}></div>

<style>
	:global(.tiptap p.is-editor-empty:first-child::before) {
		color: var(--color-base-500);
		content: attr(data-placeholder);
		float: left;
		height: 0;
		pointer-events: none;
	}
</style>
