import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'ActionButtons',
		description: 'Container for social action buttons (reply, repost, like, bookmark).',
		props: {
			reply: {
				type: { type: 'object', definition: 'ReplyButtonProps' },
				description: 'Props for the reply button. Omit to hide.'
			},
			repost: {
				type: { type: 'object', definition: 'RepostButtonProps' },
				description: 'Props for the repost button. Omit to hide.'
			},
			like: {
				type: { type: 'object', definition: 'LikeButtonProps' },
				description: 'Props for the like button. Omit to hide.'
			},
			bookmark: {
				type: { type: 'object', definition: 'BookmarkButtonProps' },
				description: 'Props for the bookmark button. Omit to hide.'
			},
			customActions: {
				type: 'Snippet',
				description: 'Additional custom action buttons.'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			}
		}
	},
	{
		title: 'ReplyButton',
		description: 'A reply action button with count.',
		props: {
			count: {
				type: 'number',
				description: 'Number of replies to display.'
			},
			onclick: {
				type: { type: 'function', definition: '() => void' },
				description: 'Callback when the reply button is clicked.'
			},
			href: {
				type: 'string',
				description: 'URL for the reply action link. Used when onclick is not provided.'
			}
		}
	},
	{
		title: 'RepostButton',
		description: 'A repost action button with count.',
		props: {
			count: {
				type: 'number',
				description: 'Number of reposts to display.'
			},
			active: {
				type: 'boolean',
				description: 'Whether the post is reposted.',
				default: 'false',
				bindable: true
			},
			onclick: {
				type: { type: 'function', definition: '() => void' },
				description: 'Callback when the repost button is clicked.'
			},
			href: {
				type: 'string',
				description: 'URL for the repost action link. Used when onclick is not provided.'
			}
		}
	},
	{
		title: 'LikeButton',
		description: 'A like toggle button with count.',
		props: {
			count: {
				type: 'number',
				description: 'Number of likes to display.'
			},
			active: {
				type: 'boolean',
				description: 'Whether the post is liked.',
				default: 'false',
				bindable: true
			},
			onclick: {
				type: { type: 'function', definition: '() => void' },
				description: 'Callback when the like button is clicked.'
			},
			href: {
				type: 'string',
				description: 'URL for the like action link. Used when onclick is not provided.'
			}
		}
	},
	{
		title: 'BookmarkButton',
		description: 'A bookmark toggle button.',
		props: {
			active: {
				type: 'boolean',
				description: 'Whether the post is bookmarked.',
				default: 'false',
				bindable: true
			},
			onclick: {
				type: { type: 'function', definition: '() => void' },
				description: 'Callback when the bookmark button is clicked.'
			}
		}
	}
] satisfies APISchema[];
