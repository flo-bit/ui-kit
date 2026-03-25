import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'NestedComments',
		description: 'Reddit-style threaded comments with collapsible replies. Uses the Post component internally for each comment.',
		props: {
			comments: {
				type: { type: 'object', definition: 'PostData[]' },
				description: 'Array of top-level comments. Each comment can have nested replies via the replies field.',
				required: true
			},
			actions: {
				type: { type: 'object', definition: 'ActionButtonsProps | ((comment: PostData) => ActionButtonsProps)' },
				description: 'Action buttons config. Pass an object for the same buttons on every comment, or a function to customize per comment.'
			},
			showSensitive: {
				type: 'boolean',
				description: 'Whether to show the sensitive content overlay on flagged embeds.',
				default: 'true'
			},
			extraEmbeds: {
				type: { type: 'object', definition: 'Snippet<[PostData]>' },
				description: 'Snippet for rendering custom embeds per comment. Receives the comment data as argument.'
			},
			onclickhandle: {
				type: { type: 'function', definition: '(handle: string, href?: string) => void' },
				description: 'Callback when a user handle is clicked. If not set, handles render as links.'
			},
			target: {
				type: 'string',
				description: 'The target attribute for all links.',
				default: "'_blank'"
			},
			maxDepth: {
				type: 'number',
				description: 'Maximum nesting depth for replies.',
				default: '4'
			},
			logo: {
				type: { type: 'object', definition: 'Snippet' },
				description: 'Logo snippet shown in the post header.'
			}
		}
	}
] satisfies APISchema[];
