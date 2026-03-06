import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Box',
		description: 'A styled container with default padding, rounded corners, and a subtle background.',
		props: {
			children: {
				type: 'Snippet',
				description: 'The content to display inside the box.',
				required: true
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			},
			ref: {
				type: 'HTMLDivElement',
				description: 'The underlying DOM element.'
			}
		}
	}
] satisfies APISchema[];
