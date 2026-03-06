import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Post',
		description: 'A social media post component with avatar, text, images, video, quotes, and action buttons.',
		props: {
			data: {
				type: { type: 'object', definition: 'PostData' },
				description: 'The post data including author info, text, images, video, timestamp, and engagement counts. See PostData type for full structure.',
				required: true
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
			showImages: {
				type: 'boolean',
				description: 'Whether to show attached images.',
				default: 'true'
			},
			showVideo: {
				type: 'boolean',
				description: 'Whether to show attached video.',
				default: 'true'
			},
			showExternal: {
				type: 'boolean',
				description: 'Whether to show external link cards.',
				default: 'true'
			},
			showQuotes: {
				type: 'boolean',
				description: 'Whether to show quoted posts.',
				default: 'true'
			},
			showReply: {
				type: 'boolean',
				description: 'Whether to show the reply action button.',
				default: 'true',
				bindable: true
			},
			showRepost: {
				type: 'boolean',
				description: 'Whether to show the repost action button.',
				default: 'true',
				bindable: true
			},
			showLike: {
				type: 'boolean',
				description: 'Whether to show the like action button.',
				default: 'true',
				bindable: true
			},
			showBookmark: {
				type: 'boolean',
				description: 'Whether to show the bookmark action button.',
				default: 'true',
				bindable: true
			},
			liked: {
				type: 'boolean',
				description: 'Whether the post is liked.',
				default: 'false',
				bindable: true
			},
			bookmarked: {
				type: 'boolean',
				description: 'Whether the post is bookmarked.',
				default: 'false',
				bindable: true
			},
			onReplyClick: {
				type: { type: 'function', definition: '() => void' },
				description: 'Callback when the reply button is clicked.'
			},
			onRepostClick: {
				type: { type: 'function', definition: '() => void' },
				description: 'Callback when the repost button is clicked.'
			},
			onLikeClick: {
				type: { type: 'function', definition: '() => void' },
				description: 'Callback when the like button is clicked.'
			},
			onBookmarkClick: {
				type: { type: 'function', definition: '() => void' },
				description: 'Callback when the bookmark button is clicked.'
			},
			onclickimage: {
				type: { type: 'function', definition: '(image: PostImageData) => void' },
				description: 'Callback when a post image is clicked.'
			},
			onclickpost: {
				type: { type: 'function', definition: '(data: PostData | QuotedPostData, href?: string) => void' },
				description: 'Callback when the post body is clicked.'
			},
			onclickhandle: {
				type: { type: 'function', definition: '(handle: string, href?: string) => void' },
				description: 'Callback when the author handle is clicked.'
			},
			replyHref: {
				type: 'string',
				description: 'URL for the reply action link.'
			},
			repostHref: {
				type: 'string',
				description: 'URL for the repost action link.'
			},
			likeHref: {
				type: 'string',
				description: 'URL for the like action link.'
			},
			timestampHref: {
				type: 'string',
				description: 'URL for the timestamp link.'
			},
			ontimestampclick: {
				type: { type: 'function', definition: '() => void' },
				description: 'Callback when the timestamp is clicked.'
			},
			customActions: {
				type: 'Snippet',
				description: 'Custom action buttons to display alongside the default actions.'
			},
			logo: {
				type: 'Snippet',
				description: 'Custom logo snippet displayed in the post header.'
			},
			children: {
				type: 'Snippet',
				description: 'Additional content rendered below the post.'
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
