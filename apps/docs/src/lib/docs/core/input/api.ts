import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Input',
		description: 'A styled text input field.',
		props: {
			value: {
				type: 'string',
				description: 'The current value of the input.',
				bindable: true
			},
			type: {
				type: 'string',
				description: 'The HTML input type (text, email, password, number, etc.). Excludes "file".'
			},
			variant: {
				type: { type: 'enum', definition: "'primary' | 'secondary'" },
				description: 'The visual variant of the input.',
				default: "'primary'"
			},
			sizeVariant: {
				type: { type: 'enum', definition: "'default' | 'sm' | 'lg'" },
				description: 'The size of the input.',
				default: "'default'"
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			},
			ref: {
				type: 'HTMLInputElement',
				description: 'The underlying DOM element.',
				bindable: true
			}
		}
	}
] satisfies APISchema[];
