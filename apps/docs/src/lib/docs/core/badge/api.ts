import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Badge',
		description: 'A small label for status, categories, or metadata.',
		props: {
			variant: {
				type: { type: 'enum', definition: "'primary' | 'primary_shift' | 'primary_shift_2' | 'secondary' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'" },
				description: 'The visual variant of the badge.',
				default: "'primary'"
			},
			size: {
				type: { type: 'enum', definition: "'sm' | 'md' | 'lg'" },
				description: 'The size of the badge.',
				default: "'sm'"
			},
			children: {
				type: 'Snippet',
				description: 'The content to display inside the badge.',
				required: true
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			},
			ref: {
				type: 'HTMLSpanElement',
				description: 'The underlying DOM element.',
				bindable: true
			}
		}
	}
] satisfies APISchema[];
