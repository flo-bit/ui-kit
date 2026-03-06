import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Phone',
		description: 'A decorative phone frame that wraps content to simulate a mobile device display.',
		props: {
			children: {
				type: 'Snippet',
				description: 'The content to display inside the phone frame.',
				required: true
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			}
		}
	}
] satisfies APISchema[];
