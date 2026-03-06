import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Prose',
		description: 'A wrapper that applies Tailwind Typography styles to its content for rendering rich text.',
		props: {
			size: {
				type: { type: 'enum', definition: "'default' | 'md' | 'lg' | 'xl' | '2xl'" },
				description: 'The typography size scale.',
				default: "'default'"
			},
			children: {
				type: 'Snippet',
				description: 'The content to apply typography styles to.',
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
