import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Alert',
		description: 'A component for displaying important messages to the user.',
		props: {
			title: {
				type: 'string',
				description: 'The title text of the alert.'
			},
			type: {
				type: { type: 'enum', definition: "'info' | 'warning' | 'success' | 'error'" },
				description: 'The type of alert, which determines the icon and default color scheme.'
			},
			variant: {
				type: 'string',
				description: 'The visual variant of the alert.'
			},
			children: {
				type: 'Snippet',
				description: 'The content to display inside the alert.',
				required: true
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
