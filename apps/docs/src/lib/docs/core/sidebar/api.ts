import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Sidebar',
		description: 'A responsive sidebar that shows as a fixed panel on desktop and a popover on mobile.',
		props: {
			mobileOnly: {
				type: 'boolean',
				description: 'When true, only renders the mobile popover version (hidden on desktop).',
				default: 'false'
			},
			mobileClasses: {
				type: 'string',
				description: 'Additional CSS classes to apply to the mobile popover version.'
			},
			children: {
				type: 'Snippet',
				description: 'The sidebar content.',
				required: true
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			}
		}
	}
] satisfies APISchema[];
