import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Switch',
		description: 'A toggle control that switches between on and off states. Built on top of the bits-ui Switch primitive.',
		props: {
			checked: {
				type: 'boolean',
				description: 'Whether the switch is checked (on).',
				default: 'false',
				bindable: true
			},
			onCheckedChange: {
				type: { type: 'function', definition: '(checked: boolean) => void' },
				description: 'A callback invoked when the checked state changes.'
			},
			disabled: {
				type: 'boolean',
				description: 'Whether the switch is disabled.',
				default: 'false'
			},
			name: {
				type: 'string',
				description: 'The name of the switch used in form submission.'
			},
			required: {
				type: 'boolean',
				description: 'Whether the switch is required.',
				default: 'false'
			},
			value: {
				type: 'string',
				description: 'The value of the switch used in form submission.'
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
