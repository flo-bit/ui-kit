import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'CoreRichTextEditor',
		description:
			'The base rich text editor component. Wraps svelte-tiptap with sensible defaults (StarterKit, LinkExtension, CodeBlockLowlight). Use directly for full control, or use RichTextEditor for a batteries-included experience.',
		props: {
			content: {
				type: 'Content',
				description: 'The editor content (TipTap Content type - can be HTML string, JSON, etc.).',
				default: '{}',
				bindable: true
			},
			editor: {
				type: 'Readable<Editor>',
				description: 'A Svelte readable store containing the TipTap Editor instance.',
				bindable: true
			},
			placeholder: {
				type: 'string',
				description: 'Placeholder text shown when the editor is empty.',
				default: "''"
			},
			markdown: {
				type: 'boolean',
				description:
					'Enable Markdown mode. Parses Markdown input and serializes content back to Markdown strings.',
				default: 'false'
			},
			extensions: {
				type: 'Extensions',
				description:
					'Custom extension array. Replaces all default extensions when provided.'
			},
			extraExtensions: {
				type: 'Extensions',
				description:
					'Additional extensions merged with the defaults. Use this to add features without losing StarterKit, LinkExtension, etc.'
			},
			onupdate: {
				type: {
					type: 'function',
					definition: '(content: Content | string) => void'
				},
				description: 'Callback invoked when the editor content changes.'
			},
			ontransaction: {
				type: { type: 'function', definition: '() => void' },
				description: 'Callback invoked on every TipTap transaction.'
			},
			onlinkadded: {
				type: {
					type: 'function',
					definition: '(event: LinkAddedEvent) => void'
				},
				description:
					'Called whenever a link is added (typing, pasting, autolink, or UI). Only applies when using default extensions.'
			},
			children: {
				type: 'Snippet',
				description:
					'Child content rendered inside the editor wrapper (e.g. BubbleMenu, SlashMenu). Only rendered when the editor is ready.'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply to the wrapper div.'
			},
			ref: {
				type: 'HTMLDivElement',
				description: 'The underlying DOM element.',
				bindable: true
			}
		}
	}
] satisfies APISchema[];
