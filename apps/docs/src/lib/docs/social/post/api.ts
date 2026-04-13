import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Post',
		description: 'A social media post component with avatar, text, embeds, and action buttons.',
		props: {
			data: {
				type: { type: 'object', definition: 'PostData' },
				description: 'The post data including author info, text, and timestamp.',
				required: true
			},
			embeds: {
				type: { type: 'object', definition: 'Embed[]' },
				description: 'Array of embeds to render (images, video, external links, quoted posts).'
			},
			showSensitive: {
				type: 'boolean',
				description: 'Whether to show the sensitive content overlay on flagged embeds.',
				default: 'true'
			},
			actions: {
				type: { type: 'object', definition: 'ActionButtonsProps' },
				description:
					'Action buttons config (reply, repost, like, bookmark, customActions). Omit to hide actions.'
			},
			onclickhandle: {
				type: { type: 'function', definition: '(handle: string, href?: string) => void' },
				description: 'Callback when an author handle is clicked.'
			},
			timestamp: {
				type: { type: 'object', definition: '{ href?: string; onclick?: () => void }' },
				description: 'Timestamp configuration. Provide href for a link or onclick for a button.'
			},
			logo: {
				type: 'Snippet',
				description: 'Custom logo snippet displayed in the post header.'
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
			target: {
				type: 'string',
				description: 'The target attribute for all links in the post.',
				default: "'_blank'"
			},
			extraEmbeds: {
				type: 'Snippet',
				description: 'Snippet for rendering custom embeds after the built-in embeds.'
			},
			onclickavatar: {
				type: { type: 'function', definition: '() => void' },
				description: 'Callback when the avatar is clicked. Takes priority over onclickhandle for the avatar.'
			},
			children: {
				type: 'Snippet',
				description: 'Post content when not using htmlContent.'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			},
			ref: {
				type: 'HTMLElement',
				description: 'The underlying DOM element.',
				bindable: true
			}
		}
	}
] satisfies APISchema[];
