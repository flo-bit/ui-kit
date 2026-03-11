import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'RichTextEditor',
		description:
			'A batteries-included rich text editor with formatting bubble menu, slash commands, image uploads, and embeds. Wraps CoreRichTextEditor with all UI features.',
		props: {
			content: {
				type: 'Content',
				description:
					'The editor content (TipTap Content type - can be HTML string, JSON, etc.).',
				default: '{}',
				bindable: true
			},
			editor: {
				type: 'Readable<Editor>',
				description: 'A Svelte readable store containing the TipTap Editor instance.',
				bindable: true
			},
			bubbleMenu: {
				type: 'boolean',
				description:
					'Show the formatting bubble menu (bold, italic, underline, strikethrough, link) on text selection.',
				default: 'true'
			},
			slashMenu: {
				type: 'boolean',
				description: 'Show the slash command menu when typing "/".',
				default: 'true'
			},
			image: {
				type: {
					type: 'union',
					definition: 'ImageUploadFn | false'
				},
				description:
					'Enable image uploads. Pass an upload function to enable paste, drop, and /image slash command. Images use EditableImage with alt text editing.'
			},
			embeds: {
				type: {
					type: 'union',
					definition: 'EmbedDefinition[] | boolean'
				},
				description:
					'Enable embeds. Pass `true` for built-in YouTube embeds, or an array of EmbedDefinitions for custom providers. Adds /embed to the slash menu and includes an embed modal.'
			},
			placeholder: {
				type: 'string',
				description: 'Placeholder text.',
				default: "''"
			},
			markdown: {
				type: 'boolean',
				description:
					'Enable Markdown mode. Parses Markdown input and serializes content back to Markdown strings.',
				default: 'false'
			},
			extensions: {
				type: 'Extensions',
				description: 'Custom extension array. Replaces all default extensions when provided.'
			},
			extraExtensions: {
				type: 'Extensions',
				description:
					'Additional extensions merged with the defaults. Added after image/embed extensions.'
			},
			onupdate: {
				type: {
					type: 'function',
					definition: '(content: Content | string) => void'
				},
				description: 'Callback invoked when the editor content changes.'
			},
			ontransaction: {
				type: { type: 'function', definition: '() => void' },
				description: 'Callback invoked on every TipTap transaction.'
			},
			onlinkadded: {
				type: {
					type: 'function',
					definition: '(event: LinkAddedEvent) => void'
				},
				description:
					'Called whenever a link is added (typing, pasting, autolink, or UI). Only applies when using default extensions.'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			},
			ref: {
				type: 'HTMLDivElement',
				description: 'The underlying DOM element.',
				bindable: true
			}
		}
	}
] satisfies APISchema[];
