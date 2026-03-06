import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'NumberInput',
		description: 'A numeric input with animated value transitions. Uses number-flow for smooth animations.',
		props: {
			value: {
				type: 'number',
				description: 'The current numeric value.',
				default: '50',
				bindable: true
			},
			min: {
				type: 'number',
				description: 'The minimum allowed value.',
				default: '0'
			},
			max: {
				type: 'number',
				description: 'The maximum allowed value.',
				default: '999'
			},
			step: {
				type: 'number',
				description: 'The step increment for the input.',
				default: '1'
			},
			defaultValue: {
				type: 'number',
				description: 'The initial default value.',
				default: '0'
			},
			variant: {
				type: { type: 'enum', definition: "'primary' | 'secondary'" },
				description: 'The visual variant.',
				default: "'primary'"
			},
			size: {
				type: { type: 'enum', definition: "'default' | 'sm' | 'lg'" },
				description: 'The size of the input.',
				default: "'default'"
			},
			tabindex: {
				type: 'number',
				description: 'The tabindex of the input.'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			},
			ref: {
				type: 'HTMLDivElement',
				description: 'The underlying container DOM element.',
				bindable: true
			},
			inputRef: {
				type: 'HTMLInputElement',
				description: 'Reference to the inner input element.',
				bindable: true
			}
		}
	}
] satisfies APISchema[];
