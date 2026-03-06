import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'RelativeTime',
		description: 'Displays a timestamp as a human-readable relative time string (e.g. "5 minutes ago") that updates live.',
		props: {
			date: {
				type: { type: 'union', definition: 'Date | number' },
				description: 'The date to display relative to now. Can be a Date object or a Unix timestamp.',
				required: true
			},
			locale: {
				type: 'string',
				description: "The locale for formatting (e.g. 'en', 'de').",
				required: true
			},
			live: {
				type: 'boolean',
				description: 'Whether to automatically update the displayed time.',
				default: 'true'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			}
		}
	}
] satisfies APISchema[];
