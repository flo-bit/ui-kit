import { mergeAttributes, Node } from '@tiptap/core';
import type { Node as ProseMirrorNode } from '@tiptap/pm/model';

export interface MentionNodeOptions {
	HTMLAttributes: Record<string, unknown>;
	renderLabel: (props: { node: ProseMirrorNode }) => string;
}

export const MentionNode = Node.create<MentionNodeOptions>({
	name: 'mention',

	addOptions() {
		return {
			HTMLAttributes: {},
			renderLabel({ node }) {
				return `@${node.attrs.label ?? node.attrs.id}`;
			}
		};
	},

	group: 'inline',
	inline: true,
	atom: true,
	selectable: false,

	addAttributes() {
		return {
			id: {
				default: null,
				parseHTML: (element) => element.getAttribute('data-id'),
				renderHTML: (attributes) => ({
					'data-id': attributes.id
				})
			},
			label: {
				default: null,
				parseHTML: (element) => element.getAttribute('data-label'),
				renderHTML: (attributes) => ({
					'data-label': attributes.label
				})
			},
			data: {
				default: null,
				parseHTML: (element) => {
					const raw = element.getAttribute('data-mention-data');
					if (!raw) return null;
					try {
						return JSON.parse(raw);
					} catch {
						return null;
					}
				},
				renderHTML: (attributes) => {
					if (!attributes.data) return {};
					return { 'data-mention-data': JSON.stringify(attributes.data) };
				}
			}
		};
	},

	parseHTML() {
		return [{ tag: 'span[data-type="mention"]' }];
	},

	renderHTML({ node, HTMLAttributes }) {
		return [
			'span',
			mergeAttributes({ 'data-type': 'mention' }, this.options.HTMLAttributes, HTMLAttributes),
			this.options.renderLabel({ node })
		];
	},

	renderText({ node }) {
		return this.options.renderLabel({ node });
	}
});
