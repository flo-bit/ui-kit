import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Slider',
		description: 'A control for selecting a numeric value within a range. Built on top of the bits-ui Slider primitive.',
		props: {
			value: {
				type: 'number[]',
				description: 'The current value of the slider. Array with one element for single, multiple for range sliders.',
				bindable: true
			},
			type: {
				type: { type: 'enum', definition: "'single' | 'multiple'" },
				description: 'Whether the slider has a single thumb or multiple thumbs.',
				default: "'single'"
			},
			min: {
				type: 'number',
				description: 'The minimum value of the slider.',
				default: '0'
			},
			max: {
				type: 'number',
				description: 'The maximum value of the slider.',
				default: '100'
			},
			step: {
				type: { type: 'union', definition: 'number | number[]' },
				description: 'The step increment. Can be a single number or an array of specific step values.'
			},
			orientation: {
				type: { type: 'enum', definition: "'horizontal' | 'vertical'" },
				description: 'The orientation of the slider.',
				default: "'horizontal'"
			},
			disabled: {
				type: 'boolean',
				description: 'Whether the slider is disabled.',
				default: 'false'
			},
			onValueChange: {
				type: { type: 'function', definition: '(value: number[]) => void' },
				description: 'A callback invoked when the slider value changes during interaction.'
			},
			onValueCommit: {
				type: { type: 'function', definition: '(value: number[]) => void' },
				description: 'A callback invoked when the user finishes interacting with the slider (on pointerup/keyup).'
			},
			dir: {
				type: { type: 'enum', definition: "'ltr' | 'rtl'" },
				description: 'The reading direction of the slider.',
				default: "'ltr'"
			},
			autoSort: {
				type: 'boolean',
				description: 'Whether to automatically sort the values when multiple thumbs cross over.',
				default: 'true'
			},
			tabindex: {
				type: 'number',
				description: 'The tabindex of the slider thumbs.'
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
