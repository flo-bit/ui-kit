import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'CodeBlockExtension',
		description:
			'A tiptap Extension that wraps CodeBlockLowlight with a Svelte NodeView featuring a copy button. Add via extensions or extraExtensions.',
		props: {
			lowlight: {
				type: { type: 'object', definition: 'Lowlight' },
				description:
					'The lowlight instance for syntax highlighting. Create with `createLowlight(all)` from the lowlight package.',
				required: true
			},
			defaultLanguage: {
				type: 'string',
				description: 'Default language for new code blocks.',
				default: 'null'
			},
			codeBlockComponent: {
				type: { type: 'object', definition: 'Component' },
				description:
					'Custom Svelte component for rendering code blocks. Receives NodeViewProps from tiptap.'
			},
			HTMLAttributes: {
				type: { type: 'object', definition: 'Record<string, string>' },
				description: 'HTML attributes applied to code block elements.',
				default: '{}'
			}
		}
	}
] satisfies APISchema[];
