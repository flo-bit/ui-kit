import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'AdvancedTextArea',
		description: 'A textarea with optional additional content area and action buttons, suitable for composing posts or messages.',
		props: {
			value: {
				type: 'string',
				description: 'The current text value.',
				bindable: true
			},
			placeholder: {
				type: 'string',
				description: 'Placeholder text.',
				default: "'Write something here...'"
			},
			rows: {
				type: 'number',
				description: 'The number of visible text rows.',
				default: '3'
			},
			additionalContent: {
				type: 'Snippet',
				description: 'Additional content to display below the textarea (e.g. media previews).'
			},
			actionButtons: {
				type: 'Snippet',
				description: 'Action buttons displayed in the bottom-left area (e.g. attach, emoji).'
			},
			submitButton: {
				type: { type: 'union', definition: "Snippet | string | null" },
				description: 'The submit button. Can be a string label, a custom snippet, or null to hide.',
				default: "'Post'"
			}
		}
	}
] satisfies APISchema[];
