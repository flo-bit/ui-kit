import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Toggle',
		description: 'A two-state button that can be toggled on or off. Built on top of the bits-ui Toggle primitive.',
		props: {
			pressed: {
				type: 'boolean',
				description: 'Whether the toggle is pressed.',
				default: 'false',
				bindable: true
			},
			onPressedChange: {
				type: { type: 'function', definition: '(pressed: boolean) => void' },
				description: 'A callback invoked when the pressed state changes.'
			},
			variant: {
				type: { type: 'enum', definition: "'default'" },
				description: 'The visual variant of the toggle.',
				default: "'default'"
			},
			size: {
				type: { type: 'enum', definition: "'default' | 'sm' | 'lg'" },
				description: 'The size of the toggle.',
				default: "'default'"
			},
			disabled: {
				type: 'boolean',
				description: 'Whether the toggle is disabled.',
				default: 'false'
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
