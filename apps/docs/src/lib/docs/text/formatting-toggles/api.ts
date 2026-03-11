import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'BoldToggle',
		description: 'A toggle button for bold formatting. Syncs with the current editor selection.',
		props: {
			editor: {
				type: 'Readable<Editor>',
				description: 'The editor store.',
				required: true,
				bindable: true
			},
			isBold: {
				type: 'boolean',
				description: 'Whether bold is active at the current selection.',
				default: 'false',
				bindable: true
			}
		}
	},
	{
		title: 'ItalicToggle',
		description:
			'A toggle button for italic formatting. Syncs with the current editor selection.',
		props: {
			editor: {
				type: 'Readable<Editor>',
				description: 'The editor store.',
				required: true,
				bindable: true
			},
			isItalic: {
				type: 'boolean',
				description: 'Whether italic is active at the current selection.',
				default: 'false',
				bindable: true
			}
		}
	},
	{
		title: 'UnderlineToggle',
		description:
			'A toggle button for underline formatting. Syncs with the current editor selection.',
		props: {
			editor: {
				type: 'Readable<Editor>',
				description: 'The editor store.',
				required: true,
				bindable: true
			},
			isUnderline: {
				type: 'boolean',
				description: 'Whether underline is active at the current selection.',
				default: 'false',
				bindable: true
			}
		}
	},
	{
		title: 'StrikethroughToggle',
		description:
			'A toggle button for strikethrough formatting. Syncs with the current editor selection.',
		props: {
			editor: {
				type: 'Readable<Editor>',
				description: 'The editor store.',
				required: true,
				bindable: true
			},
			isStrikethrough: {
				type: 'boolean',
				description: 'Whether strikethrough is active at the current selection.',
				default: 'false',
				bindable: true
			}
		}
	}
] satisfies APISchema[];
