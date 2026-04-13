import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const prerender = true;

// Eagerly import all raw markdown under /src/routes/**/docs/*/*.md
const docs = import.meta.glob('/src/routes/**/docs/*/*.md', {
	query: '?raw',
	eager: true
}) as Record<string, { default: string }>;

// Group the raw markdown by slug (the folder name)
const docsBySlug: Record<string, { name: string; content: string }[]> = {};
for (const [path, mod] of Object.entries(docs)) {
	const match = path.match(/\/docs\/([^/]+)\/([^/]+)\.md$/);
	if (!match) continue;
	const [, slug, name] = match;
	(docsBySlug[slug] ??= []).push({ name, content: mod.default });
}

// Per-slug ordering for pages that split content across multiple .md files.
// Files not listed here render in alphabetical order.
const orderBySlug: Record<string, string[]> = {
	customization: ['Colors', 'HtmlSnippet', 'Rest']
};

// Per-slug placeholder substitutions applied to the concatenated markdown.
const placeholdersBySlug: Record<string, Record<string, string>> = {
	customization: { __ACCENT__: 'blue', __BASE__: 'zinc' }
};

export function entries() {
	return Object.keys(docsBySlug).map((slug) => ({ slug }));
}

export const GET: RequestHandler = ({ params }) => {
	const files = docsBySlug[params.slug];
	if (!files) error(404, 'Docs page not found');

	const order = orderBySlug[params.slug];
	const sorted = order
		? [...files].sort((a, b) => {
				const ai = order.indexOf(a.name);
				const bi = order.indexOf(b.name);
				return (ai === -1 ? order.length : ai) - (bi === -1 ? order.length : bi);
			})
		: [...files].sort((a, b) => a.name.localeCompare(b.name));

	let body = sorted.map((f) => f.content).join('\n\n');

	const placeholders = placeholdersBySlug[params.slug];
	if (placeholders) {
		for (const [key, value] of Object.entries(placeholders)) {
			body = body.split(key).join(value);
		}
	}

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' }
	});
};
