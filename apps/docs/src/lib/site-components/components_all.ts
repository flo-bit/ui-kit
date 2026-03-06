import type { ComponentDoc } from '$lib/types/schema';
import type { Component } from 'svelte';

const categories = [
	{ slug: 'core', label: 'Core' },
	{ slug: 'colors', label: 'Colors' },
	{ slug: 'social', label: 'Social' },
	{ slug: 'text', label: 'Text' },
	{ slug: 'visual', label: 'Visual' },
	{ slug: 'time', label: 'Time' }
];

const modules = import.meta.glob('/src/lib/docs/*/*/index.ts', { eager: true }) as Record<
	string,
	{ default: ComponentDoc }
>;

export const components = categories.map((category) => {
	const comps = Object.entries(modules)
		.filter(([path]) => path.startsWith(`/src/lib/docs/${category.slug}/`))
		.map(([, mod]) => mod.default)
		.filter((doc) => doc.card)
		.sort((a, b) => a.title.localeCompare(b.title))
		.map((doc) => ({
			component: doc.card as Component,
			label: doc.title,
			href: doc.slug
		}));

	return {
		name: category.label,
		href: category.slug,
		components: comps
	};
});
