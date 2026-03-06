import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'ScrollArea',
		description: 'A container with custom-styled scrollbars.',
		props: {
			orientation: {
				type: { type: 'enum', definition: "'vertical' | 'horizontal' | 'both'" },
				description: 'The scrollable direction(s).',
				default: "'vertical'"
			},
			children: {
				type: 'Snippet',
				description: 'The scrollable content.',
				required: true
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			},
			ref: {
				type: 'HTMLDivElement',
				description: 'The underlying DOM element.',
				bindable: true
			}
		}
	}
] satisfies APISchema[];
