import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'LinkExtension',
		description:
			'A tiptap Extension that bundles link detection, autolink, and optional Markdown syntax. Add via extraExtensions.',
		props: {
			openOnClick: {
				type: "boolean | 'whenNotEditable'",
				description: 'Whether clicking a link opens it.',
				default: "'whenNotEditable'"
			},
			autolink: {
				type: 'boolean',
				description: 'Automatically detect and linkify URLs as you type.',
				default: 'true'
			},
			defaultProtocol: {
				type: 'string',
				description: 'Protocol added to URLs without one.',
				default: "'https'"
			},
			markdown: {
				type: 'boolean',
				description: 'Enable Markdown link syntax [text](url "title").',
				default: 'true'
			},
			HTMLAttributes: {
				type: { type: 'object', definition: 'Record<string, string>' },
				description: 'HTML attributes applied to link elements.',
				default: '{}'
			},
			onlinkadded: {
				type: { type: 'function', definition: '(event: LinkAddedEvent) => void' },
				description:
					'Called whenever a link is added to the editor (via typing, pasting, autolink, or UI). Receives { href, text, editor }.'
			}
		}
	},
	{
		title: 'LinkPopover',
		description:
			'A toggle button with a popover for setting, editing, or removing links on the current selection. Works standalone, in a bubble menu, or in any toolbar.',
		props: {
			editor: {
				type: { type: 'object', definition: 'Readable<Editor>' },
				description: 'The editor store.',
				required: true
			},
			class: {
				type: 'string',
				description: 'CSS classes for the popover content.'
			}
		}
	},
	{
		title: 'setLink',
		description: 'Helper function to set a link on the current selection. Unsets the link if URL is empty.',
		props: {
			editor: {
				type: { type: 'object', definition: 'Editor' },
				description: 'The tiptap editor instance.',
				required: true
			},
			url: {
				type: 'string',
				description: 'The URL to set.',
				required: true
			}
		}
	},
	{
		title: 'removeLink',
		description: 'Helper function to remove the link from the current selection.',
		props: {
			editor: {
				type: { type: 'object', definition: 'Editor' },
				description: 'The tiptap editor instance.',
				required: true
			}
		}
	}
] satisfies APISchema[];
