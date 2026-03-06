import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Undraw',
		description: 'Renders an unDraw SVG illustration with optional color remapping and dark mode inversion.',
		props: {
			svg: {
				type: 'string',
				description: 'The unDraw SVG content as a string.',
				required: true
			},
			alt: {
				type: 'string',
				description: 'Alt text for the illustration.',
				required: true
			},
			caption: {
				type: 'string',
				description: 'Optional caption text displayed below the illustration.'
			},
			captionClass: {
				type: 'string',
				description: 'Additional CSS classes for the caption element.'
			},
			autoInvert: {
				type: 'boolean',
				description: 'Whether to automatically invert colors in dark mode.',
				default: 'false'
			},
			colorMap: {
				type: { type: 'object', definition: 'Record<string, string>' },
				description: 'A mapping of original SVG colors to replacement colors.',
				default: '{}'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			},
			ref: {
				type: 'HTMLElement',
				description: 'The underlying DOM element.',
				bindable: true
			}
		}
	}
] satisfies APISchema[];
