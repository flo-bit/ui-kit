import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'ColorSelect',
		description: 'A group of color swatches that allows selecting a single color.',
		props: {
			colors: {
				type: { type: 'array', definition: "(string | { class?: string; label: string; value?: string })[]" },
				description: 'The list of selectable colors. Can be simple strings or objects with custom class, label, and value.',
				required: true,
				bindable: true
			},
			selected: {
				type: { type: 'union', definition: "string | { class?: string; label: string; value?: string }" },
				description: 'The currently selected color. Defaults to the first color.',
				bindable: true
			},
			name: {
				type: 'string',
				description: 'The name attribute for the underlying radio inputs (auto-generated if not provided).',
				bindable: true
			},
			onselected: {
				type: { type: 'function', definition: '(color: Color, previous: Color) => void' },
				description: 'Callback invoked when the selected color changes.'
			},
			colorsClass: {
				type: 'string',
				description: 'Additional CSS classes for the color swatches container.'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply to the root element.'
			},
			ref: {
				type: 'HTMLDivElement',
				description: 'The underlying DOM element.',
				bindable: true
			}
		}
	}
] satisfies APISchema[];
