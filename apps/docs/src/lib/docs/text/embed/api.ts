import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'EmbedExtension',
		description:
			'A tiptap Extension that auto-detects URLs in paragraphs and replaces them with rich embeds. Add via extraExtensions.',
		props: {
			embeds: {
				type: {
					type: 'object',
					definition: 'EmbedDefinition[]'
				},
				description:
					'Array of embed definitions. Each definition has a name, match function, and component.',
				default: '[]'
			}
		}
	},
	{
		title: 'EmbedDefinition',
		description: 'Defines an embed provider with URL matching and a rendering component.',
		props: {
			name: {
				type: 'string',
				description: 'Unique name for this embed type (e.g. "youtube", "spotify").',
				required: true
			},
			match: {
				type: {
					type: 'function',
					definition: '(url: string) => Record<string, any> | false | null'
				},
				description:
					'URL matcher. Return an object with embed-specific data if the URL matches, or false/null to skip.',
				required: true
			},
			component: {
				type: { type: 'object', definition: 'Component' },
				description:
					'Svelte component to render the embed. Receives props: url (string), data (object from match), selected (boolean).',
				required: true
			}
		}
	},
	{
		title: 'EmbedModal',
		description:
			'Modal dialog for manually inserting an embed by URL. Add as a child of the editor. Automatically registers with the slash menu.',
		props: {
			editor: {
				type: { type: 'object', definition: 'Editor' },
				description: 'The tiptap editor instance.',
				required: true
			},
			open: {
				type: 'boolean',
				description: 'Bindable. Controls modal visibility.',
				default: 'false'
			}
		}
	},
	{
		title: 'insertEmbed',
		description:
			'Programmatically insert an embed for a URL. Returns null on success or an error string.',
		props: {
			editor: {
				type: { type: 'object', definition: 'Editor' },
				description: 'The tiptap editor instance.',
				required: true
			},
			url: {
				type: 'string',
				description: 'The URL to embed.',
				required: true
			}
		}
	},
	{
		title: 'openEmbedModal',
		description:
			'Opens the EmbedModal if one is mounted. Used by the slash menu and can be called from custom buttons.',
		props: {
			editor: {
				type: { type: 'object', definition: 'Editor' },
				description: 'The tiptap editor instance.',
				required: true
			}
		}
	},
	{
		title: 'youtubeEmbed',
		description:
			'Built-in YouTube embed definition. Matches youtube.com/watch, youtu.be, youtube.com/embed, and youtube.com/shorts URLs.',
		props: {}
	}
] satisfies APISchema[];
