import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'BlueskyPostCreator',
		description:
			'A Bluesky post composition editor with support for @mentions (with handle search), auto-linked URLs, and #hashtags. Outputs Bluesky-compatible text + facets.',
		props: {
			content: {
				type: {
					type: 'object',
					definition: '{ text: string; facets: BlueskyFacet[] }'
				},
				description:
					'The post content with plain text and byte-indexed facets for mentions, links, and tags.',
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
			onupdate: {
				type: {
					type: 'function',
					definition: '(content: BlueskyPostContent) => void'
				},
				description: 'Callback invoked whenever the post content changes.'
			},
			host: {
				type: 'string',
				description:
					'Custom AT Protocol API host for handle search. Defaults to the public Bluesky API.',
				default: "'https://public.api.bsky.app'"
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
