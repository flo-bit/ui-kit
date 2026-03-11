import { Extension } from '@tiptap/core';
import { Plugin } from '@tiptap/pm/state';
import { Decoration, DecorationSet } from '@tiptap/pm/view';

export const HashtagDecoration = Extension.create({
	name: 'hashtagDecoration',

	addProseMirrorPlugins() {
		return [
			new Plugin({
				props: {
					decorations(state) {
						const decorations: Decoration[] = [];
						const { doc } = state;

						doc.descendants((node, pos) => {
							if (!node.isText || !node.text) return;

							const regex = /(?:^|\s)#([a-zA-Z\u00C0-\u024F\u1E00-\u1EFF][\w\u00C0-\u024F\u1E00-\u1EFF]*)/g;
							let match;

							while ((match = regex.exec(node.text)) !== null) {
								const hashPos = match.index + match[0].indexOf('#');
								const from = pos + hashPos;
								const to = pos + match.index + match[0].length;

								decorations.push(
									Decoration.inline(from, to, {
										class: 'hashtag'
									})
								);
							}
						});

						return DecorationSet.create(doc, decorations);
					}
				}
			})
		];
	}
});
