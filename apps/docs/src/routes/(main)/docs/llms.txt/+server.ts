import type { RequestHandler } from './$types';
import type { ComponentDoc } from '$lib/types/schema';

export const prerender = true;

const BASE_URL = 'https://flo-bit.dev/ui-kit';

// Discover docs pages from the markdown files that live next to each +page.svelte
const docs = import.meta.glob('/src/routes/**/docs/*/*.md', { eager: true }) as Record<
	string,
	unknown
>;

// Discover components from their index.ts metadata files
const components = import.meta.glob('/src/lib/docs/*/*/index.ts', { eager: true }) as Record<
	string,
	{ default: ComponentDoc }
>;

// Slug → display title. Anything not listed uses a title-cased fallback from the slug.
const titles: Record<string, string> = {
	'quick-start': 'Quick Start',
	philosophy: 'Philosophy',
	customization: 'Customization',
	icons: 'Icons',
	haptics: 'Haptics',
	llms: 'Using foxui with AI Assistants'
};

// Keep a stable sidebar-like order; anything new gets appended alphabetically.
const order = ['quick-start', 'philosophy', 'customization', 'icons', 'haptics', 'llms'];

// Stable ordering for component categories, matching the sidebar
const categoryOrder = [
	{ slug: 'core', label: 'Core' },
	{ slug: 'colors', label: 'Colors' },
	{ slug: 'social', label: 'Social' },
	{ slug: 'text', label: 'Text' },
	{ slug: 'visual', label: 'Visual' },
	{ slug: 'time', label: 'Time' },
	{ slug: '3d', label: '3D' }
];

function titleFor(slug: string) {
	if (titles[slug]) return titles[slug];
	return slug
		.split('-')
		.map((w) => w[0].toUpperCase() + w.slice(1))
		.join(' ');
}

export const GET: RequestHandler = () => {
	const slugs = new Set<string>();
	for (const path of Object.keys(docs)) {
		const match = path.match(/\/docs\/([^/]+)\//);
		if (match) slugs.add(match[1]);
	}

	const sorted = [...slugs].sort((a, b) => {
		const ai = order.indexOf(a);
		const bi = order.indexOf(b);
		if (ai === -1 && bi === -1) return a.localeCompare(b);
		if (ai === -1) return 1;
		if (bi === -1) return -1;
		return ai - bi;
	});

	const lines: string[] = ['Docs:'];
	for (const slug of sorted) {
		lines.push(`${titleFor(slug)} (${BASE_URL}/docs/${slug}/llms.txt)`);
	}

	for (const category of categoryOrder) {
		const comps = Object.entries(components)
			.filter(([path]) => path.startsWith(`/src/lib/docs/${category.slug}/`))
			.map(([, mod]) => mod.default)
			.sort((a, b) => a.title.localeCompare(b.title));

		if (comps.length === 0) continue;

		lines.push('');
		lines.push(`${category.label}:`);
		for (const comp of comps) {
			lines.push(`${comp.title} (${BASE_URL}/components/${category.slug}/${comp.slug}/llms.txt)`);
		}
	}

	return new Response(lines.join('\n'), {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' }
	});
};
