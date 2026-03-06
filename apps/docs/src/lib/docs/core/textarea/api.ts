import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Textarea',
		description: 'A styled multi-line text input.',
		props: {
			value: {
				type: 'string',
				description: 'The current value of the textarea.',
				bindable: true
			},
			variant: {
				type: { type: 'enum', definition: "'primary' | 'secondary'" },
				description: 'The visual variant.',
				default: "'primary'"
			},
			sizeVariant: {
				type: { type: 'enum', definition: "'default' | 'sm' | 'lg'" },
				description: 'The size of the textarea.',
				default: "'default'"
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			},
			ref: {
				type: 'HTMLTextAreaElement',
				description: 'The underlying DOM element.',
				bindable: true
			}
		}
	}
] satisfies APISchema[];
