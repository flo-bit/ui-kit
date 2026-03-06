import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Image',
		description: 'An image component with optional theme color overlay and blur effects.',
		props: {
			src: {
				type: 'string',
				description: 'The image source URL.'
			},
			alt: {
				type: 'string',
				description: 'Alt text for the image.',
				required: true
			},
			useThemeColor: {
				type: 'boolean',
				description: 'Whether to apply a theme color overlay to the image.',
				default: 'false'
			},
			blur: {
				type: 'boolean',
				description: 'Whether to apply a blur loading effect.',
				default: 'true'
			},
			showNormalOnHover: {
				type: 'boolean',
				description: 'When useThemeColor is true, shows the original image on hover.',
				default: 'false'
			},
			containerClasses: {
				type: 'string',
				description: 'Additional CSS classes for the image container.'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes for the image element.'
			},
			ref: {
				type: 'HTMLImageElement',
				description: 'The underlying image DOM element.',
				bindable: true
			}
		}
	}
] satisfies APISchema[];
