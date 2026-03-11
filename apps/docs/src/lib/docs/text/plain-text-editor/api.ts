import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'PlainTextEditor',
		description: 'A plain text editor powered by TipTap, with optional single-line mode.',
		props: {
			content: {
				type: 'Content',
				description: 'The editor content (TipTap Content type).',
				default: "''",
				bindable: true
			},
			placeholder: {
				type: 'string',
				description: 'Placeholder text.',
				default: "''"
			},
			allowMultiline: {
				type: 'boolean',
				description: 'Whether to allow multiple lines of text.',
				default: 'false'
			},
			editor: {
				type: 'Editor',
				description: 'The TipTap Editor instance.',
				bindable: true
			},
			onupdate: {
				type: { type: 'function', definition: '(value: string) => void' },
				description: 'Callback invoked when the text content changes.'
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
				type: 'HTMLElement',
				description: 'The underlying DOM element.',
				bindable: true
			}
		}
	}
] satisfies APISchema[];
