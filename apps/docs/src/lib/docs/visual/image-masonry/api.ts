import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'ImageMasonry',
		description: 'A responsive masonry grid layout for images with optional names and click interactions.',
		props: {
			images: {
				type: { type: 'array', definition: '{ src: string; name: string; href?: string; width?: number; height?: number; onclick?: () => void; alt?: string }[]' },
				description: 'The array of images to display.',
				required: true
			},
			interactive: {
				type: 'boolean',
				description: 'Whether images have hover effects and are clickable.',
				default: 'true'
			},
			maxColumns: {
				type: 'number',
				description: 'The maximum number of columns in the masonry grid.',
				default: '4'
			},
			showNames: {
				type: 'boolean',
				description: 'Whether to show image names below each image.',
				default: 'true'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			}
		}
	}
] satisfies APISchema[];
