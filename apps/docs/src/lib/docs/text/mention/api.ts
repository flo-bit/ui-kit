import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'MentionMenu',
		description:
			'A suggestion popup component for @mentions. Registers a tiptap suggestion plugin on mount, like BubbleMenu/FloatingMenu.',
		props: {
			editor: {
				type: { type: 'object', definition: 'Editor' },
				description: 'The tiptap editor instance.',
				required: true
			},
			items: {
				type: {
					type: 'function',
					definition: '(query: string) => MentionItem[] | Promise<MentionItem[]>'
				},
				description: 'Function that returns mention suggestions for a search query.',
				required: true
			},
			char: {
				type: 'string',
				description: 'Trigger character for the mention popup.',
				default: "'@'"
			},
			minQueryLength: {
				type: 'number',
				description: 'Minimum characters after trigger before searching.',
				default: '2'
			},
			pluginKey: {
				type: 'string',
				description: 'Unique key for the suggestion plugin.',
				default: "'mentionMenu'"
			},
			item: {
				type: {
					type: 'function',
					definition:
						'Snippet<[{ item: MentionItem; isActive: boolean; select: () => void }]>'
				},
				description: 'Snippet for custom rendering of each suggestion item.'
			},
			class: {
				type: 'string',
				description: 'CSS classes for the popup container.'
			}
		}
	},
	{
		title: 'MentionNode',
		description:
			'A tiptap Node extension for inline mention nodes. Add to editor extensions to enable mentions.',
		props: {
			HTMLAttributes: {
				type: { type: 'object', definition: 'Record<string, unknown>' },
				description: 'HTML attributes applied to mention nodes.',
				default: '{}'
			},
			renderLabel: {
				type: {
					type: 'function',
					definition: '({ node }) => string'
				},
				description: 'Custom function to render the mention label text.',
				default: "'({ node }) => `@${node.attrs.label}`'"
			}
		}
	},
	{
		title: 'MentionItem',
		description: 'The data shape for mention suggestions.',
		props: {
			id: {
				type: 'string',
				description: 'Unique identifier for the mention (e.g., user ID, DID).',
				required: true
			},
			label: {
				type: 'string',
				description: 'Display label for the mention (e.g., username, handle).',
				required: true
			},
			avatar: {
				type: 'string',
				description: 'Optional avatar URL.'
			},
			data: {
				type: { type: 'object', definition: 'Record<string, unknown>' },
				description: 'Optional extra data stored on the mention node.'
			}
		}
	}
] satisfies APISchema[];
