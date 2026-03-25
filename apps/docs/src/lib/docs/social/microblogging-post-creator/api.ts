import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'MicrobloggingPostCreator',
		description:
			'A platform-agnostic microblogging post editor with support for @mentions, auto-linked URLs, #hashtags, and embeds. Includes Bluesky helpers for easy integration.',
		props: {
			content: {
				type: {
					type: 'object',
					definition: '{ text: string; json: JSONContent }'
				},
				description: 'The post content with plain text and editor JSON.',
				bindable: true
			},
			placeholder: {
				type: 'string',
				description: 'Placeholder text shown when the editor is empty.',
				default: "\"What's on your mind?\""
			},
			maxLength: {
				type: 'number',
				description:
					'Maximum character count. A counter is displayed that changes color as the limit approaches.',
				default: '300'
			},
			searchMentions: {
				type: {
					type: 'function',
					definition: '(query: string) => Promise<MentionItem[]>'
				},
				description:
					'Async function to search for mentionable users. When provided, enables @mention support with a popup menu. Use `createBlueskyMentionSearch()` for Bluesky.'
			},
			embed: {
				type: 'unknown',
				description:
					'The current embed data. Automatically populated with `{ type: "link", url, text }` when a link is added and no embed exists yet.',
				bindable: true
			},
			onlinkadded: {
				type: {
					type: 'function',
					definition: '(event: LinkAddedEvent) => void'
				},
				description:
					'Callback invoked when a link is added to the editor. Receives `{ href, text, editor }`.'
			},
			embedPreview: {
				type: {
					type: 'snippet',
					definition: 'Snippet<[{ embed: unknown; removeEmbed: () => void }]>'
				},
				description: 'Snippet to render the embed preview below the editor.'
			},
			mentionItem: {
				type: {
					type: 'snippet',
					definition: 'Snippet<[{ item: MentionItem; isActive: boolean; select: () => void }]>'
				},
				description:
					'Custom snippet for rendering mention menu items. Falls back to a default with avatar and display name.'
			},
			onupdate: {
				type: {
					type: 'function',
					definition: '(content: MicrobloggingPostContent) => void'
				},
				description: 'Callback invoked whenever the post content changes.'
			},
			editor: {
				type: {
					type: 'object',
					definition: 'Readable<Editor>'
				},
				description: 'The underlying tiptap editor instance (svelte-tiptap store).',
				bindable: true
			},
			ref: {
				type: 'HTMLDivElement',
				description: 'Reference to the container element.',
				bindable: true
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes for the container.'
			}
		}
	}
] satisfies APISchema[];
