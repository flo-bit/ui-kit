import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'LinkCard',
		description: 'A rich preview card for URLs, displaying title, description, and media (image or video).',
		props: {
			meta: {
				type: { type: 'object', definition: '{ title: string; description?: string; image?: string; imageAlt?: string; video?: string; videoType?: string }' },
				description: 'The metadata for the link preview.',
				required: true
			},
			href: {
				type: 'string',
				description: 'The URL the card links to. When provided, the card becomes clickable.'
			},
			target: {
				type: 'string',
				description: 'The link target attribute.',
				default: "'_blank'"
			},
			showMedia: {
				type: 'boolean',
				description: 'Whether to show the image or video.',
				default: 'true'
			},
			showTitle: {
				type: 'boolean',
				description: 'Whether to show the title.',
				default: 'true'
			},
			showDescription: {
				type: 'boolean',
				description: 'Whether to show the description.',
				default: 'false'
			},
			showDomain: {
				type: 'boolean',
				description: 'Whether to show the domain name.',
				default: 'true'
			},
			showGradient: {
				type: 'boolean',
				description: 'Whether to show a gradient overlay on the media.',
				default: 'true'
			},
			children: {
				type: 'Snippet',
				description: 'Custom content to render inside the card.'
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
