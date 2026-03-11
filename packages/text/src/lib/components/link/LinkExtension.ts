import { Extension, InputRule, markInputRule, markPasteRule, PasteRule } from '@tiptap/core';
import { Link } from '@tiptap/extension-link';
import { AddMarkStep } from '@tiptap/pm/transform';
import type { LinkExtensionOptions } from './helpers';

/**
 * Markdown link input regex: [text](url "title")
 */
const inputRegex = /(?:^|\s)\[([^\]]*)?\]\((\S+)(?: [""\u201C](.+)[""\u201D])?\)$/i;

/**
 * Markdown link paste regex: [text](url "title")
 */
const pasteRegex = /(?:^|\s)\[([^\]]*)?\]\((\S+)(?: [""\u201C](.+)[""\u201D])?\)/gi;

function linkInputRule(config: Parameters<typeof markInputRule>[0]) {
	const defaultMarkInputRule = markInputRule(config);
	return new InputRule({
		find: config.find,
		handler(props) {
			const { tr } = props.state;
			defaultMarkInputRule.handler(props);
			tr.setMeta('preventAutolink', true);
		}
	});
}

function linkPasteRule(config: Parameters<typeof markPasteRule>[0]) {
	const defaultMarkPasteRule = markPasteRule(config);
	return new PasteRule({
		find: config.find,
		handler(props) {
			const { tr } = props.state;
			defaultMarkPasteRule.handler(props);
			tr.setMeta('preventAutolink', true);
		}
	});
}

const defaultLinkClasses = 'text-accent-600 dark:text-accent-400';

export const LinkExtension = Extension.create<LinkExtensionOptions>({
	name: 'linkExtension',

	addOptions() {
		return {
			openOnClick: false,
			autolink: true,
			defaultProtocol: 'https',
			markdown: true,
			HTMLAttributes: {}
		};
	},

	onTransaction({ transaction }) {
		const onlinkadded = this.options.onlinkadded;
		if (!onlinkadded || !transaction.docChanged) return;

		for (const step of transaction.steps) {
			if (step instanceof AddMarkStep && step.mark.type.name === 'link') {
				const text = transaction.doc.textBetween(step.from, step.to);
				onlinkadded({ href: step.mark.attrs.href, text, editor: this.editor });
			}
		}
	},

	addExtensions() {
		const opts = this.options;
		const htmlAttrs = {
			class: defaultLinkClasses,
			...opts.HTMLAttributes
		};
		const base = Link.configure({
			openOnClick: opts.openOnClick ?? 'whenNotEditable',
			autolink: opts.autolink ?? true,
			defaultProtocol: opts.defaultProtocol ?? 'https',
			HTMLAttributes: htmlAttrs
		});

		if (!opts.markdown) return [base];

		const extended = Link.extend({
			inclusive: false,
			addOptions() {
				return {
					...this.parent?.(),
					openOnClick: opts.openOnClick ?? ('whenNotEditable' as const)
				} as ReturnType<NonNullable<typeof this.parent>>;
			},
			addAttributes() {
				return {
					...this.parent?.(),
					title: { default: null }
				};
			},
			addInputRules() {
				return [
					linkInputRule({
						find: inputRegex,
						type: this.type,
						getAttributes(match) {
							return {
								title: match.pop()?.trim(),
								href: match.pop()?.trim()
							};
						}
					})
				];
			},
			addPasteRules() {
				return [
					linkPasteRule({
						find: pasteRegex,
						type: this.type,
						getAttributes(match) {
							return {
								title: match.pop()?.trim(),
								href: match.pop()?.trim()
							};
						}
					})
				];
			}
		}).configure({
			openOnClick: opts.openOnClick ?? 'whenNotEditable',
			autolink: opts.autolink ?? true,
			defaultProtocol: opts.defaultProtocol ?? 'https',
			HTMLAttributes: htmlAttrs
		});

		return [extended];
	}
});
