import type { ComponentDoc } from '$lib/types/schema';

const BASE_URL = 'https://flo-bit.dev/ui-kit';

const categories = [
	{ slug: 'core', label: 'Core' },
	{ slug: 'colors', label: 'Colors' },
	{ slug: 'social', label: 'Social' },
	{ slug: 'text', label: 'Text' },
	{ slug: 'visual', label: 'Visual' },
	{ slug: 'time', label: 'Time' },
	{ slug: '3d', label: '3D' }
];

const modules = import.meta.glob('/src/lib/docs/*/*/index.ts', { eager: true }) as Record<
	string,
	{ default: ComponentDoc }
>;

export function GET() {
	const lines: string[] = [];

	for (const category of categories) {
		lines.push(`${category.label}:`);

		const comps = Object.entries(modules)
			.filter(([path]) => path.startsWith(`/src/lib/docs/${category.slug}/`))
			.map(([, mod]) => mod.default)
			.sort((a, b) => a.title.localeCompare(b.title));

		for (const comp of comps) {
			lines.push(`${comp.title} (${BASE_URL}/components/${category.slug}/${comp.slug}/llms.txt)`);
		}

		lines.push('');
	}

	return new Response(lines.join('\n').trim(), {
		headers: { 'Content-Type': 'text/plain' }
	});
}
