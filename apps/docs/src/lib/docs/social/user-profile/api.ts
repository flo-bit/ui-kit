import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'UserProfile',
		description: 'A user profile card with banner, avatar, display name, handle, and bio.',
		props: {
			profile: {
				type: { type: 'object', definition: '{ banner?: string; avatar?: string; displayName?: string; handle?: string; description?: string }' },
				description: 'The user profile data to display.',
				required: true
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.',
				required: true
			}
		}
	}
] satisfies APISchema[];
