import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'RichTextEditor',
		description: 'A rich text editor powered by TipTap with a formatting toolbar, slash commands, and markdown support.',
		props: {
			content: {
				type: 'Content',
				description: 'The editor content (TipTap Content type - can be HTML string, JSON, etc.).',
				default: '{}',
				bindable: true
			},
			placeholder: {
				type: 'string',
				description: 'Placeholder text.',
				default: "'Write or press / for commands'"
			},
			editor: {
				type: 'Readable<Editor>',
				description: 'A Svelte readable store containing the TipTap Editor instance.',
				bindable: true
			},
			onupdate: {
				type: { type: 'function', definition: '(content: Content, context: { editor: Editor; transaction: Transaction }) => void' },
				description: 'Callback invoked when the editor content changes.'
			},
			ontransaction: {
				type: { type: 'function', definition: '() => void' },
				description: 'Callback invoked on every TipTap transaction.'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			},
			ref: {
				type: 'HTMLDivElement',
				description: 'The underlying DOM element.',
				bindable: true
			}
		}
	}
] satisfies APISchema[];
