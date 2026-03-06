import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'StarRating',
		description: 'An interactive star rating component with customizable appearance.',
		props: {
			rating: {
				type: 'number',
				description: 'The current rating value (0-5).',
				required: true,
				bindable: true
			},
			changeable: {
				type: 'boolean',
				description: 'Whether the user can change the rating by clicking.',
				default: 'true'
			},
			size: {
				type: 'string',
				description: 'Tailwind size class for the stars.',
				default: "'size-8'"
			},
			strokeWidth: {
				type: 'number',
				description: 'The stroke width of the star SVG outlines.',
				default: '0.8'
			},
			buttonClasses: {
				type: 'string',
				description: 'Additional CSS classes for each star button.'
			},
			svgClasses: {
				type: 'string',
				description: 'Additional CSS classes for each star SVG.'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply to the container.'
			},
			ref: {
				type: 'HTMLElement',
				description: 'The underlying DOM element.',
				bindable: true
			}
		}
	}
] satisfies APISchema[];
