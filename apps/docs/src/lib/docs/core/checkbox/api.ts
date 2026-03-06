import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Checkbox',
		description: 'A control that allows the user to toggle between checked and not checked.',
		props: {
			checked: {
				type: 'boolean',
				description: 'The checked state of the checkbox.',
				default: 'false',
				bindable: true
			},
			indeterminate: {
				type: 'boolean',
				description: 'Whether the checkbox is in an indeterminate state.',
				default: 'false',
				bindable: true
			},
			variant: {
				type: { type: 'enum', definition: "'primary' | 'secondary'" },
				description: 'The visual variant of the checkbox.',
				default: "'primary'"
			},
			sizeVariant: {
				type: { type: 'enum', definition: "'default' | 'sm' | 'lg'" },
				description: 'The size of the checkbox.',
				default: "'default'"
			},
			disabled: {
				type: 'boolean',
				description: 'Whether the checkbox is disabled.',
				default: 'false'
			},
			required: {
				type: 'boolean',
				description: 'Whether the checkbox is required.',
				default: 'false'
			},
			name: {
				type: 'string',
				description: 'The name of the checkbox used in form submission.'
			},
			value: {
				type: 'string',
				description: 'The value of the checkbox used in form submission.'
			},
			onCheckedChange: {
				type: { type: 'function', definition: '(checked: boolean) => void' },
				description: 'A callback invoked when the checked state changes.'
			},
			onIndeterminateChange: {
				type: { type: 'function', definition: '(indeterminate: boolean) => void' },
				description: 'A callback invoked when the indeterminate state changes.'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			},
			ref: {
				type: 'HTMLElement',
				description: 'The underlying DOM element. You can bind to this to get a reference to the element.',
				bindable: true
			}
		}
	}
] satisfies APISchema[];
