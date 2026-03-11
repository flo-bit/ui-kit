import { Extension } from '@tiptap/core';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { SvelteNodeViewRenderer } from 'svelte-tiptap';
import type { CodeBlockExtensionOptions } from './helpers';
import CodeBlockView from './CodeBlockView.svelte';

export const CodeBlockExtension = Extension.create<CodeBlockExtensionOptions>({
	name: 'codeBlockExtension',

	addOptions() {
		return {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			lowlight: undefined as any,
			defaultLanguage: null,
			codeBlockComponent: undefined,
			HTMLAttributes: {}
		};
	},

	addExtensions() {
		const component = this.options.codeBlockComponent ?? CodeBlockView;

		const codeBlockLowlight = CodeBlockLowlight.extend({
			addNodeView() {
				return SvelteNodeViewRenderer(component);
			}
		}).configure({
			lowlight: this.options.lowlight,
			defaultLanguage: this.options.defaultLanguage ?? null,
			HTMLAttributes: this.options.HTMLAttributes ?? {}
		});

		return [codeBlockLowlight];
	}
});
