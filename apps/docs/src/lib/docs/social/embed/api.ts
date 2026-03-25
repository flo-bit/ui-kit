import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'EmbedImages',
		description: 'Displays a grid of images with optional click handling and sensitive content overlay.',
		props: {
			data: {
				type: { type: 'object', definition: 'EmbedImageData' },
				description:
					'The image embed data containing an array of images with alt text, thumbnails, and aspect ratios. Includes optional sensitive flag and onclick handler.',
				required: true
			},
			showSensitive: {
				type: 'boolean',
				description: 'Whether to show the sensitive content overlay when data.sensitive is true.',
				default: 'true'
			}
		}
	},
	{
		title: 'EmbedExternal',
		description: 'Displays an external link card with thumbnail, title, and domain.',
		props: {
			data: {
				type: { type: 'object', definition: 'EmbedExternalData' },
				description:
					'The external link embed data containing href, thumbnail, title, and description.',
				required: true
			}
		}
	},
	{
		title: 'EmbedVideo',
		description: 'Displays an HLS video player with optional sensitive content overlay.',
		props: {
			data: {
				type: { type: 'object', definition: 'EmbedVideoData' },
				description:
					'The video embed data containing playlist URL, thumbnail, alt text, aspect ratio, and optional sensitive flag.',
				required: true
			},
			showSensitive: {
				type: 'boolean',
				description: 'Whether to show the sensitive content overlay when data.sensitive is true.',
				default: 'true'
			}
		}
	},
	{
		title: 'EmbedQuotedPost',
		description: 'Displays a quoted/embedded post record.',
		props: {
			record: {
				type: { type: 'object', definition: 'EmbedRecordData' },
				description:
					'The quoted post data including author, content, optional nested embed, and optional onclick/onclickhandle callbacks.',
				required: true
			},
			showEmbed: {
				type: 'boolean',
				description: 'Whether to show embeds within the quoted post.',
				default: 'false'
			}
		}
	},
	{
		title: 'EmbedRouter',
		description:
			'Routes an embed to the correct component based on its type. Handles images, external links, video, and quoted posts.',
		props: {
			embed: {
				type: { type: 'object', definition: 'Embed' },
				description: 'The embed data to render. Each embed carries its own sensitive flag and callbacks.',
				required: true
			},
			showSensitive: {
				type: 'boolean',
				description: 'Whether to show the sensitive content overlay for flagged embeds.',
				default: 'true'
			}
		}
	}
] satisfies APISchema[];
