import type { Editor } from '@tiptap/core';

export interface LinkAddedEvent {
	/** The link URL. */
	href: string;
	/** The link text. */
	text: string;
	/** The editor instance. */
	editor: Editor;
}

export interface LinkExtensionOptions {
	/** Open links on click. @default 'whenNotEditable' */
	openOnClick?: boolean | 'whenNotEditable';
	/** Automatically detect and linkify URLs as you type. @default true */
	autolink?: boolean;
	/** Default protocol for URLs without one. @default 'https' */
	defaultProtocol?: string;
	/** Enable markdown link syntax [text](url). @default true */
	markdown?: boolean;
	/** HTML attributes applied to link elements */
	HTMLAttributes?: Record<string, string>;
	/** Called whenever a link is added to the editor (via typing, pasting, autolink, or UI). */
	onlinkadded?: (event: LinkAddedEvent) => void;
}

/**
 * Set a link on the current selection.
 */
export function setLink(editor: Editor, url: string): void {
	if (!url) {
		editor.chain().focus().unsetLink().run();
		return;
	}
	editor.chain().focus().setLink({ href: url }).run();
}

/**
 * Remove the link from the current selection.
 */
export function removeLink(editor: Editor): void {
	editor.chain().focus().unsetLink().run();
}
