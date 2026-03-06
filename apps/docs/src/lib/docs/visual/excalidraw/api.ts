import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Excalidraw',
		description: 'Renders an Excalidraw SVG drawing with optional caption.',
		props: {
			svg: {
				type: 'string',
				description: 'The Excalidraw SVG content as a string.',
				required: true
			},
			alt: {
				type: 'string',
				description: 'Alt text for the drawing.',
				required: true
			},
			caption: {
				type: 'string',
				description: 'Optional caption text displayed below the drawing.'
			},
			captionClass: {
				type: 'string',
				description: 'Additional CSS classes for the caption element.'
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
