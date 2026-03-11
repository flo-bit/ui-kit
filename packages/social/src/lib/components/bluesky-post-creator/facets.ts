import type { JSONContent } from '@foxui/text';

interface MentionFeature {
	$type: 'app.bsky.richtext.facet#mention';
	did: string;
}

interface LinkFeature {
	$type: 'app.bsky.richtext.facet#link';
	uri: string;
}

interface TagFeature {
	$type: 'app.bsky.richtext.facet#tag';
	tag: string;
}

type Feature = MentionFeature | LinkFeature | TagFeature;

interface FacetIndex {
	byteStart: number;
	byteEnd: number;
}

export interface BlueskyFacet {
	index: FacetIndex;
	features: Feature[];
}

export interface BlueskyPostContent {
	text: string;
	facets: BlueskyFacet[];
}

const encoder = new TextEncoder();

function byteLength(str: string): number {
	return encoder.encode(str).byteLength;
}

export function editorJsonToBlueskyPost(json: JSONContent): BlueskyPostContent {
	let text = '';
	const facets: BlueskyFacet[] = [];

	function processNode(node: JSONContent) {
		if (node.type === 'doc') {
			for (const child of node.content ?? []) {
				processNode(child);
			}
		} else if (node.type === 'paragraph') {
			if (text.length > 0) text += '\n';
			for (const child of node.content ?? []) {
				processInline(child);
			}
		}
	}

	function processInline(node: JSONContent) {
		if (node.type === 'mention') {
			const label = `@${node.attrs?.label ?? node.attrs?.id}`;
			const byteStart = byteLength(text);
			text += label;
			const byteEnd = byteLength(text);
			facets.push({
				index: { byteStart, byteEnd },
				features: [{ $type: 'app.bsky.richtext.facet#mention', did: node.attrs?.id }]
			});
		} else if (node.type === 'text') {
			const nodeText = node.text ?? '';
			const linkMark = node.marks?.find((m) => m.type === 'link');
			if (linkMark) {
				const byteStart = byteLength(text);
				text += nodeText;
				const byteEnd = byteLength(text);
				facets.push({
					index: { byteStart, byteEnd },
					features: [{ $type: 'app.bsky.richtext.facet#link', uri: linkMark.attrs?.href }]
				});
			} else {
				text += nodeText;
			}
		}
	}

	processNode(json);

	// Detect hashtags in the final text
	const hashtagRegex = /(?<=^|\s)#([a-zA-Z\u00C0-\u024F\u1E00-\u1EFF][\w\u00C0-\u024F\u1E00-\u1EFF]*)/g;
	let match;
	while ((match = hashtagRegex.exec(text)) !== null) {
		const fullMatch = match[0];
		const tag = match[1];
		const charStart = match.index;
		const byteStart = byteLength(text.slice(0, charStart));
		const byteEnd = byteStart + byteLength(fullMatch);
		facets.push({
			index: { byteStart, byteEnd },
			features: [{ $type: 'app.bsky.richtext.facet#tag', tag }]
		});
	}

	return { text, facets };
}
