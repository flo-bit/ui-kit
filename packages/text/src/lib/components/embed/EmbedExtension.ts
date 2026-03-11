import { Extension, Node, mergeAttributes } from '@tiptap/core';
import { Plugin, PluginKey, TextSelection } from '@tiptap/pm/state';
import { SvelteNodeViewRenderer } from 'svelte-tiptap';
import type { EmbedDefinition, EmbedExtensionOptions } from './helpers';
import { isUrl } from './helpers';
import EmbedView from './EmbedView.svelte';

const embedPluginKey = new PluginKey('embedExtension');

const EmbedNode = Node.create({
	name: 'embed',
	group: 'block',
	atom: true,
	draggable: true,
	selectable: true,
	inline: false,

	addAttributes() {
		return {
			url: { default: null },
			embedName: { default: null },
			embedData: { default: {} }
		};
	},

	parseHTML() {
		return [{ tag: 'div[data-type="embed"]' }];
	},

	renderHTML({ HTMLAttributes }) {
		return ['div', mergeAttributes({ 'data-type': 'embed' }, HTMLAttributes)];
	},

	addNodeView() {
		return SvelteNodeViewRenderer(EmbedView);
	}
});

/**
 * Try to match a URL against an array of embed definitions.
 * Returns the first match or null.
 */
function tryMatch(
	url: string,
	embeds: EmbedDefinition[]
): { embed: EmbedDefinition; data: Record<string, any> } | null {
	for (const embed of embeds) {
		const data = embed.match(url);
		if (data && typeof data === 'object') {
			return { embed, data };
		}
	}
	return null;
}

/**
 * Extract a URL from a paragraph node if it consists of only a link.
 * Returns the URL string or null.
 */
function getUrlFromParagraph(node: any): string | null {
	if (node.type.name !== 'paragraph') return null;
	if (node.childCount !== 1) return null;

	const child = node.firstChild;
	if (!child?.isText) return null;

	// Check for a link mark
	const linkMark = child.marks.find((m: any) => m.type.name === 'link');
	if (!linkMark) return null;

	const href = linkMark.attrs.href;
	const text = child.text?.trim();

	// Only match if the paragraph text is the URL itself (not e.g. [text](url))
	if (text === href || text === href.replace(/^https?:\/\//, '')) {
		return href;
	}

	return null;
}

export const EmbedExtension = Extension.create<EmbedExtensionOptions>({
	name: 'embedExtension',

	addOptions() {
		return {
			embeds: []
		};
	},

	addStorage() {
		return {
			embeds: [] as EmbedDefinition[],
			openModal: null as (() => void) | null
		};
	},

	onCreate() {
		this.storage.embeds = this.options.embeds;
	},

	addExtensions() {
		return [EmbedNode];
	},

	addProseMirrorPlugins() {
		const embeds = this.options.embeds;

		return [
			new Plugin({
				key: embedPluginKey,

				props: {
					/**
					 * When a URL is pasted as plain text, check if it matches
					 * an embed and insert an embed node instead.
					 */
					handlePaste(view, event) {
						const text = event.clipboardData?.getData('text/plain')?.trim();
						if (!text || !isUrl(text)) return false;

						// Don't intercept if there's also HTML content (rich paste)
						const html = event.clipboardData?.getData('text/html');
						if (html) return false;

						const result = tryMatch(text, embeds);
						if (!result) return false;

						event.preventDefault();

						const node = view.state.schema.nodes.embed.create({
							url: text,
							embedName: result.embed.name,
							embedData: result.data
						});

						const { tr } = view.state;
						tr.replaceSelectionWith(node);

						// Ensure there's a paragraph after the embed and place cursor there
						const afterEmbed = tr.selection.to;
						const $after = tr.doc.resolve(afterEmbed);
						const hasBlockAfter =
							$after.nodeAfter && $after.nodeAfter.isTextblock;

						if (!hasBlockAfter) {
							const paragraph =
								view.state.schema.nodes.paragraph.create();
							tr.insert(afterEmbed, paragraph);
						}

						// Place cursor in the paragraph after the embed
						tr.setSelection(
							TextSelection.create(tr.doc, afterEmbed + 1)
						);

						view.dispatch(tr);
						return true;
					}
				},

				/**
				 * After each document change, scan for paragraphs that are just
				 * a link URL matching an embed. Only convert if the cursor is not
				 * inside that paragraph (i.e. the user has moved on).
				 */
				appendTransaction(transactions, _oldState, newState) {
					if (!transactions.some((tr) => tr.docChanged)) return null;

					const { from } = newState.selection;
					const replacements: Array<{
						pos: number;
						size: number;
						url: string;
						embed: EmbedDefinition;
						data: Record<string, any>;
					}> = [];

					newState.doc.descendants((node, pos) => {
						// Skip non-paragraph nodes
						const url = getUrlFromParagraph(node);
						if (!url) return;

						// Skip if cursor is inside this paragraph
						const nodeEnd = pos + node.nodeSize;
						if (from >= pos && from <= nodeEnd) return;

						const result = tryMatch(url, embeds);
						if (!result) return;

						replacements.push({
							pos,
							size: node.nodeSize,
							url,
							embed: result.embed,
							data: result.data
						});
					});

					if (replacements.length === 0) return null;

					const tr = newState.tr;
					// Apply in reverse order to keep positions stable
					for (const r of replacements.reverse()) {
						const embedNode = newState.schema.nodes.embed.create({
							url: r.url,
							embedName: r.embed.name,
							embedData: r.data
						});
						tr.replaceWith(r.pos, r.pos + r.size, embedNode);
					}
					return tr;
				}
			})
		];
	}
});
