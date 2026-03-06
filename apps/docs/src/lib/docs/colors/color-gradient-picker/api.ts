import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'ColorGradientPicker',
		description: 'A gradient editor that lets users add, remove, and reposition color stops.',
		props: {
			colors: {
				type: { type: 'array', definition: '{ rgb: { r: number; g: number; b: number }; position: number }[]' },
				description: 'The array of color stops defining the gradient.',
				bindable: true
			},
			defaultNewColor: {
				type: { type: 'object', definition: '{ r: number; g: number; b: number }' },
				description: 'The default RGB color for newly added stops.',
				default: '{ r: 0, g: 0, b: 0 }'
			},
			size: {
				type: { type: 'enum', definition: "'default' | 'sm'" },
				description: 'The size of the gradient picker.',
				default: "'default'"
			},
			onchange: {
				type: { type: 'function', definition: '(colors: ColorStop[]) => void' },
				description: 'Callback invoked when the gradient colors change.'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			}
		}
	}
] satisfies APISchema[];
