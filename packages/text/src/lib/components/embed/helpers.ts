import type { Editor } from '@tiptap/core';
import type { Component } from 'svelte';
import YouTubeEmbed from './YouTubeEmbed.svelte';

declare module '@tiptap/core' {
	interface Storage {
		embedExtension: {
			embeds: EmbedDefinition[];
			openModal: (() => void) | null;
		};
	}
}

/**
 * Defines an embed provider. Each embed has a name, a match function
 * that extracts data from a URL, and a Svelte component to render.
 */
export interface EmbedDefinition {
	/** Unique name for this embed type (e.g. 'youtube', 'spotify'). */
	name: string;
	/** Return embed-specific data if the URL matches, or false/null to skip. */
	match: (url: string) => Record<string, any> | false | null;
	/** Svelte component to render. Receives props: url, data, selected. */
	component: Component;
}

export interface EmbedExtensionOptions {
	/** Array of embed definitions to check URLs against. */
	embeds: EmbedDefinition[];
}

/** Props passed to every embed component. */
export interface EmbedComponentProps {
	/** The original URL. */
	url: string;
	/** Data returned by the embed's match function. */
	data: Record<string, any>;
	/** Whether the node is currently selected in the editor. */
	selected: boolean;
}

const youtubeRegex =
	/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

/**
 * Built-in YouTube embed. Matches youtube.com/watch, youtu.be, youtube.com/embed, and youtube.com/shorts URLs.
 */
export const youtubeEmbed: EmbedDefinition = {
	name: 'youtube',
	match: (url: string) => {
		const m = url.match(youtubeRegex);
		if (!m) return false;
		return { videoId: m[1] };
	},
	component: YouTubeEmbed as Component
};

/**
 * Simple URL check — just verifies the string starts with http(s)://.
 */
export function isUrl(text: string): boolean {
	try {
		const url = new URL(text);
		return url.protocol === 'http:' || url.protocol === 'https:';
	} catch {
		return false;
	}
}

/**
 * Try to insert an embed for the given URL. Returns an error string if no
 * embed matches, or null on success.
 */
export function insertEmbed(editor: Editor, url: string): string | null {
	const storage = editor.storage.embedExtension as
		| { embeds: EmbedDefinition[] }
		| undefined;
	if (!storage) return 'Embed extension is not registered';

	const trimmed = url.trim();
	if (!isUrl(trimmed)) return 'Please enter a valid URL';

	for (const embed of storage.embeds) {
		const data = embed.match(trimmed);
		if (data && typeof data === 'object') {
			editor
				.chain()
				.focus()
				.insertContent({
					type: 'embed',
					attrs: {
						url: trimmed,
						embedName: embed.name,
						embedData: data
					}
				})
				.run();
			return null;
		}
	}

	return 'No matching embed found for this URL';
}

/**
 * Open the embed modal if an EmbedModal component is mounted.
 */
export function openEmbedModal(editor: Editor): void {
	const storage = editor.storage.embedExtension as
		| { openModal: (() => void) | null }
		| undefined;
	storage?.openModal?.();
}
