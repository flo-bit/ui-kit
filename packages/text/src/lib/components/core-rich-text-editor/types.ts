import type { Snippet } from 'svelte';
import type { Readable } from 'svelte/store';
import type { Editor } from 'svelte-tiptap';
import type { Content, Extensions } from '@tiptap/core';
import type { LinkAddedEvent } from '../link/helpers';

export interface BaseEditorProps {
	content?: Content;
	editor?: Readable<Editor>;
	ref?: HTMLDivElement | null;
	class?: string;
	/** Placeholder text shown when the editor is empty. */
	placeholder?: string;
	/** Enable Markdown support: parse Markdown input and serialize content back to Markdown. */
	markdown?: boolean;
	onupdate?: (content: Content | string) => void;
	ontransaction?: () => void;
	/** Called whenever a link is added to the editor. Only applies when using default extensions. */
	onlinkadded?: (event: LinkAddedEvent) => void;
	extensions?: Extensions;
	extraExtensions?: Extensions;
	children?: Snippet;
}
