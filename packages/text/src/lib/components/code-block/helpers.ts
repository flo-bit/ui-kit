import type { Component } from 'svelte';

export interface CodeBlockExtensionOptions {
	/** The lowlight instance (created via `createLowlight`). Required. */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	lowlight: any;
	/** Default language for new code blocks. @default null */
	defaultLanguage?: string | null;
	/** Custom Svelte component for rendering code blocks. Receives NodeViewProps from tiptap.
	 *  If not provided, the built-in CodeBlockView is used. */
	codeBlockComponent?: Component;
	/** HTML attributes applied to code block elements. */
	HTMLAttributes?: Record<string, string>;
}
