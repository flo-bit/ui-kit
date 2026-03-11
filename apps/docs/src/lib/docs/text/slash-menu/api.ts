import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'SlashMenu',
		description:
			'A "/" command menu for the editor. Type "/" to open, then search and select block types or actions. Registers as a ProseMirror plugin.',
		props: {
			editor: {
				type: { type: 'object', definition: 'Editor' },
				description: 'The tiptap editor instance.',
				required: true
			},
			items: {
				type: {
					type: 'union',
					definition:
						'SlashMenuItem[] | ((query: string) => SlashMenuItem[] | Promise<SlashMenuItem[]>)'
				},
				description:
					'Menu items as a static array or async function. Defaults to all available block types.'
			},
			char: {
				type: 'string',
				description: 'Trigger character for the menu.',
				default: "'/'"
			},
			pluginKey: {
				type: 'string',
				description: 'Unique key for the suggestion plugin.',
				default: "'slashMenu'"
			},
			item: {
				type: {
					type: 'function',
					definition:
						'Snippet<[{ item: SlashMenuItem; isActive: boolean; select: () => void }]>'
				},
				description: 'Snippet for custom rendering of each menu item.'
			},
			class: {
				type: 'string',
				description: 'CSS classes for the popup container.'
			}
		}
	},
	{
		title: 'SlashMenuItem',
		description: 'The data shape for slash menu items.',
		props: {
			id: {
				type: 'string',
				description: 'Unique identifier for the item.',
				required: true
			},
			label: {
				type: 'string',
				description: 'Display label.',
				required: true
			},
			description: {
				type: 'string',
				description: 'Optional description shown below the label.'
			},
			icon: {
				type: 'string',
				description: 'Optional icon identifier.'
			},
			command: {
				type: {
					type: 'function',
					definition: '(props: { editor: Editor; range: Range }) => void'
				},
				description: 'Function called when the item is selected.',
				required: true
			}
		}
	},
	{
		title: 'getSlashMenuItems',
		description:
			'Returns default slash menu items filtered to only those with registered extensions. Includes block types, image, and embed.',
		props: {
			editor: {
				type: { type: 'object', definition: 'Editor' },
				description: 'The tiptap editor instance.',
				required: true
			}
		}
	},
	{
		title: 'getBlockTypeItems',
		description:
			'Returns block type items only (no image/embed). Useful for block type selectors.',
		props: {
			editor: {
				type: { type: 'object', definition: 'Editor' },
				description: 'The tiptap editor instance.',
				required: true
			}
		}
	}
] satisfies APISchema[];
