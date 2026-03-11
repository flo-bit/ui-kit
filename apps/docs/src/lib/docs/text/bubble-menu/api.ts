import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'FormattingBubbleMenu',
		description:
			'A pre-configured bubble menu with bold, italic, underline, strikethrough toggles, and an optional link editor. Appears on text selection.',
		props: {
			editor: {
				type: 'Readable<Editor>',
				description: 'The editor store.',
				required: true,
				bindable: true
			},
			class: {
				type: 'string',
				description: 'CSS classes for the menu container.'
			},
			children: {
				type: 'Snippet',
				description: 'Additional controls rendered after the default toggles.'
			}
		}
	},
	{
		title: 'BubbleMenu',
		description:
			'A styled bubble menu container that appears on text selection. Wraps svelte-tiptap BubbleMenu with dark mode styling. Use this for fully custom menus.',
		props: {
			editor: {
				type: 'Readable<Editor>',
				description: 'The editor store.',
				required: true,
				bindable: true
			},
			shouldShow: {
				type: {
					type: 'function',
					definition:
						'(props: { editor: Editor; from: number; to: number }) => boolean'
				},
				description: 'Function to control when the menu is visible.'
			},
			class: {
				type: 'string',
				description: 'CSS classes for the menu container.'
			},
			children: {
				type: 'Snippet',
				description: 'Menu content (buttons, toggles, etc.).'
			}
		}
	}
] satisfies APISchema[];
