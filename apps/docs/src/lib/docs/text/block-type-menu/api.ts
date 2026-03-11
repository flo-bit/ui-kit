import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'BlockTypeMenu',
		description:
			'A row of block type buttons that reflect the current selection. Only shows items for registered extensions.',
		props: {
			editor: {
				type: 'Readable<Editor>',
				description: 'The editor store.',
				required: true,
				bindable: true
			},
			items: {
				type: { type: 'object', definition: 'BlockTypeItem[]' },
				description:
					'Custom block type items. Defaults to Paragraph, Heading 1–3, Blockquote, Code Block, Bullet List, Ordered List.'
			},
			class: {
				type: 'string',
				description: 'CSS classes for the container.'
			}
		}
	},
	{
		title: 'BlockTypeItem',
		description: 'The data shape for block type items.',
		props: {
			id: {
				type: 'string',
				description: 'Unique identifier.',
				required: true
			},
			label: {
				type: 'string',
				description: 'Display label for the button.',
				required: true
			},
			isActive: {
				type: {
					type: 'function',
					definition: '(editor: Editor) => boolean'
				},
				description: 'Returns whether this block type is currently active.',
				required: true
			},
			command: {
				type: {
					type: 'function',
					definition: '(editor: Editor) => void'
				},
				description: 'Called when the button is clicked.',
				required: true
			}
		}
	}
] satisfies APISchema[];
