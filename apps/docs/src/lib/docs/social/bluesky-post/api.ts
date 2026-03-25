import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'BlueskyPost',
		description: 'Renders a Bluesky post from raw API data (PostView).',
		props: {
			data: {
				type: { type: 'object', definition: 'PostView' },
				description: 'The raw Bluesky PostView data from the API.',
				required: true
			},
			reason: {
				type: 'any',
				description: 'The feed reason (e.g. repost info) from the API response.'
			},
			reply: {
				type: 'any',
				description:
					'The feed reply context (parent/root) from the API response. Used to show "replying to" banner.'
			},
			baseUrl: {
				type: 'string',
				description:
					'Base URL for all generated links. Change this to point to a custom client.',
				default: "'https://bsky.app'"
			},
			hrefs: {
				type: {
					type: 'object',
					definition:
						'{ profile?: (handle, did?) => string; post?: (handle, postId) => string; hashtag?: (tag) => string }'
				},
				description:
					'Override individual URL builders. Each function overrides the default baseUrl-based pattern.'
			},
			target: {
				type: 'string',
				description: 'The target attribute for all links.',
				default: "'_blank'"
			},
			showLogo: {
				type: 'boolean',
				description: 'Whether to show the Bluesky butterfly logo in the header.',
				default: 'false'
			},
			showAvatar: {
				type: 'boolean',
				description: 'Whether to show the author avatar.',
				default: 'true'
			},
			compact: {
				type: 'boolean',
				description: 'Whether to use a compact layout.',
				default: 'false'
			},
			actions: {
				type: { type: 'object', definition: 'ActionButtonsProps' },
				description:
					'Override the default action buttons. By default, shows reply/repost/like counts linking to the post.'
			},
			embeds: {
				type: { type: 'object', definition: 'Embed[]' },
				description: 'Override the automatically extracted embeds.'
			},
			showSensitive: {
				type: 'boolean',
				description: 'Whether to show the sensitive content overlay on flagged embeds.',
				default: 'true'
			}
		}
	}
] satisfies APISchema[];
