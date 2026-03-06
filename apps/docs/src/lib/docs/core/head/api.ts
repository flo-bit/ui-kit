import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Head',
		description: 'Sets page metadata including title, description, Open Graph tags, and favicon.',
		props: {
			title: {
				type: 'string',
				description: 'The page title (sets <title> and og:title).'
			},
			description: {
				type: 'string',
				description: 'The page description (sets meta description and og:description).'
			},
			image: {
				type: 'string',
				description: 'The Open Graph image URL.'
			},
			url: {
				type: 'string',
				description: 'The canonical page URL.'
			},
			emojiFavicon: {
				type: 'string',
				description: 'An emoji to use as the page favicon (rendered as SVG).'
			}
		}
	}
] satisfies APISchema[];
