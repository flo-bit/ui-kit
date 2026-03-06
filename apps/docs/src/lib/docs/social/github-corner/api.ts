import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'GithubCorner',
		description: 'An animated GitHub corner ribbon link, typically placed in the top-right corner of a page.',
		props: {
			href: {
				type: 'string',
				description: 'The URL to the GitHub repository.',
				required: true
			},
			target: {
				type: 'string',
				description: 'The link target attribute.',
				default: "'_blank'"
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			}
		}
	}
] satisfies APISchema[];
