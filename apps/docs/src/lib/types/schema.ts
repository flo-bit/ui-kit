import type { Component } from 'svelte';

export type PropType = {
	type: string;
	definition: string | Component;
};

export type PropSchema = {
	default?: string;
	type: PropType | string;
	description: string;
	required?: boolean;
	bindable?: boolean;
	linked?: boolean;
	href?: string;
	tooltipContent?: string;
};

export type PropObj<T> = {
	[K in keyof T]-?: PropSchema;
};

export type APISchema<T = Record<string, unknown>> = {
	title: string;
	description?: string;
	props?: PropObj<T>;
};

export type ComponentDoc = {
	slug: string;
	title: string;
	docs: Component;
	example?: Component;
	card?: Component;
	api?: APISchema[];
};

// Used by Cards.svelte and Sidebar.svelte for rendering
export type ComponentCard = {
	component?: Component;
	label: string;
	href: string;
};

export function toComponentCard(doc: ComponentDoc): ComponentCard {
	return {
		component: doc.card,
		label: doc.title,
		href: doc.slug
	};
}
