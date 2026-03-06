import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Tabs',
		description: 'A horizontal tab navigation component.',
		props: {
			items: {
				type: { type: 'array', definition: '{ name: string; href?: string; onclick?: () => void }[]' },
				description: 'The list of tab items. Each item can be a link (href) or a button (onclick).',
				required: true
			},
			active: {
				type: 'string',
				description: 'The name of the currently active tab.',
				required: true
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			}
		}
	}
] satisfies APISchema[];
