import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'ImageCard',
		description: 'A card component with an image, title, and optional description. Can be a link or clickable.',
		props: {
			src: {
				type: 'string',
				description: 'The image source URL.',
				required: true
			},
			alt: {
				type: 'string',
				description: 'Alt text for the card image.',
				required: true
			},
			title: {
				type: 'string',
				description: 'The card title.',
				required: true
			},
			description: {
				type: 'string',
				description: 'Optional description text below the title.'
			},
			href: {
				type: 'string',
				description: 'When provided, the card renders as a link.'
			},
			onclick: {
				type: { type: 'function', definition: '() => void' },
				description: 'Click event handler.'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			}
		}
	}
] satisfies APISchema[];
